import React from 'react';
import { Briefcase, Gavel, Globe, Award } from 'lucide-react';

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Australian Operated",
      description: "Based in Sydney, we strictly adhere to local employment laws and ethical standards."
    },
    {
      id: 2,
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Reach",
      description: "Connecting talent from over 30 countries to premium opportunities."
    },
    {
      id: 3,
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Unbiased Matching",
      description: "Our AI-driven process focuses on skills and merit, eliminating unconscious bias."
    },
    {
      id: 4,
      icon: <Gavel className="w-6 h-6 text-white" />,
      title: "Legal Integrity",
      description: "We partner with independent migration lawyers to ensure valid visa pathways."
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Header Column */}
          <div className="lg:col-span-1 pr-8">
            <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-6 leading-tight">
              Why professionals <br /> trust Pulse.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We remove the uncertainty from international recruitment. No hidden fees, no false promises—just a clear, professional pathway to your future.
            </p>
            <div className="h-1 w-20 bg-[var(--color-primary-red)]"></div>
          </div>

          {/* Grid Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="group">
                <div className="w-12 h-12 bg-[var(--color-primary-darkblue)] rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:bg-[var(--color-primary-red)] transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
