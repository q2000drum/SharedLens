# Shared Lens Application - Design Requirements
## UOM Conflict Management Feature

---

## 1. FEATURE OVERVIEW

### 1.1 Purpose
Enable cross-functional visibility and management of Unit of Measure conflicts between engineering specifications and procurement constraints, particularly where dimensional mismatches create operational and cost impacts.

### 1.2 User Personas
- **Engineering**: Defines technical requirements without full visibility to procurement constraints
- **Procurement**: Sources materials within supplier packaging constraints
- **Manufacturing**: Manages material utilization and waste
- **Finance**: Analyzes cost impacts of material waste
- **Product Management**: Makes trade-off decisions on design vs. cost

### 1.3 Core Value Proposition
Transform UOM conflicts from hidden friction into visible, manageable trade-offs through multi-perspective item representation and collaborative decision workflows.

---

## 2. DATA MODEL REQUIREMENTS

### 2.1 Item Entity Extensions

#### 2.1.1 Core Item Attributes
```
Item {
  item_id: string (PK)
  part_number: string (unique, semantic-free)
  part_name: string (human-readable, searchable)
  description: text
  status: enum [Draft, Review, Released, Obsolete]
  revision: string
  created_date: datetime
  created_by: user_id
  modified_date: datetime
  modified_by: user_id
}
```

#### 2.1.2 Engineering Perspective Attributes
```
EngineeringSpec {
  item_id: string (FK)
  make_buy_code: enum [Make, Buy, Make_or_Buy]
  
  // Engineering UOM
  engineering_uom: string (M, M2, M3, KG, L, EA, etc.)
  engineering_quantity: decimal(12,4)
  engineering_tolerance: decimal(12,4)
  engineering_tolerance_type: enum [Plus_Minus, Min_Max, Percentage]
  
  // Dimensional classification
  dimension_type: enum [
    COUNT_DISCRETE,      // EA, PC - no conflict potential
    LENGTH_CONTINUOUS,   // M, FT - conflict potential
    AREA_CONTINUOUS,     // M2, FT2 - conflict potential
    VOLUME_CONTINUOUS,   // M3, L, GAL - conflict potential
    MASS_CONTINUOUS,     // KG, LB - conflict potential
    TIME_CONTINUOUS      // HR, MIN - for services
  ]
  
  // References
  drawing_number: string
  specification_number: string
  measurement_method: text
  critical_dimension: boolean
  
  // Attributes (flexible key-value store)
  attributes: jsonb {
    "length_nominal": 47.5,
    "length_min": 47.4,
    "length_max": 47.6,
    "wire_gauge": "18 AWG",
    "cable_type": "X",
    "voltage_rating": 600,
    "current_rating": 10,
    ...
  }
}
```

#### 2.1.3 Procurement Perspective Attributes
```
ProcurementSpec {
  item_id: string (FK)
  source_item_id: string (FK, nullable) // For make items
  supplier_id: string (FK, nullable)
  supplier_part_number: string
  
  // Procurement UOM
  procurement_uom: string
  procurement_package_type: string (Spool, Roll, Sheet, Box, Bag, Drum)
  procurement_package_size: decimal(12,4)
  procurement_package_uom: string
  procurement_minimum_order: integer
  procurement_order_multiple: integer
  
  // Pricing
  unit_price: decimal(12,2)
  price_uom: string
  currency: string
  price_effective_date: date
  
  // Lead time
  lead_time_days: integer
  
  // Alternative sourcing
  cut_to_length_available: boolean
  cut_to_length_price: decimal(12,2)
  cut_to_length_lead_time: integer
  
  // Attributes
  attributes: jsonb {
    "spool_length": 50,
    "spool_weight": 2.5,
    "packaging": "Cardboard reel",
    "moq_value": 250,
    ...
  }
}
```

