import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Button from "../Components/Button";

const ResultQualified = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          You’re Eligible 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your profile meets the initial eligibility criteria for Australian
          migration pathways.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
          <p className="text-green-800 font-semibold">
            Our agent will contact you soon
          </p>
          <p className="text-green-700 text-sm mt-2">
            Please keep your phone and email accessible. This assessment does
            not guarantee a visa.
          </p>
        </div>

        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default ResultQualified;
