import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Settings, 
  Shield, 
  Database, 
  Activity, 
  FileText, 
  Lock, 
  UserCheck,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const systemStats = [
    { title: "Total Users", value: "2,847", change: "+12%", icon: Users, status: "normal" },
    { title: "Active Sessions", value: "156", change: "+8%", icon: Activity, status: "normal" },
    { title: "System Health", value: "98.2%", change: "+0.3%", icon: CheckCircle, status: "good" },
    { title: "Failed Logins", value: "23", change: "-15%", icon: AlertTriangle, status: "warning" }
  ];

  const recentActivities = [
    { action: "User Registration", user: "john.doe@email.com", timestamp: "2 minutes ago", status: "success" },
    { action: "Failed Login Attempt", user: "admin@company.com", timestamp: "15 minutes ago", status: "warning" },
    { action: "Data Backup", user: "System", timestamp: "1 hour ago", status: "success" },
    { action: "Permission Updated", user: "jane.smith@email.com", timestamp: "2 hours ago", status: "success" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-green-100 text-green-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatColor = (status: string) => {
    switch (status) {
      case "good": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "error": return "text-red-600";
      default: return "text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">System Administration</h2>
          <p className="text-muted-foreground">Monitor and manage your platform's core functionality.</p>
        </div>

        {/* System Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${getStatColor(stat.status)}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getStatColor(stat.status)}`}>{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent System Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent System Activities</CardTitle>
              <CardDescription>Latest system events and user actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* Admin Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Administrative Actions</CardTitle>
              <CardDescription>System management and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <Button variant="outline" className="h-16 flex items-center justify-start space-x-3">
                  <Users className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">User Management</div>
                    <div className="text-xs text-muted-foreground">Manage user accounts and permissions</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-16 flex items-center justify-start space-x-3">
                  <Database className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Database Administration</div>
                    <div className="text-xs text-muted-foreground">Monitor and manage database operations</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-16 flex items-center justify-start space-x-3">
                  <Lock className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Security Settings</div>
                    <div className="text-xs text-muted-foreground">Configure security policies and access controls</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-16 flex items-center justify-start space-x-3">
                  <FileText className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">System Logs</div>
                    <div className="text-xs text-muted-foreground">View detailed system logs and reports</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-16 flex items-center justify-start space-x-3">
                  <Settings className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">System Configuration</div>
                    <div className="text-xs text-muted-foreground">Modify system settings and preferences</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;