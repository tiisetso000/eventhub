import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            WeOn
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="text-gray-700 hover:text-primary dark:text-gray-200">
              Events
            </Link>
            <Link to="/saved-events" className="text-gray-700 hover:text-primary dark:text-gray-200">
              Saved Events
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary dark:text-gray-200">
              Contact
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/events"
              className="block text-gray-700 hover:text-primary dark:text-gray-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/saved-events"
              className="block text-gray-700 hover:text-primary dark:text-gray-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Saved Events
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary dark:text-gray-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
