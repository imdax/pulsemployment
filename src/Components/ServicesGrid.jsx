import React from "react";
import { Link } from "react-router-dom";
import { PiGlobe, PiClipboardText, PiUsers, PiArrowRight } from "react-icons/pi";
import Button from "./Button";

function ServicesGrid() {
    const services = [
        {
            icon: <PiGlobe className="w-8 h-8 text-[var(--color-primary-red)]" />,
            title: "Overseas Recruitment",
            description: "Connecting global talent with Australian employers through role-specific hiring.",
        },
        {
            icon: <PiClipboardText className="w-8 h-8 text-[var(--color-primary-red)]" />,
            title: "Eligibility Assessment",
            description: "Automated and manual screening to ensure job-role compatibility.",
        },
        {
            icon: <PiUsers className="w-8 h-8 text-[var(--color-primary-red)]" />,
            title: "Employer Staffing Solutions",
            description: "Pre-qualified candidates for faster, compliant hiring.",
        },
    ];

    return (
        <section className="py-20 bg-[var(--color-neutral-offwhite)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-4">
                        Top-tier Employment <span className="text-[var(--color-primary-red)]">Solutions</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Tailored scalable solutions for businesses and professionals.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group text-left border-b-4 border-transparent hover:border-[var(--color-primary-red)]">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <span className="text-[var(--color-primary-red)] font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform cursor-pointer">
                                Read More <PiArrowRight className="ml-2 w-4 h-4" />
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div>
                    <Link to="/services">
                        <Button className="bg-[var(--color-primary-red)] hover:bg-red-700 text-white px-10 py-4 text-lg shadow-lg hover:shadow-red-900/30">
                            See All Solutions
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default ServicesGrid;
