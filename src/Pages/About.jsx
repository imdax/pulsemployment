import React from 'react';
import { Target, Heart, Globe, Users } from 'lucide-react';
import CTABanner from '../Components/CTABanner';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-[var(--color-primary-darkblue)] text-white py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
                    <p className="text-xl text-gray-300">
                        A team of recruitment and legal experts dedicated to connecting global talent with Australian opportunities.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--color-primary-red)] font-semibold tracking-wider uppercase text-sm">Our Mission</span>
                            <h2 className="mt-2 text-3xl font-bold text-[var(--color-primary-darkblue)] mb-6"> bridging borders with integrity.</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                At Pulse Employment, we believe that talent knows no boundaries. Our mission is to create a transparent, efficient, and legally compliant pathway for skilled workers worldwide to access the thriving Australian job market.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We are not just recruiters; we are your partners in migration, ensuring every step from application to employment is handled with the utmost care and professional standards.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-gray-50 rounded-xl text-center">
                                <Target className="w-10 h-10 text-[var(--color-primary-red)] mx-auto mb-4" />
                                <h3 className="font-bold text-[var(--color-primary-darkblue)]">Focus</h3>
                                <p className="text-sm text-gray-500 mt-2">Precision matching of skills to roles.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl text-center">
                                <Heart className="w-10 h-10 text-[var(--color-primary-salmon)] mx-auto mb-4" />
                                <h3 className="font-bold text-[var(--color-primary-darkblue)]">Care</h3>
                                <p className="text-sm text-gray-500 mt-2">Putting people before placements.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl text-center">
                                <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <h3 className="font-bold text-[var(--color-primary-darkblue)]">Reach</h3>
                                <p className="text-sm text-gray-500 mt-2">Connecting tailored global talent.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl text-center">
                                <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                                <h3 className="font-bold text-[var(--color-primary-darkblue)]">Community</h3>
                                <p className="text-sm text-gray-500 mt-2">Building long-term success networks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimers */}
            <section className="py-16 bg-[var(--color-neutral-offwhite)]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-6">Our Commitment to Ethics</h2>
                    <p className="text-gray-600 mb-8">
                        Pulse Employment adheres to the highest standards of ethical recruitment. We do not guarantee jobs or visas, but we promise a transparent process where you are assessed on merit. We work with independent legal experts to ensure all migration advice is accurate and lawful.
                    </p>
                </div>
            </section>

            <CTABanner />
        </div>
    );
};

export default About;
