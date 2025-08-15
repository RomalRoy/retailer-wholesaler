import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Store, MapPin, Users, Package } from "lucide-react";

const ShopSelector = () => {
  const shops = [
    {
      id: 1,
      name: "Main Wholesale Hub",
      type: "Wholesaler",
      location: "Downtown District",
      status: "active",
      orders: 45,
      inventory: 1250
    },
    {
      id: 2,
      name: "Retail Store - North",
      type: "Retailer",
      location: "North Avenue",
      status: "active",
      orders: 12,
      inventory: 320
    },
    {
      id: 3,
      name: "Express Outlet",
      type: "Retailer",
      location: "Mall Complex",
      status: "pending",
      orders: 8,
      inventory: 180
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Shop Selector</h1>
          <p className="text-muted-foreground">Choose which shop you'd like to manage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <Card key={shop.id} className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Store className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{shop.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {shop.location}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={shop.status === 'active' ? 'success' : 'secondary'}
                    className="text-xs"
                  >
                    {shop.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{shop.type}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Orders</p>
                        <p className="font-semibold">{shop.orders}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Inventory</p>
                        <p className="font-semibold">{shop.inventory}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={shop.status === 'active' ? 'default' : 'secondary'}
                    disabled={shop.status !== 'active'}
                  >
                    {shop.status === 'active' ? 'Access Shop' : 'Pending Approval'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSelector;