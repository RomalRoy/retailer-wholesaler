import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Download, FileText, TrendingUp, DollarSign, Calendar, Eye } from "lucide-react";

const ReportsInvoices = () => {
  const invoices = [
    {
      id: 1,
      number: "INV-2024-001",
      customer: "Metro Wholesale",
      amount: 2500,
      date: "2024-01-10",
      dueDate: "2024-01-25",
      status: "Paid"
    },
    {
      id: 2,
      number: "INV-2024-002",
      customer: "City Market Co",
      amount: 3200,
      date: "2024-01-12",
      dueDate: "2024-01-27",
      status: "Overdue"
    },
    {
      id: 3,
      number: "INV-2024-003",
      customer: "Local Goods LLC",
      amount: 1800,
      date: "2024-01-15",
      dueDate: "2024-01-30",
      status: "Pending"
    },
    {
      id: 4,
      number: "INV-2024-004",
      customer: "Fresh Market Inc",
      amount: 4100,
      date: "2024-01-18",
      dueDate: "2024-02-02",
      status: "Sent"
    }
  ];

  const reports = [
    {
      id: 1,
      name: "Monthly Sales Report",
      type: "Sales",
      period: "January 2024",
      generated: "2024-01-31",
      size: "2.3 MB"
    },
    {
      id: 2,
      name: "Inventory Analysis",
      type: "Inventory",
      period: "Q4 2023",
      generated: "2024-01-05",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "Customer Payment Summary",
      type: "Financial",
      period: "December 2023",
      generated: "2024-01-03",
      size: "856 KB"
    },
    {
      id: 4,
      name: "Product Performance",
      type: "Analytics",
      period: "January 2024",
      generated: "2024-01-30",
      size: "3.1 MB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "default";
      case "Overdue":
        return "destructive";
      case "Pending":
        return "secondary";
      case "Sent":
        return "outline";
      default:
        return "outline";
    }
  };

  const getReportTypeColor = (type: string) => {
    switch (type) {
      case "Sales":
        return "default";
      case "Inventory":
        return "secondary";
      case "Financial":
        return "outline";
      case "Analytics":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Invoices</h1>
          <p className="text-muted-foreground">Generate reports and manage invoice documentation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">156</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Outstanding Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$15,400</div>
              <p className="text-xs text-muted-foreground">8 overdue invoices</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Paid This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$28,750</div>
              <p className="text-xs text-muted-foreground">+18% vs last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Reports Generated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">47</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="invoices" className="space-y-6">
          <TabsList>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Invoice Management</CardTitle>
                    <CardDescription>Create, view, and manage customer invoices</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search invoices..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Invoice
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Invoice Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.number}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3 text-muted-foreground" />
                            {invoice.amount.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            {invoice.date}
                          </div>
                        </TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(invoice.status)}>
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              PDF
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Business Reports</CardTitle>
                    <CardDescription>Generate and download business analytics reports</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search reports..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Sales Report</h3>
                        <p className="text-sm text-muted-foreground">Revenue & sales metrics</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Inventory Report</h3>
                        <p className="text-sm text-muted-foreground">Stock levels & movement</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
                        <DollarSign className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Financial Report</h3>
                        <p className="text-sm text-muted-foreground">Payments & receivables</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Generated</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{report.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getReportTypeColor(report.type)}>
                            {report.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{report.period}</TableCell>
                        <TableCell>{report.generated}</TableCell>
                        <TableCell className="text-muted-foreground">{report.size}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReportsInvoices;