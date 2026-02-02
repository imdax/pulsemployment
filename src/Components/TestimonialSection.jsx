import React from "react";
import { motion } from "framer-motion";
import { PiQuotesFill, PiUserCircleFill } from "react-icons/pi";
import sarahProfile from "../assets/sarah-profile.jpg";
import didierProfile from "../assets/didier-profile.jpg";
import priyaProfile from "../assets/priya-profile.jpg";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Registered Nurse",
        quote:
            "Pulse Employment made my move to Australia seamless. They guided me through every step of the visa process and matched me with a hospital that perfectly suits my skills.",
        location: "Sydney, NSW",
        image: sarahProfile,
    },
    {
        id: 2,
        name: "Didier Drogba",
        role: "Civil Engineer",
        quote:
            "I was skeptical about international recruitment agencies, but Pulse's transparency stood out. No hidden fees, just honest advice and a great job offer.",
        location: "Melbourne, VIC",
        image: didierProfile,
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "IT Specialist",
        quote:
            "The team at Pulse is incredibly professional. They helped me understand the Australian job market and connected me with a top-tier tech company.",
        location: "Brisbane, QLD",
        image: priyaProfile,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function TestimonialSection() {
    return (
        <section className="py-24 bg-[var(--color-neutral-offwhite)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-6"
                    >
                        Stories of Success
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Hear from professionals who have successfully built their careers in
                        Australia through Pulse Employment.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={cardVariants}
                            className="bg-white p-8 rounded-xl shadow-lg relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                        >
                            <PiQuotesFill className="text-4xl text-[var(--color-primary-red)] opacity-20 absolute top-6 right-6" />

                            <div className="flex-grow mb-6">
                                <p className="text-gray-600 italic leading-relaxed relative z-10">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[var(--color-primary-red)]">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-primary-darkblue)]">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-[var(--color-primary-red)] font-medium">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default TestimonialSection;
