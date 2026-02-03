import React from 'react';
import {
  ClipboardCheck,
  FileText,
  Scale,
  Languages,
  Mail,
  FolderOpen,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HowItWorksPreview = () => {
  const steps = [
    {
      id: "01",
      title: 'Eligibility',
      description: 'Free Consultation.',
      icon: <ClipboardCheck className="w-6 h-6" />
    },
    {
      id: "02",
      title: 'Expression of Interest',
      description: 'Registration Cost - 250$.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: "03",
      title: 'Skill Assessment',
      description: 'Point Test & Consultation.',
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: "04",
      title: 'English Proficiency',
      description: 'Prove language skills.',
      icon: <Languages className="w-6 h-6" />
    },
    {
      id: "05",
      title: 'Visa Invitation',
      description: 'Get invitation to apply.',
      icon: <Mail className="w-6 h-6" />
    },
    {
      id: "06",
      title: 'Gather Documents',
      description: 'Collect necessary docs.',
      icon: <FolderOpen className="w-6 h-6" />
    },
    {
      id: "07",
      title: 'Submit Application',
      description: 'Lodge PR application.',
      icon: <Send className="w-6 h-6" />
    },
    {
      id: "08",
      title: 'Visa Grant',
      description: 'Receive your visa!',
      icon: <CheckCircle className="w-6 h-6" />
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-6">
              Your Pathway to Australia
            </h2>
            <p className="text-xl text-gray-500 font-light">
              A comprehensive 8-step journey to your new life.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <Link to="/how-it-works">
              <Button variant="outline">View Full Process <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">

              {/* Card */}
              <div className="h-full bg-[var(--color-neutral-offwhite)] p-6 rounded-2xl transition-all duration-300 hover:bg-[var(--color-primary-darkblue)] hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-gray-800">

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-white rounded-lg text-[var(--color-primary-darkblue)] shadow-sm group-hover:text-[var(--color-primary-red)] transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-white/10 transition-colors font-mono">
                    {step.id}
                  </span>
                </div>

                {/* Body */}
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)] mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link to="/how-it-works">
            <Button variant="outline" className="w-full">View Full Process</Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksPreview;
