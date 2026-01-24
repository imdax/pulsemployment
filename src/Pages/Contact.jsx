import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../Components/Button';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-[var(--color-primary-darkblue)] py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-300">We are here to help you with your inquiries.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-8">Get In Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-[var(--color-primary-red)] mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Head Office</h3>
                                    <p className="text-gray-600">33 Edward Avenue<br />Dandenong VIC 3175, Australia</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-[var(--color-primary-red)] mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">pulsemployment@gmail.com</p>
                                    <p className="text-sm text-gray-400 mt-1">We respond within 24 hours.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-[var(--color-primary-red)] mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+61 417 713 034</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-[var(--color-primary-red)] mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM (AEST)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] focus:border-transparent outline-none" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] focus:border-transparent outline-none" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <Button variant="primary" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
