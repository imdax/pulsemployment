import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';
import Button from '../Components/Button';

// Mock Data
const jobsData = [
    { id: 1, title: 'Registered Nurse (Aged Care)', location: 'Sydney, NSW', type: 'Full-time', salary: '$85k - $105k', category: 'Healthcare' },
    { id: 2, title: 'Diesel Mechanic', location: 'Perth, WA', type: 'Full-time', salary: '$90k - $120k', category: 'Trades' },
    { id: 3, title: 'Head Chef', location: 'Melbourne, VIC', type: 'Full-time', salary: '$75k - $95k', category: 'Hospitality' },
    { id: 4, title: 'Civil Engineer', location: 'Brisbane, QLD', type: 'Contract', salary: '$110k - $140k', category: 'Construction' },
    { id: 5, title: 'Early Childhood Teacher', location: 'Adelaide, SA', type: 'Part-time', salary: '$70k - $85k', category: 'Education' },
    { id: 6, title: 'Welder / Fabricator', location: 'Newcastle, NSW', type: 'Full-time', salary: '$80k - $100k', category: 'Trades' },
];

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredJobs = jobsData.filter(job =>
        (selectedCategory === 'All' || job.category === selectedCategory) &&
        (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const categories = ['All', 'Healthcare', 'Trades', 'Hospitality', 'Construction', 'Education'];

    return (
        <div className="bg-[var(--color-neutral-offwhite)] min-h-screen pb-20">
            {/* Header */}
            <div className="bg-[var(--color-primary-darkblue)] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6">Current Opportunities</h1>

                    {/* Search Bar */}
                    <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by job title or location..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none text-gray-800"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="relative md:w-64">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none appearance-none bg-white text-gray-800"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                                        <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.type}</span>
                                        <span className="text-[var(--color-primary-salmon)] font-medium">{job.salary}</span>
                                    </div>
                                </div>
                                <Link to={`/jobs/${job.id}`}>
                                    <Button variant="outline" size="small">View Details</Button>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-xl">No jobs found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                className="mt-4 text-[var(--color-primary-red)] hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
