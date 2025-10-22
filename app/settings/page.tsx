import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Server, Shield, Bell } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">
          System configuration and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-blue-600" />
              <CardTitle>Database Configuration</CardTitle>
            </div>
            <CardDescription>
              Manage database connections and data sources
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">Connection Status</p>
              <p className="text-sm text-gray-600">Ready to configure</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Data Sources</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PLM (Windchill) - Pending</li>
                <li>• ERP (Oracle) - Pending</li>
                <li>• PIM - Pending</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Server className="h-5 w-5 text-green-600" />
              <CardTitle>Integration Settings</CardTitle>
            </div>
            <CardDescription>
              Configure external system integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">API Endpoints</p>
              <p className="text-sm text-gray-600">No endpoints configured</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Sync Schedule</p>
              <p className="text-sm text-gray-600">Not configured</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <CardTitle>Data Governance</CardTitle>
            </div>
            <CardDescription>
              Manage data quality rules and governance policies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">Active Rules</p>
              <p className="text-sm text-gray-600">0 rules configured</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Data Stewards</p>
              <p className="text-sm text-gray-600">Not assigned</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-orange-600" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>
              Configure alerts and notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">Email Notifications</p>
              <p className="text-sm text-gray-600">Disabled</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Alert Frequency</p>
              <p className="text-sm text-gray-600">Not configured</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Info */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
          <CardDescription>
            Current system configuration and version
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-700">Version</p>
              <p className="text-gray-600">POC v0.1.0</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Environment</p>
              <p className="text-gray-600">Development</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Deployment</p>
              <p className="text-gray-600">Vercel</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
