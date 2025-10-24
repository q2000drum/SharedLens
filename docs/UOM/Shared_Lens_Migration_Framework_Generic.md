# PLM Data Migration with Shared Lens™ Collaborative Framework
## A Methodology for Complex Multi-Source Enterprise Migrations

**Prepared by: [Consulting Firm]**
**Date: [Date]**
**Version: Generic 2.0**
**Project Type: Enterprise PLM Implementation with Legacy System Migration**

---

## Executive Summary

This methodology proposes a **transformative approach** to migrating approximately **48,000 parts**, **70,000+ CAD documents (2.5TB)**, **30,000 process plans**, and associated master data from Business Unit's legacy systems to the Target PLM System. What differentiates our proposal is the **Shared Lens™ Collaborative Taxonomy Framework**—a methodology that fundamentally reimagines how migration teams, subject matter experts, and stakeholders collaborate to define, validate, and govern the data that becomes the foundation of your new PLM system.

### The Shared Lens Advantage

Traditional migration approaches treat taxonomy and attribute mapping as **IT-driven technical exercises**, often resulting in:
- Data dictionaries created in isolation by consultants who lack deep business context
- Taxonomies that are technically complete but functionally weak
- Low user adoption post-migration because users didn't help build it
- Hidden data quality issues discovered too late in the process

**The Shared Lens approach reverses this paradigm:**

1. **Attributes First, Not Structure First**: Instead of debating classification hierarchies, we start by asking "What do we need to know about this part to make sound decisions?" This meaning-first approach creates a unified foundation that serves Engineering, Manufacturing, Quality, Sourcing, and Compliance equally.

2. **Engineer-Driven Attribute Definition**: Engineers don't just map existing fields—they **define new attributes**, **group related attributes** (e.g., "Material Properties", "Regulatory", "Cost"), **create aliases** for legacy terminology, and specify exactly what data they need. This captures the "why" behind the data, not just the "what."

3. **Collaborative Data Enrichment**: A dedicated data team extracts attribute values from drawings, specifications, and documents—reading datasheets, measuring drawings, and populating units of measure. Engineers validate the data, ensuring accuracy before migration.

4. **Classification Emerges from Attributes**: Rather than forcing parts into predefined categories, classifications develop naturally from shared attribute patterns. Parts with similar attributes cluster together, revealing the true taxonomy.

5. **BOM Structure Optimization**: Attributes drive intelligent BOM structuring rules (e.g., "raw materials at bottom of BOM", "purchased components grouped by supplier", "configured options at specific levels"). Manufacturing logic embedded in the structure.

6. **SME-Driven Collaboration**: Business Unit and Parent Company engineers become co-creators of the taxonomy through our real-time collaborative platform, not passive recipients of consultant-defined mappings. This yields ownership, catches edge cases early, and captures tribal knowledge before it walks out the door.

7. **Normalized Taxonomy Dictionaries**: Our proprietary intermediate data layer acts as a "common language of exchange" between Legacy ERP System, Legacy PDM System, network folders, and Target PLM—handling complex relationships, merging data from multiple sources, managing revision histories, resolving duplicates, and preventing collisions with existing enterprise data.

8. **Operational Transformation Capability**: Multiple users can simultaneously view, annotate, and refine attribute mappings in real-time, with probabilistic conflict detection ensuring that changes don't overwrite each other.

9. **Enterprise Attribute Registry**: Every attribute's name, definition, data type, governance owner, source system, and transformation rule is captured in a living registry that becomes the backbone of your data governance strategy post-migration.

### Business Outcomes

This approach delivers quantifiable value:

| Traditional Approach | Shared Lens Approach |
|---------------------|---------------------|
| 12 weeks for taxonomy definition | **6 weeks** (50% faster through parallel collaboration) |
| 95% data accuracy (industry average) | **99.5% accuracy** (validated through crowdsourced SME review) |
| 60% user satisfaction | **90% user satisfaction** (users helped build it) |
| Consultant-driven ("We'll build you a data dictionary") | **Customer-driven** ("We'll empower your team to build a living taxonomy") |

### Migration at a Glance

- **Scope**: Parts, eBOMs, mBOMs, CAD Documents, Suppliers, Manufacturers, MPNs, AML, Documents, Users
- **Timeline**: 34 weeks (~8 months) to complete by [Target Completion Date] target
- **Methodology**: Phased, validated approach with quality gates at every stage
- **Investment**: $590,000 - $730,000 (includes enhanced Shared Lens platform with attribute definition, data enrichment team, and BOM optimization)
- **Key Differentiators**:
  - Engineer-driven attribute definition and classification development
  - Dedicated data team to extract values from drawings and documents
  - BOM structure optimization based on attribute-driven rules
  - Only migration proposal that embeds collaborative taxonomy development into the migration process itself

Our approach emphasizes **data quality over speed**, **validation at every stage**, and **parallel track coordination** with Target ERP System to ensure seamless handoffs and zero data loss during the legal entity merger.

---

## Table of Contents

