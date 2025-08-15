import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Package, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Globe,
  BarChart3,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Inventory Management",
      description: "Complete inventory control with real-time tracking, automated stock updates, and multi-location support.",
      features: [
        "Real-time stock tracking",
        "Automated reorder points",
        "Multi-location inventory",
        "Barcode scanning",
        "Stock adjustments",
        "Inventory reports"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Order Management",
      description: "Streamlined order processing from booking to delivery with approval workflows and status tracking.",
      features: [
        "Online order booking",
        "Order approval workflow",
        "Status tracking",
        "Delivery management",
        "Order history",
        "Automated notifications"
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pricing & Credit",
      description: "Flexible pricing management with multiple slabs, credit accounts, and payment tracking.",
      features: [
        "Dynamic pricing slabs",
        "Credit management",
        "Payment tracking",
        "Invoice generation",
        "Payment reminders",
        "Financial reporting"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reports",
      description: "Comprehensive business insights with customizable reports and real-time analytics.",
      features: [
        "Sales analytics",
        "Performance metrics",
        "Custom reports",
        "Export capabilities",
        "Data visualization",
        "Trend analysis"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access control and audit logs."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Applications",
      description: "Native mobile apps for iOS and Android with offline capabilities."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Communication Tools",
      description: "Built-in messaging, notifications, and collaboration features."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Holiday Management",
      description: "Holiday calendar management with automated business logic."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-location Support",
      description: "Manage multiple warehouses and retail locations from one platform."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "API Integration",
      description: "Robust APIs for seamless integration with existing business systems."
    }
  ];

  const userRoles = [
    {
      title: "Wholesaler Owner",
      description: "Complete platform access with full administrative controls",
      features: [
        "Order management & approval",
        "Inventory control",
        "Pricing management",
        "Retailer management",
        "Financial oversight",
        "User management",
        "Analytics & reporting"
      ]
    },
    {
      title: "Wholesaler Accountant",
      description: "Financial management and accounting focused access",
      features: [
        "Payment processing",
        "Invoice management",
        "Credit monitoring",
        "Financial reporting",
        "Offline sales entry",
        "Cash collection tracking"
      ]
    },
    {
      title: "Wholesaler Staff",
      description: "Operational staff with order processing capabilities",
      features: [
        "Order status updates",
        "Inventory checks",
        "Offline sales entry",
        "Basic reporting",
        "Task notifications"
      ]
    },
    {
      title: "Retailer",
      description: "Customer-focused interface for placing and tracking orders",
      features: [
        "Order placement",
        "Order tracking",
        "Credit account view",
        "Invoice access",
        "Communication tools",
        "Order history"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Package className="h-3 w-3 mr-1" />
              Comprehensive Features
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Powerful features for
              <span className="text-primary"> modern businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Everything you need to manage your B2B operations efficiently. From inventory 
              management to analytics, we've got you covered.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential tools that power your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Role-Based Access</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Different access levels for different users in your organization
            </p>
          </div>

          <Tabs defaultValue="owner" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="owner">Owner</TabsTrigger>
              <TabsTrigger value="accountant">Accountant</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="retailer">Retailer</TabsTrigger>
            </TabsList>
            
            {userRoles.map((role, index) => (
              <TabsContent key={index} value={index === 0 ? "owner" : index === 1 ? "accountant" : index === 2 ? "staff" : "retailer"}>
                <Card className="gradient-card border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">{role.title}</CardTitle>
                    <CardDescription className="text-lg">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {role.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Additional Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced capabilities to enhance your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to experience these features?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Start your free trial today and see how our platform can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;