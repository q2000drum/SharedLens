import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, ChevronRight } from 'lucide-react';

// Mock classification data for POC
const mockClassifications = [
  {
    id: '1',
    commodityId: 'COM-001',
    commodityName: 'Valves',
    level: 1,
    status: 'complete',
    completionPercentage: 100,
    attributeCount: 45,
    etc: '6/2/2023',
    children: [
      { id: '1-1', name: 'Ball Valves', status: 'complete', completion: 100, attributes: 38 },
      { id: '1-2', name: 'Gate Valves', status: 'complete', completion: 100, attributes: 35 },
      { id: '1-3', name: 'Check Valves', status: 'complete', completion: 100, attributes: 32 },
    ],
  },
  {
    id: '2',
    commodityId: 'COM-002',
    commodityName: 'Circuit Breakers',
    level: 1,
    status: 'on_hold',
    completionPercentage: 85,
    attributeCount: 42,
    etc: 'TBD',
    children: [],
  },
  {
    id: '3',
    commodityId: 'COM-003',
    commodityName: 'Fasteners',
    level: 1,
    status: 'in_process',
    completionPercentage: 75,
    attributeCount: 28,
    etc: '6/2/2023',
    children: [
      { id: '3-1', name: 'Bolts', status: 'in_process', completion: 80, attributes: 22 },
      { id: '3-2', name: 'Screws', status: 'in_process', completion: 70, attributes: 20 },
      { id: '3-3', name: 'Nuts', status: 'not_started', completion: 0, attributes: 0 },
    ],
  },
  {
    id: '4',
    commodityId: 'COM-004',
    commodityName: 'Wire Harnesses',
    level: 1,
    status: 'late_to_plan',
    completionPercentage: 30,
    attributeCount: 15,
    etc: '04/01/2023',
    children: [],
  },
  {
    id: '5',
    commodityId: 'COM-005',
    commodityName: 'Motors',
    level: 1,
    status: 'in_process',
    completionPercentage: 30,
    attributeCount: 12,
    etc: '3/1/2023',
    children: [
      { id: '5-1', name: 'AC Motors', status: 'in_process', completion: 40, attributes: 10 },
      { id: '5-2', name: 'DC Motors', status: 'not_started', completion: 0, attributes: 0 },
    ],
  },
];

export default function ClassificationPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Classification Schema</h1>
        <p className="mt-2 text-gray-600">
          Commodity and category classification hierarchy
        </p>
      </div>

      {/* Classification Summary */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Commodities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mockClassifications.length}</div>
            <p className="text-xs text-gray-600 mt-1">Top-level categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {mockClassifications.filter(c => c.status === 'complete').length}
            </div>
            <p className="text-xs text-gray-600 mt-1">100% schema complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              {mockClassifications.filter(c => c.status === 'in_process').length}
            </div>
            <p className="text-xs text-gray-600 mt-1">Actively developing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Avg Attributes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.round(
                mockClassifications.reduce((sum, c) => sum + c.attributeCount, 0) /
                mockClassifications.length
              )}
            </div>
            <p className="text-xs text-gray-600 mt-1">Per commodity</p>
          </CardContent>
        </Card>
      </div>

      {/* Classification Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle>Commodity Classification Hierarchy</CardTitle>
          <CardDescription>
            Browse the classification schema and development status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockClassifications.map((commodity) => (
              <div key={commodity.id} className="border rounded-lg p-4 space-y-3">
                {/* Parent Commodity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {commodity.commodityName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {commodity.commodityId} • {commodity.attributeCount} attributes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        {commodity.completionPercentage}%
                      </p>
                      <p className="text-xs text-gray-500">Complete</p>
                    </div>
                    <Badge
                      variant={commodity.status === 'complete' ? 'default' : 'secondary'}
                      className={`${
                        commodity.status === 'complete'
                          ? 'bg-green-100 text-green-800'
                          : commodity.status === 'in_process'
                          ? 'bg-blue-100 text-blue-800'
                          : commodity.status === 'on_hold'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {commodity.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        commodity.status === 'complete'
                          ? 'bg-green-500'
                          : commodity.status === 'in_process'
                          ? 'bg-blue-500'
                          : commodity.status === 'on_hold'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${commodity.completionPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Child Classifications */}
                {commodity.children && commodity.children.length > 0 && (
                  <div className="ml-8 mt-3 space-y-2 border-l-2 border-gray-200 pl-4">
                    {commodity.children.map((child) => (
                      <div
                        key={child.id}
                        className="flex items-center justify-between py-2 text-sm"
                      >
                        <div className="flex items-center space-x-2">
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-gray-700">{child.name}</span>
                          <span className="text-gray-500">• {child.attributes} attributes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-600">{child.completion}%</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              child.status === 'complete'
                                ? 'border-green-300 text-green-700'
                                : child.status === 'in_process'
                                ? 'border-blue-300 text-blue-700'
                                : 'border-gray-300 text-gray-700'
                            }`}
                          >
                            {child.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ETC Date */}
                <div className="text-sm text-gray-600">
                  <span className="font-medium">ETC:</span> {commodity.etc}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
