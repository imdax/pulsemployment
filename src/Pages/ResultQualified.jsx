import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, FileText, ArrowRight } from 'lucide-react';
import Button from '../Components/Button';

const ResultQualified = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Banner */}
            <div className="bg-green-600 text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Congratulations!</h1>
                    <p className="text-xl md:text-2xl text-green-100 font-medium">You appear to be eligible for Australian deployment.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Based on your responses, your profile matches the key criteria for our Skilled Migration program. This is a fantastic first step! We would love to discuss your specific opportunities in detail.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-center text-[var(--color-primary-darkblue)] mb-12">Your Next Steps</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <Phone className="w-6 h-6 text-[var(--color-primary-darkblue)]" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-3">1. Free Consultation</h3>
                        <p className="text-gray-600">Speak with one of our recruitment specialists to verify your details and discuss available roles.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <FileText className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-3">2. Document Review</h3>
                        <p className="text-gray-600">We will guide you through gathering the necessary legal and educational documents for your visa application.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[var(--color-primary-darkblue)] rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Ready to proceed?</h2>
                        <p className="text-blue-200 mb-8 mb-8 max-w-2xl mx-auto">Slots for consultations are limited. Secure your appointment today to fast-track your application.</p>
                        <Link to="/contact">
                            <Button variant="primary" size="large" className="bg-[var(--color-primary-red)] border-transparent hover:bg-red-600 text-white px-12 py-4 text-lg">
                                Book Consultation Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultQualified;
