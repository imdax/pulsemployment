import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../Components/Button";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    country: "",
    city: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let websiteUrl = formData.website;
      if (websiteUrl && !/^https?:\/\//i.test(websiteUrl)) {
        websiteUrl = `https://${websiteUrl}`;
      }

      const payload = {
        companyName: formData.companyName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        website: websiteUrl,
        industry: formData.industry,
        companySize: formData.companySize,
        location: {
          country: formData.country,
          city: formData.city,
        },
      };

      await register(payload);
      navigate("/company/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 text-base focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)]";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-2xl w-full bg-white p-10 rounded-xl shadow-lg space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Register your Company
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/company/login"
              className="font-medium text-[var(--color-primary-red)] hover:text-red-700"
            >
              login to your account
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-center text-[var(--color-primary-red)]">
              {error}
            </div>
          )}

          <div className="rounded-md shadow-sm space-y-4">
            <input
              name="companyName"
              type="text"
              required
              className={inputClass}
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              required
              className={inputClass}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="tel"
              required
              className={inputClass}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              name="website"
              type="text"
              className={inputClass}
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
            />

            <input
              name="industry"
              type="text"
              required
              className={inputClass}
              placeholder="Industry"
              value={formData.industry}
              onChange={handleChange}
            />

            <select
              name="companySize"
              required
              className={inputClass}
              value={formData.companySize}
              onChange={handleChange}
            >
              <option value="">Select Company Size</option>
              <option value="1-10">1–10</option>
              <option value="11-50">11–50</option>
              <option value="51-200">51–200</option>
              <option value="201-500">201–500</option>
              <option value="500+">500+</option>
            </select>

            <div className="flex gap-4">
              <input
                name="country"
                type="text"
                required
                className={inputClass}
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
              <input
                name="city"
                type="text"
                required
                className={inputClass}
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="description"
              rows="4"
              className={inputClass}
              placeholder="Company Description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-base"
            isLoading={loading}
          >
            Register Company
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
