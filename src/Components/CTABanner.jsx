import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CTABanner = () => {
    return (
        <section className="py-24 bg-[var(--color-primary-red)] relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Start Your Assessment in Under 10 Minutes
                </h2>
                <p className="text-xl text-red-100 mb-10">
                    Find out if you qualify for current Australian opportunities instantly.
                </p>
                <Link to="/apply">
                    <Button variant="white" size="large" className="shadow-xl text-lg px-10 py-4 hover:scale-105">
                        Take Free Assessment
                    </Button>
                </Link>
                <p className="mt-6 text-sm text-red-100 opacity-80">
                    No credit card required • 100% Confidential
                </p>
            </div>
        </section>
    );
};

export default CTABanner;
