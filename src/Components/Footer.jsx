import React from 'react';
import {
    PiFacebookLogo,
    PiTwitterLogo,
    PiInstagramLogo,
    PiLinkedinLogo,
    PiEnvelope,
    PiPhone,
    PiMapPin,
    PiArrowRight
} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary-darkblue)] text-white pt-20 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="Pulse Employment" className="h-12 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                            Connecting exceptional talent with world-class opportunities.
                            We're reshaping the future of employment through innovation and dedication.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: PiFacebookLogo, link: "https://www.facebook.com/profile.php?id=61586498556684" },
                                { Icon: PiTwitterLogo, link: "#" },
                                { Icon: PiInstagramLogo, link: "#" },
                                { Icon: PiLinkedinLogo, link: "#" }
                            ].map(({ Icon, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target={link !== "#" ? "_blank" : "_self"}
                                    rel={link !== "#" ? "noopener noreferrer" : ""}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary-red)] transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Jobs', 'How It Works', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-').replace('about-us', 'about')}`}
                                        className="text-gray-400 hover:text-[var(--color-primary-red)] transition-colors flex items-center text-sm"
                                    >
                                        <PiArrowRight className="w-4 h-4 mr-2" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <PiMapPin className="w-5 h-5 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                                <span>33 Edward Avenue,<br />Dandenong VIC 3175, Australia</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <PiPhone className="w-5 h-5 text-[var(--color-primary-red)]" />
                                <span>+61 417 713 034</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <PiEnvelope className="w-5 h-5 text-[var(--color-primary-red)]" />
                                <span>pulsemployment@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[var(--color-primary-red)] text-white text-sm"
                            />
                            <button className="w-full px-4 py-3 bg-[var(--color-primary-red)] rounded-lg font-semibold hover:bg-red-700 transition-all text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Pulse Employment. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
