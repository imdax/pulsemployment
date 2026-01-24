import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRight, PiStethoscope, PiForkKnife, PiHammer } from "react-icons/pi";

function CaseStudies() {
    const cases = [
        {
            title: "Healthcare Staffing Placement",
            category: "Medical",
            icon: <PiStethoscope className="w-8 h-8 text-white" />,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
        },
        {
            title: "Hospitality Workforce Recruitment",
            category: "Hospitality",
            icon: <PiForkKnife className="w-8 h-8 text-white" />,
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
        },
        {
            title: "Skilled Trade Hiring Success",
            category: "Construction",
            icon: <PiHammer className="w-8 h-8 text-white" />,
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
        },
    ];

    return (
        <section className="py-20 bg-[var(--color-primary-darkblue)] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-[var(--color-primary-red)] font-bold tracking-widest uppercase text-sm mb-2 block">
                            Our Latest Case Studies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Successful Placements & <br /> Hiring Stories
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Link to="/jobs" className="flex items-center text-white hover:text-[var(--color-primary-red)] transition-colors font-semibold group">
                            Explore Case Studies <PiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Slider/Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-xl h-[400px] bg-gray-900 cursor-pointer">
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-[var(--color-primary-red)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium uppercase tracking-wider mb-2 block">{item.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[var(--color-primary-red)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-white text-sm font-bold tracking-wide">
                                        READ STORY <PiArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default CaseStudies;
