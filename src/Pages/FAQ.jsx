import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import CTABanner from '../Components/CTABanner';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-[var(--color-primary-darkblue)] text-lg">{question}</span>
                {isOpen ? <ChevronUp className="text-[var(--color-primary-salmon)]" /> : <ChevronDown className="text-gray-400" />}
            </button>
            {isOpen && (
                <div className="p-6 text-gray-600 border-t border-gray-100 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Does Pulse Employment guarantee a job?",
            answer: "No. Pulse Employment provides a platform to assess your eligibility and connect you with opportunities. Hiring decisions are made solely by the employers. We facilitate the process but do not guarantee placement."
        },
        {
            question: "Who can apply?",
            answer: "We welcome applications from skilled professionals across various industries (Healthcare, Trades, Engineering, Hospitality, etc.) from any country who are interested in working in Australia."
        },
        {
            question: "Is the assessment really automated?",
            answer: "Yes. Our initial assessment uses an algorithm based on Australian visa and employment criteria to give you instant feedback. However, successful candidates undergo further human review."
        },
        {
            question: "Do I need a lawyer?",
            answer: "While not mandatory for the initial application, Australian migration law is complex. We strongly recommend and facilitate connections with registered migration agents or lawyers for the visa application stage."
        },
        {
            question: "Are there any fees?",
            answer: "The initial assessment is free. If you proceed to engage legal services or specific premium support packages, fees will apply. All costs are transparently disclosed before you commit."
        },
        {
            question: "How is my data protected?",
            answer: "We take data privacy seriously. Your information is encrypted and stored securely in compliance with Australian Privacy Principles. We do not sell your data to third parties."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-[var(--color-neutral-offwhite)] py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <MessageCircle className="w-12 h-12 text-[var(--color-primary-darkblue)] mx-auto mb-4 opacity-50" />
                    <h1 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-600">Common questions about the process, eligibility, and your journey.</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-16 space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            <CTABanner />
        </div>
    );
};

export default FAQ;
