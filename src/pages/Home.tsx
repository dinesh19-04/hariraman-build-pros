import { ArrowRight, CheckCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-construction.jpg";
import residentialImage from "@/assets/residential-project.jpg";
import commercialImage from "@/assets/commercial-project.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of construction experience"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Committed to delivering excellence in every project"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Projects completed on schedule with precision"
    }
  ];

  const projects = [
    {
      title: "Residential Construction",
      description: "Beautiful homes built with quality materials and attention to detail",
      image: residentialImage,
    },
    {
      title: "Commercial Projects", 
      description: "Professional commercial buildings designed for business success",
      image: commercialImage,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 construction-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Building Dreams with
            <span className="block text-accent">Professional Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up">
            Trusted construction company delivering quality building services with reliability, 
            craftsmanship, and integrity for over a decade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose HARIRAMAN BUILDERS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, quality, and reliability to deliver exceptional construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center construction-card-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Quality Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our commitment to excellence in construction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden construction-card-shadow hover:shadow-lg transition-shadow">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 construction-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for a free consultation and quote. Let's build something amazing together.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;