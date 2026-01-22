
import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, BrainCircuit, UserCheck, Scale, HelpCircle, ArrowRight } from 'lucide-react';
import Button from '../Components/Button';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: 'Submit Your Application',
      description: 'Fill out our simple online form with your personal details, education, and work experience. It takes less than 10 minutes and is secured by industry-standard encryption.',
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      color: 'bg-blue-600'
    },
    {
      id: "02",
      title: 'Automated AI Assessment',
      description: 'Our proprietary system instantly evaluates your profile against current Australian skilled migration criteria and job market needs. This eliminates bias and gives you an immediate preliminary result.',
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      color: 'bg-[var(--color-primary-red)]'
    },
    {
      id: "03",
      title: 'Receive Qualification Status',
      description: 'If you qualify, you will progress to the next stage. If not, we provide detailed guidance on upskilling or alternative pathways to help you reach your goal in the future.',
      icon: <UserCheck className="w-8 h-8 text-white" />,
      color: 'bg-[var(--color-primary-salmon)]'
    },
    {
      id: "04",
      title: 'Legal & Employment Support',
      description: 'Qualified candidates are connected with independent migration lawyers and recruitment consultants to formalize the visa process and secure employment.',
      icon: <Scale className="w-8 h-8 text-white" />,
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-[var(--color-primary-darkblue)] text-white py-24 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-red)]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
            The Pathway
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How It Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            A clear, transparent, and step-by-step journey from your current location to a new career in Australia.
          </p>
        </div>
      </div>

      {/* Steps Detail - Vertical Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Text Content */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block text-5xl font-bold text-gray-100 mb-2 font-mono">{step.id}</div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl rotate-45 flex items-center justify-center shadow-xl border-4 border-white ${step.color} transform transition-transform hover:scale-110 duration-300`}>
                    <div className="-rotate-45">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[var(--color-primary-darkblue)]" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-primary-darkblue)] mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
            We understand moving countries is a big decision. Check our detailed FAQs for more information on visas, fees, and the process.
          </p>
          <Link to="/faqs">
            <Button variant="outline" className="px-8 py-3">View Frequently Asked Questions</Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--color-primary-red)] text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to start your journey?</h2>
          <p className="text-white/90 text-lg mb-10">
            Take the first step today. It only takes a few minutes to check your eligibility.
          </p>
          <Link to="/apply">
            <Button variant="white" size="large" className="shadow-lg hover:shadow-xl">
              Start Free Assessment <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

