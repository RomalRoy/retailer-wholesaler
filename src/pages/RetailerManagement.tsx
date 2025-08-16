import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Phone, Mail, MapPin } from "lucide-react";

const RetailerManagement = () => {
  const retailers = [
    {
      id: 1,
      name: "Metro Wholesale",
      contact: "John Smith",
      phone: "+1-555-0123",
      email: "john@metrowholesale.com",
      address: "123 Business St, City",
      status: "Active",
      orders: 45,
      revenue: "$12,500"
    },
    {
      id: 2,
      name: "City Market Co",
      contact: "Sarah Johnson",
      phone: "+1-555-0456",
      email: "sarah@citymarket.com",
      address: "456 Commerce Ave, Town",
      status: "Active",
      orders: 32,
      revenue: "$8,750"
    },
    {
      id: 3,
      name: "Local Goods LLC",
      contact: "Mike Davis",
      phone: "+1-555-0789",
      email: "mike@localgoods.com",
      address: "789 Trade Blvd, Village",
      status: "Inactive",
      orders: 18,
      revenue: "$4,200"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Retailer Management</h1>
          <p className="text-muted-foreground">Manage your retail partners and relationships</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Retailers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">+1 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">2</div>
              <p className="text-xs text-muted-foreground">66% active rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">95</div>
              <p className="text-xs text-muted-foreground">+12 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">$25,450</div>
              <p className="text-xs text-muted-foreground">+15% vs last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Retail Partners</CardTitle>
                <CardDescription>Manage your retail partner network</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search retailers..."
                    className="pl-10 w-64"
                  />
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Retailer
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Retailer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retailers.map((retailer) => (
                  <TableRow key={retailer.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{retailer.name}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Mail className="h-3 w-3" />
                          {retailer.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{retailer.contact}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Phone className="h-3 w-3" />
                          {retailer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {retailer.address}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={retailer.status === "Active" ? "default" : "secondary"}
                      >
                        {retailer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{retailer.orders}</TableCell>
                    <TableCell className="font-medium text-green-600">{retailer.revenue}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RetailerManagement;