#### 2.1.4 UOM Conflict Detection Attributes
```
UOMConflict {
  item_id: string (FK)
  
  // Conflict classification
  conflict_type: enum [
    NONE,              // No conflict (EA to BX, same dimension)
    PACKAGING,         // Simple conversion (EA to 100-packs)
    DIMENSIONAL,       // Dimension mismatch (M to EA spool) 🚨
    CUT_TO_LENGTH,     // Supplier offers cutting service
    BULK_MANAGED,      // Internal inventory dispenses
    EXCEEDS_PACKAGE    // Quantity > package size 🚨🚨
  ]
  
  conflict_severity: enum [None, Low, Medium, High, Critical]
  
  // Impact analysis
  requires_review: boolean
  requires_engineering_review: boolean
  requires_procurement_review: boolean
  requires_finance_review: boolean
  
  // Utilization metrics
  utilization_rate: decimal(5,2) // percentage
  waste_quantity: decimal(12,4)
  waste_uom: string
  waste_cost_per_unit: decimal(12,2)
  
  // Multi-package scenarios
  packages_required: integer
  total_package_quantity: decimal(12,4)
  excess_quantity: decimal(12,4)
  
  // Cost impact
  standard_cost: decimal(12,2)
  actual_cost: decimal(12,2)
  cost_variance: decimal(12,2)
  
  // Annual projections (if volume known)
  annual_volume: integer
  annual_waste_cost: decimal(12,2)
  
  // Auto-calculated timestamps
  conflict_detected_date: datetime
  conflict_last_calculated: datetime
}
```

#### 2.1.5 Review Workflow Attributes
```
ConflictReview {
  review_id: string (PK)
  item_id: string (FK)
  
  // Review status
  review_status: enum [
    PENDING,           // Awaiting review
    IN_PROGRESS,       // Under evaluation
    APPROVED,          // Conflict accepted
    APPROVED_WITH_CONDITIONS,
    REJECTED,          // Cannot proceed
    ENGINEERING_CHANGE_REQUIRED,
    RE_EVALUATE        // Circumstances changed
  ]
  
  // Assignment
  assigned_to: user_id
  assigned_date: datetime
  due_date: date
  
  // Decision tracking
  decision: enum [
    Accept_Standard_Packaging,
    Use_Cut_To_Length,
    Request_Design_Change,
    Identify_Alt_Supplier,
    Establish_Bulk_Purchasing,
    Accept_Multi_Package_Waste,
    Other
  ]
  
  decision_date: datetime
  decided_by: user_id
  decision_rationale: text
  
  // Alternatives evaluation
  alternatives_evaluated: jsonb [
    {
      "option": "Cut-to-length service",
      "cost": 8.50,
      "lead_time": 42,
      "decision": "Rejected",
      "reason": "68% cost increase not justified"
    },
    {
      "option": "Design change to 50M",
      "cost": 5000,
      "lead_time": 14,
      "decision": "Rejected", 
      "reason": "Schedule impact too high"
    }
  ]
  
  // Approval chain
  reviewed_by: user_id[]
  approval_history: jsonb
  
  // Notes and attachments
  review_notes: text
  attachments: string[] // file references
  
  // Re-evaluation triggers
  re_evaluation_trigger: enum [
    Volume_Change,
    Price_Change,
    Supplier_Change,
    Design_Change,
    Cost_Threshold_Exceeded,
    Periodic_Review
  ]
  next_review_date: date
}
```

#### 2.1.6 Conversation Thread
```
ConflictDiscussion {
  discussion_id: string (PK)
  item_id: string (FK)
  review_id: string (FK, nullable)
  
  // Thread structure
  parent_discussion_id: string (FK, nullable) // For replies
  thread_order: integer
  
  // Content
  posted_by: user_id
  posted_date: datetime
  user_role: string // Engineering, Procurement, etc.
  message: text
  mentions: user_id[] // @mentions
  
  // Attachments
  attachments: string[]
  
  // Status updates
  status_change: boolean
  old_status: string
  new_status: string
  
  // Visibility
  visibility: enum [Public, Department_Only, Reviewers_Only]
}
```

---

## 3. FUNCTIONAL REQUIREMENTS

### 3.1 Conflict Detection Engine

#### FR-3.1.1: Automatic Conflict Detection
**Trigger**: Item save/update with Make_Buy = "MAKE" or "BUY"

**Logic**:
```
IF dimension_type IN [LENGTH_CONTINUOUS, AREA_CONTINUOUS, 
                      VOLUME_CONTINUOUS, MASS_CONTINUOUS]
AND procurement_uom IN [EA, PC, BX, SET] (discrete)
THEN
  conflict_type = DIMENSIONAL
  requires_review = TRUE
  conflict_severity = calculate_severity()
  
IF engineering_quantity > procurement_package_size
THEN
  conflict_type = EXCEEDS_PACKAGE
  conflict_severity = HIGH or CRITICAL
  packages_required = CEILING(eng_qty / pkg_size)
  requires_engineering_review = TRUE
```

#### FR-3.1.2: Severity Calculation
```
Calculate conflict_severity:

IF conflict_type = NONE
  RETURN None

IF conflict_type = EXCEEDS_PACKAGE
  RETURN Critical

IF waste_cost_per_unit > $100 OR utilization_rate < 50%
  RETURN High
ELSE IF waste_cost_per_unit > $50 OR utilization_rate < 70%
  RETURN Medium
ELSE IF waste_cost_per_unit > $10 OR utilization_rate < 90%
  RETURN Low
ELSE
  RETURN None
```

#### FR-3.1.3: Impact Calculations
```
Calculate waste_quantity:
  waste_quantity = procurement_package_size - engineering_quantity
  
Calculate utilization_rate:
  utilization_rate = (engineering_quantity / procurement_package_size) * 100
  
Calculate waste_cost_per_unit:
  waste_cost_per_unit = (waste_quantity / procurement_package_size) * unit_price
  
Calculate annual_waste_cost (if volume known):
  annual_waste_cost = waste_cost_per_unit * annual_volume
```

#### FR-3.1.4: Multi-Package Detection
```
IF engineering_quantity > procurement_package_size
THEN
  packages_required = CEILING(engineering_quantity / procurement_package_size)
  total_package_quantity = packages_required * procurement_package_size
  excess_quantity = total_package_quantity - engineering_quantity
  actual_cost = packages_required * unit_price
  cost_variance = actual_cost - standard_cost
```

### 3.2 Review Workflow

#### FR-3.2.1: Review Task Creation
**Trigger**: Conflict detected with requires_review = TRUE

**Actions**:
1. Create ConflictReview record with status = PENDING
2. Assign to default procurement reviewer (configurable)
3. Set due_date based on item priority (configurable)
4. Send notification to assigned reviewer
5. Block item status change to "Released" until review complete

#### FR-3.2.2: Review Assignment Rules
```
Assign reviewer based on:
  - conflict_type
  - conflict_severity
  - item category
  - dollar threshold
  - department

Example rules:
  IF conflict_severity = CRITICAL
    ASSIGN TO senior_buyer AND engineering_manager
  ELSE IF annual_waste_cost > $10,000
    ASSIGN TO procurement_manager
  ELSE
    ASSIGN TO category_buyer
```

#### FR-3.2.3: Review Workflow States
```
State transitions:

PENDING → IN_PROGRESS (reviewer starts work)
IN_PROGRESS → APPROVED (conflict accepted)
IN_PROGRESS → APPROVED_WITH_CONDITIONS (conditions documented)
IN_PROGRESS → ENGINEERING_CHANGE_REQUIRED (escalate to engineering)
IN_PROGRESS → REJECTED (cannot proceed)

APPROVED → RE_EVALUATE (trigger condition met)
```

#### FR-3.2.4: Approval Requirements
```
Approval matrix (configurable):

IF conflict_severity = LOW
  REQUIRES: Category buyer approval
  
IF conflict_severity = MEDIUM
  REQUIRES: Category buyer + Engineering approval
  
IF conflict_severity = HIGH
  REQUIRES: Category buyer + Engineering + Finance approval
  
IF conflict_severity = CRITICAL
  REQUIRES: Procurement manager + Engineering manager + Finance approval
```

#### FR-3.2.5: Notification Rules
```
Send notifications:

ON conflict detected:
  NOTIFY assigned reviewer
  
ON review assigned:
  NOTIFY assignee
  
ON due date approaching (3 days):
  NOTIFY assignee + manager
  
ON review status change:
  NOTIFY item creator + assignee
  
ON approval required:
  NOTIFY approvers
  
ON engineering change required:
  NOTIFY engineering owner + project manager
```

### 3.3 Lens Switching & Perspective Views

