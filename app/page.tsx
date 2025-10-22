import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Database, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Mock data for POC - will be replaced with actual database queries
const mockMetrics = {
  totalCommodities: 80,
  completedCommodities: 1,
  inProcessCommodities: 4,
  notStartedCommodities: 75,
  avgAttributeCompletion: 92.5,
  totalComponents: 1250,
  classifiedComponents: 875,
};

const mockCommodities = [
  { name: 'Valves', status: 'complete', completion: 100, etc: '6/2/2023' },
  { name: 'Circuit Breakers', status: 'on_hold', completion: 85, etc: 'TBD' },
  { name: 'Fasteners', status: 'in_process', completion: 75, etc: '6/2/2023' },
  { name: 'Wire Harnesses', status: 'late_to_plan', completion: 30, etc: '04/01/2023' },
  { name: 'Motors', status: 'in_process', completion: 30, etc: '3/1/2023' },
];

export default function DashboardPage() {
  const completionRate = ((mockMetrics.completedCommodities / mockMetrics.totalCommodities) * 100).toFixed(1);
  const classificationRate = ((mockMetrics.classifiedComponents / mockMetrics.totalComponents) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Classification and Attribute Management System Overview
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Commodities</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.totalCommodities}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {completionRate}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockMetrics.completedCommodities}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Classification schemas ready
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Process</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {mockMetrics.inProcessCommodities}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently being developed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Not Started</CardTitle>
            <AlertCircle className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">
              {mockMetrics.notStartedCommodities}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Awaiting classification
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Classification Progress */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Commodity Classification Progress</CardTitle>
            <CardDescription>
              Development status across all commodity categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Not Started</span>
                <span className="font-semibold">{mockMetrics.notStartedCommodities}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">In-process</span>
                <span className="font-semibold">{mockMetrics.inProcessCommodities}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Complete</span>
                <span className="font-semibold">{mockMetrics.completedCommodities}</span>
              </div>

              {/* Progress Bar */}
              <div className="pt-4">
                <div className="flex h-2 overflow-hidden rounded-full bg-gray-200">
                  <div className="bg-gray-400" style={{ width: `${(mockMetrics.notStartedCommodities / mockMetrics.totalCommodities) * 100}%` }}></div>
                  <div className="bg-blue-500" style={{ width: `${(mockMetrics.inProcessCommodities / mockMetrics.totalCommodities) * 100}%` }}></div>
                  <div className="bg-green-500" style={{ width: `${(mockMetrics.completedCommodities / mockMetrics.totalCommodities) * 100}%` }}></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>90%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Component Classification</CardTitle>
            <CardDescription>
              Total components classified with attributes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">{mockMetrics.classifiedComponents}</p>
                  <p className="text-sm text-gray-600">of {mockMetrics.totalComponents} components</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{classificationRate}%</p>
                  <p className="text-sm text-gray-600">classified</p>
                </div>
              </div>

              <div className="pt-2">
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full bg-blue-600" style={{ width: `${classificationRate}%` }}></div>
                </div>
              </div>

              <div className="pt-2 text-sm text-gray-600">
                <p>Average attribute completion: <span className="font-semibold">{mockMetrics.avgAttributeCompletion}%</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Commodity Classification Development</CardTitle>
          <CardDescription>
            Status and estimated completion dates for active commodities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Commodity</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Completion</th>
                  <th className="text-left py-3 px-4 font-medium">ETC</th>
                </tr>
              </thead>
              <tbody>
                {mockCommodities.map((commodity, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-3 px-4">{commodity.name}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        commodity.status === 'complete' ? 'bg-green-100 text-green-800' :
                        commodity.status === 'in_process' ? 'bg-blue-100 text-blue-800' :
                        commodity.status === 'on_hold' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {commodity.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">{commodity.completion}%</td>
                    <td className="py-3 px-4">{commodity.etc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
