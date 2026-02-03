
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  FileText,
  Scale,
  Languages,
  Mail,
  FolderOpen,
  Send,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Phone,
  User
} from 'lucide-react';
import Button from '../Components/Button';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: 'Check Eligibility',
      description: 'Free Consultation to assess your initial eligibility.',
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      color: 'bg-blue-600'
    },
    {
      id: "02",
      title: 'Register Your Expression Of Interest',
      description: 'Registration Cost - 250$. Formally assess your potential.',
      icon: <FileText className="w-8 h-8 text-white" />,
      color: 'bg-[var(--color-primary-red)]'
    },
    {
      id: "03",
      title: 'Skill Assessment',
      description: 'Point Test & Consultation. Determine your Pathway To Aus.',
      icon: <Scale className="w-8 h-8 text-white" />,
      color: 'bg-[var(--color-primary-salmon)]'
    },
    {
      id: "04",
      title: 'English Language Proficiency',
      description: 'Prove your English language skills as required for the visa.',
      icon: <Languages className="w-8 h-8 text-white" />,
      color: 'bg-purple-600'
    },
    {
      id: "05",
      title: 'Skills Visa / Invitation to Apply',
      description: 'Get Your invitation to Apply (For Sponsor Visa).',
      icon: <Mail className="w-8 h-8 text-white" />,
      color: 'bg-indigo-600'
    },
    {
      id: "06",
      title: 'Gather Your Document',
      description: 'Collect all necessary documents for your application.',
      icon: <FolderOpen className="w-8 h-8 text-white" />,
      color: 'bg-teal-600'
    },
    {
      id: "07",
      title: 'Submit Your PR Application',
      description: 'Lodge your Permanent Residency application officially.',
      icon: <Send className="w-8 h-8 text-white" />,
      color: 'bg-orange-600'
    },
    {
      id: "08",
      title: 'Get Your Visa Grant',
      description: 'Receive your visa grant and prepare for your move!',
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: 'bg-green-600'
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
            How to migrate to Australia in 2025?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Get your PR by correct path. A clear, step-by-step journey from your current location to a new life in Australia.
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

      {/* Contact Info Card */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary-darkblue)] mb-2">Contact us for more details</h3>
              <p className="text-gray-500 mb-6">Expert guidance for your migration journey.</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Lidia Paul</p>
                    <p className="text-gray-600">+61 414 873 868</p>
                    <p className="text-sm text-[var(--color-primary-red)] font-semibold mt-1">Lidia Paul (MARA) 0901242</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      <a href="https://au.linkedin.com/in/dr-ruwan-paul-jp-deshamanya-pmjf-meng-melb-aus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        Ruwan Paul
                      </a>
                    </p>
                    <p className="text-gray-600">+61 417 713 034</p>
                    <p className="text-gray-600">+61 406 254 868</p>
                    <a href="https://www.google.com/search?q=Dr+Ruwan+Paul" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 block">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col gap-3">
              <Link to="/contact">
                <Button className="w-full md:w-auto">Get in Touch</Button>
              </Link>
            </div>
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

