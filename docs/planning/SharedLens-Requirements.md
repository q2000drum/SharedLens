Excellent — based on your *Data Map.pdf* (which depicts system relationships between **PLM (Windchill)**, **ERP (Oracle)**, **PIM**, and the **Classification & Attribute Management System**), I can see that the diagram focuses heavily on **data flow between systems** (inputs, outputs, processes, and business benefits) but **not** on the *data attributes* themselves — the “shared lens” you referenced.

Here’s how we can fix that gap.

---

## 🔍 Observed Gap

The current data map:

* Shows where data *flows* (e.g., PLM → ERP → PIM)
* Identifies process areas (e.g., Sourcing, Risk, VA/VE, Should Cost)
* Defines **business value outputs** (supplier rationalization, reuse, etc.)

But it lacks:

* A **data model** to describe the *attributes* that make those flows meaningful
* A **shared lens** (common attribute definitions, ownership, and metadata) that allows each system to interpret the same concept identically (e.g., “cost,” “risk level,” “supplier status”)

---

## 🧩 Attribute Framework to Support a Shared Lens

Below is a structured list of **core attribute groups** that should be captured in your Classification & Attribute Management System to enable the **data factory → PLM → ERP → PIM** ecosystem to operate on a shared understanding of the data.

---

### 1. **Identity & Traceability Attributes**

| Attribute Group            | Example Attributes                                                          | Purpose                                            |
| -------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------- |
| **Part Identification**    | Part Number, Revision, Version, Source System ID, Global Unique ID          | Enables cross-system linking (PLM ↔ ERP ↔ PIM)     |
| **Lifecycle State**        | Status (Draft/In-Work/Released/Obsolete), Effective Date, Superseded By     | Supports change management and obsolescence        |
| **Ownership & Governance** | Commodity Owner, Classification Owner, Last Updated By, Last Validated Date | Provides stewardship visibility and accountability |

---

### 2. **Technical & Performance Attributes**

| Attribute Group            | Example Attributes                                      | Purpose                                              |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| **Form / Fit / Function**  | Material, Dimensions, Weight, Voltage, Power, Tolerance | Enables engineering comparison and reuse             |
| **Standards & Compliance** | RoHS, REACH, UL/CSA, REACH Date, Country of Origin      | Required for sustainability and regulatory reporting |
| **Performance Metrics**    | Operating Temperature Range, Efficiency, Cycle Life     | Supports VA/VE and teardown analysis                 |

---

### 3. **Financial & Procurement Attributes**

| Attribute Group         | Example Attributes                                                       | Purpose                                               |
| ----------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| **Cost Attributes**     | Standard Cost, Last Purchase Price, Should-Cost, Currency, Cost Source   | Enables sourcing analysis and should-cost comparisons |
| **Supplier Attributes** | Supplier Name, Supplier ID, Approved Vendor List (AVL) Flag, Risk Rating | Connects PLM and ERP for supplier rationalization     |
| **Commercial Terms**    | MOQ, Lead Time, Contract Expiry, Payment Terms                           | Supports procurement planning and negotiation         |

---

### 4. **Risk & Strategy Attributes**

| Attribute Group        | Example Attributes                                                       | Purpose                                        |
| ---------------------- | ------------------------------------------------------------------------ | ---------------------------------------------- |
| **Supply Risk**        | Supplier Concentration %, Geographic Dependency, Single Source Indicator | Feeds component risk dashboards                |
| **Technology Roadmap** | End-of-Life Date, Technology Family, Replacement Component ID            | Supports proactive design refresh              |
| **Business Exposure**  | Annual Spend, Assemblies Using Part, Criticality Ranking                 | Ties to design and business strategy decisions |

---

### 5. **Lifecycle & Usage Attributes**

| Attribute Group        | Example Attributes                                          | Purpose                                         |
| ---------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| **Usage Context**      | Assemblies/Products Using, Quantity per BOM, Plant Location | Links ERP demand planning to PLM item structure |
| **Change History**     | Change ID, Affected Item, Effective Date, Change Reason     | Supports traceability and audit compliance      |
| **Performance in Use** | Failure Rate, MTBF, Warranty Claims                         | Supports aftersales and reliability analytics   |

