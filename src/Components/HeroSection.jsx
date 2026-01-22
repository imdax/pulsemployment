import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import heroBg from "../assets/herosection.jpg";
import { ArrowRight, ShieldCheck, Globe, Stethoscope, HardHat, ChefHat, Wrench } from "lucide-react";

function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center bg-[#0a0a1a] overflow-hidden">
      {/* Background with Professional Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1847] via-[#1C1847]/95 to-[var(--color-primary-darkblue)]/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            {/* Trust Indicator */}
            <div className="inline-flex items-center space-x-2 mb-8 border-l-2 border-[var(--color-primary-salmon)] pl-4">
              <span className="text-blue-200 uppercase tracking-widest text-xs font-semibold">Authorized Australian Recruitment</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Build your future in
              <span className="text-[var(--color-primary-salmon)]"> Australia.</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl font-light">
              We bridge the gap between global talent and Australian employers.
              A fully compliant, transparent, pathway to your new career.
            </p>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Link to="/apply">
                <Button variant="primary" size="large" className="w-full sm:w-auto px-8 py-4 shadow-lg hover:shadow-red-900/20">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <div className="flex items-center justify-center h-full px-8 py-3 text-white font-medium hover:text-[var(--color-primary-salmon)] transition-colors cursor-pointer">
                  How it works
                </div>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--color-primary-salmon)] opacity-90" />
                <span className="text-sm text-gray-400">Gov. Licensed</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-400 opacity-90" />
                <span className="text-sm text-gray-400">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Right Column: Job Search Form */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl max-w-md mx-auto lg:ml-auto relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Find your dream job</h3>
              </div>
              <p className="text-gray-400 text-sm mb-8">Search 500+ active listings in Australia</p>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Job Title or Keywords</label>
                  <input
                    type="text"
                    placeholder="e.g. Electrician, Nurse, Welder"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry / Sector</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all [&>option]:text-gray-900">
                    <option value="">All Sectors</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="construction">Construction</option>
                    <option value="mining">Mining & Resources</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="hospitality">Hospitality</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all [&>option]:text-gray-900">
                    <option value="">Any Location</option>
                    <option value="nsw">New South Wales</option>
                    <option value="vic">Victoria</option>
                    <option value="qld">Queensland</option>
                    <option value="wa">Western Australia</option>
                  </select>
                </div>

                <div className="pt-2">
                  <Button size="large" className="w-full py-4 !bg-[#1c1847] text-white hover:!bg-[#151236] transform transition-all border-none font-bold shadow-lg border border-white/10">
                    Search Opportunities
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
