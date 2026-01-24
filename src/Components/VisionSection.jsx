import React from "react";
import { PiMedal, PiUsersThree } from "react-icons/pi";

function VisionSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-darkblue)] mb-6 leading-tight">
                            Transforming Careers into <br />
                            <span className="text-[var(--color-primary-red)]">Global Opportunities</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Puls Employment was created to eliminate confusion and risk in overseas recruitment.
                            Our system replaces unverified agents with a process-driven, employer-aligned hiring model that protects both candidates and companies.
                        </p>

                        <div className="border-l-4 border-[var(--color-primary-red)] pl-6 py-2 mb-8">
                            <p className="italic text-gray-800 font-medium text-lg">
                                "Connecting Ambition with Opportunity."
                            </p>
                            <p className="text-[var(--color-primary-red)] font-bold mt-2">— Puls Employment Team</p>
                        </div>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6">
                        {/* Card 1 */}
                        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <PiMedal className="w-24 h-24 text-[var(--color-primary-red)]" />
                            </div>
                            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                                <PiMedal className="w-7 h-7 text-[var(--color-primary-red)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-2">Leading Recruitment Firm</h3>
                            <p className="text-gray-600">Australia-Focused Hiring with verified outcomes.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300 mt-0 md:mt-12">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <PiUsersThree className="w-24 h-24 text-[var(--color-primary-red)]" />
                            </div>
                            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                                <PiUsersThree className="w-7 h-7 text-[var(--color-primary-red)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-2">Thousands Assessed</h3>
                            <p className="text-gray-600">Candidates processed across multiple industries.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default VisionSection;
