import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Building2, Globe2 } from 'lucide-react';

const StatCard = ({ icon, endValue, label, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = endValue / (duration / 16); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, endValue]);

    return (
        <div ref={cardRef} className="flex flex-col items-center p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4 p-4 bg-white/10 rounded-full text-[var(--color-primary-salmon)] backdrop-blur-sm">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                {count}{suffix}
            </div>
            <div className="text-blue-100 font-medium tracking-wide uppercase text-sm">
                {label}
            </div>
        </div>
    );
};

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            label: "Professionals Placed",
            value: 12500,
            icon: <Users className="w-8 h-8" />
        },
        {
            id: 2,
            label: "Years in Business",
            value: 15,
            icon: <Calendar className="w-8 h-8" />
        },
        {
            id: 3,
            label: "Partner Companies",
            value: 450,
            icon: <Building2 className="w-8 h-8" />
        },
        {
            id: 4,
            label: "Countries Reached",
            value: 32,
            icon: <Globe2 className="w-8 h-8" />
        },
    ];

    return (
        <section className="py-20 bg-[var(--color-primary-darkblue)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-red)] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className={index % 2 !== 0 ? "border-l border-white/10 md:border-none pl-4 md:pl-0" : ""}>
                            <StatCard
                                icon={stat.icon}
                                endValue={stat.value}
                                label={stat.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