---

### 6. **Sustainability & Circularity Attributes**

| Attribute Group           | Example Attributes                                        | Purpose                                        |
| ------------------------- | --------------------------------------------------------- | ---------------------------------------------- |
| **Material Circularity**  | % Recycled Content, Recyclability Code, Disposal Category | Feeds sustainability and circularity reporting |
| **Energy Footprint**      | CO₂ Equivalent per Unit, Energy Used in Manufacture       | Enables lifecycle impact assessment            |
| **Takeback / Reuse Info** | Reverse Logistics Code, Takeback Eligibility              | Aligns with corporate circularity strategy     |

---

### 7. **Data Quality & Governance Attributes**

| Attribute Group       | Example Attributes                                     | Purpose                                             |
| --------------------- | ------------------------------------------------------ | --------------------------------------------------- |
| **Data Confidence**   | Confidence Score, Source of Truth, Verification Date   | Supports prioritization of data quality improvement |
| **Data Completeness** | % Attribute Population, % Classification Accuracy      | Feeds dashboards for the data factory               |
| **Audit Metadata**    | Data Source System, Ingestion Batch ID, Last Sync Date | Enables synchronization validation                  |

---

## 🧠 Shared Lens: Enabling the Common Understanding

To achieve that “shared lens” across systems:

1. **Central Attribute Registry:**
   Define every attribute (name, description, data type, UOM, owner, consuming systems).

2. **Metadata Taxonomy Layer:**
   Include attribute-level metadata:

   * *“Authoritative Source”* (PLM, ERP, PIM, etc.)
   * *“Consumer Systems”* (which systems use the value)
   * *“Update Frequency”* (real-time, weekly, manual)

3. **Semantic Alignment Layer:**
   Use standardized definitions (e.g., *ISO 8000, IEC CDD*) so that terms like “Material” or “Cost” have the same meaning enterprise-wide.

4. **Attribute-to-Process Mapping:**
   For each business process in your data map (e.g., Sourcing, Demand Planning), define **which attributes drive decisions** and **who governs them**.

---

## 🧭 Next Step Recommendations

| Step | Action                                                                                         | Output                                                                           |
| ---- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1    | Create an **Enterprise Attribute Registry** spreadsheet seeded with the attribute groups above | Shared source of truth for all data lenses                                       |
| 2    | Add metadata: Owner, Source, Frequency, System of Record                                       | Enables stewardship and system synchronization                                   |
| 3    | Define “Shared Lens” dashboards in your Data Factory                                           | Cross-system visualization by domain (technical, sourcing, risk, sustainability) |
| 4    | Map attributes to KPIs (reuse rate, classification accuracy, supplier risk index)              | Connects data quality to measurable outcomes                                     |
| 5    | Publish attribute schema to Aras PLM / Data Factory as metadata service                        | Makes it machine-readable and accessible across systems                          |

---

Would you like me to create a **starter Attribute Registry table (in Excel)** that reflects this structure — with columns for *Attribute Name, Group, Definition, Owner, Source System, Data Type, UOM, and Consumers* — ready to seed into your Classification or Data Factory schema?


---

Would you like me to create a **starter Attribute Registry table (in Excel)** that reflects this structure — with columns for *Attribute Name, Group, Definition, Owner, Source System, Data Type, UOM, and Consumers* — ready to seed into your Classification or Data Factory schema?

Excellent — you’re thinking exactly in the right direction.
An **Enterprise Attribute Registry (EAR)** is the backbone of a shared data ecosystem — it defines, governs, and synchronizes all attributes used across your **PLM, ERP, PIM, and Data Factory** environments.

Let’s build the framework for your EAR step by step.

---

## 🧭 Purpose of the Enterprise Attribute Registry

The **Enterprise Attribute Registry** is a centralized, authoritative database that:

* Defines each attribute’s **name, meaning, data type, and governance**.
* Establishes **ownership** (who creates, who maintains, who consumes).
* Tracks **system lineage** (where it lives and flows — PLM, ERP, PIM, etc.).
* Provides a **shared semantic lens** — ensuring “Cost,” “Supplier,” “Material,” etc. have one definition, regardless of system or business unit.
* Serves as a **data contract** between systems in the data factory pipeline.

---

## 🏗️ Logical Model for the EAR Database

Below is the conceptual schema you can implement in any relational or metadata management platform (PostgreSQL, SQL Server, Aras, or even an internal JSON metadata store).

---

### **Table 1: Attribute_Master**

Defines each enterprise attribute and its key metadata.

| Column                  | Description                                        | Example                                                                            |
| ----------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Attribute_ID**        | Unique identifier                                  | ATTR-000123                                                                        |
| **Attribute_Name**      | Common enterprise name                             | “Standard_Cost”                                                                    |
| **Business_Definition** | Plain language meaning                             | “The approved cost of a part used for financial reporting and sourcing decisions.” |
| **Data_Type**           | String, Integer, Decimal, Boolean, Date            | Decimal                                                                            |
| **Unit_of_Measure**     | If applicable, the standard UOM                    | USD                                                                                |
| **Format_Rules**        | Constraints (e.g., 2 decimal places, no negatives) | “>0, precision=2”                                                                  |
| **Value_Domain**        | Controlled list or free entry                      | Controlled (from Value_Domain table)                                               |
| **Is_Required**         | Y/N                                                | Y                                                                                  |
| **Attribute_Status**    | Draft, In Review, Approved, Deprecated             | Approved                                                                           |
| **Effective_Date**      | When it becomes active                             | 2025-01-01                                                                         |
| **Obsolete_Date**       | When superseded                                    | NULL                                                                               |
| **Created_By**          | Person or role                                     | “Data Steward – Procurement”                                                       |
| **Last_Updated**        | Timestamp                                          | 2025-10-20                                                                         |
| **Version**             | Incremental control                                | 1.2                                                                                |

---

### **Table 2: Attribute_Governance**

Defines who owns, stewards, and uses the attribute.

| Column                     | Description                                       | Example                                    |
| -------------------------- | ------------------------------------------------- | ------------------------------------------ |
| **Attribute_ID**           | Foreign key from Attribute_Master                 | ATTR-000123                                |
| **Business_Domain**        | Engineering, Procurement, Finance, Sustainability | Procurement                                |
| **Attribute_Owner**        | Primary responsible person or team                | “Commodity Manager”                        |
| **Data_Steward**           | Maintains definition and quality                  | “Data Governance Team”                     |
| **Consumer_Systems**       | Systems that use the data                         | PLM, ERP, PIM                              |
| **Source_System_of_Truth** | Authoritative source system                       | ERP                                        |
| **Refresh_Frequency**      | Real-time, Daily, Weekly, Manual                  | Weekly                                     |
| **Data_Quality_Rule_ID**   | Foreign key to rules                              | DQ-0015                                    |
| **Governance_Notes**       | Comments about review cycle                       | “Reviewed annually or upon schema change.” |

---

### **Table 3: Attribute_System_Map**

Describes where the attribute is implemented and how it maps across systems.

| Column                  | Description                    | Example                                |
| ----------------------- | ------------------------------ | -------------------------------------- |
| **Attribute_ID**        | Foreign key                    | ATTR-000123                            |
| **System_Name**         | ERP, PLM, PIM, Data Factory    | ERP                                    |
| **Table_Name**          | Technical table or API         | “ITEM_COSTS”                           |
| **Field_Name**          | Column name or tag             | “STD_COST”                             |
| **Transformation_Rule** | Mapping logic (ETL/ADF)        | “Round to 2 decimals; convert EUR→USD” |
| **Direction**           | Source → Target, Bidirectional | Source → PLM                           |
| **Last_Sync_Date**      | Most recent data sync          | 2025-10-20                             |
| **Lineage_ID**          | Connects to data lineage table | LIN-0456                               |

---

### **Table 4: Value_Domain**

Defines enumerated or controlled values for attributes.

