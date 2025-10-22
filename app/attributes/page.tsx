import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ATTRIBUTE_GROUPS } from '@/lib/types';
import { Database, FileText, DollarSign, AlertTriangle, Activity, Leaf, Shield } from 'lucide-react';

// Mock attribute data for POC
const mockAttributes = [
  {
    id: '1',
    attributeId: 'ATTR-001',
    attributeName: 'Part Number',
    group: 'identity',
    dataType: 'String',
    isRequired: true,
    status: 'approved',
    description: 'Unique identifier for component parts',
  },
  {
    id: '2',
    attributeId: 'ATTR-002',
    attributeName: 'Standard Cost',
    group: 'financial',
    dataType: 'Decimal',
    isRequired: true,
    status: 'approved',
    description: 'Approved cost used for financial reporting',
  },
  {
    id: '3',
    attributeId: 'ATTR-003',
    attributeName: 'Material Type',
    group: 'technical',
    dataType: 'String',
    isRequired: true,
    status: 'approved',
    description: 'Primary material composition',
  },
  {
    id: '4',
    attributeId: 'ATTR-004',
    attributeName: 'Supplier Risk Rating',
    group: 'risk',
    dataType: 'Enum',
    isRequired: false,
    status: 'in_review',
    description: 'Risk assessment for supplier reliability',
  },
  {
    id: '5',
    attributeId: 'ATTR-005',
    attributeName: 'Recycled Content %',
    group: 'sustainability',
    dataType: 'Decimal',
    isRequired: false,
    status: 'draft',
    description: 'Percentage of recycled materials',
  },
];

const groupIcons: Record<string, any> = {
  identity: Database,
  technical: FileText,
  financial: DollarSign,
  risk: AlertTriangle,
  lifecycle: Activity,
  sustainability: Leaf,
  dataQuality: Shield,
};

export default function AttributesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Attribute Registry</h1>
        <p className="mt-2 text-gray-600">
          Enterprise-wide attribute definitions and governance
        </p>
      </div>

      {/* Attribute Groups Overview */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(ATTRIBUTE_GROUPS).map(([key, group]) => {
          const Icon = groupIcons[key] || Database;
          const count = mockAttributes.filter(a => a.group === key).length;

          return (
            <Card key={key} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <Badge variant="secondary">{count}</Badge>
                </div>
                <CardTitle className="text-sm font-medium mt-2">
                  {group.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600">{group.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Attribute List */}
      <Card>
        <CardHeader>
          <CardTitle>Attribute Catalog</CardTitle>
          <CardDescription>
            All registered attributes across the enterprise
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Attributes</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="in_review">In Review</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Attribute ID</th>
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Group</th>
                      <th className="text-left py-3 px-4 font-medium">Data Type</th>
                      <th className="text-center py-3 px-4 font-medium">Required</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAttributes.map((attr) => (
                      <tr key={attr.id} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="py-3 px-4 font-mono text-xs">{attr.attributeId}</td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{attr.attributeName}</p>
                            <p className="text-xs text-gray-500">{attr.description}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-xs text-gray-600">
                            {ATTRIBUTE_GROUPS[attr.group as keyof typeof ATTRIBUTE_GROUPS]?.name || attr.group}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {attr.dataType}
                          </code>
                        </td>
                        <td className="py-3 px-4 text-center">
                          {attr.isRequired ? (
                            <Badge variant="default" className="text-xs">Yes</Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">No</Badge>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            attr.status === 'approved' ? 'bg-green-100 text-green-800' :
                            attr.status === 'in_review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {attr.status.replace('_', ' ')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {['approved', 'in_review', 'draft'].map(status => (
              <TabsContent key={status} value={status}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Attribute ID</th>
                        <th className="text-left py-3 px-4 font-medium">Name</th>
                        <th className="text-left py-3 px-4 font-medium">Group</th>
                        <th className="text-left py-3 px-4 font-medium">Data Type</th>
                        <th className="text-center py-3 px-4 font-medium">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAttributes.filter(a => a.status === status).map((attr) => (
                        <tr key={attr.id} className="border-b last:border-0 hover:bg-gray-50">
                          <td className="py-3 px-4 font-mono text-xs">{attr.attributeId}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{attr.attributeName}</p>
                              <p className="text-xs text-gray-500">{attr.description}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-xs text-gray-600">
                              {ATTRIBUTE_GROUPS[attr.group as keyof typeof ATTRIBUTE_GROUPS]?.name || attr.group}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {attr.dataType}
                            </code>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {attr.isRequired ? (
                              <Badge variant="default" className="text-xs">Yes</Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs">No</Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
