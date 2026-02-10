import React from "react";
import { Link } from "react-router-dom";
import { PiArrowLeft, PiLinkedinLogo, PiGoogleLogo } from "react-icons/pi";
import img from "../assets/ruwan.jpg";

function DrRuwanProfile() {
    return (
        <div className="pt-24 pb-16 bg-[var(--color-neutral-offwhite)] min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-[var(--color-primary-darkblue)] hover:text-[var(--color-primary-red)] mb-8 transition-colors font-medium"
                >
                    <PiArrowLeft className="mr-2" /> Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header Section with Image and Basic Info */}
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-[var(--color-primary-darkblue)] p-8 flex flex-col items-center justify-center text-center">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                                <img
                                    src={img}
                                    alt="Dr. Ruwan Paul"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">Dr. Ruwan Paul</h1>
                            <p className="text-[var(--color-primary-red)] font-medium mb-4">Migration Specialist</p>

                            <div className="flex space-x-4 mt-2">
                                <a
                                    href="https://au.linkedin.com/in/dr-ruwan-paul-jp-deshamanya-pmjf-meng-melb-aus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full text-white hover:bg-[var(--color-primary-red)] transition-colors"
                                >
                                    <PiLinkedinLogo className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.google.com/search?q=Dr+Ruwan+Paul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full text-white hover:bg-[var(--color-primary-red)] transition-colors"
                                >
                                    <PiGoogleLogo className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className="md:w-2/3 p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-[var(--color-primary-darkblue)] mb-6">About Dr. Ruwan Paul</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Dr. Ruwan Paul is a prominent Sri Lankan-Australian professional recognized for his extensive achievements across athletics, military service, and humanitarian work. He holds a PhD in Sports and Business Management and is a decorated figure in both Sri Lanka and Australia.
                            </p>

                            <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-[var(--color-primary-darkblue)]">
                                <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-3">Key Achievements & Roles</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--color-primary-red)] rounded-full mr-3"></span>
                                        <span className="text-gray-700"><strong>Powerlifting Champion:</strong> He is the most decorated Sri Lankan powerlifter, having won multiple gold medals in World, Asia, and Oceania championships. He currently serves as the President of World Powerlifting Sri Lanka.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--color-primary-red)] rounded-full mr-3"></span>
                                        <span className="text-gray-700"><strong>Military Service:</strong> A former Naval Executive Commissioned Officer, he served in the Sri Lankan Navy from 1987 to 2001.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[var(--color-primary-red)] rounded-full mr-3"></span>
                                        <span className="text-gray-700"><strong>Humanitarian Leadership:</strong> He is the founder and Vice President of the Lionsbridge International Foundation, a charity focused on child welfare, education, and disaster relief.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details Grid */}
                    <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)] mb-3 border-b pb-2 border-gray-100">Civic Roles</h3>
                                <p className="text-gray-600">He has been appointed as a Justice of the Peace (JP) and holds the title of Deshamanya, one of Sri Lanka's highest national honours.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)] mb-3 border-b pb-2 border-gray-100">Human Rights</h3>
                                <p className="text-gray-600">In 2024, he was appointed President of Australian Affairs for the International Human Rights Global Mission.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                                <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)] mb-3 border-b pb-2 border-gray-100">Entrepreneurship</h3>
                                <p className="text-gray-600">Dr. Paul manages various business ventures in property, migration services, and hospitality through entities like the Pintus Group LLC.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrRuwanProfile;
