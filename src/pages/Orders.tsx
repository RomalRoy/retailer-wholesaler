import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, Package, Plus } from "lucide-react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const pendingOrders = [
    {
      id: "ORD-001",
      retailer: "QuickMart Store",
      items: 15,
      total: "₹25,000",
      date: "2024-01-15",
      status: "pending"
    },
    {
      id: "ORD-002", 
      retailer: "Fresh Grocery",
      items: 8,
      total: "₹12,500",
      date: "2024-01-15",
      status: "pending"
    }
  ];

  const confirmedOrders = [
    {
      id: "ORD-003",
      retailer: "Super Store",
      items: 22,
      total: "₹45,000",
      date: "2024-01-14",
      status: "confirmed",
      deliveryDate: "2024-01-16"
    }
  ];

  const deliveredOrders = [
    {
      id: "ORD-004",
      retailer: "Corner Shop",
      items: 12,
      total: "₹18,000",
      date: "2024-01-12",
      status: "delivered",
      deliveredDate: "2024-01-14"
    }
  ];

  const offlineSales = [
    {
      id: "SALE-001",
      customer: "Walk-in Customer",
      items: 5,
      total: "₹3,500",
      date: "2024-01-15",
      paymentMode: "Cash"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'delivered': return <Package className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'confirmed': return 'default';
      case 'delivered': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Orders Management</h1>
          <p className="text-muted-foreground">Manage online bookings and offline sales</p>
        </div>

        <Tabs defaultValue="online" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="online">Online Bookings</TabsTrigger>
            <TabsTrigger value="offline">Offline Sales</TabsTrigger>
          </TabsList>

          <TabsContent value="online" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="pending" className="space-y-4">
              <TabsList>
                <TabsTrigger value="pending">Pending Orders ({pendingOrders.length})</TabsTrigger>
                <TabsTrigger value="confirmed">Confirmed Orders ({confirmedOrders.length})</TabsTrigger>
                <TabsTrigger value="delivered">Delivered Orders ({deliveredOrders.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="pending">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Orders</CardTitle>
                    <CardDescription>Orders awaiting approval or processing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.retailer}</TableCell>
                            <TableCell>{order.items} items</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <Badge variant={getStatusVariant(order.status)} className="flex items-center gap-1 w-fit">
                                {getStatusIcon(order.status)}
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                                <Button size="sm" variant="default">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button size="sm" variant="destructive">
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
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

              <TabsContent value="confirmed">
                <Card>
                  <CardHeader>
                    <CardTitle>Confirmed Orders</CardTitle>
                    <CardDescription>Orders confirmed and ready for delivery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Order Date</TableHead>
                          <TableHead>Delivery Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {confirmedOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.retailer}</TableCell>
                            <TableCell>{order.items} items</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.deliveryDate}</TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="delivered">
                <Card>
                  <CardHeader>
                    <CardTitle>Delivered Orders</CardTitle>
                    <CardDescription>Successfully completed orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Order Date</TableHead>
                          <TableHead>Delivered Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {deliveredOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.retailer}</TableCell>
                            <TableCell>{order.items} items</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.deliveredDate}</TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
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
          </TabsContent>

          <TabsContent value="offline" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search sales..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Sale
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Offline Sales</CardTitle>
                <CardDescription>Manual sales entries and walk-in customers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sale ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Payment Mode</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {offlineSales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.id}</TableCell>
                        <TableCell>{sale.customer}</TableCell>
                        <TableCell>{sale.items} items</TableCell>
                        <TableCell>{sale.total}</TableCell>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{sale.paymentMode}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
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

export default Orders;