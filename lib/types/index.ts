// Attribute Types
export type AttributeStatus = 'draft' | 'in_review' | 'approved' | 'deprecated';
export type TaskStatus = 'not_started' | 'in_process' | 'complete' | 'on_hold' | 'late_to_plan';
export type ChangeType = 'added' | 'updated' | 'ownership_change' | 'deleted';
export type Severity = 'warning' | 'error' | 'info';

export interface AttributeGroup {
  name: string;
  description: string;
  icon?: string;
  color?: string;
}

export const ATTRIBUTE_GROUPS: Record<string, AttributeGroup> = {
  identity: {
    name: 'Identity & Traceability',
    description: 'Part numbers, revisions, lifecycle state, ownership',
    color: 'blue',
  },
  technical: {
    name: 'Technical & Performance',
    description: 'Form, fit, function, specifications, standards',
    color: 'purple',
  },
  financial: {
    name: 'Financial & Procurement',
    description: 'Cost, supplier data, commercial terms',
    color: 'green',
  },
  risk: {
    name: 'Risk & Strategy',
    description: 'Supply risk, technology roadmap, business exposure',
    color: 'orange',
  },
  lifecycle: {
    name: 'Lifecycle & Usage',
    description: 'Usage context, change history, performance data',
    color: 'cyan',
  },
  sustainability: {
    name: 'Sustainability & Circularity',
    description: 'Material circularity, energy footprint, compliance',
    color: 'emerald',
  },
  dataQuality: {
    name: 'Data Quality & Governance',
    description: 'Data confidence, completeness, audit metadata',
    color: 'slate',
  },
};

export interface Attribute {
  id: string;
  attributeId: string;
  attributeName: string;
  businessDefinition: string;
  dataType: string;
  unitOfMeasure?: string;
  formatRules?: string;
  valueDomain?: string;
  isRequired: boolean;
  status: AttributeStatus;
  effectiveDate?: Date;
  obsoleteDate?: Date;
  createdBy?: string;
  lastUpdated: Date;
  version: string;
  group?: string;
}

export interface CommodityClassification {
  id: string;
  commodityId: string;
  commodityName: string;
  parentCommodityId?: string;
  level: number;
  description?: string;
  status: TaskStatus;
  estimatedCompletionDate?: Date;
  completionPercentage: number;
  attributeCount: number;
  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MetricsData {
  totalCommodities: number;
  completedCommodities: number;
  inProcessCommodities: number;
  notStartedCommodities: number;
  avgAttributeCompletion: number;
  totalComponents: number;
  classifiedComponents: number;
}

export interface Component {
  id: string;
  partNumber: string;
  revision?: string;
  commodityId?: string;
  description?: string;
  manufacturer?: string;
  supplier?: string;
  standardCost?: number;
  currency: string;
  lifecycleStatus?: string;
  attributes?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