#### FR-3.3.1: Engineering Lens View
**Display**:
- Engineering part number
- Required quantity with UOM
- Tolerance specification
- Drawing references
- Technical attributes
- Design rationale

**Alert**: If conflict exists, show banner:
```
⚠️ PROCUREMENT ALERT
Supplier constraint detected: [summary]
[View Procurement Details] [View Conflict Analysis]
```

#### FR-3.3.2: Procurement Lens View
**Display**:
- Supplier information
- Procurement UOM and packaging
- Unit pricing
- Lead time
- MOQ and order multiples
- Alternative sourcing options

**Alert**: If conflict exists, show banner:
```
🚨 DIMENSIONAL CONFLICT
Engineering requires: [qty] [uom]
Available packaging: [pkg_size] [pkg_type]
Action required: [Review Status]
[Start Review] [View Engineering Spec]
```

#### FR-3.3.3: Conflict Analysis View
**Display split-screen comparison**:
```
┌─────────────────────┬─────────────────────┐
│ ENGINEERING VIEW    │ PROCUREMENT VIEW    │
├─────────────────────┼─────────────────────┤
│ Need: [qty] [uom]   │ Buy: [qty] [uom]    │
│ Type: [dimension]   │ Type: [packaging]   │
│ Precision: [tol]    │ Cannot split        │
└─────────────────────┴─────────────────────┘

IMPACT SUMMARY:
• Waste: [qty] [uom] per unit ([%])
• Cost impact: $[amount] per unit
• Annual waste: $[amount] ([volume] units/yr)

RESOLUTION STATUS: [status]
[resolution details if approved]

ALTERNATIVES EVALUATED:
[list of evaluated alternatives with decisions]

[View Full History] [Reopen Review]
```

#### FR-3.3.4: Manufacturing Lens View
**Display**:
- Fabrication process
- Material yield/utilization
- Scrap allowance
- Work instructions
- Quality requirements

**Show**: Material efficiency metrics and waste tracking

#### FR-3.3.5: Finance Lens View
**Display**:
- Standard cost breakdown
- Actual cost with waste
- Cost variance
- Annual impact projection
- ROI analysis for alternatives

### 3.4 Search & Filtering

#### FR-3.4.1: Conflict-Based Search
**Filter options**:
```
Conflict Type:
  [ ] None (no conflicts)
  [ ] Any conflict
  [✓] Dimensional conflicts only
  [ ] Exceeds package size
  [ ] Cut-to-length available
  
Conflict Severity:
  [ ] Any
  [✓] Medium or higher
  [ ] High or Critical only
  
Review Status:
  [✓] Pending review
  [ ] In progress
  [ ] Approved
  [ ] Requires re-evaluation
  [ ] Engineering change required
  
Cost Impact:
  [ ] Any amount
  [✓] > $10/unit
  [ ] > $50/unit
  [ ] > $100/unit
  
Annual Impact:
  [ ] Any
  [ ] > $5,000/year
  [✓] > $10,000/year
  
Waste Threshold:
  [ ] Any utilization
  [✓] < 90% utilization
  [ ] < 70% utilization
```

#### FR-3.4.2: Parametric Search
**Search by attributes**:
- Length range (e.g., 40-50M)
- Specific UOM
- Category/classification
- Supplier
- Date ranges

#### FR-3.4.3: Full-Text Search
Search across:
- Part numbers
- Descriptions
- Review notes
- Discussion threads
- Attribute values

### 3.5 Reporting & Analytics

#### FR-3.5.1: Conflict Dashboard
**KPIs to display**:
- Total items with conflicts
- Conflicts by severity
- Conflicts by review status
- Average review cycle time
- Total annual waste cost
- Top 10 items by waste cost

**Charts**:
- Conflict trend over time
- Cost impact by category
- Review status funnel
- Utilization distribution

#### FR-3.5.2: Material Waste Report
**Show**:
- Items ranked by waste cost
- Waste by material type
- Waste by product line
- Utilization efficiency trends
- Opportunities for design optimization

#### FR-3.5.3: Review Performance Metrics
**Track**:
- Average time to review
- Review backlog
- Reviews by user/department
- Approval rates
- Re-evaluation frequency

---

## 4. USER INTERFACE REQUIREMENTS

