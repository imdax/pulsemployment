import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Calendar, CheckCircle, ArrowLeft } from 'lucide-react';
import Button from '../Components/Button';

// Mock Data (duplicated for demo purposes, normally fetched from API)
const jobsData = {
    1: {
        title: 'Registered Nurse (Aged Care)',
        location: 'Sydney, NSW',
        type: 'Full-time',
        salary: '$85k - $105k',
        posted: '2 days ago',
        description: 'We are seeking compassionate and skilled Registered Nurses to join leading Aged Care facilities across Sydney. You will be responsible for providing high-quality clinical care to residents.',
        requirements: [
            'Bachelor of Nursing or equivalent',
            'Current AHPRA Registration',
            'Minimum 2 years experience in Aged Care or Acute setting',
            'Strong communication and leadership skills'
        ],
        benefits: [
            'Visa sponsorship available for eligible candidates',
            'Relocation assistance package',
            'Ongoing professional development',
            'Flexible roster arrangements'
        ]
    },
    2: { title: 'Diesel Mechanic', location: 'Perth, WA', type: 'Full-time', salary: '$90k - $120k', posted: '5 days ago', description: 'Experienced Diesel Mechanics needed for heavy vehicle maintenance in Western Australia.', requirements: ['Trade Qualification', '3+ years experience'], benefits: ['FIFO options', 'High overtime rates'] },
    // ... add more mock data or a fallback
};

const JobDetails = () => {
    const { id } = useParams();
    const job = jobsData[id] || jobsData[1]; // Fallback to first job if ID not found for demo

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header Info */}
            <div className="bg-[var(--color-primary-darkblue)] text-white py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <Link to="/jobs" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Jobs
                    </Link>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm font-medium text-[var(--color-primary-salmon)]">
                        <span className="bg-white/10 px-3 py-1 rounded-full">{job.type}</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">{job.posted}</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-6">{job.title}</h1>
                    <div className="flex flex-wrap gap-6 text-gray-300">
                        <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> {job.location}</div>
                        <div className="flex items-center"><DollarSign className="w-5 h-5 mr-2" /> {job.salary}</div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-8">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12 mb-80">
                    {/* Section 1 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-4">About the Role</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {job.description}
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-6">Requirements</h2>
                        <ul className="space-y-4">
                            {job.requirements.map(req => (
                                <li key={req} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-6">Benefits</h2>
                        <ul className="space-y-4">
                            {job.benefits.map(ben => (
                                <li key={ben} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-[var(--color-primary-salmon)] mr-3 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{ben}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
                        <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-2">Interested in this role?</h3>
                        <p className="text-gray-600 mb-6">Check your eligibility instantly with our automated assessment.</p>
                        <Link to="/apply">
                            <Button variant="primary" size="large" className="w-full md:w-auto px-12">Apply & Check Eligibility</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
