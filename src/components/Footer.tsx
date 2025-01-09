import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EventHub</h3>
            <p className="text-gray-400">
              Discover and book the best events in your area.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-400 hover:text-white">
                Contact
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 EventHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;