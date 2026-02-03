import React from "react";
import { Link } from "react-router-dom";
import { PiGlobe, PiClipboardText, PiUsers, PiCheckCircle, PiArrowRight } from "react-icons/pi";
import CTABanner from "../Components/CTABanner";
import globalConnectionImg from "../assets/global-connection.png";
import assessmentChecklistImg from "../assets/assessment-checklist.png";
import teamMeetingImg from "../assets/team-meeting.jpg";

const Services = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-[var(--color-primary-darkblue)] text-white py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Solutions</h1>
                    <p className="text-xl text-gray-300">
                        comprehensive employment and recruitment services bridging global talent with Australian opportunities.
                    </p>
                </div>
            </div>

            {/* Service 1: Overseas Recruitment */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                <PiGlobe className="w-10 h-10 text-[var(--color-primary-red)]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[var(--color-primary-darkblue)] mb-6">Overseas Recruitment</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We specialize in connecting Australian employers with highly skilled professionals from around the world. Our rigourous process ensures that candidates not only match the job description but also the company culture.
                            </p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Global sourcing of qualified candidates in Healthcare, Engineering, IT, and Trades.</span>
                                </li>
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Comprehensive screening and preliminary interviewing.</span>
                                </li>
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Assistance with relocation logistics and settlement support.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src={globalConnectionImg}
                                alt="Global Sourcing"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Eligibility Assessment */}
            <section className="py-20 bg-[var(--color-neutral-offwhite)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                <PiClipboardText className="w-10 h-10 text-[var(--color-primary-red)]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[var(--color-primary-darkblue)] mb-6">Eligibility Assessment</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Navigating Australian work standards can be complex. We provide detailed assessments to determine a candidate's eligibility for specific roles and visa pathways.
                            </p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Qualification verification against Australian standards.</span>
                                </li>
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Skills assessment guidance for relevant authorities.</span>
                                </li>
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Gap analysis to identify training needs.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src={assessmentChecklistImg}
                                alt="Eligibility Assessment"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Employer Staffing Solutions */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                <PiUsers className="w-10 h-10 text-[var(--color-primary-red)]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[var(--color-primary-darkblue)] mb-6">Employer Staffing Solutions</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                For Australian businesses, finding the right talent is critical. We offer end-to-end recruitment solutions to meet your workforce needs, from seasonal staff to permanent executive placements.
                            </p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Tailored recruitment campaigns for hard-to-fill roles.</span>
                                </li>
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Compliance checks and visa status verification.</span>
                                </li>
                                <li className="flex items-start">
                                    <PiCheckCircle className="w-6 h-6 text-[var(--color-primary-red)] mr-3 flex-shrink-0 mt-1" />
                                    <span>Onboarding support to ensure a smooth transition.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src={teamMeetingImg}
                                alt="Employer Staffing Solutions"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
};

export default Services;
