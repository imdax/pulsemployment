
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, BookOpen, Mail } from 'lucide-react';
import Button from '../Components/Button';

const ResultDisqualified = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Banner */}
            <div className="bg-gray-100 py-20 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <AlertCircle className="w-12 h-12 text-gray-400" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Thank you for your interest.</h1>
                    <p className="text-xl text-gray-500 font-medium">Unfortunately, you do not meet the current eligibility criteria.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-2">Why was I not successful?</h3>
                    <p className="text-yellow-700">
                        Our assessment is based on strict Australian Government visa requirements and employer standards. Common reasons include insufficient experience (minimum 2 years usually required), English proficiency levels, or incompatible qualifications for currently available roles.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-8 text-center">Don't give up! Here are your options:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="border border-gray-200 p-6 rounded-xl hover:border-[var(--color-primary-salmon)] transition-colors">
                        <BookOpen className="w-8 h-8 text-[var(--color-primary-salmon)] mb-4" />
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Upskill & Train</h3>
                        <p className="text-gray-600 mb-4 text-sm">Improve your qualifications or English score to meet the standards in the future.</p>
                        <a href="#" className="text-[var(--color-primary-darkblue)] font-semibold hover:underline text-sm">View Resources &rarr;</a>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-xl hover:border-[var(--color-primary-salmon)] transition-colors">
                        <Mail className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Join Talent Pool</h3>
                        <p className="text-gray-600 mb-4 text-sm">Requirements change often. Subscribe to our updates to know when criteria changes or new roles open.</p>
                        <a href="#" className="text-[var(--color-primary-darkblue)] font-semibold hover:underline text-sm">Subscribe to Updates &rarr;</a>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/">
                        <Button variant="outline">Return to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResultDisqualified;

