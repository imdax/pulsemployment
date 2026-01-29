import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Briefcase,
  FileCheck,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Button from "../Components/Button";
import API from "../services/api";

/* ---------------- ALL COUNTRIES ---------------- */
const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bangladesh",
  "Belgium",
  "Belize",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Mongolia",
  "Morocco",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Zimbabwe",
];

/* ---------------- COUNTRY CODES ---------------- */
const COUNTRY_CODES = [
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+86",
  "+90",
  "+91",
  "+92",
  "+94",
  "+95",
  "+98",
  "+212",
  "+213",
  "+234",
  "+251",
  "+254",
  "+256",
  "+880",
  "+971",
  "+972",
];

const Apply = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [professionsByCategory, setProfessionsByCategory] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phoneCode: "",
    phoneNumber: "",
    age: "",
    profession: "",
    yearsExperience: "",
    englishLevel: "",
    hasPassport: "",
    hasCriminalRecord: "",
    hasHealthIssues: "",
    agreeToTerms: false,
  });

  /* ---------------- FETCH PROFESSIONS ---------------- */
  useEffect(() => {
    const fetchProfessions = async () => {
      const res = await API.get("/api/professions");
      const grouped = {};
      res.data.data.forEach((p) => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
      });
      setProfessionsByCategory(grouped);
    };
    fetchProfessions();
  }, []);

  /* ---------------- AUTO-DETECT COUNTRY FROM IP ---------------- */
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data?.country_name && data?.country_calling_code) {
          setFormData((prev) => ({
            ...prev,
            country: data.country_name,
            phoneCode: data.country_calling_code,
          }));
        }
      } catch {
        // silent fail
      }
    };
    detectCountry();
  }, []);

  /* ---------------- HANDLER ---------------- */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ---------------- STEP VALIDATION ---------------- */
  const validateStep = () => {
    if (currentStep === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.country ||
        !formData.phoneCode ||
        !formData.phoneNumber ||
        !formData.age
      ) {
        setError("Please fill all required personal details.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (
        !formData.profession ||
        !formData.yearsExperience ||
        !formData.englishLevel
      ) {
        setError("Please complete your professional details.");
        return false;
      }
    }

    setError("");
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setCurrentStep((p) => p + 1);
  };

  const prevStep = () => setCurrentStep((p) => p - 1);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async () => {
    if (!formData.agreeToTerms) {
      setError("You must agree to the declaration.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const registerRes = await API.post("/api/register", {
        ...formData,
        phone: `${formData.phoneCode}${formData.phoneNumber}`,
        age: Number(formData.age),
      });

      const userId = registerRes.data.data.userId;
      const assessmentRes = await API.post("/api/assessment/start", { userId });

      navigate(
        assessmentRes.data.data.status === "ACCEPTED"
          ? "/result-qualified"
          : "/result-disqualified",
        { state: assessmentRes.data.data },
      );
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-darkblue)] outline-none";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[var(--color-primary-darkblue)] p-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Australian Eligibility Assessment
          </h1>
          <p className="text-blue-100 mt-2">
            If eligible, our migration agent will contact you.
          </p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
              {error}
            </div>
          )}

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold flex gap-2">
                <User /> Personal Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className={inputClass}
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className={inputClass}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  placeholder="Email"
                  className={inputClass}
                  onChange={handleChange}
                />
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  className={inputClass}
                  onChange={handleChange}
                />

                <select
                  name="country"
                  value={formData.country}
                  className={inputClass}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <div className="flex gap-3">
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    className="w-1/3 px-3 py-3 border rounded-xl"
                    onChange={handleChange}
                  >
                    <option value="">Code</option>
                    {COUNTRY_CODES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-2/3 px-4 py-3 border rounded-xl"
                    onChange={handleChange}
                  />
                </div>

                <p className="text-xs text-gray-500 md:col-span-2">
                  Country and country code are auto-detected. You may change
                  them if needed.
                </p>
              </div>

              <div className="flex justify-end">
                <Button onClick={nextStep}>
                  Next <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold flex gap-2">
                <Briefcase /> Professional Details
              </h2>

              <select
                name="profession"
                className={inputClass}
                onChange={handleChange}
              >
                <option value="">Select Profession</option>
                {Object.entries(professionsByCategory).map(([cat, list]) => (
                  <optgroup key={cat} label={cat}>
                    {list.map((p) => (
                      <option key={p._id}>{p.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>

              <select
                name="yearsExperience"
                className={inputClass}
                onChange={handleChange}
              >
                <option value="">Years of Experience</option>
                <option value="0-1">0–1</option>
                <option value="2-5">2–5</option>
                <option value="5+">5+</option>
              </select>

              <select
                name="englishLevel"
                className={inputClass}
                onChange={handleChange}
              >
                <option value="">English Proficiency</option>
                <option>Basic</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ChevronLeft size={16} /> Back
                </Button>
                <Button onClick={nextStep}>
                  Next <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold flex gap-2">
                <FileCheck /> Final Assessment
              </h2>

              {["hasPassport", "hasCriminalRecord", "hasHealthIssues"].map(
                (f) => (
                  <select
                    key={f}
                    name={f}
                    className={inputClass}
                    onChange={handleChange}
                  >
                    <option value="">
                      {f
                        .replace("has", "Do you have ")
                        .replace(/([A-Z])/g, " $1")}
                      ?
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                ),
              )}

              <label className="flex gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  onChange={handleChange}
                />
                I confirm the information provided is correct.
              </label>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ChevronLeft size={16} /> Back
                </Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Assessing…" : "Submit & Check Results"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