### 4.1 Item Detail Page

#### UI-4.1.1: Page Layout
```
┌────────────────────────────────────────────────┐
│ Header: Part Number | Status | Revision        │
├────────────────────────────────────────────────┤
│ [Engineering] [Procurement] [Conflict] [Mfg]   │ ← Lens tabs
├────────────────────────────────────────────────┤
│                                                │
│ [Alert Banner if conflict exists]              │
│                                                │
│ [Active lens content]                          │
│                                                │
│                                                │
│ [Discussion Thread]                            │
│                                                │
└────────────────────────────────────────────────┘
```

#### UI-4.1.2: Conflict Alert Banner
**For DIMENSIONAL or EXCEEDS_PACKAGE conflicts**:
```
┌────────────────────────────────────────────────┐
│ 🚨 DIMENSIONAL CONFLICT - [Severity]           │
│                                                │
│ Engineering requires: [qty] [uom]              │
│ Procurement packages: [pkg_size] per [pkg_uom] │
│                                                │
│ Impact: $[waste_cost] waste per unit           │
│ Status: [Review Status]                        │
│                                                │
│ [View Conflict Analysis] [Start Review]        │
└────────────────────────────────────────────────┘
```

#### UI-4.1.3: Lens Tab Indicators
```
Tab label with indicator:

[Engineering] ← No indicator (baseline)
[Procurement 🚨] ← Conflict indicator
[Conflict ⚠️ PENDING] ← Status indicator
[Manufacturing] ← No indicator
```

### 4.2 Conflict Analysis Page

#### UI-4.2.1: Split View Comparison
**Side-by-side lens comparison** with visual connector showing the gap:
```
┌───────────────────┬──────────────────────┐
│ ENGINEERING       │ PROCUREMENT          │
│                   │                      │
│ Required:         │ Package:             │
│ 47.5 M            │ 50 M per spool       │
│                   │                      │
│ Precision:        │ Cannot split         │
│ ± 0.1 M           │ Must buy whole EA    │
│                   │                      │
│ Type:             │ Type:                │
│ Continuous length │ Discrete package     │
└───────────────────┴──────────────────────┘
         ↕ GAP: 2.5 M waste
```

#### UI-4.2.2: Impact Visualization
**Bar chart showing utilization**:
```
Used  ████████████████████░░  95%
      0        25        50        75       100%
      |-------Used: 47.5M-------|--Waste: 2.5M--|
```

**Cost breakdown**:
```
Standard Cost:  $237.50  (47.5M × $5/M)
Actual Cost:    $250.00  (1 spool)
                --------
Waste Cost:     $12.50   (2.5M × $5/M)
                ========
```

#### UI-4.2.3: Resolution Section
**Decision summary** with timeline:
```
RESOLUTION: Approved ✓
Date: 2024-08-22
By: M.Chen (Procurement)

Decision: Accept standard packaging
Rationale: Cut-to-length service 68% more expensive

[View Full History] [Reopen Review]
```

#### UI-4.2.4: Alternatives Table
```
┌──────────────────┬────────┬──────────┬──────────┐
│ Option           │ Cost   │ Lead Time│ Decision │
├──────────────────┼────────┼──────────┼──────────┤
│ Standard pkg     │ $5/M   │ 2 weeks  │ ✓ Approved│
│ Cut-to-length    │ $8.50/M│ 6 weeks  │ ✗ Rejected│
│ Redesign to 50M  │ +$5K   │ 2 weeks  │ ✗ Rejected│
│ Alt supplier     │ N/A    │ N/A      │ ✗ None found│
└──────────────────┴────────┴──────────┴──────────┘
```

### 4.3 Review Workflow UI

#### UI-4.3.1: Review Task Card
```
┌────────────────────────────────────────────────┐
│ REVIEW REQUIRED                                │
│                                                │
│ Item: CAB-012847-00                            │
│ Cable Assembly, Power, 47.5M                   │
│                                                │
│ Conflict: DIMENSIONAL                          │
│ Severity: MEDIUM                               │
│                                                │
│ Waste: $12.50/unit                             │
│ Annual: $6,250 (500 units/yr)                  │
│                                                │
│ Assigned to: M.Chen                            │
│ Due: 2024-10-30 (5 days)                       │
│                                                │
│ [Start Review] [View Details] [Reassign]       │
└────────────────────────────────────────────────┘
```

