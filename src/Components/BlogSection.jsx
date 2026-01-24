import React from "react";
import { Link } from "react-router-dom";
import { PiCalendarBlank, PiUser, PiArrowRight } from "react-icons/pi";
import Button from "./Button";

function BlogSection() {
    const posts = [
        {
            title: "Overseas Employment Trends 2026",
            desc: "How the Australian job market is evolving for skilled migrants.",
            date: "Jan 24, 2026",
            author: "Admin",
            category: "Trends",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=250",
        },
        {
            title: "Industry Hiring Updates: Construction",
            desc: "Demand for skilled tradespeople hits a record high in NSW.",
            date: "Jan 18, 2026",
            author: "Editor",
            category: "Industry News",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=250",
        },
        {
            title: "Candidate Guidance: Visa Changes",
            desc: "Understanding the new skilled migration visa subclasses.",
            date: "Jan 10, 2026",
            author: "Legal Team",
            category: "Guidance",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-[var(--color-primary-red)] font-bold tracking-widest uppercase text-sm mb-2 block">
                            News Room
                        </span>
                        <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)]">
                            Latest Insights & Updates
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <Link to="/blog">
                            <Button variant="outline">View All News</Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-[var(--color-primary-darkblue)] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4">
                                    <div className="flex items-center"><PiCalendarBlank className="w-3 h-3 mr-1" /> {post.date}</div>
                                    <div className="flex items-center"><PiUser className="w-3 h-3 mr-1" /> {post.author}</div>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-3 group-hover:text-[var(--color-primary-red)] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 mb-6 line-clamp-2">
                                    {post.desc}
                                </p>
                                <Link to="/blog" className="inline-flex items-center text-[var(--color-primary-red)] font-semibold hover:text-red-800 transition-colors">
                                    Read More <PiArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Link to="/blog">
                        <Button variant="outline" className="w-full">View All News</Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default BlogSection;
