import React from "react";

function ClientsStrip() {
    // Placeholder logos or text logos
    const clients = ["TechCorp", "BuildWell", "MediCare Plus", "Oz Mining Group", "Global Logistics", "Future Finance"];

    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-8">
                    Trusted by Employers & Candidates
                </p>
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, index) => (
                        <div key={index} className="text-2xl font-bold text-gray-400 hover:text-[var(--color-primary-darkblue)] transition-colors cursor-default select-none">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientsStrip;
