import React from "react";
import {
    ClipboardCheck,
    FileText,
    Scale,
    Languages,
    Mail,
    FolderOpen,
    Send,
    CheckCircle
} from 'lucide-react';

function ProcessSection() {
    const steps = [
        {
            icon: <ClipboardCheck className="w-6 h-6 text-white" />,
            title: 'Check Eligibility',
            desc: 'Free Consultation.',
        },
        {
            icon: <FileText className="w-6 h-6 text-white" />,
            title: 'Expression Of Interest',
            desc: 'Registration Cost - 250$.',
        },
        {
            icon: <Scale className="w-6 h-6 text-white" />,
            title: 'Skill Assessment',
            desc: 'Point Test & Consultation.',
        },
        {
            icon: <Languages className="w-6 h-6 text-white" />,
            title: 'English Proficiency',
            desc: 'Prove your language skills.',
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: 'Invitation to Apply',
            desc: 'Skills Visa Invitation.',
        },
        {
            icon: <FolderOpen className="w-6 h-6 text-white" />,
            title: 'Gather Documents',
            desc: 'Collect necessary docs.',
        },
        {
            icon: <Send className="w-6 h-6 text-white" />,
            title: 'Submit Application',
            desc: 'Lodge PR application.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-white" />,
            title: 'Visa Grant',
            desc: 'Receive your visa!',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-2">
                    Our Recruitment <span className="text-[var(--color-primary-red)]">Process</span>
                </h2>
                <p className="text-gray-500 mb-16">Your 8-step journey to Australia.</p>

                <div className="relative">
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                <p className="text-gray-500 text-sm max-w-[200px] mx-auto leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;
