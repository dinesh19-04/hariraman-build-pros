import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner",
      content: "HARIRAMAN BUILDERS transformed our vision into reality. The quality of work exceeded our expectations and they completed the project on time. Highly recommended!",
      rating: 5,
      project: "Residential Home Construction"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "Professional, reliable, and skilled. They built our office complex with excellent attention to detail. The team was communicative throughout the entire process.",
      rating: 5,
      project: "Commercial Office Building"
    },
    {
      name: "Anita Patel",
      role: "Property Developer",
      content: "Working with HARIRAMAN BUILDERS was a pleasure. Their expertise in construction and commitment to quality made our residential project a great success.",
      rating: 5,
      project: "Residential Complex"
    },
    {
      name: "Suresh Reddy",
      role: "Restaurant Owner",
      content: "They helped us renovate our restaurant space beautifully. The project was completed within budget and timeline. Excellent craftsmanship and customer service.",
      rating: 5,
      project: "Restaurant Renovation"
    },
    {
      name: "Maya Singh",
      role: "Homeowner",
      content: "Our kitchen renovation was handled professionally from start to finish. The attention to detail and quality of materials used was outstanding.",
      rating: 5,
      project: "Kitchen Renovation"
    },
    {
      name: "Vikram Gupta",
      role: "Property Manager",
      content: "HARIRAMAN BUILDERS has been our go-to contractor for multiple projects. Their reliability and quality workmanship make them stand out in the industry.",
      rating: 5,
      project: "Multiple Commercial Projects"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with HARIRAMAN BUILDERS.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients who trusted us with their construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="construction-card-shadow hover:shadow-lg transition-shadow relative">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-accent font-medium mt-1">
                      {testimonial.project}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Trust Through Quality
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our commitment to excellence has earned us the trust of countless clients. 
                We believe in building lasting relationships through quality work, 
                transparent communication, and reliable service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">Licensed and insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">Quality materials and workmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">Transparent pricing and timelines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">Comprehensive project warranties</span>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                4.9/5
              </div>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Average Client Rating
              </p>
              <p className="text-muted-foreground">
                Based on 150+ completed projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 construction-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Ready to start your construction project? Contact us today and experience 
            the HARIRAMAN BUILDERS difference for yourself.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;