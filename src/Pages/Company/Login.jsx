import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../Components/Button";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      await login(formData.email, formData.password);
      navigate("/company/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/company/register"
              className="font-medium text-[var(--color-primary-red)] hover:text-red-700"
            >
              register a new company
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-center text-[var(--color-primary-red)]">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="Email address"
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
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-base"
            isLoading={loading}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
