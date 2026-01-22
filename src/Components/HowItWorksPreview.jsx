import React from 'react';
import { FileText, Cpu, UserCheck, Plane, ArrowRight } from 'lucide-react';

const HowItWorksPreview = () => {
  const steps = [
    {
      id: "01",
      title: 'Apply Online',
      description: 'Submit your profile & details.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: "02",
      title: 'AI Assessment',
      description: 'Instant eligibility check.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: "03",
      title: 'Qualification',
      description: 'Expert review & matching.',
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      id: "04",
      title: 'Deployment',
      description: 'Visa & travel support.',
      icon: <Plane className="w-6 h-6" />
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-6">
              Streamlined for speed.
            </h2>
            <p className="text-xl text-gray-500 font-light">
              We've removed the complexity from international recruitment.
              Four steps from application to Australia.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <div className="text-sm font-semibold text-[var(--color-primary-red)] uppercase tracking-wider">
              The Pulse Process
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">

              {/* Card */}
              <div className="h-full bg-[var(--color-neutral-offwhite)] p-8 rounded-2xl transition-all duration-300 hover:bg-[var(--color-primary-darkblue)] hover:shadow-2xl hover:-translate-y-2 group">

                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white rounded-lg text-[var(--color-primary-darkblue)] shadow-sm group-hover:text-[var(--color-primary-red)] transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-200 group-hover:text-white/10 transition-colors font-mono">
                    {step.id}
                  </span>
                </div>

                {/* Body */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary-darkblue)] mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="text-[var(--color-primary-salmon)] w-5 h-5" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksPreview;
