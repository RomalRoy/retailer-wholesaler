import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Package,
  BarChart3,
  Shield,
  Headphones,
  Zap
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 49,
      annualPrice: 39,
      badge: null,
      features: [
        "Up to 5 users",
        "Basic inventory management",
        "Order processing",
        "Email support",
        "Basic reporting",
        "Mobile app access",
        "5GB storage"
      ],
      limitations: [
        "Limited integrations",
        "Basic analytics only"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      monthlyPrice: 99,
      annualPrice: 79,
      badge: "Most Popular",
      features: [
        "Up to 25 users",
        "Advanced inventory management",
        "Multi-location support",
        "Priority support",
        "Advanced reporting & analytics",
        "API access",
        "Custom pricing slabs",
        "Credit management",
        "50GB storage",
        "Third-party integrations"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      monthlyPrice: 199,
      annualPrice: 159,
      badge: "Best Value",
      features: [
        "Unlimited users",
        "Full platform access",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "Advanced API access",
        "White-label options",
        "SSO integration",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security features",
        "Training & onboarding"
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: "Additional Storage",
      price: 10,
      description: "Extra 100GB storage per month"
    },
    {
      name: "Premium Support",
      price: 25,
      description: "Priority support with faster response times"
    },
    {
      name: "Custom Integrations",
      price: 100,
      description: "Custom API integrations and development"
    },
    {
      name: "Advanced Training",
      price: 50,
      description: "Comprehensive training sessions for your team"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 30-day free trial with full access to all features. No credit card required."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Do you offer custom pricing for large enterprises?",
      answer: "Yes, we offer custom pricing and solutions for enterprises with specific requirements. Contact our sales team for details."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Star className="h-3 w-3 mr-1" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Choose the perfect plan for
              <span className="text-primary"> your business</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Start with our free trial and scale as you grow. No hidden fees, 
              no setup costs, and you can cancel anytime.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <Label htmlFor="billing-toggle" className="text-base">Monthly</Label>
              <Switch 
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="billing-toggle" className="text-base">
                Annual 
                <Badge variant="success" className="ml-2">Save 20%</Badge>
              </Label>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.badge ? 'border-primary shadow-brand scale-105' : 'border-border'} transition-all duration-300 hover:shadow-lg`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="px-4 py-1 text-sm font-semibold">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base mt-2 mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-lg text-muted-foreground font-normal">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-muted-foreground">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Button 
                    size="lg" 
                    variant={plan.badge ? "hero" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/signup">
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <div className="space-y-3">
                    <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      What's included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 space-y-2">
                        <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                          Limitations:
                        </div>
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="h-4 w-4 rounded-full bg-muted flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Optional Add-ons</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your plan with additional features and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    ${addon.price}<span className="text-sm text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {addon.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
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
              Ready to get started?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join thousands of businesses that trust TradeConnect to power their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/signup">
                  Start Free Trial
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

export default Pricing;