1. [Introduction & Alignment with Enterprise Principles](#1-introduction--alignment-with-enterprise-principles)
2. [The Shared Lens™ Framework: A Paradigm Shift](#2-the-shared-lens-framework-a-paradigm-shift)
3. [Migration Strategy & Architecture](#3-migration-strategy--architecture)
4. [Entity-by-Entity Migration Plan](#4-entity-by-entity-migration-plan)
5. [Addressing the Four Big Rock Requirements](#5-addressing-the-four-big-rock-requirements)
6. [Data Quality & Governance](#6-data-quality--governance)
7. [Technical Architecture: Normalized Taxonomy Dictionaries](#7-technical-architecture-normalized-taxonomy-dictionaries)
8. [Organizational Change Management & User Adoption](#8-organizational-change-management--user-adoption)
9. [Timeline, Work Streams & Resources](#9-timeline-work-streams--resources)
10. [Risk Mitigation](#10-risk-mitigation)
11. [Success Metrics & Acceptance Criteria](#11-success-metrics--acceptance-criteria)
12. [Investment & ROI](#12-investment--roi)
13. [Deliverables](#13-deliverables)
14. [Next Steps](#14-next-steps)

---

## 1. Introduction & Alignment with Enterprise Principles

### 1.1 Understanding the Business Unit Context

The Business Unit presents a unique set of challenges:
- **Configure-to-order configured products**: Complex product configurability driven by CPQ System
- **Multiple legacy data sources**: Legacy ERP System (home-grown ERP), Legacy PDM System (SolidWorks, AutoCAD, Altium), network folders
- **Merger timeline pressure**: Legal entity merge [Entity Merger Date]; PLM must be ready before Target ERP System rollout
- **Enterprise alignment**: Adopt Parent Company standard products PLM standards while accommodating Business Unit's business model differences

### 1.2 Adopt, Adapt, Develop Alignment

Our proposal strictly follows Parent Company's guiding principle:

1. **Adopt**: Leverage existing Target PLM item classifications, lifecycles, and workflows from Parent Company standard product division
2. **Adapt**: Extend sub-type lists and effectivity rules for Business Unit configure-to-order model; develop Shared Lens collaborative taxonomy framework to accelerate attribute definition
3. **Develop**: Create Normalized Taxonomy Dictionaries middleware and custom transformation logic only where Legacy ERP System data structures have no Target PLM equivalent

### 1.3 Why Data Migration is the Critical Path

As correctly identified in the RFP, the primary effort for Business Unit PLM is **OCM, training, and data migration**. Poor data migration undermines everything else:
- Inaccurate BOMs halt production
- Missing supplier data blocks procurement
- Incorrect configured item structures break CPQ integration
- Incomplete compliance documentation exposes regulatory risk

**The Shared Lens approach de-risks migration** by making data quality a **collaborative, transparent, and traceable process** rather than a black-box consultant activity.

---

## 2. The Shared Lens™ Framework: A Paradigm Shift

### 2.1 The Problem with Traditional Migration Taxonomy Development

Most PLM migrations follow this pattern:

1. Consultants extract legacy data schemas
2. Consultants propose field mappings in Excel spreadsheets
3. Customer SMEs review mappings in sporadic workshops
4. Consultants make changes, redistribute spreadsheets
5. Version control chaos ensues
6. Mapping decisions lack transparency and auditability
7. Users inherit a system they didn't help build

**Result**: Technically complete but functionally weak. Users don't trust the data. Adoption suffers.

### 2.2 The Shared Lens Solution

The **Shared Lens™ Collaborative Taxonomy Framework** transforms this process:

#### Core Principles

1. **Attributes First, Structure Second**
   - Traditional: "Where does this part belong in the classification tree?"
   - Shared Lens: "What do we need to know about this part to make sound decisions?"

2. **SME-Centric, Not IT-Centric**
   - Knowledge of what defines a part resides with engineers, planners, quality teams
   - Shared Lens gives them a collaborative environment to define, validate, and govern attributes

3. **Contextual Visibility for All Roles**
   - Engineering sees Form/Fit/Function attributes
   - Sourcing sees Cost/Supplier/Lead Time attributes
   - Compliance sees RoHS/REACH/Conflict Minerals attributes
   - **All views are derived from the same unified attribute registry**

4. **Meaning-First, Not Structure-First**
   - Classification emerges naturally from shared attribute semantics
   - Reduces endless debates about taxonomy hierarchies

### 2.3 How Shared Lens Works in Practice

#### Phase 1: Attribute Discovery & Initial Seeding (Week 2-3)
- Automated extraction of Legacy ERP System database schema, Legacy PDM System metadata, and CAD file properties
- AI-assisted analysis identifies candidate attributes and patterns of meaning
- Initial seeding of **Normalized Taxonomy Dictionary** (our proprietary intermediate data model)
- Engineers review discovered attributes in Shared Lens; flag gaps ("We need an attribute for XYZ but it doesn't exist in legacy systems")

#### Phase 2: Engineer-Driven Attribute Definition (Week 3-5)

**Attribute Creation Workflow**:
1. **Define New Attributes**: Engineers propose new attributes not found in legacy systems
   - Example: "Corrosion Resistance Rating" (doesn't exist in Legacy ERP System, but needed for product component selection)
   - Specify: Attribute name, definition, data type, unit of measure, value domain

2. **Group Attributes**: Engineers organize attributes into logical groups
   - Example Groups: "Material Properties", "Dimensional", "Performance", "Regulatory", "Cost", "Manufacturability"
   - Groups become the foundation for classification development

3. **Create Aliases**: Engineers define multiple names for the same concept
   - Example: "Part Number" = "Item Number" = "Component ID" (Legacy ERP System) = "item_number" (Target PLM)
   - Aliases enable legacy terminology search and cross-referencing

4. **Specify Requirements**: Engineers define which attributes are required vs. optional per part type
   - Example: All "Purchased Parts" must have "Supplier Lead Time" and "Unit Cost"; "Configured Items" must have "CPQ Option Code"

**Collaborative Features**:
- Real-time editing with operational transformations (multiple engineers can work simultaneously)
- Threaded discussions on each attribute definition
- Vote/approval workflow (requires 70% agreement before locking)
- Subject matter expert tiebreaker for deadlocks

#### Phase 3: Data Enrichment & Validation (Week 4-8, parallel with Phase 2)

**Data Team Responsibilities**:
1. **Document Review**: Data team reads engineering drawings, datasheets, specifications, test reports
2. **Attribute Extraction**: Extract attribute values from documents
   - Example: Read material callouts from drawings ("316 Stainless Steel")
   - Extract dimensions from CAD files (length, width, height)
   - Read performance specs from datasheets (pressure rating, flow rate, voltage)
3. **Unit of Measure Normalization**: Standardize units (e.g., convert "inches" to "mm" per Parent Company standard)
4. **Data Entry**: Populate attribute values in Shared Lens data entry interface
5. **Quality Control**: Flag ambiguous or missing data for engineer review

**Engineer Validation Loop**:
- Engineers review data team entries in Shared Lens
- Approve accurate data; correct errors; provide clarification on ambiguous items
- Example workflow: Data team enters "Material: SS" → Engineer clarifies "Should be 316L Stainless Steel per drawing rev C"

#### Phase 4: Attribute Mapping & Classification Development (Week 5-6)

**Attribute Mapping**:
- Business Unit and Parent Company SMEs access **Shared Lens Web Application** (Vercel-hosted)
- Side-by-side view: Legacy ERP System field ↔ proposed Target PLM field ↔ Parent Company standard products equivalent
- Map legacy attributes to newly-defined attribute groups
- Users can **upload their own Excel spreadsheets** with legacy data for cross-reference

**Classification Emerges from Attributes**:
- Shared Lens analyzes attribute patterns across parts
- Parts with similar attribute groups cluster together
- Example: All parts with "Material Properties" + "Corrosion Resistance" + "Pressure Rating" → classify as "Fluid Handling Components"
- Engineers review suggested classifications; adjust as needed
- Classification hierarchy developed collaboratively (not imposed top-down)

#### Phase 5: BOM Structure Optimization Rules (Week 6)

**Structure Rules Definition**:
Engineers define BOM structuring rules based on attributes:

1. **Level Assignment Rules**:
   - "Raw materials (attribute: item_type = 'Raw Material') → place at bottom of BOM (level 99)"
   - "Purchased components → group by supplier at level 2"
   - "Configured options (attribute: is_configurable = true) → level 3"
   - "Standard assemblies → level 1"

2. **Sorting Rules**:
   - "Within each level, sort by: 1) Material Type, 2) Part Number"
   - "Group fasteners together (attribute group: 'Fasteners')"

3. **Manufacturing Sequence Rules**:
   - "BOM order aligns with routing operation sequence (Big Rock #2)"
   - "Components consumed at Op 10 appear before components consumed at Op 20"

4. **Effectivity Rules**:
   - "Configured items: apply effectivity based on CPQ option selection"
   - "Standard items: always effective"

**Rules Applied During Migration**:
- Transformation engine reads BOM structure rules from Shared Lens
- Applies rules when generating Target PLM Part Structure relationships
- Validation: Engineers review sample BOMs in Shared Lens; verify structure rules applied correctly

#### Phase 6: Governance & Publication (Week 7)
- Approved attribute definitions, mappings, and BOM rules locked and versioned (v1.0 baseline)
- **Enterprise Attribute Registry** published with full attribute groups, aliases, and relationships
- Transformation rules auto-generated from approved mappings
- Data Dictionary, Mapping Matrix, and BOM Structure Rules exported for customer records

#### Phase 7: Continuous Evolution (Week 8-34+)
- Post-migration refinements captured in Shared Lens
- New attributes defined as needed; new classifications added
- BOM structure rules refined based on manufacturing feedback
- Taxonomy versioning (v1.1, v1.2, etc.) with immutable audit trail
- Ownership transfers to Parent Company IT for long-term governance

### 2.4 The Normalized Taxonomy Dictionary Architecture

Our **Normalized Taxonomy Dictionary (NTD)** acts as the "common language of exchange" between multiple source systems and multiple target systems:

```
[Legacy ERP System] ────┐
[Legacy PDM System]   ────┼───> [Normalized Taxonomy Dictionary] ───┬───> [Target PLM]
[Network ────┘        (Intermediate Unified Model)       ├───> [Compliance System]
 Folders]                    UID-based                   └───> [Target ERP System (future)]
```

**Key NTD Capabilities:**

1. **UID-Based Traceability**: Every entity (Part, CAD Document, BOM, Manufacturer, Supplier) gets a unique identifier (NTD_part_UID, NTD_CAD_UID, etc.) that links back to legacy source IDs

2. **Relationship Integrity**:
   - CAD file in network folder + metadata in Legacy PDM System = merged into single NTD_CAD object
   - Part in Legacy ERP System + mBOM in Legacy ERP System + eBOM in Legacy PDM System = reconciled relationships in NTD

3. **Duplicate Resolution**:
   - Same supplier appears in Legacy ERP System and Legacy PDM System with slightly different names
   - NTD merge logic (fuzzy matching + SME review via Shared Lens) creates single source of truth

4. **Collision Prevention**:
   - Business Unit part number collides with existing Parent Company part number
   - NTD flags collision; Shared Lens workflow routes to Data Governance Council for resolution

5. **Transformation Auditability**:
   - Every transformation rule (trim, normalize, map value domain, derive from multiple fields) is captured
   - Full lineage: Source system → Source field → Transformation → NTD attribute → Target system → Target field

### 2.5 Technology Stack for Shared Lens Platform

**Front-End**: Next.js (React framework) hosted on Vercel
**Back-End**: Next.js API routes + Vercel Serverless Functions
**Database**: Vercel Postgres (for Normalized Taxonomy Dictionary and Enterprise Attribute Registry)
**Real-Time Collaboration**: Vercel Edge Functions + WebSockets for operational transformation
**Authentication**: Integration with Parent Company Active Directory
**Integration**: REST APIs for Target PLM IOM, Legacy ERP System database, Legacy PDM System APIs

**Deployment Timeline**: Weeks 2-4 (ready for use by Week 4 classification mapping workshop)

### 2.6 User Roles & Permissions

| Role | Access | Capabilities |
|------|--------|-------------|
| **Viewer** | All Business Unit/Parent Company employees | View taxonomy, search mappings, read comments, search aliases |
| **Attribute Definer** | Engineering SMEs | Define new attributes, create attribute groups, define aliases, specify requirements, vote on definitions |
| **Data Entry Team** | Dedicated data enrichment specialists | Read documents/drawings, extract attribute values, populate data in entry interface, flag ambiguous data for engineer review |
| **Contributor** | SMEs (Engineering, Manufacturing, Quality) | Propose mappings, validate data team entries, add comments, vote on proposals, define BOM structure rules |
| **Reviewer** | Data Governance Workgroup | Approve/reject attribute definitions and mappings, resolve conflicts, lock approved items, approve BOM structure rules |
| **Admin** | Our firm + Parent Company IT | Modify taxonomy structure, manage users, export reports, configure transformation rules |
| **Tiebreaker** | Domain SMEs (appointed per entity type) | Final decision authority when consensus not reached |

### 2.7 Value Proposition: Why Shared Lens Differentiates Our firm

| Traditional Migration Consultant | Our firm with Shared Lens |
|--------------------------------|---------------------------|
| "We'll build you a data dictionary" | "We'll empower your team to collaboratively build a living taxonomy" |
| Consultant-driven, black box | SME-driven, transparent, auditable |
| Risk: Consultants misunderstand Business Unit business | Mitigation: Business Unit SMEs define mappings themselves |
| Risk: Low user adoption post-migration | Mitigation: Users helped build it, higher buy-in |
| Risk: Hidden data quality issues discovered late | Mitigation: Crowdsourced validation catches edge cases early |
| Static deliverable (Excel Data Dictionary) | Living platform (Enterprise Attribute Registry with governance) |

---

## 3. Migration Strategy & Architecture

### 3.1 Guiding Principles

1. **Data Quality Over Speed**: We will not sacrifice accuracy for timeline. Every migration batch undergoes validation before proceeding.

2. **Validation at Every Stage**: Pre-migration profiling, post-extraction reconciliation, post-transformation sampling, post-load verification, user acceptance testing.

3. **Parallel Track Coordination**: Weekly syncs with Target ERP System implementation team to ensure common master data (part numbers, UOMs, suppliers, manufacturers).

4. **Shared Lens as the Collaboration Hub**: All mapping decisions, data quality issues, exception handling, and SME validation channeled through Shared Lens platform for transparency and traceability.

5. **Phased Approach with Pilot Validations**: Migrate low-complexity entities first (Suppliers, Manufacturers) to validate tooling and process before tackling high-complexity entities (Parts, BOMs, CAD).

### 3.2 Multi-Track Migration Architecture

The Business Unit data migration intersects with multiple parallel initiatives:

**PLM Track (Our firm Scope - This Proposal)**
- Legacy ERP System → Target PLM: Parts, eBOMs, mBOMs, Suppliers, Manufacturers, MPNs, AML
- Legacy PDM System → Target PLM: CAD documents with full metadata and relationships
- Network folders → Target PLM: Engineering documents, specifications, test reports
- User identity mapping for ~180 users
- **Shared Lens platform deployment and operation**

**ERP Track (Target ERP Consultant, Out of Scope)**
- Legacy ERP System → Target ERP System: Transactional data, inventory balances, financial records
- Coordination point: Ensure common master data definitions via **Shared Lens Enterprise Attribute Registry**

**CPQ Track (CPQ System, Remains in Place)**
- CPQ System configurability rules stay intact
- Future integration: Target PLM configured item creation from CPQ output (Big Rock #1, optional scope)

**Critical Success Factor**: **Shared Data Governance Council** to resolve cross-track conflicts and maintain consistency. Council uses Shared Lens as collaboration tool to review exceptions, approve transformations, and make binding decisions on data ownership.

### 3.3 The Role of Normalized Taxonomy Dictionaries

Our **NTD** sits at the center of the migration architecture:

```
┌─────────────────── SOURCES ───────────────────┐
│  Legacy ERP System DB   Legacy PDM System Vault   Network Folders    │
└──────────────────┬───────────────────────────┘
                   │
                   ▼
         ╔═══════════════════════╗
         ║  Extraction Layer     ║
         ║  (APIs, SQL, Crawlers)║
         ╚═══════╤═══════════════╝
                 │
                 ▼
      ╔═════════════════════════════╗
      ║ Normalized Taxonomy         ║
      ║ Dictionary (PostgreSQL)     ║
      ║  - Part UID + metadata      ║
      ║  - CAD UID + metadata       ║
      ║  - BOM UID + relationships  ║
      ║  - Supplier/Mfg UID + meta  ║
      ║  - Transformation rules     ║
      ╚════════╤════════════════════╝
               │
               ├─────> Shared Lens UI <───── SMEs (validate, approve, comment)
               │       (Vercel Web App)
               │
               ▼
        ╔══════════════════╗
        ║ Transformation   ║
        ║ Engine (ETL)     ║
        ╚═════╤════════════╝
              │
              ▼
      ┌───── TARGETS ──────┐
      │ Target PLM  Compliance System Target ERP│
      └────────────────────┘
```

**Key Workflow:**

1. **Extract**: Pull data from Legacy ERP System, Legacy PDM System, network folders → stage in NTD
2. **Validate & Map**: SMEs review staged data in Shared Lens → approve mappings
3. **Transform**: ETL engine applies approved transformation rules → prepare Target PLM-ready data
4. **Load**: Batch upload to Target PLM via IOM API → reconciliation verification
5. **Audit**: Full lineage captured; traceability from source record → NTD UID → Target PLM item

### 3.4 Data Flow Architecture

**Phase 1: Discovery & Profiling (Weeks 1-6)**
- Legacy ERP System database: ODBC connection → extract schema + sample data (10% of each entity)
- Legacy PDM System: API extraction → CAD metadata, assembly structures, vault folder taxonomy
- Network folders: File system crawler → document inventory, file properties
- Seed NTD with discovered data
- Shared Lens: Display for SME review

**Phase 2: Classification & Attribute Mapping (Weeks 3-6, overlaps with Phase 1)**
- Workshops: Map Business Unit part types → Target PLM item classifications (reuse Parent Company standard products standards)
- Shared Lens: SMEs collaborate on attribute mappings (Legacy ERP System fields → Target PLM properties)
- Output: Approved Data Dictionary + Transformation Specification

**Phase 3: Transformation Development (Weeks 5-12)**
- Build ETL jobs (Python + Talend) based on approved mappings
- Unit test each transformation rule
- Pilot migrations: Suppliers (250 records), Manufacturers (1,300 records)
- Validate NTD → Target PLM transformation accuracy

**Phase 4: Entity Migrations (Weeks 8-30, sequenced by dependency)**
1. **Master Data First**: Suppliers, Manufacturers, MPNs (prerequisites for Parts)
2. **Parts**: 48,000 parts (foundation for BOMs)
3. **CAD Documents**: 70,000 unique files (parallel track, starts Week 10)
4. **eBOMs**: 20,000 structures (depends on Parts + CAD Documents)
5. **mBOMs/Process Plans**: 30,000 structures (depends on eBOMs)
6. **Documents/Files**: 2,000 baseline (parallel track, starts Week 20)
7. **Users/Identities**: 180 users (final, Week 24-26)

**Phase 5: Validation & Hypercare (Weeks 26-34)**
- Full reconciliation: row counts, BOM explosions, file checksums
- User acceptance testing with Engineering and Manufacturing
- 30-day hypercare support window

---

## 4. Entity-by-Entity Migration Plan

### 4.1 Parts (48,000 items)

**Scope**: Transform and migrate all Part master data from Legacy ERP System to Target PLM

**Complexity Assessment**: **Moderate to High**
- No new item types required (map to existing Target PLM Part classifications)
- Sub-type lists extended for Business Unit product families (tables, pumps, accessories)
- Configured items flagged for special handling (CPQ associations)
- Material control challenges noted by customer may result in data quality issues

**Shared Lens Integration**:
- Week 3: Part type classification workshop → map Business Unit part families to Parent Company Target PLM item classes
- Week 4-5: SMEs review part attribute mappings via Shared Lens (Legacy ERP System part fields → Target PLM Part properties)
- Week 5: Approve baseline mappings; lock v1.0 Part taxonomy
- Week 10-16: As parts migrate in batches, Shared Lens used to review exceptions and data quality issues flagged by transformation engine

**Migration Approach**

| Phase | Activity | Deliverable | Shared Lens Role |
|-------|----------|-------------|-----------------|
| **1. Discovery** | Extract Legacy ERP System part schema and sample data set (1,000 parts) | Data dictionary mapping Legacy ERP System fields → Target PLM Part properties | Display discovered attributes; SMEs annotate business definitions |
| **2. Classification Mapping** | Workshop with Parent Company to map Business Unit part types to existing Target PLM item classifications | Classification mapping matrix with rules for automated assignment | Collaborative voting on classification rules; tiebreaker SME resolves conflicts |
| **3. Data Quality Assessment** | Profile all 48k parts for completeness, duplicates, orphaned records | DQ scorecard with exception reports by category | SMEs review DQ issues; approve cleansing rules |
| **4. Transformation Development** | Build ETL routines with configurable business rules | Reusable transformation scripts with logging and rollback | Transformation rules pulled from approved Shared Lens mappings |
| **5. Pilot Migration** | Migrate 5,000 representative parts (10% sample across all categories) | Validation report with customer sign-off | SMEs validate pilot results in Shared Lens; flag errors for correction |
| **6. Full Migration** | Execute in batches of 5,000 parts with reconciliation checkpoints | 100% reconciliation report showing Legacy ERP System vs. Target PLM counts | Real-time batch status visible in Shared Lens; exceptions routed to Reviewer queue |
| **7. Hypercare** | 30-day support window to address data anomalies discovered in use | Issue log with resolutions documented | Issue tracking integrated into Shared Lens; SMEs can report problems directly |

**Key Transformation Rules**

- **Unit of Measure (UOM)**: Map Legacy ERP System UOMs to Target PLM standard UOM list; flag exceptions for manual review (Shared Lens workflow)
- **Lifecycle State**: Default to "Released" for active parts in production; "Obsolete" for inactive parts (based on Legacy ERP System status field)
- **Make/Buy Flag**: Determine from Legacy ERP System BOM relationships (leaf parts = Buy; assemblies = Make)
- **Configured Items**: Flag parts with CPQ associations for special handling in configurability workflows (stored in NTD; visible in Shared Lens)
- **Revision Handling**: Customer decision required (Week 2): migrate latest revision only vs. full revision history (impacts effort +600 hours if full history)

**Data Quality Gates**

- **No orphan parts**: Every part must have valid item class, UOM, and description
- **No duplicate part numbers**: Target PLM enforces unique part number constraint; duplicates resolved via Shared Lens conflict workflow
- **Valid supplier/manufacturer references**: All purchased parts must link to migrated Supplier/Manufacturer records
- **Mass/weight validation**: Flag parts with missing or zero mass (impacts BOM rollups); SMEs review exceptions in Shared Lens

**Estimated Effort**: 240 hours (6 weeks elapsed, 2 FTE)

---

### 4.2 eBOM - Engineering Bill of Materials (20,000 structures)

**Scope**: Transform and migrate all eBOM data as defined in CAD assemblies from Legacy PDM System and network folders to Target PLM

**Complexity Assessment**: **High**
- Source data split across Legacy PDM System (SolidWorks, AutoCAD) and network folders
- CAD-driven BOMs may not match Legacy ERP System BOMs (synchronization gaps)
- Estimated 20k parts contain eBOMs (ratio-based estimate from Parent Company standard product division)
- Must establish eBOM → CAD Document relationships

**Shared Lens Integration**:
- Week 6-7: Legacy PDM System vs. Legacy ERP System BOM variance report displayed in Shared Lens
- SMEs establish "system of record" rules: CAD wins vs. Legacy ERP System wins (by product family or part type)
- Shared Lens tracks decisions; transformation engine applies rules automatically

**Migration Approach**

| Phase | Activity | Deliverable | Shared Lens Role |
|-------|----------|-------------|-----------------|
| **1. Source System Analysis** | Survey Legacy PDM System vault structure and CAD assembly file locations | Source inventory with file counts, CAD versions, folder taxonomy | Display for SME review; capture tribal knowledge ("this folder is obsolete", etc.) |
| **2. CAD BOM Extraction** | Use SolidWorks API and AutoCAD extraction tools to read assembly structures | Flat-file eBOM extracts (parent-child-qty-refdes) with CAD file associations | Extracted BOMs staged in NTD; visible in Shared Lens for validation |
| **3. Reconciliation** | Compare CAD-derived eBOMs vs. Legacy ERP System BOMs; identify discrepancies | Variance report with resolution recommendations (CAD wins vs. Legacy ERP System wins) | Collaborative resolution workflow in Shared Lens; SMEs vote on resolution rules |
| **4. Target PLM Structure Creation** | Generate Target PLM Part Structure relationships with reference designators, find numbers, quantities | eBOM structures in Target PLM with full traceability to source CAD | Transformation rules from Shared Lens applied; NTD maintains lineage |
| **5. Validation** | BOM explosion reports comparing Legacy ERP System vs. Target PLM; indented BOMs match check | Sign-off package with sample comparisons for top 50 assemblies | SMEs review sample indented BOMs in Shared Lens; approve or flag for rework |

**Key Transformation Rules**

- **Reference Designators**: Preserve from CAD (e.g., R1, C22, U5) in Target PLM Part BOM Line property
- **Find Number**: Capture CAD assembly sequence/balloon numbers for drawing alignment
- **Quantity Per**: Handle fractional quantities for chemicals/fluids (e.g., 0.5 liters)
- **CAD Document Linkage**: Each eBOM parent part must link to its defining CAD assembly file in Target PLM (NTD tracks Part UID → CAD UID relationship)
- **Effectivity**: If Legacy PDM System contains revision-specific BOMs, migrate with effectivity dates; otherwise default to "Always Effective"

**Data Quality Gates**

- **No circular references**: BOM tree validation to prevent part A containing part B containing part A
- **Valid component references**: All child parts in eBOM must exist in migrated Part master (enforced by NTD; violations flagged in Shared Lens)
- **Quantity validation**: QtyPer > 0 for all BOM lines
- **Level validation**: BOM depth ≤ 15 levels (Target PLM performance threshold)

**Estimated Effort**: 320 hours (8 weeks elapsed, 2 FTE)

---

### 4.3 Process Plan (mBOM) - Manufacturing Bill of Materials (30,000 structures)

**Scope**: Transform and migrate all Manufacturing BOM structures from Legacy ERP System to Target PLM MPP (Manufacturing Process Planning)

**Complexity Assessment**: **High**
- Legacy ERP System maintains mBOM separately from eBOM (common in legacy systems)
- Business Unit requires **operation sequence alignment** (Big Rock #2) - components mapped to specific routing operations
- Configured products have variant-dependent mBOMs
- ~30k process plans indicates high configurability (more mBOMs than unique parts)

**Shared Lens Integration**:
- Week 7-9: Manufacturing engineering SMEs define "Consumed At Operation" rules in Shared Lens
- Component-to-operation mapping templates created collaboratively
- Manufacturing Process Plan templates approved via Shared Lens workflow before migration

**Migration Approach**

| Phase | Activity | Deliverable | Shared Lens Role |
|-------|----------|-------------|-----------------|
| **1. Legacy ERP System mBOM Schema Analysis** | Document Legacy ERP System BOM tables, operation tables, and component-to-operation linkage | ERD diagram showing Legacy ERP System mBOM data model | Technical documentation accessible in Shared Lens for SME review |
| **2. MPP Template Design** | Configure Target PLM MPP templates aligned with Parent Company standard products standards, extended for operation sequence | MPP methodology document with customer approval | Collaborative review in Shared Lens; manufacturing engineers validate operation sequence logic |
| **3. Transformation Logic** | Map Legacy ERP System mBOM + operation data → Target PLM MPP (Part, Process Plan, Manufacturing Plan, Operations, BOM) | Transformation specification with field mappings | All mappings defined and approved in Shared Lens; auto-generated transformation scripts |
| **4. Pilot Migration** | 500 process plans across major product families (tables, pumps, accessories) | Pilot validation with manufacturing engineering review | SMEs validate pilot results in Shared Lens; approve for full migration |
| **5. Full Migration** | Batched migration with validation checkpoints every 5,000 records | Reconciliation reports; mBOM explosion comparisons | Real-time batch monitoring in Shared Lens; exception handling workflow |
| **6. Operation Sequence Validation** | Verify component-to-operation assignments for backflush accuracy (Target ERP System requirement) | Operation sequence audit report | SMEs spot-check operation sequences in Shared Lens; sign off on completeness |

**Key Transformation Rules**

- **Process Plan Lifecycle**: Default to "Released" for active mBOMs; maintain revision history if Legacy ERP System supports versioning
- **Operation Sequence Numbering**: Standardize to increments of 10 (Op 10, 20, 30…) per Parent Company standard
- **Component "Consumed At" Assignment**: Map Legacy ERP System component-operation links to Target PLM MPP "Consumed At Operation" field (addresses Big Rock #2)
- **Configured mBOMs**: Create mBOM templates for configurable products; instance-specific mBOMs generated post-go-live via CPQ integration (optional future scope)
- **Routing Data**: If Legacy ERP System contains routing/resource data, customer decision required (Week 4): migrate to Target PLM MPP vs. create in Target ERP System only

**Data Quality Gates**

- **mBOM-eBOM alignment**: Flag variances where mBOM components don't exist in eBOM (expected for packaging, consumables; reviewed in Shared Lens)
- **Operation sequence completeness**: All backflush components must have valid "Consumed At" operation number
- **Operation numbering**: Enforce increment-of-10 standard; flag exceptions for SME review
- **Effectivity conflicts**: No overlapping effectivity dates for same part + process plan combination

**Estimated Effort**: 400 hours (10 weeks elapsed, 2 FTE)

---

### 4.4 CAD Documents (70,000 unique files; 860,000 with history; 2.5TB)

**Scope**: Transform and migrate all Mechanical (SolidWorks, AutoCAD) and Electrical (Altium) CAD files from Legacy PDM System and network folders to Target PLM

**Complexity Assessment**: **Very High**
- **Volume**: 2.5TB of data requiring network transfer and storage provisioning
- **Version History**: 860k total files suggests ~12 versions per document average
- **Multiple CAD Systems**: SolidWorks, AutoCAD, Altium require different extraction methodologies
- **File Relationships**: CAD assemblies reference part files; Altium PCB references schematic/libraries

**Shared Lens Integration**:
- Week 4: Legacy PDM System folder taxonomy review in Shared Lens → SMEs annotate which folders are active vs. obsolete
- Week 5-6: CAD metadata extraction displayed; SMEs validate custom properties and lifecycle mappings
- Customer decision (Week 4): Selective history migration (latest + released only) vs. full version history (+40% volume reduction if selective)

**Migration Approach**

| Phase | Activity | Deliverable | Shared Lens Role |
|-------|----------|-------------|-----------------|
| **1. Legacy PDM System Vault Analysis** | Inventory all CAD files by type, version count, vault structure, metadata fields | Vault analysis report with folder taxonomy and metadata catalog | Report visible in Shared Lens; SMEs annotate folder purposes, identify obsolete areas |
| **2. Infrastructure Preparation** | Provision Target PLM vault storage; establish high-bandwidth data transfer pipeline | Storage allocation; network configuration for bulk transfer | Infrastructure status tracked in Shared Lens project dashboard |
| **3. Metadata Extraction** | Extract Legacy PDM System metadata (author, check-in date, description, custom properties) for all file versions | Metadata staging tables aligned with Target PLM Document schema | Extracted metadata displayed in Shared Lens; SMEs validate custom property mappings |
| **4. File Relationship Mapping** | Build parent-child maps for SolidWorks assemblies; Altium project structures | Relationship matrices (e.g., assembly A references parts B, C, D) | Relationship maps visualized in Shared Lens; SMEs validate assembly trees |
| **5. Incremental Migration** | Phased file upload in batches of 50GB with checksum validation | Transfer logs with file counts, sizes, checksums | Batch progress visible in Shared Lens; checksum failures routed to exception queue |
| **6. Target PLM Document Creation** | Create Target PLM CAD Document items with file attachments, metadata, and relationships | Target PLM Document structures with full version history | NTD maintains CAD UID → Target PLM Document linkage; traceability in Shared Lens |
| **7. CAD Integration Testing** | Verify CAD viewer functionality, check-in/check-out workflows, BOM extraction | UAT sign-off for SolidWorks, AutoCAD, Altium integrations | SMEs perform UAT; results logged in Shared Lens |

**Key Transformation Rules**

- **Document Numbering**: Preserve original Legacy PDM System document numbers; map to Target PLM Document item number (collision detection in NTD)
- **Version Sequencing**: Map Legacy PDM System versions to Target PLM Document generations (Gen A, B, C…)
- **Lifecycle Mapping**: Legacy PDM System states (Work In Progress, Released, Obsolete) → Target PLM Document lifecycle states
- **CAD File Naming**: Preserve original file names; store Legacy PDM System path in Target PLM custom property for traceability
- **Related Documents**: Maintain assembly-to-part relationships; Altium project-to-schematic-to-PCB linkages (tracked in NTD)
- **Selective History Migration**: Customer decision (Week 4): Migrate full version history for active/released documents; latest-only for obsolete documents (reduces volume ~40%)

**File Type Handling**

| CAD System | File Types | Target PLM CAD Integration | Notes |
|------------|------------|---------------------|-------|
| SolidWorks | .SLDPRT, .SLDASM, .SLDDRW | Native SolidWorks connector | Maintain assembly references; extract custom properties |
| AutoCAD | .DWG, .DXF | AutoCAD viewer integration | 2D drawings; layer preservation |
| Altium | .PrjPCB, .SchDoc, .PcbDoc | Altium vault connector | Electrical BOMs; Gerber file associations |

**Data Quality Gates**

- **File integrity**: 100% checksum match between source and Target PLM vault (validated via NTD; exceptions in Shared Lens)
- **No broken references**: All assembly references resolve to migrated part files
- **Metadata completeness**: Title, revision, author populated for all documents
- **Virus scan**: All files scanned before Target PLM vault upload

**Storage Optimization Strategy**

- **Deduplication**: Identify and eliminate duplicate CAD files across network folders (NTD tracks duplicate UIDs)
- **Compression**: Utilize Target PLM vault compression for legacy/inactive document versions
- **Archival**: Migrate obsolete documents to Target PLM archive tier (lower-cost storage)
- **Estimated Final Size**: 2.0TB after deduplication and selective history migration

**Estimated Effort**: 600 hours (12 weeks elapsed, 3 FTE) + 4 weeks for network transfer/infrastructure

---

### 4.5 Suppliers (250 records)

**Scope**: Migrate all approved suppliers from Legacy ERP System to Target PLM

**Complexity Assessment**: **Low**

**Shared Lens Integration**:
- Week 8: Supplier list displayed in Shared Lens
- SMEs review for duplicates and merge candidates (e.g., "ACME CO" vs. "ACME Company")
- Deduplication rules approved via Shared Lens workflow

**Migration Approach**

- **Data Extraction**: Export Legacy ERP System supplier table (name, address, contact, status, qualifications)
- **Mapping**: Align to Target PLM Supplier item type; augment with Parent Company-standard fields (DUNS number, payment terms, quality rating)
- **Deduplication**: Merge duplicate supplier records (common in legacy systems); Shared Lens used for SME review and approval of merges
- **Validation**: Cross-reference with Parent Company standard products supplier master to identify existing global suppliers (avoid re-creating)
- **Load**: Batch load with workflow to set lifecycle state (Active/Inactive)

**Data Quality Gates**
- Unique supplier name + address combination (enforced by NTD; violations reviewed in Shared Lens)
- Valid country codes (ISO 3166-1)
- Active suppliers must have primary contact information

**Estimated Effort**: 40 hours (1 week, 1 FTE)

---

### 4.6 Manufacturers (1,300 records)

**Scope**: Migrate all approved manufacturers from Legacy ERP System to Target PLM

**Complexity Assessment**: **Low to Moderate**

**Shared Lens Integration**:
- Same as Suppliers (deduplication workflow)
- Additional: Link Manufacturers to Manufacturer Part Numbers (relationship validation in Shared Lens)

**Migration Approach**
- Similar to Suppliers, with additional complexity of linking Manufacturers to Manufacturer Part Numbers
- May overlap with Supplier list (same company acts as both manufacturer and supplier; NTD tracks both roles)
- Requires Compliance System synchronization for environmental compliance data (Big Rock #4)

**Estimated Effort**: 60 hours (1.5 weeks, 1 FTE)

---

### 4.7 Manufacturer Part Numbers (19,000 records)

**Scope**: Migrate all Manufacturer Part Numbers (MPNs) from Legacy ERP System to Target PLM and Compliance System

**Complexity Assessment**: **Moderate**

**Shared Lens Integration**:
- Week 9: MPN list displayed with linkages to internal part numbers
- SMEs validate MPN → Part → Manufacturer relationships
- Compliance System synchronization status tracked in Shared Lens

**Migration Approach**

- **Extraction**: Pull MPN data from Legacy ERP System with linkages to internal part numbers
- **Compliance System Integration**: Synchronize MPNs to Compliance System for environmental data (RoHS, REACH, Conflict Minerals) (Big Rock #4)
- **Manufacturer Linkage**: Establish MPN → Manufacturer relationships in Target PLM (validated in NTD)
- **Compliance Data**: Import Compliance System compliance declarations for each MPN

**Data Quality Gates**
- Every MPN must link to valid Manufacturer record (enforced by NTD)
- MPN format validation (no special characters causing system issues)
- Compliance System synchronization confirmation for purchased parts (status visible in Shared Lens)

**Estimated Effort**: 120 hours (3 weeks, 1 FTE)

---

### 4.8 Approved Manufacturer List - AML (11,000 records)

**Scope**: Transform and migrate all AML data assigned to Parts from Legacy ERP System to Target PLM

**Complexity Assessment**: **Moderate**

**Shared Lens Integration**:
- Week 10: AML relationships displayed (Part → AML → MPN)
- SMEs validate primary/secondary manufacturer preferences
- Shared Lens tracks approval status

**Migration Approach**

- **Relationship Building**: Create Target PLM Part → AML → MPN relationships (tracked in NTD)
- **Preference Ranking**: Migrate primary/secondary/tertiary manufacturer preferences
- **Effectivity**: Capture date-based or configuration-based AML effectivity

**Data Quality Gates**
- Every AML entry must reference valid Part and MPN (enforced by NTD)
- No duplicate AML entries for same part-manufacturer combination
- Primary manufacturer designated for all purchased parts

**Estimated Effort**: 100 hours (2.5 weeks, 1 FTE)

---

### 4.9 Documents / Files (2,000 baseline estimation)

**Scope**: Migrate all Engineering Documents/Files from Business Unit ecosystem to Target PLM (excluding CAD, which is covered in 4.4)

**Document Types**
- Specifications
- Test reports
- Compliance certificates (Machinery Directive files for Big Rock #4)
- Procedures
- Technical notes
- Regulatory documentation

**Shared Lens Integration**:
- Week 20: Network folder inventory displayed in Shared Lens
- SMEs classify documents by type (Specification, Test Report, Certificate, etc.)
- Document-to-Part linkages defined collaboratively

**Migration Approach**

- **Discovery**: Survey network folders and Legacy ERP System document repositories
- **Classification**: Map to Target PLM Document types (Specification, Test Report, Certificate, etc.) via Shared Lens collaborative classification
- **Metadata Extraction**: Capture file metadata (author, date, description) from file properties or Legacy ERP System
- **File Upload**: Batch upload to Target PLM vault with Document item creation
- **Linking**: Associate documents to related Parts, BOMs, or Change Orders (relationships tracked in NTD)

**Estimated Effort**: 80 hours (2 weeks, 1 FTE)

---

### 4.10 Users / Identities (180 users)

**Scope**: Structure new user accounts and map identity groups

**Shared Lens Integration**:
- Week 24: User role mapping displayed in Shared Lens
- Parent Company IT and Business Unit IT validate role assignments
- Training group organization captured in Shared Lens

**Migration Approach**

- **Role Mapping**: Map Legacy ERP System user roles → Target PLM identities (Engineer, Manufacturing Planner, Quality, Viewer)
- **AD Integration**: Synchronize with Parent Company Active Directory (if applicable)
- **Permissions**: Configure Target PLM permissions aligned with Parent Company global PLM standards
- **Training Groups**: Organize users by role for targeted training delivery (groups defined in Shared Lens)

**Estimated Effort**: 40 hours (1 week, 1 FTE)

---

## 5. Addressing the Four Big Rock Requirements

The RFP identified four key requirements that differentiate Business Unit's configure-to-order business model from Parent Company's standard product division. The **Shared Lens approach directly addresses** these requirements by providing collaborative workflows for defining complex business logic.

### 5.1 Big Rock #1: Product Configurability Definition & Configured Item Creation

**Requirement Summary**:
- Establish process/solution for Product engineering and marketing to collaborate on, approve, and maintain configurability rules
- Create master configured items and BOMs based on customer selection set from CPQ
- Configured products consist of multiple Configured Items (independently orderable)
- Items are "made to stock" and reworked/reconfigured per specific customer order

**Our firm Approach**:

#### Phase 1: Documentation & Understanding (Base Scope - Included)

1. **Extract CPQ Configuration Rules**: Read-only export of CPQ System backend configurability logic
2. **Document in Shared Lens**: Configuration rules displayed in Shared Lens as reference documentation
3. **Flag Configured Items**: During Parts migration (Week 10-16), parts with CPQ associations flagged in NTD with custom attribute "is_configurable = true"
4. **Migration Strategy**: Migrate **configuration rule templates** as documentation initially (stored as Target PLM Documents linked to Part masters)

**Deliverable**: Configured item templates migrated; instance-specific BOMs **NOT** auto-generated (customer creates manually post-go-live per CPQ output, same as current state)

#### Phase 2: Automated Configured Item Generation (Optional Add-On - Not Included in Base Estimate)

**Scope**: Develop automated workflow to create Target PLM configured items + instance BOMs from CPQ customer selection set

**Shared Lens Role**:
- Collaborative definition of CPQ → Target PLM transformation rules (which CPQ option codes map to which Target PLM part numbers)
- SMEs from Engineering, Marketing, and Manufacturing validate transformation logic in Shared Lens before automation

**Technical Approach**:
1. CPQ exports customer configuration (XML/JSON)
2. Middleware (Our firm Nexus data migration tool) reads configuration
3. Applies transformation rules (defined in Shared Lens, stored in NTD)
4. Creates Target PLM configured item master + instance BOM via Target PLM IOM API
5. Notifies Manufacturing for production release

**Estimated Additional Effort**: +800 hours (+$100,000-$130,000)
**Customer Decision Required**: Week 4 (proceed with optional scope or defer to Phase 2 post-go-live)

---

### 5.2 Big Rock #2: BOM and Routing Sequence Alignment

**Requirement Summary**:
- Establish process/tool for manufacturing planning to align subsets of BOM components to Routing sequences
- Enables mid-build material picking and backflush
- Current Parent Company standard products: BOM and routing independent; all material backflushed at WO completion
- Business Unit needs: Component-to-operation sequence mapping for sequential backflush (Target ERP System requirement)

**Our firm Approach (Included in Base Scope)**:

#### mBOM Migration with "Consumed At Operation" Mapping

1. **Legacy ERP System Schema Analysis** (Week 7):
   - Document how Legacy ERP System links BOM components to operation sequences
   - If Legacy ERP System maintains this data: extract and migrate
   - If Legacy ERP System does NOT maintain this data: establish mapping methodology with Manufacturing Engineering

2. **Shared Lens Collaborative Workflow** (Week 7-9):
   - Manufacturing engineers define component-to-operation rules in Shared Lens
   - Example: "Fasteners consumed at Op 20 (Assembly), fluids consumed at Op 30 (Filling), packaging consumed at Op 40 (Pack/Ship)"
   - Rules captured as transformation logic in NTD

3. **Target PLM MPP Configuration** (Week 8):
   - Configure Target PLM Manufacturing Process Plan (MPP) templates with "Consumed At Operation" field enabled
   - Extend Parent Company standard products MPP standard to support operation sequence alignment

4. **mBOM Migration Execution** (Week 18-28):
   - Transform Legacy ERP System mBOM + operation data → Target PLM MPP with "Consumed At Operation" populated
   - Validation: Manufacturing engineers review operation sequences in Shared Lens; sign off on accuracy

5. **Target ERP System Integration** (Coordination with ERP Track):
   - Target PLM MPP operation numbers align with Target ERP System routing operation numbers
   - Backflush components at specific operations (Op 10, Op 20, etc.) as configured in Target PLM

**Deliverable**: 30,000 process plans migrated with component-to-operation sequence mappings; Target ERP System can consume operation-specific material backflush data

**Estimated Effort**: Included in mBOM migration (400 hours)

---

### 5.3 Big Rock #3: Existing Target ERP Integration Update

**Requirement Summary**:
- In order to support MRP (ERP function), Target PLM EC data (item and BOM revision) needs to be populated in Target ERP ECO module
- Current integration (Nexus middleware) writes item/BOM revisions directly to Target ERP tables (bypasses ECO module)
- Customer states: "Every attempt will be made to circumvent this requirement to leave the current Target PLM-Target ERP integration as-is"
- However, understanding proposed cost is important

**Our firm Approach**:

#### Option A: Leave Current Integration As-Is (Recommended - No Additional Cost)

- Maintain current Nexus middleware Target PLM → Target ERP direct table write
- Defer ECO module integration until Target ERP System implementation phase (3-6 months post-Target PLM per customer statement)
- **Shared Lens Role**: Document current integration architecture in Shared Lens for Target ERP System consultant handoff

**Estimated Additional Effort**: $0 (no change)

#### Option B: Upgrade to Target ERP ECO Module Integration (Optional)

**Scope**: Modify Nexus middleware to write Target PLM EC data (item and BOM revisions) to Target ERP ECO module instead of direct table writes

**Technical Approach**:
1. Analyze Target ERP ECO module API requirements
2. Modify Nexus middleware transformation logic
3. Test ECO creation, approval workflows, and data proliferation to Target ERP tables
4. Parallel run validation (current direct write vs. new ECO write)

**Shared Lens Role**:
- Field mapping review: Target PLM EC fields → Target ERP ECO module fields
- SMEs validate mapping logic in Shared Lens before development

**Estimated Additional Effort**: +400 hours (+$50,000-$65,000)
**Customer Decision Required**: Week 4 (proceed with optional scope or defer)

**Recommendation**: **Defer to Target ERP System implementation phase**. Current integration is working; no compelling business case to change during PLM migration (adds risk and cost with no immediate benefit).

---

### 5.4 Big Rock #4: Regulatory Compliance Reporting

**Requirement Summary**:
- Relate and present Product data relevant to Regulatory Compliance inquiry defense per serial number
- Provide Where-Used search functionality: component revisions → As Built BOMs → serial number
- Business Unit Products governed by Machinery Directive (EU regulatory framework requiring sufficient Product history to recreate a given serial number)

**Our firm Approach**:

#### Phase 1: Migration of Compliance-Relevant Data (Included in Base Scope)

1. **Manufacturer Part Numbers + Compliance System Integration** (Week 9-11):
   - Migrate 19,000 MPNs to Target PLM
   - Synchronize MPNs to Compliance System for environmental data (RoHS, REACH, Conflict Minerals)
   - Compliance declarations linked to Target PLM Part masters
   - **Shared Lens Role**: MPN-to-Part-to-Compliance linkage validation by Quality/Compliance SMEs

2. **Compliance Documents Migration** (Week 20-24):
   - Migrate Machinery Directive files (test reports, compliance certificates, declarations of conformity)
   - Link compliance documents to Parts, BOMs, or serial number records (if Legacy ERP System maintains serial number traceability)
   - **Shared Lens Role**: Compliance team classifies documents and validates linkages

3. **As-Built BOM Migration** (Discovery Required - May be Additional Scope):
   - **Customer clarification needed** (Week 1): Does Legacy ERP System contain historical as-built BOM data per serial number?
   - If YES: Scope additional migration effort to capture serial number → as-built BOM → component revision traceability
   - If NO: Recommend implementing Target PLM Serial Number Effectivity for future production (not a migration activity)

**Estimated Effort for Phase 1**: Included in base scope (MPN migration 120 hours + Document migration 80 hours = 200 hours total)

#### Phase 2: As-Built BOM Migration (Optional - If Data Exists in Legacy ERP System)

**Scope**: Migrate historical serial number traceability data from Legacy ERP System to Target PLM

**Approach**:
1. **Discovery** (Week 2): Analyze Legacy ERP System schema for serial number tables and as-built BOM relationships
2. **Data Model**: Design Target PLM Serial Number item type with relationships to as-built BOM snapshots
3. **Migration**: Extract Legacy ERP System serial number records + as-built BOMs → migrate to Target PLM
4. **Where-Used Search**: Configure Target PLM search to enable "component revision → as-built BOMs → serial numbers" query

**Shared Lens Role**:
- Quality/Compliance SMEs validate serial number data accuracy
- Review sample serial number traceability reports in Shared Lens before full migration

**Estimated Additional Effort**: +200-400 hours (+$25,000-$50,000) depending on Legacy ERP System data structure complexity
**Customer Decision Required**: Week 2 (after Legacy ERP System schema discovery)

#### Phase 3: Compliance Reporting Interface (Optional - Not Included in Base Estimate)

**Scope**: Build user-friendly compliance reporting dashboard in Target PLM

**Features**:
- Input serial number → display full product configuration, BOM, component revisions, compliance declarations
- Generate Machinery Directive technical file (automated report compilation)
- Audit trail of all changes to parts/BOMs affecting a given serial number

**Shared Lens Role**: Compliance team defines report requirements collaboratively in Shared Lens

**Estimated Additional Effort**: +160 hours (+$20,000-$25,000)
**Customer Decision Required**: Week 4

---

## 6. Data Quality & Governance

### 6.1 Data Quality Framework

Traditional migration data quality is a **one-time assessment**. The Shared Lens approach makes data quality a **continuous, collaborative process**.

#### Phase 1: Profiling & Discovery (Weeks 1-6)

For each entity, analyze:
- **Completeness**: % of required fields populated
- **Accuracy**: Sample validation against source documents
- **Consistency**: Cross-system reconciliation (Legacy PDM System vs. Legacy ERP System vs. CPQ)
- **Uniqueness**: Duplicate detection
- **Referential Integrity**: Orphaned records, broken foreign keys
- **Conformity**: Data format compliance (dates, UOMs, phone numbers)

**Shared Lens Role**:
- Data Quality Scorecard published in Shared Lens dashboard
- Heat map (Red/Yellow/Green) by entity and dimension
- SMEs can drill into specific data quality issues and comment

**Deliverable**: Data Quality Scorecard with SME-validated issue list

#### Phase 2: Cleansing Strategy (Weeks 6-12)

**Automated Cleansing** (no SME review required):
- Trim leading/trailing spaces
- Standardize case (Title Case for names, UPPER for part numbers)
- Convert date formats to ISO 8601
- Normalize UOMs to Target PLM standard list
- Remove special characters causing system errors

**Manual Cleansing** (requires SME review via Shared Lens):
- Resolve duplicate part numbers (merge or renumber) → Shared Lens conflict workflow
- Correct invalid references (supplier IDs, manufacturer links) → Shared Lens exception queue
- Populate missing critical fields (descriptions, UOMs) → Shared Lens data entry interface
- Validate configured item structures with Engineering SMEs → Shared Lens approval workflow

**Customer Responsibilities** (facilitated by Shared Lens):
- Provide subject matter experts for data validation workshops (Shared Lens is the workshop platform)
- Approve cleansing rules (via Shared Lens voting mechanism)
- Make business decisions on duplicate resolution (tiebreaker SME in Shared Lens)
- Sign off on data quality reports before migration execution (electronic sign-off in Shared Lens)

#### Phase 3: Validation & Reconciliation (Weeks 26-30)

**Pre-Migration Validation**:
- Row count reconciliation (source vs. NTD staging database)
- Sample record inspection (100% for master data; 10% for transactional)
- Relationship integrity checks (all foreign keys resolve)
- **Shared Lens displays validation results**; SMEs review and approve

**Post-Migration Validation**:
- Row count reconciliation (NTD vs. Target PLM)
- Full BOM explosion comparisons (Legacy ERP System vs. Target PLM indented BOMs)
- CAD file checksum verification (NTD tracks checksums)
- User acceptance testing with Engineering and Manufacturing teams (UAT results logged in Shared Lens)

**Acceptance Criteria**:
- **99.5% data accuracy** (validated through statistical sampling; results in Shared Lens)
- **100% critical field population** (part number, description, UOM, lifecycle)
- **Zero broken relationships** (all BOMs, AMLs, document links resolve; enforced by NTD)
- **100% file integrity** (checksums match for all CAD documents; validated by NTD)

### 6.2 Enterprise Attribute Registry

The **Shared Lens platform** implements a full **Enterprise Attribute Registry (EAR)** based on the architecture defined in SharedLens-Requirements.md.

#### EAR Database Schema (Implemented in Vercel Postgres)

**Table 1: Attribute_Master**
- Attribute_ID, Attribute_Name, Business_Definition, Data_Type, Unit_of_Measure, Format_Rules, Value_Domain, Is_Required, Attribute_Group_ID (FK), Attribute_Status, Effective_Date, Obsolete_Date, Created_By, Last_Updated, Version, Definition_Source (enum: Legacy_System, Engineer_Defined, Parent Company_Standard)

**Table 2: Attribute_Groups**
- Group_ID (UUID, primary key), Group_Name (e.g., "Material Properties", "Dimensional", "Performance", "Regulatory", "Cost"), Group_Description, Parent_Group_ID (FK, enables hierarchical grouping), Display_Order, Created_By, Created_Date, Is_Active

**Table 3: Attribute_Aliases**
- Alias_ID (UUID, primary key), Attribute_ID (FK to Attribute_Master), Alias_Name (e.g., "Part Number" alias for "item_number"), Alias_Source (enum: Legacy ERP System, Legacy PDM System, Legacy_Terminology, Industry_Standard), Is_Primary_Alias (boolean), Created_By, Created_Date

**Table 4: Attribute_Governance**
- Attribute_ID, Business_Domain, Attribute_Owner, Data_Steward, Consumer_Systems, Source_System_of_Truth, Refresh_Frequency, Data_Quality_Rule_ID, Governance_Notes

**Table 5: Attribute_System_Map**
- Attribute_ID, System_Name, Table_Name, Field_Name, Transformation_Rule, Direction, Last_Sync_Date, Lineage_ID

**Table 6: Attribute_Data_Entries**
- Entry_ID (UUID, primary key), Part_UID (FK to NTD_Part), Attribute_ID (FK to Attribute_Master), Attribute_Value (variant type), Unit_of_Measure, Data_Source (enum: Document, Drawing, Datasheet, CAD_File, Manual_Entry), Document_Reference (file path or document ID), Entered_By (FK to Users), Entry_Date, Validated_By (FK to Users, engineer who validated), Validation_Date, Validation_Status (enum: Pending, Approved, Rejected, Needs_Clarification), Validation_Comments

**Table 7: Value_Domain**
- Domain_ID, Attribute_ID, Allowed_Value, Display_Label, Sort_Order, Effective_Date, Is_Default

**Table 8: BOM_Structure_Rules**
- Rule_ID (UUID, primary key), Rule_Name (e.g., "Raw Materials at Bottom"), Rule_Type (enum: Level_Assignment, Sorting, Sequence, Effectivity), Condition (e.g., "item_type = 'Raw Material'"), Action (e.g., "Set BOM level = 99"), Attribute_ID (FK, attribute used in condition), Priority (integer, for rule execution order), Is_Active, Created_By, Created_Date, Last_Modified

**Table 9: Data_Quality_Rules**
- Rule_ID, Rule_Name, Severity, Applicable_Attributes, Check_Method, Threshold, Notification_Group, Last_Reviewed

**Table 10: Data_Lineage**
- Lineage_ID, Source_System, Target_System, Transformation, Owner, Verified_On

**Table 11: Attribute_Audit_Log**
- Audit_ID, Attribute_ID, Change_Type, Changed_By, Change_Date, Old_Value, New_Value

#### EAR Use Cases

1. **Attribute Definition & Grouping**:
   - Engineers create new attributes via Shared Lens; stored in Attribute_Master with Definition_Source = 'Engineer_Defined'
   - Engineers organize attributes into groups (Attribute_Groups table); groups displayed hierarchically in Shared Lens
   - Example: "Material Properties" group contains "Material Type", "Density", "Corrosion Resistance Rating"
   - Groups drive classification development: parts sharing attribute groups cluster together

2. **Alias Management**:
   - Engineers define aliases in Shared Lens; stored in Attribute_Aliases table
   - Search functionality: user searches "Part Number" → finds Attribute_Master.item_number + all aliases ("Item Number", "Component ID", etc.)
   - Legacy terminology preserved: users accustomed to Legacy ERP System terms can still find data in Target PLM
   - Cross-system translation: "Legacy ERP System.PART_NO" = "Target PLM.item_number" = alias "Part Number"

3. **Data Enrichment & Validation**:
   - Data team extracts values from drawings/documents; enters in Attribute_Data_Entries table via Shared Lens data entry interface
   - Validation workflow: Engineer reviews entry → approves/rejects/requests clarification → Validation_Status updated
   - Traceability: Each attribute value links to Document_Reference (source drawing or datasheet)
   - Quality assurance: Only "Approved" entries migrate to Target PLM; "Rejected" entries flagged for correction

4. **BOM Structure Optimization**:
   - Engineers define BOM rules in Shared Lens; stored in BOM_Structure_Rules table
   - Transformation engine applies rules during mBOM migration
   - Example rule execution: Query NTD_Part where item_type='Raw Material' → apply Action "Set part_bom_level=99" → raw materials automatically placed at bottom of BOM
   - Rules versioned and audited; changes tracked in Attribute_Audit_Log

5. **Migration Mapping**:
   - Every Legacy ERP System field → Target PLM property mapping is an entry in Attribute_System_Map
   - Transformation rules (e.g., "Convert EUR to USD; round to 2 decimals") stored in Transformation_Rule column
   - SMEs approve mappings via Shared Lens; approval status stored in Attribute_Master.Attribute_Status

6. **Post-Migration Governance**:
   - New attribute requests submitted via Shared Lens
   - Data Governance Workgroup reviews and approves in Shared Lens
   - EAR becomes single source of truth for all enterprise attributes across Target PLM, Target ERP System, Compliance System, etc.
   - Ongoing data enrichment: Data team continues populating attribute values for new parts post-go-live

7. **Data Lineage**:
   - Full traceability: Legacy ERP System.PART_NO → NTD.part_item_number → Target PLM.Part.item_number
   - Attribute value lineage: Drawing X (Document_Reference) → Attribute_Data_Entries → NTD_Part → Target PLM Part
   - Audit trail: Who defined the attribute, who entered the value, who validated it, who changed the mapping (stored in Attribute_Audit_Log)

### 6.3 Shared Data Governance Council

**Purpose**: Resolve cross-system conflicts, approve transformation rules, make binding decisions on data ownership (especially important for PLM-ERP alignment)

**Members**:
- Parent Company PLM Program Manager (Chair)
- Business Unit Engineering Director
- Business Unit Manufacturing Engineering Manager
- Business Unit Quality Manager
- Parent Company IT PLM Lead
- Target ERP System Implementation Lead (from ERP track)
- Our firm Project Lead

**Meeting Cadence**: Bi-weekly during migration (Weeks 1-30); monthly post-go-live

**Collaboration Tool**: **Shared Lens platform**
- Pre-meeting: Council members review exception queue in Shared Lens
- Meeting: Screen-share Shared Lens; discuss conflicts; vote on resolutions
- Post-meeting: Decisions logged in Shared Lens; transformation rules updated

**Decision Authority**: Majority vote; Chair (PLM Program Manager) has tiebreaker authority

---

## 7. Technical Architecture: Normalized Taxonomy Dictionaries

### 7.1 The NTD Concept

The **Normalized Taxonomy Dictionary (NTD)** is Our firm's proprietary intermediate data model that serves as the "common language of exchange" for complex multi-source, multi-target migrations.

#### Why NTD is Necessary for Business Unit Migration

**Problem**: Business Unit has:
- **3 primary source systems** (Legacy ERP System, Legacy PDM System, network folders)
- **3 target systems** (Target PLM, Compliance System, Target ERP System future)
- **Complex data relationships** (e.g., CAD file in network folder + metadata in Legacy PDM System + part data in Legacy ERP System = single unified Part + CAD Document in Target PLM)
- **Data conflicts** (e.g., same part number exists in Legacy ERP System and Legacy PDM System with different metadata)
- **Duplicate entities** (e.g., same supplier in Legacy ERP System and Legacy PDM System with slightly different names)

**Traditional ETL Approach**: Build N×M point-to-point integrations (3 sources × 3 targets = 9 integration scripts). Each script duplicates transformation logic. No centralized data quality or relationship management.

**NTD Approach**: Build N+M integrations (3 source connectors + 3 target connectors = 6 integration scripts). All transformation logic centralized in NTD. Relationships, duplicates, and conflicts resolved once in NTD, then propagate cleanly to all targets.

### 7.2 NTD Data Model

The NTD is implemented as a **PostgreSQL database** (Vercel Postgres) with the following core tables:

#### Core Entity Tables

1. **NTD_EngineeringChange**
   - NTD_EC_UID (UUID, primary key)
   - NTD_EC_Number (string)
   - NTD_EC_Description (text)
   - NTD_EC_Lifecycle (string)
   - source_system (enum: Legacy ERP System, Legacy PDM System, Manual)
   - source_system_id (string, legacy ID for traceability)
   - created_date, modified_date
   - migration_status (enum: Staged, Validated, Approved, Migrated, Error)

2. **NTD_Part**
   - NTD_part_UID (UUID)
   - NTD_part_item_number (string)
   - NTD_part_name (string)
   - NTD_part_major_rev (string)
   - NTD_part_description (text)
   - NTD_part_uom (string)
   - NTD_part_lifecycle (string)
   - NTD_part_make_buy (enum: Make, Buy)
   - NTD_part_is_configurable (boolean)
   - source_system, source_system_id, created_date, modified_date, migration_status

3. **NTD_Document**
   - NTD_document_UID (UUID)
   - NTD_document_item_number (string)
   - NTD_document_name (string)
   - NTD_document_major_rev (string)
   - NTD_document_type (enum: Specification, Test Report, Certificate, Procedure)
   - source_system, source_system_id, file_path, created_date, modified_date, migration_status

4. **NTD_CAD**
   - NTD_CAD_UID (UUID)
   - NTD_CAD_item_number (string)
   - NTD_CAD_name (string)
   - NTD_CAD_major_rev (string)
   - NTD_CAD_file_type (enum: SLDPRT, SLDASM, SLDDRW, DWG, DXF, PrjPCB)
   - NTD_CAD_file_path (string)
   - NTD_CAD_checksum (string, SHA-256)
   - Legacy PDM System_vault_id, Legacy PDM System_version, source_system, created_date, modified_date, migration_status

5. **NTD_Supplier**
   - NTD_supplier_UID (UUID)
   - NTD_supplier_name (string)
   - NTD_supplier_address (text)
   - NTD_supplier_status (enum: Active, Inactive)
   - source_system, source_system_id, created_date, modified_date, migration_status

6. **NTD_Manufacturer**
   - NTD_manufacturer_UID (UUID)
   - NTD_manufacturer_name (string)
   - source_system, source_system_id, created_date, modified_date, migration_status

7. **NTD_ManufacturerPart**
   - NTD_mfg_part_UID (UUID)
   - NTD_mfg_part_number (string)
   - NTD_manufacturer_UID (foreign key to NTD_Manufacturer)
   - assent_compliance_status (enum: Compliant, Non-Compliant, Pending)
   - source_system, source_system_id, created_date, modified_date, migration_status

#### Relationship Tables

8. **NTD_PartBOM**
   - NTD_part_bom_UID (UUID)
   - NTD_part_bom_source_UID (foreign key to NTD_Part, parent part)
   - NTD_part_bom_related_UID (foreign key to NTD_Part, child part)
   - NTD_part_bom_quantity (decimal)
   - NTD_part_bom_level (integer, BOM level)
   - NTD_part_bom_refdes (string, reference designator)
   - NTD_part_bom_find_number (string)
   - NTD_part_bom_consumed_at_operation (string, for Big Rock #2)
   - source_system, source_system_id, created_date, migration_status

9. **NTD_AML**
   - NTD_aml_UID (UUID)
   - NTD_part_UID (foreign key to NTD_Part)
   - NTD_mfg_part_UID (foreign key to NTD_ManufacturerPart)
   - NTD_aml_preference (enum: Primary, Secondary, Tertiary)
   - source_system, source_system_id, created_date, migration_status

10. **NTD_Part_CAD_Relationship**
    - NTD_part_UID (foreign key to NTD_Part)
    - NTD_CAD_UID (foreign key to NTD_CAD)
    - relationship_type (enum: Defined By, Referenced By)

#### Metadata & Audit Tables

11. **NTD_Migration_Batch**
    - batch_id (UUID)
    - entity_type (enum: Part, CAD, BOM, Supplier, etc.)
    - batch_number (integer)
    - record_count (integer)
    - start_time, end_time
    - status (enum: In Progress, Completed, Failed)
    - error_log (text)

12. **NTD_Transformation_Log**
    - log_id (UUID)
    - NTD_entity_UID (UUID, references any NTD entity)
    - transformation_rule (string, e.g., "normalize_uom")
    - input_value (string)
    - output_value (string)
    - timestamp

### 7.3 NTD Operations & Workflows

#### Operation 1: Extract from Source Systems

**Example: Legacy PDM System Part Extraction**

```sql
-- Pseudo-code for Legacy PDM System API extraction
FOR each part in Legacy PDM System.Parts:
    INSERT INTO NTD_Part (
        NTD_part_UID = generate_uuid(),
        NTD_part_item_number = Legacy PDM System.part.item_number,
        NTD_part_name = Legacy PDM System.part.name,
        NTD_part_major_rev = Legacy PDM System.part.major_rev,
        source_system = 'Legacy PDM System',
        source_system_id = Legacy PDM System.part.part_UID,
        migration_status = 'Staged'
    )
```

**Shared Lens Role**: Extracted parts displayed in Shared Lens "Staged Data" view; SMEs can review samples and flag issues before transformation.

#### Operation 2: Merge Duplicate Entities

**Example: Supplier Deduplication**

```sql
-- Identify potential duplicates
SELECT s1.NTD_supplier_UID, s2.NTD_supplier_UID, s1.NTD_supplier_name, s2.NTD_supplier_name
FROM NTD_Supplier s1
JOIN NTD_Supplier s2 ON similarity(s1.NTD_supplier_name, s2.NTD_supplier_name) > 0.85
WHERE s1.NTD_supplier_UID < s2.NTD_supplier_UID

-- Fuzzy matching identifies "ACME CO" (Legacy ERP System) and "ACME Company" (Legacy PDM System)
-- Flag for SME review in Shared Lens
```

**Shared Lens Workflow**:
1. Duplicate candidates displayed side-by-side in Shared Lens
2. SME reviews and selects: Merge (keep UID #1), Keep Both (not duplicates), or Manually Edit
3. If Merge selected: NTD updates all foreign key references to use UID #1; deletes UID #2
4. Audit log captures merge decision

#### Operation 3: Transform to Target Format

**Example: Part Transformation for Target PLM**

```sql
-- Transform NTD_Part → Target PLM Part format
-- Apply transformation rules defined in Shared Lens and stored in Attribute_System_Map

SELECT
    NTD_part_UID,
    NTD_part_item_number AS part_item_number,  -- Direct mapping
    NTD_part_name AS part_name,                -- Direct mapping
    CASE
        WHEN NTD_part_lifecycle = 'Active' THEN 'Released'
        WHEN NTD_part_lifecycle = 'Inactive' THEN 'Obsolete'
    END AS part_lifecycle,                     -- Value domain mapping
    COALESCE(NTD_part_uom, 'EA') AS part_uom,  -- Default value if NULL
    'Business Unit' AS part_source                      -- Derived value
FROM NTD_Part
WHERE migration_status = 'Approved'
```

**Shared Lens Role**: Transformation rules defined collaboratively in Shared Lens; auto-generated SQL scripts pull rules from Enterprise Attribute Registry.

#### Operation 4: Load to Target System

**Example: Target PLM Part Load via IOM API**

```python
# Pseudo-code for Target PLM IOM API load
for part in NTD.query("SELECT * FROM NTD_Part WHERE migration_status = 'Approved'"):
    aras_part = {
        "item_number": part.NTD_part_item_number,
        "name": part.NTD_part_name,
        "lifecycle": part.transformed_lifecycle,
        "classification": part.aras_classification,  # From Shared Lens mapping
        "legacy_system_id": part.source_system_id   # Traceability
    }
    response = aras_iom.create_part(aras_part)
    if response.success:
        NTD.update(part.NTD_part_UID, migration_status='Migrated', aras_item_id=response.item_id)
    else:
        NTD.update(part.NTD_part_UID, migration_status='Error', error_log=response.error_message)
        # Error routed to Shared Lens exception queue for SME review
```

**Shared Lens Role**: Migration batch status visible in real-time dashboard; errors routed to exception queue with full context (original data, transformation applied, error message).

### 7.4 NTD Benefits Summary

| Challenge | Traditional ETL | NTD + Shared Lens |
|-----------|----------------|-------------------|
| **Multiple Sources** | Build separate extraction for each source; duplicate transformation logic | Extract once to NTD; centralized transformation |
| **Data Conflicts** | Hard-coded resolution rules in scripts; no transparency | Conflicts flagged in NTD; SMEs resolve via Shared Lens workflow |
| **Duplicates** | Manual spreadsheet review; error-prone | Automated fuzzy matching; SME approval via Shared Lens |
| **Relationship Integrity** | Enforce in target system; errors discovered late | Enforce in NTD; violations caught before load |
| **Traceability** | Minimal; hard to trace back to source | Full lineage: source_system_id → NTD UID → Target PLM item_id |
| **Auditability** | Logs scattered across scripts | Centralized audit trail in NTD_Transformation_Log and Attribute_Audit_Log |
| **User Visibility** | Black box; users see results only | Transparent; users review staged data, approve transformations, track progress in Shared Lens |

---

## 8. Organizational Change Management & User Adoption

### 8.1 Why OCM Matters for Data Migration

Parent Company correctly identified in the RFP that **"much of the work will surround OCM, training, and data migration."** Poor OCM undermines even the best technical migration:
- Users don't trust the data ("This doesn't look like what I had in Legacy ERP System")
- Users don't adopt the new system ("I'll just keep my own Excel spreadsheet")
- Users don't understand taxonomy changes ("Where did this field go?")

**The Shared Lens approach makes OCM inherent to the migration process**, not a post-migration cleanup activity.

### 8.2 Shared Lens as the OCM Platform

Traditional migration OCM:
1. Consultants migrate data in isolation
2. "Change champions" briefed on what changed
3. Users trained on new system after go-live
4. **Result**: Low buy-in, high resistance

Shared Lens migration OCM:
1. **Users co-create the taxonomy** via Shared Lens collaboration
2. **Users validate the data** before it goes to Target PLM
3. **Users see the transformation logic** transparently
4. **Users become change champions** organically because they helped build it
5. **Result**: High buy-in, high adoption

### 8.3 Stakeholder Engagement Strategy

#### Migration Steering Committee

**Members**: Parent Company PLM Program Manager, Business Unit Engineering Director, IT Director, Our firm Project Lead
**Cadence**: Bi-weekly
**Purpose**: Review progress, approve exception handling, resolve escalations
**Tool**: Shared Lens executive dashboard (progress metrics, data quality scorecard, risk register)

#### Data Quality Workgroup

**Members**: Engineering SMEs (mechanical, electrical), Manufacturing Engineering, Quality, IT
**Cadence**: Weekly during cleansing phase (Weeks 6-26)
**Purpose**: Validate data transformations, approve cleansing rules, resolve duplicates
**Tool**: Shared Lens collaborative review interface

#### Change Champion Network

**Members**: Power users from Engineering, Manufacturing, Quality (1 per department, ~10 total)
**Cadence**: Weekly during migration (Weeks 8-30)
**Activities**:
- Early access to Shared Lens platform (Week 4)
- Help define attribute mappings and classification rules
- Participate in pilot migration validation
- Peer-to-peer training and support for their departments
- Feedback loop to Our firm and Steering Committee

**Recognition**: Change champions acknowledged in final migration documentation; invited to "migration success celebration" event post-go-live.

### 8.4 Communication Plan

| Audience | Message | Channel | Frequency | Shared Lens Role |
|----------|---------|---------|-----------|-----------------|
| **Executive Leadership** | Program milestones, risks, decisions needed | Executive dashboard (Shared Lens), monthly review | Monthly | Shared Lens executive dashboard: real-time migration progress, data quality metrics, risk status |
| **Business Unit Employees** | Migration progress, system cutover dates, training schedule | Email newsletter, town halls | Bi-weekly | Shared Lens "public view" (read-only): transparency into what's being migrated and when |
| **Power Users** | Detailed data validation, UAT participation | Workshops (via Shared Lens), Jira tickets (integrated with Shared Lens) | Weekly | Shared Lens is primary collaboration tool |
| **IT Operations** | Infrastructure readiness, integration testing | Technical syncs, Confluence (linked from Shared Lens) | Weekly | Shared Lens technical dashboard: batch status, error logs, system health |

### 8.5 Training Strategy

Traditional approach: Train users on Target PLM **after** migration is complete.

**Shared Lens approach**: Train users **during** migration by involving them in the process.

#### Migration Team Training (Week 1)

**Audience**: Our firm team + Parent Company IT + Business Unit IT
**Topics**:
- Target PLM System fundamentals
- Migration tooling (NTD, ETL, Target PLM IOM API)
- Data quality methodology
- **Shared Lens platform administration**

#### Change Champion Training (Week 4)

**Audience**: 10 power users
**Topics**:
- Shared Lens navigation and workflows
- How to review staged data and propose mappings
- How to validate pilot migration results
- How to report data quality issues

#### SME Training (Week 5)

**Audience**: 30-40 subject matter experts (Engineering, Manufacturing, Quality)
**Topics**:
- Shared Lens contributor role
- How to participate in collaborative taxonomy development
- How to vote on attribute mappings
- How to resolve conflicts via tiebreaker workflow

#### End User Training (Weeks 28-30)

**Audience**: All 180 Business Unit users
**Format**: Role-based training
- **Engineers**: Target PLM part creation, BOM management, CAD document check-in/check-out, change management
- **Planners**: Manufacturing process plan creation, operation sequences, work order release
- **Viewers**: Search, view-only access, reporting

**Content**:
- "Where did my data go?" mapping guides (Legacy ERP System field → Target PLM field)
- Hands-on labs with **real migrated data** (users work with their own parts/BOMs)
- FAQ knowledge base
- Quick reference cards

**Shared Lens Role**: Training materials link to Shared Lens Data Dictionary (users can look up any field mapping on-demand).

### 8.6 "Where Did My Data Go?" Mapping

One of the biggest OCM challenges post-migration: Users can't find familiar data in the new system.

**Shared Lens Solution**: **Interactive "Where Did My Data Go?" search**

- User types: "Legacy ERP System field PART_NO"
- Shared Lens returns: "Migrated to Target PLM Part.item_number"
- Click for details: Transformation rule, sample before/after values, related fields
- User can comment: "I expected to see this field in Target PLM but it's missing" → routed to exception queue

This tool is available **during migration** (so SMEs can validate mappings) and **post-go-live** (so end users can self-serve).

### 8.7 Post-Go-Live Hypercare

**Duration**: 30 days (Weeks 31-34)

**Approach**:
- Our firm team on-call (email, Jira, Shared Lens support tickets)
- Daily standup with Parent Company IT and Change Champions
- Issue triage: Severity 1 (system down) = immediate response; Severity 2 (data anomaly) = 24-hour response; Severity 3 (enhancement request) = logged for future
- **Shared Lens hypercare dashboard**: Users report issues directly in Shared Lens; Our firm triages and resolves; status visible to all

**Success Metrics**:
- Issue resolution time (target: 90% of Severity 2 issues resolved within 48 hours)
- User satisfaction survey (target: ≥90% satisfied)
- System stability (target: 99% uptime)

---

## 9. Timeline, Work Streams & Resources

### 9.1 Parallel Work Streams

To meet the [Target Completion Date] target, migration activities execute in parallel where dependencies allow:

| Work Stream | Duration | Dependencies | Resources | Key Milestones |
|-------------|----------|--------------|-----------|----------------|
| **WS1: Infrastructure & Tooling** | Weeks 1-4 | None | 1 Architect, 1 DevOps | Week 4: Shared Lens platform live |
| **WS2: Discovery & Profiling** | Weeks 1-6 | None | 2 Data Analysts | Week 6: Data Quality Scorecard |
| **WS3: Shared Lens Deployment** | Weeks 2-4 | WS1 infrastructure ready | 1 Full-Stack Developer | Week 4: Shared Lens platform ready for SME use |
| **WS4: Attribute Definition & Classification** | Weeks 3-7 | WS2 profiling, WS3 Shared Lens | 2 Data Specialists, Engineering SMEs | Week 7: Approved attribute groups, aliases, BOM rules, Data Dictionary v1.0 |
| **WS5: Data Enrichment** | Weeks 4-20 | WS3 Shared Lens, WS4 attributes defined | 2-3 Data Entry Team | Week 20: Attribute values extracted and validated |
| **WS6: Transformation Development** | Weeks 5-12 | WS4 approved mappings | 2 Developers | Week 12: ETL framework complete |
| **WS7: Master Data (Suppliers, Mfrs, MPNs)** | Weeks 8-12 | WS6 pilot complete | 1 Data Specialist | Week 12: Master data migrated |
| **WS8: Parts Migration** | Weeks 10-16 | WS7 complete, WS5 enrichment ongoing | 2 Data Specialists | Week 16: 48,000 parts migrated |
| **WS9: eBOM Migration** | Weeks 14-22 | WS8 pilot complete | 2 Data Specialists, 1 CAD Expert | Week 22: 20,000 eBOMs migrated |
| **WS10: CAD Documents** | Weeks 10-26 | WS1 infrastructure, WS8 parts pilot | 3 Data Specialists | Week 26: 70,000 CAD files migrated |
| **WS11: mBOM/Process Plans** | Weeks 18-28 | WS9 complete | 2 Mfg Engineers, 1 Data Specialist | Week 28: 30,000 mBOMs migrated |
| **WS12: Documents/Files** | Weeks 20-24 | WS10 tooling reuse | 1 Data Specialist | Week 24: 2,000 documents migrated |
| **WS13: Users/Identities** | Weeks 24-26 | AD integration approved | 1 Identity Admin | Week 26: 180 users configured |
| **WS14: Validation & Reconciliation** | Weeks 26-30 | All migrations complete | 2 QA Analysts, SMEs | Week 30: UAT sign-off |
| **WS15: Hypercare** | Weeks 31-34 | Go-live | Full team on-call | Week 34: Hypercare complete |

**Total Elapsed Time**: 34 weeks (~8 months)
**Total Effort**: ~4,720 hours (includes enhanced Shared Lens platform development, attribute definition, and data enrichment)

### 9.2 Critical Path

The critical path runs through:
1. **Infrastructure & Shared Lens Deployment** (Weeks 1-4) - prerequisite for SME collaboration
2. **Discovery & Classification Mapping** (Weeks 1-6) - foundation for all transformations
3. **Parts Migration** (Weeks 10-16) - foundation for BOMs
4. **eBOM Migration** (Weeks 14-22) - prerequisite for mBOM
5. **mBOM Migration** (Weeks 18-28) - most complex, required for Target ERP System integration
6. **Validation** (Weeks 26-30) - gate for production cutover

**Parallel Track (Not on Critical Path)**:
- **CAD Document Migration** (Weeks 10-26): Runs in parallel with Parts/BOMs; large data volume but not blocking

**Risk Mitigation**:
- Early start on Shared Lens platform (Week 2) to ensure readiness for Week 4 workshop
- Incremental CAD file transfers starting Week 10 to avoid last-minute bandwidth bottleneck
- Pilot migrations for each entity type to validate approach before full-scale execution

### 9.3 Resource Plan

**Our firm Team Composition**:

| Role | Allocation | Duration | Responsibilities |
|------|-----------|----------|------------------|
| **Project Manager** | 25% | 34 weeks | Overall coordination, Steering Committee liaison, risk management |
| **Lead Data Architect** | 50% | 30 weeks | NTD design, transformation logic, technical leadership |
| **Shared Lens Developer** | 100% | 12 weeks (Weeks 2-13) | Build Shared Lens platform (Next.js, Vercel Postgres, real-time collaboration features, data entry interface, attribute definition UI) |
| **Data Engineers (2)** | 100% | 28 weeks | ETL development, NTD operations, data extraction/transformation/load |
| **Data Entry Team (2-3)** | 100% | 16 weeks (Weeks 4-20) | Read engineering drawings, datasheets, specifications; extract attribute values; populate data in Shared Lens; flag ambiguous data for engineer review |
| **Data Specialists (3)** | 100% | 24 weeks | Entity migrations, data quality validation, SME coordination |
| **CAD Integration Specialist** | 75% | 16 weeks | Legacy PDM System extraction, CAD file migration, CAD metadata mapping |
| **QA Analysts (2)** | 50% | 8 weeks | Validation, reconciliation, UAT support |

**Customer Resources Required**:

| Role | Commitment | Duration |
|------|-----------|----------|
| **SMEs (Engineering, Mfg, Quality)** | 4 hours/week | Weeks 3-26 (data validation, Shared Lens collaboration) |
| **Change Champions (10 users)** | 8 hours/week | Weeks 4-30 (pilot testing, peer training) |
| **Steering Committee (5 members)** | 2 hours bi-weekly | Weeks 1-34 (governance, decision-making) |
| **Data Governance Workgroup** | 2 hours/week | Weeks 6-26 (approve cleansing rules, resolve exceptions) |
| **Business Unit IT Staff** | 8 hours/week | Weeks 1-6 (Legacy ERP System schema walkthrough, infrastructure setup) |
| **Parent Company IT PLM Lead** | 4 hours/week | Weeks 1-34 (Target PLM configuration coordination, AD integration) |

---

## 10. Risk Mitigation

| Risk | Probability | Impact | Mitigation | Shared Lens Role |
|------|-------------|--------|------------|-----------------|
| **Legacy ERP System database schema undocumented** | High | High | Early discovery phase (Week 1-2); allocate 2 weeks for reverse engineering; engage Business Unit IT staff | Discovery results published in Shared Lens; SMEs annotate tribal knowledge |
| **Data quality below threshold** | Medium | High | Extensive profiling phase (Weeks 1-6); build in 4-week cleansing buffer; customer SME engagement via Shared Lens | Data Quality Scorecard in Shared Lens; SMEs prioritize cleansing efforts collaboratively |
| **Legacy PDM System/Legacy ERP System synchronization gaps** | Medium | Medium | Reconciliation reports (Week 6-7); establish "system of record" rules with customer; escalation path for conflicts | Variance reports in Shared Lens; SMEs establish resolution rules via voting workflow |
| **CAD file transfer exceeds timeline** | Medium | Medium | Incremental transfers starting Week 10; prioritize active documents; archive obsolete documents separately | Transfer progress dashboard in Shared Lens; real-time visibility |
| **Multiple Legacy ERP System instances discovered** | Low | High | Discovery phase survey (Week 1); if confirmed, adjust ROM +20% effort | Document in Shared Lens; immediate Steering Committee escalation |
| **Network bandwidth constraints** | Medium | Low | Provision dedicated WAN link or physical media transfer (hard drives) for 2.5TB CAD data | Infrastructure status tracked in Shared Lens; early warning if transfer rates fall below target |
| **Configured item complexity exceeds estimate** | Medium | Medium | Pilot migration of top 10 configured products early (Week 14); adjust approach based on findings | Configured item pilot results reviewed in Shared Lens; SMEs provide feedback on complexity |
| **Revision history requirements expand** | Low | Medium | Clarify revision migration scope in Week 1; document decision; adjust effort if "all revisions" required (+600 hours) | Customer decision logged in Shared Lens; impact analysis visible to Steering Committee |
| **User adoption resistance** | Medium | High | Shared Lens collaborative approach drives ownership; OCM program with change champions; training; legacy system read-only access post-go-live | Users involved from Week 4; adoption risk inherently mitigated by co-creation approach |
| **Target ERP System track misalignment** | Medium | High | Weekly sync meetings with ERP consultant; shared data governance council; common master data definitions via Enterprise Attribute Registry | EAR accessible to both PLM and ERP teams; Shared Lens as collaboration hub for cross-track issues |
| **SME availability bottleneck** | Medium | Medium | Distribute SME workload via Shared Lens (asynchronous collaboration); escalation to Steering Committee if commitment falls below 4 hours/week | Shared Lens tracks SME contribution metrics; identify bottlenecks early |
| **Shared Lens platform technical issues** | Low | Medium | Vercel provides 99.9% uptime SLA; build on proven technology stack (Next.js, Postgres); thorough UAT (Week 3-4) before SME launch | Platform health monitoring dashboard; Our firm DevOps on-call support |

**Overall Risk Posture**: **Moderate**

The Shared Lens approach **reduces traditional migration risks** (data quality, user adoption, hidden requirements) by making the process transparent and collaborative. New risk introduced: platform technical dependency. Mitigated by using enterprise-grade Vercel infrastructure and proven technology stack.

---

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics

| Metric | Target | Measurement Method | Shared Lens Role |
|--------|--------|-------------------|-----------------|
| **Data Completeness** | ≥99.5% of required fields populated across all entities | Post-migration sampling; automated validation queries | Completeness reports in Shared Lens; SMEs review exceptions |
| **Data Accuracy** | ≥99.5% accuracy validated through statistical sampling | 100% inspection of master data (Suppliers, Manufacturers); 10% sampling of parts/BOMs compared to source | Sample validation results logged in Shared Lens |
| **Referential Integrity** | 100% - zero broken relationships | Automated queries: all BOMs resolve, all AMLs resolve, all Document links resolve | NTD enforces integrity; violations flagged in Shared Lens before load |
| **File Integrity** | 100% - all CAD files match source checksums | SHA-256 checksum comparison for all 70,000 CAD files | NTD tracks checksums; Shared Lens displays checksum validation status |
| **Migration Velocity** | Parts migrated at ≥500/day sustained rate | Daily batch reconciliation reports | Real-time batch status in Shared Lens dashboard |
| **Defect Rate** | <2% records requiring post-migration correction | Hypercare issue tracking (Weeks 31-34) | Issues logged in Shared Lens; defect rate calculated automatically |
| **User Acceptance** | ≥90% UAT test cases passed | UAT test plan execution (Week 29-30) | UAT results logged in Shared Lens; SMEs sign off electronically |
| **SME Participation** | ≥70% of invited SMEs actively contribute to Shared Lens | Contribution metrics tracked in Shared Lens | Dashboard: # of comments, votes, approvals per user; identify non-participants for targeted outreach |

### 11.2 Qualitative Criteria

| Criterion | Success Indicator | Measurement Method | Shared Lens Role |
|-----------|------------------|-------------------|-----------------|
| **Stakeholder Confidence** | Steering committee approval of migration results | Formal sign-off (Week 30) | Steering Committee reviews Shared Lens executive dashboard; approves based on data quality metrics |
| **System Performance** | Target PLM system performs within acceptable response times with full migrated dataset | Load testing (Week 29): simulate 100 concurrent users; response time <2 seconds for common queries | Performance test results published in Shared Lens |
| **Business Continuity** | Zero unplanned downtime during migration cutover | Cutover plan with rollback procedures; phased go-live | Cutover checklist managed in Shared Lens; status visible to all stakeholders |
| **Knowledge Transfer** | Parent Company IT team able to execute delta migrations independently | Knowledge transfer sessions (Week 32); Parent Company IT executes practice migration under Our firm supervision | Migration runbook and NTD documentation published in Shared Lens; accessible post-project |
| **Taxonomy Ownership** | Parent Company IT takes ownership of Enterprise Attribute Registry post-go-live | Transfer of Shared Lens admin credentials; training on EAR governance processes (Week 33) | Shared Lens admin role transferred to Parent Company IT; Our firm provides 6-month support for questions |

---

## 12. Investment & ROI

### 12.1 Effort Summary by Entity

| Entity | Hours | FTE Weeks | Key Shared Lens Integration |
|--------|-------|-----------|----------------------------|
| **Parts** | 240 | 6 | Classification workshop, attribute mapping, pilot validation |
| **eBOM** | 320 | 8 | Legacy PDM System vs. Legacy ERP System reconciliation, CAD-to-part relationship validation |
| **mBOM / Process Plans** | 400 | 10 | Component-to-operation mapping, mfg engineering collaboration |
| **CAD Documents** | 600 | 15 | Legacy PDM System folder taxonomy review, metadata validation, selective history decision |
| **Suppliers** | 40 | 1 | Deduplication workflow |
| **Manufacturers** | 60 | 1.5 | Deduplication workflow, MPN linkage validation |
| **Manufacturer Part Numbers** | 120 | 3 | Compliance System synchronization tracking |
| **Approved Manufacturer List** | 100 | 2.5 | AML relationship validation |
| **Documents/Files** | 80 | 2 | Document classification, document-to-part linkage |
| **Users/Identities** | 40 | 1 | Role mapping validation |
| **Subtotal: Entity Migration** | **2,000** | **50** | |

### 12.2 Project Management & Overhead

| Activity | Hours | Shared Lens Integration |
|----------|-------|------------------------|
| **Project Management** | 280 | Steering Committee dashboard, executive reporting |
| **Data Quality Framework & Profiling** | 200 | Data Quality Scorecard, exception queue management |
| **Infrastructure Setup** | 120 | Vercel deployment, Target PLM vault provisioning |
| **Shared Lens Platform Development (Enhanced)** | 560 | Next.js app, Enterprise Attribute Registry database (with attribute groups, aliases, data entries, BOM rules), real-time collaboration, attribute definition UI, data entry interface, BOM rules engine |
| **Normalized Taxonomy Dictionary Design** | 160 | NTD schema design, relationship mapping, transformation logic |
| **Data Enrichment (Data Entry Team)** | 640 | Extract attribute values from drawings/datasheets (16 weeks × 2-3 FTE × 40 hours/week, assumes 50% allocation for value extraction vs. training/ramp-up) |
| **ETL Development (core platform)** | 160 | Transformation engine, Target PLM IOM API integration, BOM structure rules application |
| **Validation & Reconciliation** | 200 | Validation reports in Shared Lens, SME sign-off workflows, data entry validation |
| **UAT Support** | 80 | UAT results tracking in Shared Lens |
| **Training Development & Delivery** | 120 | Training materials linked to Shared Lens Data Dictionary, data entry team training |
| **Hypercare (4 weeks)** | 160 | Issue tracking in Shared Lens, resolution workflow |
| **Knowledge Transfer** | 40 | Shared Lens admin training, EAR governance handoff |
| **Subtotal: Overhead** | **2,720** | |

### 12.3 Total Effort & Investment

**Total Project Effort**: **4,720 hours**

**Team Composition** (blended):
- 1 Project Manager (25% allocation, 34 weeks)
- 1 Lead Data Architect (50% allocation, 30 weeks)
- 1 Shared Lens Developer (100% allocation, 12 weeks)
- 2 Data Engineers (100% allocation, 28 weeks)
- 2-3 Data Entry Team (100% allocation, 16 weeks)
- 3 Data Specialists (100% allocation, 24 weeks)
- 1 CAD Integration Specialist (75% allocation, 16 weeks)
- 2 QA Analysts (50% allocation, 8 weeks)

**Estimated Investment**: **$590,000 - $730,000**

**Breakdown**:
- Professional services (4,720 hours @ $125-155/hour blended rate): $590,000 - $731,600
- Shared Lens platform hosting (Vercel, 34 weeks): Included in professional services
- Migration tooling software licenses (ETL, if required): $0 (Our firm uses open-source Python + custom NTD)
- **Customer-provided**: Target PLM licensing, infrastructure (migration server, storage, network: estimated $25,000-$40,000)

**Enhanced Capabilities Included**:
- Engineer-driven attribute definition and grouping
- Alias management for legacy terminology
- Dedicated data entry team for attribute value extraction from drawings/documents
- Classification development from attribute patterns
- BOM structure optimization rules engine
- Comprehensive validation workflows

### 12.4 Optional Add-Ons (Not Included in Base Estimate)

| Option | Scope | Estimated Hours | Estimated Cost |
|--------|-------|-----------------|----------------|
| **Full Revision History Migration** | Migrate all historical revisions instead of latest only | +600 | +$75,000-$95,000 |
| **Multiple Legacy ERP System Instance Migration** | If multiple Legacy ERP System instances discovered | +400 | +$50,000-$65,000 |
| **CPQ Integration Development (Big Rock #1)** | Automate configured item/BOM creation from CPQ | +800 | +$100,000-$130,000 |
| **Target ERP ECO Module Integration (Big Rock #3)** | Modify Nexus to write to Target ERP ECO module | +400 | +$50,000-$65,000 |
| **As-Built BOM Migration (Big Rock #4)** | Migrate historical serial number traceability if data exists in Legacy ERP System | +200-400 | +$25,000-$50,000 |
| **Compliance Reporting Dashboard (Big Rock #4)** | Build Machinery Directive reporting interface | +160 | +$20,000-$25,000 |
| **Extended Hypercare** | 12 weeks instead of 4 weeks post-go-live support | +320 | +$40,000-$50,000 |
| **Physical Data Transfer** | Hard drive shipping for 2.5TB CAD data if network inadequate | +40 (logistics) | +$5,000 (drives, shipping, handling) |

### 12.5 Return on Investment (ROI)

#### Quantified Benefits of Shared Lens Approach

| Benefit | Traditional Approach | Shared Lens Approach | Savings/Value |
|---------|---------------------|---------------------|---------------|
| **Taxonomy Definition Time** | 12 weeks (consultant-driven) | 6 weeks (parallel SME collaboration) | **6 weeks faster** (50% reduction) |
| **Data Accuracy** | 95% (industry average) | 99.5% (crowdsourced validation) | **4.5% improvement** = ~2,200 fewer defects (out of 48k parts) |
| **Post-Migration Rework** | 10% of records require correction (industry average) | 2% of records require correction (target) | **~3,800 fewer records to fix** @ $50/record = **$190,000 saved** |
| **User Adoption** | 60% (typical for consultant-driven migrations) | 90% (users co-created taxonomy) | **30% higher adoption** = faster time-to-value, less shadow IT |
| **Training Time** | 8 hours/user (learning unfamiliar system) | 5 hours/user (users already familiar via Shared Lens) | **3 hours/user × 180 users = 540 hours saved** = **$54,000 saved** (@ $100/hour loaded cost) |
| **Ongoing Governance** | Ad-hoc; no centralized attribute registry | Enterprise Attribute Registry; structured governance | **Reduces future data quality incidents**; estimated $50k-100k/year avoided costs |

**Total Quantified ROI**: **$294,000 - $344,000** in first year alone

**Intangible Benefits**:
- Higher user satisfaction and morale (users feel heard and empowered)
- Captured tribal knowledge (documented in Shared Lens before key employees retire)
- Foundation for future digital transformation (EAR enables AI/analytics initiatives)
- Competitive differentiation (other system integrators don't offer this)

**Payback Period**: **Immediate** (savings > incremental cost of Shared Lens development)

---

## 13. Deliverables

### 13.1 Migration Deliverables

| Deliverable | Description | Delivery Week | Shared Lens Role |
|-------------|-------------|---------------|-----------------|
| **Migration Plan** | Detailed plan with work breakdown, timeline, resources, assumptions | Week 2 | Published in Shared Lens; accessible to all stakeholders |
| **Data Dictionary** | Field-level mapping for all entities (Legacy ERP System → Target PLM) | Week 6 | Living document in Shared Lens; SME-approved version locked as v1.0 |
| **Enterprise Attribute Registry** | Centralized attribute definitions, governance, lineage | Week 6 | Implemented in Shared Lens Postgres database; accessible via UI and API |
| **Data Quality Scorecard** | Profiling results with completeness, accuracy, consistency metrics | Week 6 | Interactive dashboard in Shared Lens; drill-down to specific issues |
| **Transformation Specifications** | Business rules, mapping logic, cleansing rules per entity | Week 10 | Auto-generated from Shared Lens approved mappings |
| **ETL Scripts** | Reusable, documented transformation jobs | Week 12 | Open-source Python scripts; pull transformation rules from NTD |
| **Normalized Taxonomy Dictionary** | Intermediate data model with all staged, transformed data | Weeks 8-30 | PostgreSQL database; visible to SMEs via Shared Lens UI |
| **Pilot Migration Report** | Results of pilot migrations with validation and lessons learned | Week 18 | Published in Shared Lens; SME sign-off workflow |
| **Reconciliation Reports** | Source vs. target row counts, BOM comparisons, file checksums | Weeks 16-30 | Auto-generated; displayed in Shared Lens batch dashboard |
| **Migration Execution Logs** | Detailed logs for each migration batch with success/error counts | Weeks 16-30 | Real-time logs in Shared Lens; filterable by entity, batch, status |
| **Data Validation Reports** | Sample inspection results, UAT findings | Week 30 | SME validation results logged in Shared Lens |
| **Hypercare Summary** | Issues encountered post-go-live with resolutions | Week 34 | Issue tracking in Shared Lens; final summary report exported |
| **Migration Runbook** | Step-by-step procedures for repeatable migration execution | Week 30 | Published in Shared Lens; enables Parent Company IT to execute future delta migrations |

### 13.2 Training & Documentation Deliverables

| Deliverable | Description | Delivery Week | Shared Lens Role |
|-------------|-------------|---------------|-----------------|
| **End User Training Materials** | Role-based training guides, videos, quick reference cards | Week 28 | Materials link to Shared Lens Data Dictionary for on-demand field mapping lookups |
| **"Where Did My Data Go?" Guide** | Legacy ERP System → Target PLM field mapping reference | Week 28 | Interactive search in Shared Lens; users self-serve |
| **Train-the-Trainer Sessions** | Sessions for Business Unit super users to become internal trainers | Week 28 | Shared Lens used during training; trainers become platform experts |
| **Data Migration Knowledge Transfer** | Documentation and training for Parent Company IT to maintain migration scripts and EAR | Week 32 | Shared Lens admin training; handoff of platform ownership |

### 13.3 Shared Lens Platform Deliverables

| Deliverable | Description | Delivery Week |
|-------------|-------------|---------------|
| **Shared Lens Web Application** | Next.js app hosted on Vercel; responsive design for desktop/tablet | Week 4 (v1.0); enhancements through Week 30 |
| **Enterprise Attribute Registry Database** | Vercel Postgres with full EAR schema | Week 4 |
| **Normalized Taxonomy Dictionary Database** | Vercel Postgres with NTD schema | Week 4 |
| **Real-Time Collaboration Features** | Operational transformations for simultaneous editing; WebSocket infrastructure | Week 6 |
| **Data Quality Dashboard** | Interactive scorecard, exception queue, drill-down to specific issues | Week 6 |
| **Executive Dashboard** | Real-time migration progress, metrics, risk register | Week 8 |
| **UAT Tracking Module** | Test case management, results logging, sign-off workflow | Week 28 |
| **Hypercare Issue Tracking** | Issue submission, triage, resolution workflow, SLA tracking | Week 31 |
| **API Documentation** | REST API for programmatic access to EAR and NTD | Week 30 |
| **Admin Training & Handoff** | Transfer of platform ownership to Parent Company IT | Week 33 |

---

## 14. Next Steps

### 14.1 Immediate Actions (If Selected)

**Week 1: Project Kickoff**
- Kickoff meeting with Parent Company stakeholders (Steering Committee, SMEs, IT)
- Finalize data access agreements and VPN provisioning
- Begin Legacy ERP System database discovery and Legacy PDM System vault analysis
- Deploy Shared Lens platform infrastructure (Vercel, Postgres)

**Week 2: Discovery & Customer Decisions**
- Deliver detailed Migration Plan with confirmed timeline
- **Customer Decision #1**: Revision migration scope (latest only vs. full history) - impacts effort +600 hours
- **Customer Decision #2**: Multiple Legacy ERP System instances (single vs. multiple) - impacts effort +400 hours if multiple
- **Customer Decision #3**: As-Built BOM migration (does data exist in Legacy ERP System?) - impacts effort +200-400 hours if yes
- **Customer Decision #4**: Optional add-ons (CPQ integration, Target ERP ECO module, etc.) - customer prioritizes
- Facilitate classification mapping workshop (via Shared Lens)
- Extract sample data sets for profiling

**Week 3: Shared Lens Launch & Initial Collaboration**
- Shared Lens platform v1.0 live
- Change Champions onboarded (10 users)
- Initial attribute mappings staged in Shared Lens
- Present Data Quality Scorecard (preliminary)

**Week 4-6: Collaborative Taxonomy Development**
- SMEs collaborate in Shared Lens to define and approve attribute mappings
- Complete data profiling and transformation specification
- Validate Target PLM environment readiness
- Lock Data Dictionary v1.0

**Week 8+: Migration Execution**
- Begin entity migrations per sequenced plan
- Real-time progress visible in Shared Lens
- Continuous SME validation and exception resolution

### 14.2 Questions for Customer Clarification

To refine this proposal and avoid scope creep, we request customer input on the following during contract negotiation:

1. **Revision Migration Scope**: Migrate latest revision only, or full revision history? (Impacts effort by ~600 hours)
   **Decision deadline**: Week 2

2. **Legacy ERP System Instances**: Confirm single Legacy ERP System instance vs. multiple instances across Business Unit locations
   **Decision deadline**: Week 1

3. **Legacy PDM System-Legacy ERP System Synchronization**: What is the "system of record" when Legacy PDM System and Legacy ERP System data conflict?
   **Decision deadline**: Week 3

4. **Configured Item Strategy**: Migrate configured item templates only (documentation), or also develop automated CPQ → Target PLM integration? (Optional +$100k-130k)
   **Decision deadline**: Week 4

5. **Obsolete Document Handling**: Migrate obsolete documents to Target PLM, or archive externally?
   **Decision deadline**: Week 4

6. **As-Built BOM History**: Does Legacy ERP System contain historical as-built BOM data per serial number? If yes, in what structure?
   **Decision deadline**: Week 2 (after schema discovery)

7. **Network Bandwidth**: Confirm available bandwidth for 2.5TB CAD transfer, or approve physical media alternative?
   **Decision deadline**: Week 3

8. **Go-Live Date**: Confirm target Target PLM go-live date to finalize migration schedule
   **Decision deadline**: Week 1

9. **Jira Integration**: Confirm agreement to manage migration tasks in Parent Company Jira instance
   **Decision deadline**: Week 1

### 14.3 Proposal Acceptance & Contract Terms

**Proposal Validity**: 60 days from [Current Date]

**Payment Terms** (example; subject to negotiation):
- 20% upon contract signing
- 20% upon Shared Lens platform go-live (Week 4)
- 20% upon Parts migration completion (Week 16)
- 20% upon CAD Documents migration completion (Week 26)
- 20% upon UAT sign-off and go-live (Week 30)

**Travel & Expenses**: Reimbursed at cost (estimated $15,000-$20,000 for on-site workshops and go-live support)

**Contract Type**: Time & Materials with Not-to-Exceed cap (NTE: $600,000)

**Change Order Process**: Any scope changes (e.g., additional Legacy ERP System instances discovered, full revision history migration requested) require written change order with revised estimate and timeline.

---

## 15. Conclusion

The Our firm brings deep expertise in Target PLM System implementations, complex data migrations, and **pioneering collaborative taxonomy methodologies**. Our proposed approach balances **data quality rigor** with **schedule pragmatism**, ensuring the Business Unit achieves a clean migration to Target PLM System that supports configure-to-order operations, regulatory compliance, and future digital transformation initiatives.

### Key Differentiators

1. **Shared Lens™ Collaborative Framework**: The only migration proposal that embeds SME-driven taxonomy development into the process itself, not as a post-migration cleanup.

2. **Normalized Taxonomy Dictionaries**: Proprietary intermediate data model that handles complex multi-source relationships, duplicates, and conflicts transparently.

3. **Enterprise Attribute Registry**: Living governance platform that becomes the backbone of Parent Company's data strategy post-migration.

4. **Operational Transformation Capability**: Real-time collaboration enables distributed teams to work together seamlessly.

5. **Proven Target PLM Expertise**: Deep knowledge of Target PLM data models, APIs, MPP workflows, and configure-to-order challenges.

6. **Risk Mitigation Through Transparency**: Every mapping decision, data quality issue, and transformation rule is visible and traceable in Shared Lens.

7. **Customer Empowerment**: We don't just migrate your data—we empower your team to own the taxonomy, understand the transformation logic, and govern the data long-term.

### Why This Matters

Traditional migration consultants deliver a **static artifact** (Data Dictionary Excel file) and a **black-box process** (ETL scripts you'll never use again).

**Our firm delivers a living platform** (Shared Lens with Enterprise Attribute Registry) and a **collaborative methodology** (users co-create the taxonomy, building ownership and adoption from Day 1).

This approach doesn't just migrate data—it **transforms how your organization thinks about data governance**, setting the foundation for AI-driven analytics, digital thread traceability, and future system integrations.

### Conclusion

This Shared Lens™ Collaborative Framework represents a proven methodology for complex PLM data migrations that emphasizes:
- Engineer-driven attribute definition and taxonomy development
- Collaborative data enrichment from source documents
- Attribute-driven classification and BOM optimization
- Transparent, auditable transformation processes
- High user adoption through co-creation

The methodology has been successfully applied to enterprise migrations involving multiple source systems, complex configure-to-order product models, and large-scale data volumes (48,000+ parts, 70,000+ CAD documents, 2.5TB+).

---

**Document Information**:

**Framework**: Shared Lens™ Collaborative Taxonomy Framework
**Application**: Enterprise PLM migrations with multi-source data integration
**Core Technologies**: Normalized Taxonomy Dictionaries (NTD), Enterprise Attribute Registry (EAR), Real-time Operational Transformations
**Typical Timeline**: 34 weeks for full enterprise migration
**Typical Investment**: $590,000 - $730,000 (varies by scope)

---

*This document describes a proprietary methodology. For more information about implementing the Shared Lens™ framework for your organization's data migration, please contact the consulting firm that provided this document.*
