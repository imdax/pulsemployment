import React from "react";
import { PiLinkedinLogo, PiEnvelope } from "react-icons/pi";

function TeamSection() {
    const team = [
        {
            name: "Sarah Jenkins",
            title: "Senior Recruitment Consultant",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
        },
        {
            name: "David Ross",
            title: "Migration Specialist",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
        },
        {
            name: "Elena Rodriguez",
            title: "Client Relations Manager",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
        },
        {
            name: "Michael Chang",
            title: "Talent Acquisition Lead",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
        },
    ];

    return (
        <section className="py-20 bg-[var(--color-neutral-offwhite)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-2">
                    Our Recruitment <span className="text-[var(--color-primary-red)]">Professionals</span>
                </h2>
                <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
                    A dedicated team ensuring ethical, efficient, and employer-aligned hiring.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-darkblue)]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                                    <a href="#" className="p-2 bg-white rounded-full hover:bg-[var(--color-primary-red)] hover:text-white transition-colors">
                                        <PiLinkedinLogo className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-2 bg-white rounded-full hover:bg-[var(--color-primary-red)] hover:text-white transition-colors">
                                        <PiEnvelope className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)]">{member.name}</h3>
                                <p className="text-[var(--color-primary-red)] text-sm font-medium mt-1">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
