import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[var(--color-primary-darkblue)] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl tracking-wider">Pulse<span className="text-[var(--color-primary-salmon)]">Employment</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-primary-salmon)] ${isActive(link.path) ? "text-[var(--color-primary-salmon)]" : "text-gray-200"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/apply">
              <Button variant="primary" size="small">Apply Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#151236]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                    ? "text-[var(--color-primary-salmon)] bg-opacity-10 bg-white"
                    : "text-gray-200 hover:text-white hover:bg-opacity-10 hover:bg-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setIsOpen(false)} className="block mt-4">
              <Button variant="primary" className="w-full">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
