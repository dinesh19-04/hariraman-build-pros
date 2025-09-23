import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/hariramanbuilderslogo.png" 
                alt="HARIRAMAN BUILDERS Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl">HARIRAMAN BUILDERS</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional construction company dedicated to delivering quality 
              building services with excellence, reliability, and craftsmanship 
              that stands the test of time.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 97867 24827</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>hariramanbuilders@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/B3THvSaT8D38wHVaA?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                >
                  39, Kammavar Naidu Street<br />
                  Pudur Village, Ranipet Dist.<br />
                  TamilNadu, INDIA
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 97867 24827
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  hariramanbuilders@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 HARIRAMAN BUILDERS. All rights reserved. Built with quality and integrity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;