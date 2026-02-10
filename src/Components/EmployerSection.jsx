import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PiBriefcase } from "react-icons/pi";
import Button from "./Button";

const EmployerSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <PiBriefcase className="w-6 h-6 text-[var(--color-primary-red)]" />
                                    <span className="text-[var(--color-primary-red)] font-bold tracking-wider uppercase text-sm">
                                        For Employers
                                    </span>
                                </div>
                                <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-6">
                                    Find the Best Talent for Your Business
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Join our network of verified employers. Post your job vacancies
                                    and connect with skilled professionals ready to contribute to
                                    your success. Our platform ensures a seamless recruitment
                                    process.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/company/register">
                                        <Button variant="primary" size="large">
                                            Post a Job Now
                                        </Button>
                                    </Link>
                                    <Link to="/company/login">
                                        <Button variant="outline" size="large">
                                            Employer Login
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="relative h-64 lg:h-auto bg-[var(--color-primary-darkblue)]">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-opacity-10 text-9xl font-bold select-none">
                                    HIRE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployerSection;
