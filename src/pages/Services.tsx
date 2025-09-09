import { Building, Home, Wrench, Palette, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-construction.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Complete home construction services from foundation to finishing",
      features: [
        "Custom home design and construction",
        "Home extensions and additions",
        "Kitchen and bathroom renovations",
        "Basement finishing",
        "Roofing and siding installation"
      ]
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Professional commercial building solutions for businesses",
      features: [
        "Office building construction",
        "Retail space development", 
        "Warehouse and industrial buildings",
        "Restaurant and hospitality construction",
        "Medical facility construction"
      ]
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform your existing spaces with our renovation expertise",
      features: [
        "Complete home renovations",
        "Kitchen and bathroom remodeling",
        "Basement conversions",
        "Attic renovations",
        "Structural modifications"
      ]
    },
    {
      icon: Palette,
      title: "Design & Planning",
      description: "Comprehensive design and project planning services",
      features: [
        "Architectural design consultation",
        "Project planning and management",
        "Permit and regulatory assistance",
        "Material selection guidance",
        "3D visualization and rendering"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Construction Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From residential homes to commercial buildings, we provide comprehensive 
                construction services with unmatched quality and professionalism.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={servicesImage} 
                alt="Construction services" 
                className="rounded-lg construction-card-shadow w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a full range of construction services to meet all your building needs, 
              from initial design to final completion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="construction-card-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Construction Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed on time, 
              within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial meeting to understand your vision and requirements" },
              { step: "02", title: "Planning", description: "Detailed project planning, design, and permit acquisition" },
              { step: "03", title: "Construction", description: "Professional construction with regular progress updates" },
              { step: "04", title: "Completion", description: "Final inspection, cleanup, and project handover" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 construction-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for a free consultation. We'll work with you to bring your construction vision to life.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;