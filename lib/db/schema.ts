import { pgTable, text, varchar, timestamp, uuid, decimal, boolean, integer, jsonb, pgEnum } from 'drizzle-orm/pg-core';

// Enums
export const attributeStatusEnum = pgEnum('attribute_status', ['draft', 'in_review', 'approved', 'deprecated']);
export const changeTypeEnum = pgEnum('change_type', ['added', 'updated', 'ownership_change', 'deleted']);
export const severityEnum = pgEnum('severity', ['warning', 'error', 'info']);
export const taskStatusEnum = pgEnum('task_status', ['not_started', 'in_process', 'complete', 'on_hold', 'late_to_plan']);

// Attribute Master Table
export const attributeMaster = pgTable('attribute_master', {
  id: uuid('id').primaryKey().defaultRandom(),
  attributeId: varchar('attribute_id', { length: 50 }).unique().notNull(),
  attributeName: varchar('attribute_name', { length: 255 }).notNull(),
  businessDefinition: text('business_definition').notNull(),
  dataType: varchar('data_type', { length: 50 }).notNull(),
  unitOfMeasure: varchar('unit_of_measure', { length: 50 }),
  formatRules: text('format_rules'),
  valueDomain: varchar('value_domain', { length: 100 }),
  isRequired: boolean('is_required').default(false),
  status: attributeStatusEnum('status').default('draft'),
  effectiveDate: timestamp('effective_date'),
  obsoleteDate: timestamp('obsolete_date'),
  createdBy: varchar('created_by', { length: 255 }),
  lastUpdated: timestamp('last_updated').defaultNow(),
  version: varchar('version', { length: 20 }).default('1.0'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Attribute Governance Table
export const attributeGovernance = pgTable('attribute_governance', {
  id: uuid('id').primaryKey().defaultRandom(),
  attributeId: varchar('attribute_id', { length: 50 }).notNull(),
  businessDomain: varchar('business_domain', { length: 100 }).notNull(),
  attributeOwner: varchar('attribute_owner', { length: 255 }),
  dataSteward: varchar('data_steward', { length: 255 }),
  consumerSystems: text('consumer_systems'),
  sourceSystemOfTruth: varchar('source_system_of_truth', { length: 100 }),
  refreshFrequency: varchar('refresh_frequency', { length: 50 }),
  dataQualityRuleId: varchar('data_quality_rule_id', { length: 50 }),
  governanceNotes: text('governance_notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Attribute System Map Table
export const attributeSystemMap = pgTable('attribute_system_map', {
  id: uuid('id').primaryKey().defaultRandom(),
  attributeId: varchar('attribute_id', { length: 50 }).notNull(),
  systemName: varchar('system_name', { length: 100 }).notNull(),
  tableName: varchar('table_name', { length: 255 }),
  fieldName: varchar('field_name', { length: 255 }),
  transformationRule: text('transformation_rule'),
  direction: varchar('direction', { length: 50 }),
  lastSyncDate: timestamp('last_sync_date'),
  lineageId: varchar('lineage_id', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow(),
});

// Value Domain Table
export const valueDomain = pgTable('value_domain', {
  id: uuid('id').primaryKey().defaultRandom(),
  domainId: varchar('domain_id', { length: 50 }).notNull(),
  attributeId: varchar('attribute_id', { length: 50 }).notNull(),
  allowedValue: varchar('allowed_value', { length: 255 }).notNull(),
  displayLabel: varchar('display_label', { length: 255 }),
  sortOrder: integer('sort_order'),
  effectiveDate: timestamp('effective_date'),
  isDefault: boolean('is_default').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Data Quality Rules Table
export const dataQualityRules = pgTable('data_quality_rules', {
  id: uuid('id').primaryKey().defaultRandom(),
  ruleId: varchar('rule_id', { length: 50 }).unique().notNull(),
  ruleName: varchar('rule_name', { length: 255 }).notNull(),
  severity: severityEnum('severity').default('warning'),
  applicableAttributes: text('applicable_attributes'),
  checkMethod: varchar('check_method', { length: 100 }),
  threshold: text('threshold'),
  notificationGroup: varchar('notification_group', { length: 255 }),
  lastReviewed: timestamp('last_reviewed'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Data Lineage Table
export const dataLineage = pgTable('data_lineage', {
  id: uuid('id').primaryKey().defaultRandom(),
  lineageId: varchar('lineage_id', { length: 50 }).unique().notNull(),
  sourceSystem: varchar('source_system', { length: 100 }).notNull(),
  targetSystem: varchar('target_system', { length: 100 }).notNull(),
  transformation: text('transformation'),
  owner: varchar('owner', { length: 255 }),
  verifiedOn: timestamp('verified_on'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Attribute Audit Log Table
export const attributeAuditLog = pgTable('attribute_audit_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  auditId: varchar('audit_id', { length: 50 }).unique().notNull(),
  attributeId: varchar('attribute_id', { length: 50 }).notNull(),
  changeType: changeTypeEnum('change_type').notNull(),
  changedBy: varchar('changed_by', { length: 255 }),
  changeDate: timestamp('change_date').defaultNow(),
  oldValue: jsonb('old_value'),
  newValue: jsonb('new_value'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Commodity Classification Table
export const commodityClassification = pgTable('commodity_classification', {
  id: uuid('id').primaryKey().defaultRandom(),
  commodityId: varchar('commodity_id', { length: 50 }).unique().notNull(),
  commodityName: varchar('commodity_name', { length: 255 }).notNull(),
  parentCommodityId: varchar('parent_commodity_id', { length: 50 }),
  level: integer('level').notNull(),
  description: text('description'),
  status: taskStatusEnum('status').default('not_started'),
  estimatedCompletionDate: timestamp('estimated_completion_date'),
  completionPercentage: integer('completion_percentage').default(0),
  attributeCount: integer('attribute_count').default(0),
  createdBy: varchar('created_by', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Component Catalog Table
export const componentCatalog = pgTable('component_catalog', {
  id: uuid('id').primaryKey().defaultRandom(),
  partNumber: varchar('part_number', { length: 100 }).unique().notNull(),
  revision: varchar('revision', { length: 50 }),
  commodityId: varchar('commodity_id', { length: 50 }),
  description: text('description'),
  manufacturer: varchar('manufacturer', { length: 255 }),
  supplier: varchar('supplier', { length: 255 }),
  standardCost: decimal('standard_cost', { precision: 12, scale: 2 }),
  currency: varchar('currency', { length: 10 }).default('USD'),
  lifecycleStatus: varchar('lifecycle_status', { length: 50 }),
  attributes: jsonb('attributes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Metrics Tracking Table
export const metricsTracking = pgTable('metrics_tracking', {
  id: uuid('id').primaryKey().defaultRandom(),
  metricDate: timestamp('metric_date').defaultNow(),
  totalCommodities: integer('total_commodities').default(0),
  completedCommodities: integer('completed_commodities').default(0),
  inProcessCommodities: integer('in_process_commodities').default(0),
  notStartedCommodities: integer('not_started_commodities').default(0),
  avgAttributeCompletion: decimal('avg_attribute_completion', { precision: 5, scale: 2 }),
  totalComponents: integer('total_components').default(0),
  classifiedComponents: integer('classified_components').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});
