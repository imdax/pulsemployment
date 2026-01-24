import React from "react";
import { Link } from "react-router-dom";
import { PiCheckCircle, PiArrowRight } from "react-icons/pi";
import Button from "./Button";
import consultBg from "../assets/herosection.jpg"; // Using reuse for now or placeholder

function ConsultancySection() {
    const features = [
        "Focus on role suitability",
        "Employer-approved shortlisting",
        "Ongoing candidate guidance",
    ];

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Image Block with Experience Badge */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden max-h-[600px] shadow-2xl">
                            <img
                                src={consultBg}
                                alt="Professional Recruitment Interview"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Section 8: Experience Badge */}
                        <div className="absolute bottom-10 left-0 lg:-left-10 bg-[var(--color-primary-red)] text-white p-8 rounded-tr-3xl shadow-xl max-w-[200px]">
                            <span className="text-5xl font-bold block mb-2">18+</span>
                            <span className="text-sm font-medium uppercase tracking-wide leading-tight block">
                                Years of Recruitment & Workforce Experience
                            </span>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-[var(--color-primary-red)] font-bold tracking-widest uppercase text-sm mb-2 block">
                            The Elite Management Consultancy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-darkblue)] mb-6 leading-tight">
                            Professional Recruitment <br /> Management
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our recruitment specialists manage the entire candidate journey—from assessment to employer coordination—ensuring accuracy, compliance, and efficiency.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {features.map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)]" />
                                    <span className="text-gray-800 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/about">
                            <Button className="bg-[var(--color-primary-darkblue)] text-white hover:bg-[#151236] px-8 py-4 text-lg shadow-lg">
                                More About Us
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ConsultancySection;
