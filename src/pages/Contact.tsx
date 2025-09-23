import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 97867 24827"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hariramanbuilders@gmail.com"],
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["39, Kammavar Naidu Street", "Pudur Village, Ranipet Dist.", "TamilNadu, INDIA"],
      description: "Visit our office for consultation",
      isAddress: true
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "We're here when you need us"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your construction project? Contact HARIRAMAN BUILDERS today 
            for a free consultation and detailed quote.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="construction-card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 97867 24827"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Construction</SelectItem>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                          <SelectItem value="design">Design & Planning</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get in touch with us through any of the following methods. 
                  We're always ready to discuss your construction needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="construction-card-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {info.description}
                          </p>
                          {info.isAddress ? (
                            <a 
                              href="https://maps.app.goo.gl/B3THvSaT8D38wHVaA?g_st=aw"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-foreground hover:text-accent transition-colors"
                            >
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex}>{detail}</p>
                              ))}
                            </a>
                          ) : (
                            info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-sm text-foreground">
                                {detail}
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="construction-card-shadow border-accent">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      24/7 Emergency Service
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For urgent construction issues or emergencies
                    </p>
                    <p className="text-lg font-semibold text-accent">
                      +91 97867 24827
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Residential projects typically take 3-6 months, while commercial projects may take 6-12 months."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes, we provide detailed free estimates for all projects. Our team will assess your requirements and provide a comprehensive quote."
              },
              {
                question: "Are you licensed and insured?",
                answer: "Absolutely. We are fully licensed, bonded, and insured. We maintain all necessary certifications and comply with local building codes."
              },
              {
                question: "Do you handle permits and approvals?",
                answer: "Yes, we handle all necessary permits and regulatory approvals. Our team is familiar with local requirements and will manage the entire process."
              }
            ].map((faq, index) => (
              <Card key={index} className="construction-card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;