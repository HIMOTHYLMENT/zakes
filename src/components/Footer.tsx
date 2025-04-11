
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zakes-darkgray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/e8d69b3c-12b2-48b7-92dd-7a17abdc3b88.png" 
                alt="Zakes Mobile Kitchen Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400">
              Serving the most delicious street food kotas in town. Made with love
              and the finest ingredients.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-zakes-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-zakes-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-zakes-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-zakes-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-zakes-red transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-zakes-red transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-zakes-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-zakes-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-zakes-red mt-1" />
                <p className="text-gray-400">Johannesburg, South Africa</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-zakes-red" />
                <p className="text-gray-400">+27 000 000 0000</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-zakes-red" />
                <p className="text-gray-400">info@zakeskitchen.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zakes Mobile Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