#### UI-4.3.2: Review Form
```
┌────────────────────────────────────────────────┐
│ CONFLICT REVIEW - CAB-012847-00                │
├────────────────────────────────────────────────┤
│                                                │
│ Decision: [Dropdown]                           │
│   ○ Accept standard packaging                  │
│   ○ Use cut-to-length service                  │
│   ○ Request design change                      │
│   ○ Identify alternative supplier              │
│   ○ Other: [text field]                        │
│                                                │
│ Rationale: [Text area]                         │
│                                                │
│ Alternatives Evaluated:                        │
│   [+ Add Alternative]                          │
│   ┌───────────────────────────────────────┐   │
│   │ Option: Cut-to-length                 │   │
│   │ Cost: $8.50/M                         │   │
│   │ Lead time: 6 weeks                    │   │
│   │ Decision: ○ Approved ● Rejected       │   │
│   │ Reason: 68% cost premium not justified│   │
│   └───────────────────────────────────────┘   │
│                                                │
│ Attachments: [Upload]                          │
│   • Supplier quote - cut service.pdf          │
│                                                │
│ Re-evaluation trigger:                         │
│   [✓] Volume change > 20%                      │
│   [✓] Price change > 15%                       │
│   [ ] Annual review                            │
│                                                │
│ Next review date: [Date picker]                │
│                                                │
│ [Submit for Approval] [Save Draft] [Cancel]    │
└────────────────────────────────────────────────┘
```

#### UI-4.3.3: Approval Workflow
**Sequential or parallel approval** based on severity:
```
Approval Chain (Medium Severity):

1. Category Buyer (M.Chen)     ✓ Approved
2. Engineering (J.Smith)        ⏳ Pending
3. Finance (A.Kumar)           ⏸️ Waiting
```

### 4.4 Dashboard & Reporting UI

#### UI-4.4.1: Conflict Dashboard
```
┌────────────────────────────────────────────────┐
│ UOM CONFLICTS DASHBOARD                        │
├────────────────────────────────────────────────┤
│                                                │
│ ┌─────────────┬─────────────┬─────────────┐   │
│ │ Total       │ Pending     │ Annual Waste│   │
│ │ Conflicts   │ Review      │ Cost        │   │
│ │             │             │             │   │
│ │    47       │    12       │   $127K     │   │
│ └─────────────┴─────────────┴─────────────┘   │
│                                                │
│ Conflicts by Severity:                         │
│   Critical: ████ 4                             │
│   High:     ████████ 8                         │
│   Medium:   ████████████████ 18                │
│   Low:      █████████████████████████ 17       │
│                                                │
│ Review Status:                                 │
│   [Pie chart or funnel]                        │
│                                                │
│ Top Conflicts by Cost:                         │
│   [Table with top 10]                          │
│                                                │
│ [View All Conflicts] [Export Report]           │
└────────────────────────────────────────────────┘
```

#### UI-4.4.2: My Tasks View
```
┌────────────────────────────────────────────────┐
│ MY REVIEWS (12 pending)                        │
├────────────────────────────────────────────────┤
│                                                │
│ ⚠️ OVERDUE (2)                                 │
│   CAB-012847-00 | Due 3 days ago | $6.2K/yr   │
│   TUBE-SS-2.3M  | Due today      | $18K/yr    │
│                                                │
│ DUE THIS WEEK (5)                              │
│   [List with sort/filter options]             │
│                                                │
│ UPCOMING (5)                                   │
│   [Collapsed, expandable]                     │
│                                                │
└────────────────────────────────────────────────┘
```

### 4.5 Discussion Thread UI

