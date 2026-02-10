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
            // Ensure website has http/https
            let websiteUrl = formData.website;
            if (websiteUrl && !/^https?:\/\//i.test(websiteUrl)) {
                websiteUrl = `https://${websiteUrl}`;
            }

            // Construct payload to match backend schema
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
                    city: formData.city
                }
            };

            await register(payload);
            navigate("/company/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register your Company
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{" "}
                        <Link to="/company/login" className="font-medium text-[var(--color-primary-red)] hover:text-red-700">
                            login to your account
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && <div className="text-[var(--color-primary-red)] text-center">{error}</div>}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                name="companyName"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Company Name"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="phone"
                                type="tel"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="website"
                                type="text"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Website URL"
                                value={formData.website}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="industry"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Industry"
                                value={formData.industry}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <select
                                name="companySize"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                value={formData.companySize}
                                onChange={handleChange}
                            >
                                <option value="">Select Company Size</option>
                                <option value="1-10">1-10</option>
                                <option value="11-50">11-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="500+">500+</option>
                            </select>
                        </div>
                        <div className="flex">
                            <input
                                name="country"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-1/2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                            <input
                                name="city"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-1/2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <textarea
                                name="description"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[var(--color-primary-red)] focus:border-[var(--color-primary-red)] focus:z-10 sm:text-sm"
                                placeholder="Company Description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            isLoading={loading}
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
