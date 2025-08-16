import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, CreditCard, AlertCircle, CheckCircle, Clock } from "lucide-react";

const CreditPayment = () => {
  const creditAccounts = [
    {
      id: 1,
      retailer: "Metro Wholesale",
      creditLimit: 15000,
      usedCredit: 8500,
      availableCredit: 6500,
      status: "Active",
      lastPayment: "2024-01-10",
      paymentStatus: "Paid"
    },
    {
      id: 2,
      retailer: "City Market Co",
      creditLimit: 10000,
      usedCredit: 7200,
      availableCredit: 2800,
      status: "Active",
      lastPayment: "2024-01-05",
      paymentStatus: "Overdue"
    },
    {
      id: 3,
      retailer: "Local Goods LLC",
      creditLimit: 5000,
      usedCredit: 1200,
      availableCredit: 3800,
      status: "Suspended",
      lastPayment: "2023-12-20",
      paymentStatus: "Pending"
    }
  ];

  const payments = [
    {
      id: 1,
      invoice: "INV-2024-001",
      retailer: "Metro Wholesale",
      amount: 2500,
      dueDate: "2024-01-15",
      status: "Paid",
      paymentDate: "2024-01-10"
    },
    {
      id: 2,
      invoice: "INV-2024-002",
      retailer: "City Market Co",
      amount: 3200,
      dueDate: "2024-01-12",
      status: "Overdue",
      paymentDate: null
    },
    {
      id: 3,
      invoice: "INV-2024-003",
      retailer: "Local Goods LLC",
      amount: 1800,
      dueDate: "2024-01-20",
      status: "Pending",
      paymentDate: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Overdue":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Credit & Payment Management</h1>
          <p className="text-muted-foreground">Manage credit limits and payment tracking</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Credit Issued</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$30,000</div>
              <p className="text-xs text-muted-foreground">Across all retailers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Credit Utilized</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">$16,900</div>
              <p className="text-xs text-muted-foreground">56% utilization</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Outstanding Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$5,000</div>
              <p className="text-xs text-muted-foreground">2 overdue invoices</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">This Month Received</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$7,300</div>
              <p className="text-xs text-muted-foreground">+22% vs last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="credit" className="space-y-6">
          <TabsList>
            <TabsTrigger value="credit">Credit Management</TabsTrigger>
            <TabsTrigger value="payments">Payment Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="credit">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Credit Accounts</CardTitle>
                    <CardDescription>Manage retailer credit limits and usage</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search accounts..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Credit Account
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Retailer</TableHead>
                      <TableHead>Credit Limit</TableHead>
                      <TableHead>Used Credit</TableHead>
                      <TableHead>Available Credit</TableHead>
                      <TableHead>Utilization</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {creditAccounts.map((account) => {
                      const utilization = (account.usedCredit / account.creditLimit) * 100;
                      return (
                        <TableRow key={account.id}>
                          <TableCell className="font-medium">{account.retailer}</TableCell>
                          <TableCell>${account.creditLimit.toLocaleString()}</TableCell>
                          <TableCell>${account.usedCredit.toLocaleString()}</TableCell>
                          <TableCell className="text-green-600">${account.availableCredit.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-secondary rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    utilization > 80 ? 'bg-red-500' : 
                                    utilization > 60 ? 'bg-yellow-500' : 'bg-green-500'
                                  }`}
                                  style={{ width: `${utilization}%` }}
                                />
                              </div>
                              <span className="text-sm">{utilization.toFixed(0)}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={account.status === "Active" ? "default" : "secondary"}
                            >
                              {account.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <CreditCard className="h-3 w-3 mr-1" />
                              Adjust
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Payment Tracking</CardTitle>
                    <CardDescription>Monitor invoice payments and outstanding amounts</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search payments..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Record Payment
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Retailer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.invoice}</TableCell>
                        <TableCell>{payment.retailer}</TableCell>
                        <TableCell>${payment.amount.toLocaleString()}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>{payment.paymentDate || "-"}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(payment.status)}
                            <Badge 
                              variant={
                                payment.status === "Paid" ? "default" : 
                                payment.status === "Overdue" ? "destructive" : "secondary"
                              }
                            >
                              {payment.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            {payment.status === "Paid" ? "View" : "Mark Paid"}
                          </Button>
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

export default CreditPayment;