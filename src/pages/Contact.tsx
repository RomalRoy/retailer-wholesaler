import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Headphones,
  BookOpen,
  Send
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get help via email with our support team",
      contact: "support@tradeconnect.com",
      availability: "24/7 Response"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available in app",
      availability: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Base",
      description: "Find answers in our documentation",
      contact: "help.tradeconnect.com",
      availability: "Always Available"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Business District, Suite 100",
      country: "United States",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "London",
      address: "456 Canary Wharf, Floor 12",
      country: "United Kingdom", 
      phone: "+44 20 7123 4567"
    },
    {
      city: "Singapore",
      address: "789 Marina Bay, Level 15",
      country: "Singapore",
      phone: "+65 6123 4567"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Headphones className="h-3 w-3 mr-1" />
              24/7 Support Available
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Get in touch with
              <span className="text-primary"> our team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Have questions about our platform? Need help getting started? 
              Our expert team is here to support your business success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How can we help you?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="font-semibold text-primary">{method.contact}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{method.availability}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="gradient-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" variant="hero" className="w-full">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Global Offices</h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-foreground">{office.city}, {office.country}</div>
                              <div className="text-muted-foreground text-sm">{office.address}</div>
                              <div className="text-primary text-sm mt-1">{office.phone}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="gradient-card border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Need immediate help?</CardTitle>
                    <CardDescription>
                      For urgent technical issues, our support team is available 24/7
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Start Live Chat
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly will I get a response?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  We typically respond to all inquiries within 2-4 hours during business hours. 
                  For urgent technical issues, our 24/7 support team responds within 30 minutes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom demos?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Yes! We provide personalized demos tailored to your business needs. 
                  Contact our sales team to schedule a custom demonstration.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you help with data migration?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Absolutely. Our implementation team specializes in seamless data migration 
                  from existing systems with minimal downtime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide training?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Yes, we offer comprehensive training programs including live sessions, 
                  video tutorials, and detailed documentation for all user roles.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;