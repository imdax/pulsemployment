import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, FileCheck, CheckCircle, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';
import Button from '../Components/Button';

const Apply = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Personal
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        // Step 2: Professional
        profession: '',
        yearsExperience: '',
        education: '',
        englishLevel: '',
        // Step 3: Assessment
        hasPassport: '',
        hasCriminalRecord: '',
        hasHealthIssues: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const calculateEligibility = () => {
        // Simple logic for demo purposes
        let isEligible = true;

        // 1. Must have at least 2 years experience (assuming options are '0-1', '2-5', '5+')
        if (formData.yearsExperience === '0-1' || formData.yearsExperience === '') isEligible = false;

        // 2. English must be at least Intermediate
        if (formData.englishLevel === 'Basic' || formData.englishLevel === '') isEligible = false;

        // 3. Must have Passport (Yes)
        if (formData.hasPassport !== 'Yes') isEligible = false;

        // 4. No Criminal Record (No)
        if (formData.hasCriminalRecord === 'Yes') isEligible = false;

        // 5. Must agree to terms
        if (!formData.agreeToTerms) isEligible = false;

        return isEligible;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEligible = calculateEligibility();

        // Simulate API call
        setTimeout(() => {
            if (isEligible) {
                navigate('/result-qualified');
            } else {
                navigate('/result-disqualified');
            }
        }, 1500);
    };

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    // Render Helpers
    const renderStepIndicator = () => (
        <div className="flex justify-center items-center mb-12">
            {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${currentStep === step
                            ? 'bg-[var(--color-primary-red)] text-white'
                            : currentStep > step
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 text-gray-500'
                        }`}>
                        {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                    </div>
                    {step < 3 && (
                        <div className={`w-16 h-1 mx-2 ${currentStep > step ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-[var(--color-neutral-offwhite)] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[var(--color-primary-darkblue)] py-8 px-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Start Your Assessment</h1>
                    <p className="text-blue-100">Complete the steps below to check your eligibility instantly.</p>
                </div>

                <div className="p-8 md:p-12">
                    {renderStepIndicator()}

                    <form onSubmit={(e) => e.preventDefault()}>

                        {/* STEP 1: Personal Details */}
                        {currentStep === 1 && (
                            <div className="space-y-6 animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] flex items-center mb-6">
                                    <User className="mr-3 text-[var(--color-primary-salmon)]" /> Personal Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none" required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Country of Residence</label>
                                        <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none bg-white">
                                            <option value="">Select Country</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="India">India</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-6">
                                    <Button type="button" onClick={nextStep} variant="primary">Next Step <ChevronRight className="ml-2 w-4 h-4" /></Button>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Professional Experience */}
                        {currentStep === 2 && (
                            <div className="space-y-6 animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] flex items-center mb-6">
                                    <Briefcase className="mr-3 text-[var(--color-primary-salmon)]" /> Experience & Skills
                                </h2>

                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Target Profession</label>
                                        <select name="profession" value={formData.profession} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none bg-white">
                                            <option value="">Select Profession</option>
                                            <option value="Nurse">Registered Nurse</option>
                                            <option value="Mechanic">Diesel Mechanic</option>
                                            <option value="Chef">Chef / Cook</option>
                                            <option value="Engineer">Engineer</option>
                                            <option value="Teacher">Teacher</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                                        <div className="grid grid-cols-3 gap-4">
                                            {['0-1', '2-5', '5+'].map(opt => (
                                                <label key={opt} className={`cursor-pointer border rounded-lg p-4 text-center hover:bg-gray-50 ${formData.yearsExperience === opt ? 'border-[var(--color-primary-salmon)] bg-red-50 ring-1 ring-[var(--color-primary-salmon)]' : 'border-gray-200'}`}>
                                                    <input type="radio" name="yearsExperience" value={opt} checked={formData.yearsExperience === opt} onChange={handleChange} className="sr-only" />
                                                    <span className="font-medium text-gray-700">{opt} Years</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                                        <select name="education" value={formData.education} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none bg-white">
                                            <option value="">Select Education</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma">Diploma / Trade Certificate</option>
                                            <option value="Bachelors">Bachelor's Degree</option>
                                            <option value="Masters">Master's Degree or Higher</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">English Proficiency</label>
                                        <select name="englishLevel" value={formData.englishLevel} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none bg-white">
                                            <option value="">Select Level</option>
                                            <option value="Basic">Basic (I struggle to communicate)</option>
                                            <option value="Intermediate">Intermediate (I can converse proficiently)</option>
                                            <option value="Advanced">Advanced / Native (Fluent)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-6">
                                    <Button type="button" onClick={prevStep} variant="outline" className="border-gray-300 text-gray-600"><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                                    <Button type="button" onClick={nextStep} variant="primary">Next Step <ChevronRight className="ml-2 w-4 h-4" /></Button>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Assessment & Submit */}
                        {currentStep === 3 && (
                            <div className="space-y-6 animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-[var(--color-primary-darkblue)] flex items-center mb-6">
                                    <FileCheck className="mr-3 text-[var(--color-primary-salmon)]" /> Final Assessment
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <label className="block text-base font-semibold text-[var(--color-primary-darkblue)] mb-3">Do you possess a valid passport from your country of residence?</label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center cursor-pointer"><input type="radio" name="hasPassport" value="Yes" checked={formData.hasPassport === 'Yes'} onChange={handleChange} className="w-5 h-5 text-[var(--color-primary-darkblue)]" /> <span className="ml-2">Yes</span></label>
                                            <label className="flex items-center cursor-pointer"><input type="radio" name="hasPassport" value="No" checked={formData.hasPassport === 'No'} onChange={handleChange} className="w-5 h-5 text-[var(--color-primary-darkblue)]" /> <span className="ml-2">No</span></label>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <label className="block text-base font-semibold text-[var(--color-primary-darkblue)] mb-3">Have you ever been convicted of a criminal offence?</label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center cursor-pointer"><input type="radio" name="hasCriminalRecord" value="Yes" checked={formData.hasCriminalRecord === 'Yes'} onChange={handleChange} className="w-5 h-5 text-[var(--color-primary-darkblue)]" /> <span className="ml-2">Yes</span></label>
                                            <label className="flex items-center cursor-pointer"><input type="radio" name="hasCriminalRecord" value="No" checked={formData.hasCriminalRecord === 'No'} onChange={handleChange} className="w-5 h-5 text-[var(--color-primary-darkblue)]" /> <span className="ml-2">No</span></label>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <label className="block text-base font-semibold text-[var(--color-primary-darkblue)] mb-3">Do you have any serious health conditions?</label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center cursor-pointer"><input type="radio" name="hasHealthIssues" value="Yes" checked={formData.hasHealthIssues === 'Yes'} onChange={handleChange} className="w-5 h-5 text-[var(--color-primary-darkblue)]" /> <span className="ml-2">Yes</span></label>
                                            <label className="flex items-center cursor-pointer"><input type="radio" name="hasHealthIssues" value="No" checked={formData.hasHealthIssues === 'No'} onChange={handleChange} className="w-5 h-5 text-[var(--color-primary-darkblue)]" /> <span className="ml-2">No</span></label>
                                        </div>
                                    </div>

                                    <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                                        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} className="w-5 h-5 mt-1 text-[var(--color-primary-red)] rounded border-gray-300 focus:ring-[var(--color-primary-red)]" />
                                        <p className="ml-3 text-sm text-gray-500">I certify that the information provided is true and correct. I understand that this is a preliminary assessment and does not guarantee a visa or employment.</p>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-6">
                                    <Button type="button" onClick={prevStep} variant="outline" className="border-gray-300 text-gray-600"><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                                    <Button type="button" onClick={handleSubmit} variant="primary" size="large" className="px-8 shadow-xl">Submit & Check Results</Button>
                                </div>
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Apply;
