import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, DollarSign, TrendingUp, Percent, Calculator } from 'lucide-react';

interface PriceRule {
  id: string;
  name: string;
  type: 'fixed' | 'percentage' | 'bulk';
  category: string;
  minQuantity?: number;
  discount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

interface ProductPrice {
  id: string;
  name: string;
  sku: string;
  category: string;
  costPrice: number;
  sellingPrice: number;
  margin: number;
  lastUpdated: string;
}

const PricingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPriceDialogOpen, setIsPriceDialogOpen] = useState(false);
  const [isRuleDialogOpen, setIsRuleDialogOpen] = useState(false);

  // Mock pricing data
  const [productPrices, setProductPrices] = useState<ProductPrice[]>([
    {
      id: '1',
      name: 'Apple iPhone 14',
      sku: 'APL-IP14-128',
      category: 'Electronics',
      costPrice: 800,
      sellingPrice: 999,
      margin: 24.9,
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      name: 'Samsung Galaxy S23',
      sku: 'SAM-GS23-256',
      category: 'Electronics',
      costPrice: 700,
      sellingPrice: 899,
      margin: 28.4,
      lastUpdated: '2024-01-14'
    },
    {
      id: '3',
      name: 'Dell Laptop XPS 13',
      sku: 'DEL-XPS13-512',
      category: 'Computers',
      costPrice: 1000,
      sellingPrice: 1299,
      margin: 29.9,
      lastUpdated: '2024-01-13'
    },
    {
      id: '4',
      name: 'Wireless Bluetooth Headphones',
      sku: 'BTH-WL-001',
      category: 'Accessories',
      costPrice: 120,
      sellingPrice: 199,
      margin: 65.8,
      lastUpdated: '2024-01-12'
    }
  ]);

  const [priceRules, setPriceRules] = useState<PriceRule[]>([
    {
      id: '1',
      name: 'Electronics 10% Off',
      type: 'percentage',
      category: 'Electronics',
      discount: 10,
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      isActive: true
    },
    {
      id: '2',
      name: 'Bulk Computers Discount',
      type: 'bulk',
      category: 'Computers',
      minQuantity: 5,
      discount: 15,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      isActive: true
    },
    {
      id: '3',
      name: 'Accessories Fixed Discount',
      type: 'fixed',
      category: 'Accessories',
      discount: 25,
      startDate: '2024-01-10',
      endDate: '2024-01-25',
      isActive: false
    }
  ]);

  const categories = ['all', 'Electronics', 'Computers', 'Accessories', 'Clothing', 'Home & Garden'];

  const filteredPrices = productPrices.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredRules = priceRules.filter(rule => {
    const matchesSearch = rule.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRuleTypeBadge = (type: string) => {
    switch (type) {
      case 'fixed':
        return <Badge variant="default">Fixed Amount</Badge>;
      case 'percentage':
        return <Badge variant="secondary">Percentage</Badge>;
      case 'bulk':
        return <Badge variant="outline">Bulk Discount</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? 
      <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge> :
      <Badge variant="secondary">Inactive</Badge>;
  };

  const totalProducts = productPrices.length;
  const averageMargin = productPrices.reduce((sum, item) => sum + item.margin, 0) / totalProducts;
  const activeRules = priceRules.filter(rule => rule.isActive).length;
  const totalRevenue = productPrices.reduce((sum, item) => sum + item.sellingPrice, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pricing Management</h1>
          <p className="text-muted-foreground">Manage product prices and pricing rules</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Margin</CardTitle>
              <Percent className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{averageMargin.toFixed(1)}%</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Rules</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{activeRules}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Est. Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products or rules..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Prices and Rules */}
        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList>
            <TabsTrigger value="prices">Product Prices</TabsTrigger>
            <TabsTrigger value="rules">Pricing Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="prices">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Product Prices</CardTitle>
                  <CardDescription>
                    Manage individual product pricing and margins
                  </CardDescription>
                </div>
                <Dialog open={isPriceDialogOpen} onOpenChange={setIsPriceDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Update Price
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Update Product Price</DialogTitle>
                      <DialogDescription>
                        Update pricing for a product.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="product" className="text-right">Product</Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            {productPrices.map((product) => (
                              <SelectItem key={product.id} value={product.id}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="costPrice" className="text-right">Cost Price</Label>
                        <Input id="costPrice" type="number" step="0.01" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sellingPrice" className="text-right">Selling Price</Label>
                        <Input id="sellingPrice" type="number" step="0.01" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={() => setIsPriceDialogOpen(false)}>
                        Update Price
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Cost Price</TableHead>
                      <TableHead>Selling Price</TableHead>
                      <TableHead>Margin %</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPrices.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>${item.costPrice}</TableCell>
                        <TableCell>${item.sellingPrice}</TableCell>
                        <TableCell className="text-green-600 font-medium">{item.margin}%</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Pricing Rules</CardTitle>
                  <CardDescription>
                    Create and manage dynamic pricing rules and discounts
                  </CardDescription>
                </div>
                <Dialog open={isRuleDialogOpen} onOpenChange={setIsRuleDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Rule
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Create Pricing Rule</DialogTitle>
                      <DialogDescription>
                        Create a new pricing rule or discount.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ruleName" className="text-right">Rule Name</Label>
                        <Input id="ruleName" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ruleType" className="text-right">Type</Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select rule type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fixed">Fixed Amount</SelectItem>
                            <SelectItem value="percentage">Percentage</SelectItem>
                            <SelectItem value="bulk">Bulk Discount</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ruleCategory" className="text-right">Category</Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.slice(1).map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="discount" className="text-right">Discount</Label>
                        <Input id="discount" type="number" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="startDate" className="text-right">Start Date</Label>
                        <Input id="startDate" type="date" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="endDate" className="text-right">End Date</Label>
                        <Input id="endDate" type="date" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={() => setIsRuleDialogOpen(false)}>
                        Create Rule
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rule Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRules.map((rule) => (
                      <TableRow key={rule.id}>
                        <TableCell className="font-medium">{rule.name}</TableCell>
                        <TableCell>{getRuleTypeBadge(rule.type)}</TableCell>
                        <TableCell>{rule.category}</TableCell>
                        <TableCell>
                          {rule.type === 'percentage' ? `${rule.discount}%` : 
                           rule.type === 'fixed' ? `$${rule.discount}` : 
                           `${rule.discount}% (${rule.minQuantity}+ items)`}
                        </TableCell>
                        <TableCell>{rule.startDate}</TableCell>
                        <TableCell>{rule.endDate}</TableCell>
                        <TableCell>{getStatusBadge(rule.isActive)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">
                              {rule.isActive ? 'Disable' : 'Enable'}
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

export default PricingManagement;