#### UI-4.5.1: Thread View
```
┌────────────────────────────────────────────────┐
│ DISCUSSION                                     │
├────────────────────────────────────────────────┤
│                                                │
│ 💬 M.Chen (Procurement) - Oct 18, 2:15 PM     │
│    @Engineering Can't source 52.5M. Supplier   │
│    max is 50M spools. Need guidance.           │
│                                                │
│    └─ 💬 J.Smith (Engineering) - Oct 18, 3:30 PM│
│        This is the measured distance. Can we  │
│        review alternative routing?            │
│                                                │
│        └─ 💬 K.Williams (Mfg) - Oct 18, 4:00 PM│
│            We could use a connector at 50M if │
│            that helps?                        │
│                                                │
│ 💬 J.Smith (Engineering) - Oct 18, 6:15 PM    │
│    Good news - lower channel routing = 49.8M. │
│    Preparing ECO now.                          │
│                                                │
│ ✓ Resolution: Redesign approved               │
│   Status changed to: Engineering Change       │
│                                                │
│ [Type your message...] [@mention] [📎 Attach] │
└────────────────────────────────────────────────┘
```

---

## 5. BUSINESS LOGIC & RULES

### 5.1 Validation Rules

#### BL-5.1.1: Item Creation Validation
```
ON item save:
  IF make_buy_code = MAKE
    REQUIRE source_item_id or procurement_spec
    
  IF dimension_type = CONTINUOUS
    REQUIRE engineering_tolerance
    
  IF procurement_uom defined
    VALIDATE uom_code exists in reference table
    
  IF conflict detected
    PREVENT status = Released until review approved
```

#### BL-5.1.2: Review Validation
```
ON review submit:
  REQUIRE decision selected
  REQUIRE rationale (min 20 characters)
  
  IF decision = Accept_Standard_Packaging
    REQUIRE waste_cost_per_unit calculated
    
  IF alternatives_evaluated empty
    WARN "No alternatives documented - is this intentional?"
    
  IF conflict_severity = HIGH or CRITICAL
    REQUIRE manager approval
```

### 5.2 Calculation Rules

#### BL-5.2.1: Auto-Calculate on Save
```
CALCULATE on item update:
  - utilization_rate
  - waste_quantity
  - waste_cost_per_unit
  - packages_required (if exceeds package size)
  - conflict_severity
  - annual_waste_cost (if volume known)
```

#### BL-5.2.2: Re-calculation Triggers
```
RECALCULATE conflict metrics when:
  - engineering_quantity changes
  - procurement_package_size changes
  - unit_price changes
  - annual_volume changes
  
UPDATE conflict_last_calculated timestamp
```

### 5.3 Notification Rules

#### BL-5.3.1: Real-Time Notifications
```
SEND notification when:
  - Conflict detected → assigned reviewer
  - Review assigned → assignee
  - Review due soon → assignee + manager (3 days before)
  - Review overdue → assignee + manager (daily)
  - Approval required → approver
  - Status changed → item owner + stakeholders
  - @mentioned in discussion → mentioned user
```

#### BL-5.3.2: Digest Notifications
```
SEND daily digest:
  - My pending reviews (count + top 3 by priority)
  - Reviews I'm approving (count)
  - Items I'm watching (new activity count)
  
SEND weekly digest:
  - Conflict metrics summary
  - Newly detected conflicts
  - Recently resolved conflicts
  - Overdue reviews
```

### 5.4 Access Control

#### BL-5.4.1: Role-Based Permissions
```
ROLES:
  - Engineering (can create items, view all lenses)
  - Procurement (can review conflicts, edit procurement data)
  - Manufacturing (can view, comment)
  - Finance (can view, approve high-impact reviews)
  - Manager (can reassign, override)
  - Admin (full access)

PERMISSIONS:
  Item.Create: Engineering
  Item.Edit_Engineering: Engineering
  Item.Edit_Procurement: Procurement
  Item.Release: Engineering + Procurement (both required if conflict)
  Review.Start: Procurement
  Review.Approve: Based on severity matrix
  Discussion.Post: All authenticated users
```

#### BL-5.4.2: Data Visibility
```
All items: Visible to all authenticated users
Conflict reviews: Visible to:
  - Item owner
  - Assigned reviewer
  - Approvers
  - Department members (configurable)
  
Sensitive notes: Visible to reviewers + managers only
```

---

## 6. INTEGRATION REQUIREMENTS

### 6.1 ERP/PLM Integration

#### INT-6.1.1: Item Master Sync
```
SYNC from ERP/PLM:
  - Part number, description, status
  - Engineering attributes
  - Make/buy code
  - Drawing references
  - Cost data
  
SYNC to ERP/PLM:
  - Conflict status
  - Review decisions
  - UOM conflict flags
```

#### INT-6.1.2: BOM Integration
```
IMPORT from BOM:
  - Parent-child relationships
  - Quantity per assembly
  - Where-used information
  
USE for:
  - Annual volume estimation
  - Impact propagation (design change affects...)
```

#### INT-6.1.3: Supplier Data
```
IMPORT from supplier catalog/ERP:
  - Supplier part numbers
  - Packaging information
  - Pricing
  - Lead times
  - MOQ/order multiples
```

### 6.2 Notification Integration

#### INT-6.2.1: Email Notifications
```
SEND via email:
  - Review assignments
  - Approval requests
  - Overdue alerts
  - Daily/weekly digests
  
INCLUDE:
  - Direct link to item/review
  - Summary of key info
  - Required action
```

#### INT-6.2.2: Collaboration Tools
```
INTEGRATE with:
  - Slack/Teams for real-time alerts
  - Calendar for review due dates
  - Document management for attachments
```

### 6.3 Reporting Integration

#### INT-6.3.1: BI Tools
```
EXPORT to BI tools:
  - Conflict metrics
  - Review performance
  - Waste cost analysis
  - Utilization trends
  
FORMAT: CSV, API, direct connection
```

---

## 7. NON-FUNCTIONAL REQUIREMENTS

### 7.1 Performance

- Conflict detection: < 2 seconds on item save
- Lens switching: < 500ms
- Search results: < 3 seconds for 10,000+ items
- Dashboard load: < 5 seconds
- Support 10,000+ items with conflicts
- Support 100+ concurrent users

### 7.2 Usability

- Mobile-responsive design
- Keyboard shortcuts for power users
- Inline help/tooltips
- Undo/redo for edits
- Auto-save drafts
- Accessibility compliance (WCAG 2.1 AA)

### 7.3 Reliability

- 99.5% uptime
- Automated backups (daily)
- Data recovery procedures
- Graceful degradation if integrations fail

### 7.4 Security

- Authentication required
- Role-based access control
- Audit logging of all changes
- Secure API endpoints
- Data encryption at rest and in transit

---

## 8. IMPLEMENTATION PHASES

### Phase 1: Core Data Model & Detection (MVP)
- Item entity with eng/proc perspectives
- Basic conflict detection logic
- Manual review workflow (no automation)
- Single lens view
- Basic reporting

### Phase 2: Lens Switching & Collaboration
- Multi-lens UI with tab switching
- Conflict analysis page
- Discussion threads
- @mentions and notifications
- Enhanced search/filtering

### Phase 3: Workflow Automation
- Automated review assignment
- Approval workflows
- Notification rules
- Integration with ERP/PLM
- Dashboard and analytics

### Phase 4: Advanced Features
- Predictive conflict detection
- ML-based alternative suggestions
- Advanced reporting and BI
- Mobile app
- API for third-party integrations

---

## 9. SUCCESS METRICS

### 9.1 Adoption Metrics
- % of items with procurement data populated
- % of conflicts reviewed within SLA
- Active users by role
- Average session duration

### 9.2 Efficiency Metrics
- Average review cycle time (target: < 5 days)
- % of conflicts resolved without escalation
- Reduction in emergency design changes
- Time saved in cross-functional meetings

### 9.3 Business Impact Metrics
- Total material waste cost visibility
- Material utilization improvement (target: +5%)
- Design changes due to procurement constraints (trend down)
- Cost savings from alternative sourcing
- Reduction in procurement lead time issues

---

## 10. OPEN QUESTIONS & DECISIONS NEEDED

1. **Data Source**: Which system is source of truth for item master? ERP or Shared Lens?

2. **Review SLA**: What are appropriate due dates by severity level?

3. **Approval Thresholds**: What dollar amounts trigger additional approvals?

4. **Integration Approach**: Real-time sync or batch? API or file-based?

5. **Historical Data**: How to handle items created before Shared Lens? Backfill or prospective only?

6. **Multi-currency**: How to handle global operations with different currencies?

7. **User Provisioning**: SSO? LDAP? Manual user management?

8. **Customization**: Which fields/workflows need to be configurable by customer?
