import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRight, PiPlayCircle, PiBriefcase, PiClipboardText, PiHandshake } from "react-icons/pi";
import heroBg from "../assets/sydney-hero.jpg";
import { motion } from "framer-motion";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative w-full bg-white">
      {/* Upper Part: Background & Main Content */}
      <div className="relative w-full bg-[var(--color-primary-darkblue)] pb-32 md:pb-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Sydney Skyline"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-transparent"></div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Left: Text Content */}
            <div className="w-full lg:w-2/3 text-white z-20">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="text-[var(--color-primary-red)] font-extrabold tracking-[0.2em] uppercase text-xs md:text-sm border-b-2 border-[var(--color-primary-red)] pb-2">
                  Connect. Qualify. Get Hired.
                </span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Global Employment & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 animate-shimmer bg-[size:200%_auto]">Workforce Solutions</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl leading-relaxed font-light">
                We help skilled professionals secure verified job opportunities in Australia through a structured recruitment and eligibility assessment process trusted by employers.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/apply">
                  <button className="flex items-center gap-2 bg-[var(--color-primary-red)] hover:bg-red-700 text-white px-8 py-4 rounded font-semibold transition-all shadow-lg hover:shadow-red-900/30 hover:scale-105 active:scale-95 duration-200">
                    <PiPlayCircle className="w-5 h-5 fill-current" /> Apply Now
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column Removed as requested */}
          </motion.div>
        </div>
      </div>

      {/* SECTION 4: Highlight Cards (Straddling the Edge) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >

          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[var(--color-primary-red)]">
            <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <PiBriefcase className="w-7 h-7 text-[var(--color-primary-red)]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Employers</h3>
            <p className="text-gray-600 leading-relaxed">
              All job roles are shared directly by approved employers.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[var(--color-primary-red)]">
            <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <PiClipboardText className="w-7 h-7 text-[var(--color-primary-red)]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Assessment</h3>
            <p className="text-gray-600 leading-relaxed">
              Candidates are screened based on skills, experience, and role suitability.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[var(--color-primary-red)]">
            <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <PiHandshake className="w-7 h-7 text-[var(--color-primary-red)]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Process</h3>
            <p className="text-gray-600 leading-relaxed">
              No false promises. Clear steps. Honest outcomes.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
