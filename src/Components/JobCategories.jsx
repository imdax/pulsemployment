import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Hammer, UtensilsCrossed, GraduationCap } from 'lucide-react';

const categories = [
    { id: 1, title: 'Healthcare', icon: <Stethoscope size={28} />, count: '120+ Roles', color: 'bg-emerald-100 text-emerald-600' },
    { id: 2, title: 'Trades & Construction', icon: <Hammer size={28} />, count: '85+ Roles', color: 'bg-orange-100 text-orange-600' },
    { id: 3, title: 'Hospitality', icon: <UtensilsCrossed size={28} />, count: '200+ Roles', color: 'bg-rose-100 text-rose-600' },
    { id: 4, title: 'Entry Level', icon: <GraduationCap size={28} />, count: '300+ Roles', color: 'bg-blue-100 text-blue-600' },
];

const JobCategories = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-[var(--color-primary-red)] font-semibold tracking-wider uppercase text-sm">Opportunities</span>
                        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-[var(--color-primary-darkblue)]">Featured Categories</h2>
                    </div>
                    <Link to="/jobs" className="flex items-center text-[var(--color-primary-darkblue)] font-medium hover:text-[var(--color-primary-red)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary-red)] pb-1">
                        View All Positions <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link key={cat.id} to="/jobs" className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-2 group-hover:text-[var(--color-primary-red)] transition-colors">{cat.title}</h3>
                            <p className="text-sm text-gray-500">{cat.count}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobCategories;
