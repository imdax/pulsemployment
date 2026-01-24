import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiList, PiX, PiPhone, PiEnvelope, PiFacebookLogo, PiTwitterLogo, PiLinkedinLogo, PiInstagramLogo } from "react-icons/pi";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Job Search", path: "/jobs" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col w-full z-50">
      {/* SECTION 1: Top Header Bar (Red Strip) */}
      <div className="bg-[var(--color-primary-red)] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <PiPhone className="h-4 w-4" />
              <span className="font-medium">Call / WhatsApp: +61 417 713 034</span>
            </div>
            <div className="flex items-center space-x-2">
              <PiEnvelope className="h-4 w-4" />
              <span className="font-medium">pulsemployment@gmail.com</span>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">Follow Us:</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-200 transition-colors"><PiFacebookLogo className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><PiTwitterLogo className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><PiLinkedinLogo className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-200 transition-colors"><PiInstagramLogo className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Main Navigation (Dark Header) */}
      <nav className="bg-[var(--color-primary-darkblue)] text-white shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* LOGO */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-wider leading-none">PULS</span>
                <span className="text-[var(--color-primary-red)] text-sm tracking-[0.2em] font-medium leading-none">EMPLOYMENT</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-primary-red)] ${isActive(link.path) ? "text-[var(--color-primary-red)]" : "text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden lg:block">
              <Link to="/apply">
                {/* Custom styling or standard Button component */}
                <button className="bg-[var(--color-primary-red)] hover:bg-red-700 text-white px-6 py-3 font-semibold rounded transition-colors text-sm uppercase tracking-wide">
                  Apply Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[var(--color-primary-red)] focus:outline-none"
              >
                {isOpen ? <PiX className="h-8 w-8" /> : <PiList className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[var(--color-primary-darkblue)] border-t border-gray-800 absolute w-full z-50">
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                    ? "text-[var(--color-primary-red)] bg-white/5"
                    : "text-gray-200 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/apply" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[var(--color-primary-red)] text-white px-4 py-3 rounded font-semibold uppercase">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
