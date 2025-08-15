import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Package, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Globe,
  BarChart3,
  Handshake,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Inventory Management",
      description: "Real-time stock tracking and automated inventory updates across all channels."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Retailer Network",
      description: "Connect with verified retailers and expand your distribution network."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Sales Analytics",
      description: "Comprehensive reporting and insights to optimize your business performance."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing for all transactions."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed in your business."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Expand your business internationally with multi-currency and multi-language support."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase sales efficiency by 60%",
    "Automate 90% of routine tasks",
    "24/7 real-time inventory tracking",
    "Seamless integration with existing systems",
    "Advanced analytics and reporting"
  ];

  const stats = [
    { value: "10,000+", label: "Active Businesses" },
    { value: "$2.5B+", label: "Transactions Processed" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "150+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="h-3 w-3 mr-1" />
                  Trusted by 10,000+ Businesses
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Connect. Trade. 
                  <span className="text-primary"> Grow.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  The ultimate B2B marketplace platform connecting retailers and wholesalers. 
                  Streamline your operations, expand your network, and accelerate growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="hero" asChild>
                  <Link to="/signup">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Professional B2B marketplace connecting retailers and wholesalers"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              <BarChart3 className="h-3 w-3 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to scale your business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and features you need 
              to manage your B2B operations efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Handshake className="h-3 w-3 mr-1" />
                  Proven Results
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Transform your business operations
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join thousands of successful businesses that have revolutionized 
                  their operations with our platform.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="premium" asChild>
                <Link to="/pricing">
                  View Pricing Plans
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center">Ready to get started?</CardTitle>
                  <CardDescription className="text-center">
                    Join our platform today and transform your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Free Trial</div>
                    <p className="text-muted-foreground">30-day free trial, no credit card required</p>
                  </div>
                  <Button size="lg" variant="hero" className="w-full" asChild>
                    <Link to="/signup">Start Free Trial</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join thousands of businesses already using TradeConnect to streamline 
              their operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;