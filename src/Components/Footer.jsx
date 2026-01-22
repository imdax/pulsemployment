import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary-darkblue)] text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-4">Pulse<span className="text-[var(--color-primary-salmon)]">Employment</span></h3>
                        <p className="mb-4 text-sm leading-relaxed">
                            Connecting global talent with Australian opportunities. Transparent, ethical, and efficient recruitment solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-[var(--color-primary-salmon)] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[var(--color-primary-salmon)] transition-colors">About Us</Link></li>
                            <li><Link to="/jobs" className="hover:text-[var(--color-primary-salmon)] transition-colors">Job Search</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-[var(--color-primary-salmon)] transition-colors">How It Works</Link></li>
                            <li><Link to="/apply" className="hover:text-[var(--color-primary-salmon)] transition-colors">Apply Now</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/faqs" className="hover:text-[var(--color-primary-salmon)] transition-colors">FAQs</Link></li>
                            <li><Link to="/contact" className="hover:text-[var(--color-primary-salmon)] transition-colors">Contact Us</Link></li>
                            <li><Link to="#" className="hover:text-[var(--color-primary-salmon)] transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="hover:text-[var(--color-primary-salmon)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="text-[var(--color-primary-salmon)] mr-3 mt-1 flex-shrink-0" size={18} />
                                <span>Level 4, 123 Business St,<br />Sydney, NSW 2000, Australia</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-[var(--color-primary-salmon)] mr-3 flex-shrink-0" size={18} />
                                <span>+61 2 1234 5678</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-[var(--color-primary-salmon)] mr-3 flex-shrink-0" size={18} />
                                <span>support@pulseemployment.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Pulse Employment. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed for Global Talent.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
