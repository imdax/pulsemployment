import React from "react";
import { PiFileText, PiClipboardText, PiMagnifyingGlass, PiUsersThree, PiHandshake } from "react-icons/pi";

function ProcessSection() {
    const steps = [
        {
            icon: <PiFileText className="w-6 h-6 text-white" />,
            title: "Apply Online",
            desc: "Submit your profile via our portal.",
        },
        {
            icon: <PiClipboardText className="w-6 h-6 text-white" />,
            title: "Eligibility Assessment",
            desc: "We verify your skills & quals.",
        },
        {
            icon: <PiMagnifyingGlass className="w-6 h-6 text-white" />,
            title: "Candidate Shortlisting",
            desc: "Matching you with tailored roles.",
        },
        {
            icon: <PiUsersThree className="w-6 h-6 text-white" />,
            title: "Employer Review",
            desc: "Direct interview with companies.",
        },
        {
            icon: <PiHandshake className="w-6 h-6 text-white" />,
            title: "Placement Support",
            desc: "Visa & relocation guidance.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-2">
                    Our Recruitment <span className="text-[var(--color-primary-red)]">Process</span>
                </h2>
                <p className="text-gray-500 mb-16">Simple, transparent, and effective.</p>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-[var(--color-neutral-offwhite)] flex items-center justify-center mb-6 relative z-10 group-hover:border-[var(--color-primary-red)] transition-colors duration-300 shadow-sm">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary-darkblue)] flex items-center justify-center group-hover:bg-[var(--color-primary-red)] transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-primary-red)] text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)] mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm max-w-[150px] mx-auto leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;