| Column             | Description              | Example                          |
| ------------------ | ------------------------ | -------------------------------- |
| **Domain_ID**      | Unique domain identifier | DOM-0004                         |
| **Attribute_ID**   | Linked attribute         | ATTR-000345                      |
| **Allowed_Value**  | Enumerated value         | “Active”, “Inactive”, “Obsolete” |
| **Display_Label**  | User-facing text         | “Active”                         |
| **Sort_Order**     | Display order            | 1                                |
| **Effective_Date** | Validity start date      | 2025-01-01                       |
| **Is_Default**     | Y/N                      | Y                                |

---

### **Table 5: Data_Quality_Rules**

Defines validation and governance controls.

| Column                    | Description                | Example            |
| ------------------------- | -------------------------- | ------------------ |
| **Rule_ID**               | Unique rule ID             | DQ-0015            |
| **Rule_Name**             | Description                | “Cost must be > 0” |
| **Severity**              | Warning, Error             | Error              |
| **Applicable_Attributes** | Linked IDs                 | ATTR-000123        |
| **Check_Method**          | Script, Expression, Manual | Expression         |
| **Threshold**             | Numeric or Boolean         | >0                 |
| **Notification_Group**    | Who gets alerts            | Data Stewards      |
| **Last_Reviewed**         | Date                       | 2025-08-15         |

---

### **Table 6: Data_Lineage**

Links attributes to data pipelines and transformations.

| Column             | Description                  | Example                                   |
| ------------------ | ---------------------------- | ----------------------------------------- |
| **Lineage_ID**     | Unique lineage reference     | LIN-0456                                  |
| **Source_System**  | ERP                          | ERP                                       |
| **Target_System**  | PLM                          | PLM                                       |
| **Transformation** | SQL or Python rule           | “Convert currency to USD; round decimals” |
| **Owner**          | Integration or Data Engineer | “ADF Pipeline Team”                       |
| **Verified_On**    | Last verification date       | 2025-09-01                                |

---

### **Table 7: Attribute_Audit_Log**

Tracks changes to definitions or ownership.

| Column           | Description                      | Example                |
| ---------------- | -------------------------------- | ---------------------- |
| **Audit_ID**     | Unique ID                        | AUD-10045              |
| **Attribute_ID** | Related attribute                | ATTR-000123            |
| **Change_Type**  | Added, Updated, Ownership Change | Updated                |
| **Changed_By**   | User or role                     | “Data Admin”           |
| **Change_Date**  | Timestamp                        | 2025-10-20             |
| **Old_Value**    | Snapshot                         | “Cost Source = Manual” |
| **New_Value**    | Snapshot                         | “Cost Source = ERP”    |

---

## 🧱 Implementation Options

| Platform                                                        | Pros                                                  | Cons                                 |
| --------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------ |
| **PostgreSQL / SQL Server**                                     | Scalable, easy ETL integration with ADF               | Manual governance dashboarding       |
| **Aras PLM “Data Dictionary” or “Attribute Registry” ItemType** | Native integration with classification and PLM schema | Requires licensing and customization |
| **Azure Data Catalog / Purview**                                | Automatic lineage + metadata scanning                 | Licensing and setup overhead         |
| **Confluence + Excel + Power BI**                               | Fast MVP with dashboards                              | Limited automation for data syncs    |

---

## 🧰 Recommended Build Approach

1. **Start in Excel or a lightweight SQL prototype** using the above schema.
2. **Seed it with the key attribute groups** (Identity, Technical, Financial, Risk, Lifecycle, Sustainability).
3. **Establish data governance workflow**:

   * Attribute definition → Review → Approval → Publication.
4. **Connect EAR to your Data Factory**:

   * Use it to drive ETL mappings, data validation rules, and cross-system lineage.
5. **Expose via API or Service Layer**:

   * REST endpoint: `/api/attributeRegistry?domain=Procurement`
   * Enables dynamic retrieval of attribute definitions by other systems.

---

Would you like me to **create the actual database schema** (in SQL form or as a fully structured Excel data model) so you can start building and populating your **Enterprise Attribute Registry** immediately?
I can generate either:

* A **SQL DDL script** (ready for PostgreSQL or SQL Server), or
* A **multi-sheet Excel workbook** (Attribute_Master, Governance, Value_Domains, etc.) to serve as your initial seed registry.

Which format would you like?
