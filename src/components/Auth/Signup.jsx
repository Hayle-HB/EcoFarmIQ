import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import useMutation from "../../hooks/useMutation";

const Signup = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const { loading, error, mutate } = useMutation(
    "http://localhost:1000/api/auth/register",
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      return; // You might want to set a specific error state for this
    }

    try {
      const response = await mutate(formData);
      console.log("Signup response:", response);

      if (response.status === "success") {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/welcome");
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white 
      flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-15"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Join <span className="text-green-600">EcoFarmIQ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Start your journey towards smarter farming
          </motion.p>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg"
            role="alert"
          >
            {error}
          </motion.div>
        )}

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-green-100/50 
            border border-green-100/50 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                    focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                    focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                  focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            {/* Password Fields */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                      focus:ring-4 focus:ring-green-500/20 transition-all duration-300 pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 
                      hover:text-gray-600 transition-colors duration-300 cursor-pointer"
                  >
                    {isPasswordVisible ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                    focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 
                  border-gray-300 rounded transition-all duration-300"
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 text-sm text-gray-600"
              >
                I agree to the{" "}
                <a href="#" className="text-green-600 hover:text-green-500">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 hover:text-green-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 
                text-white py-3 px-4 rounded-lg font-medium shadow-lg 
                shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 
                focus:outline-none focus:ring-4 focus:ring-green-500/20 
                transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed
                cursor-pointer"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <Spinner size="small" color="white" />
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </motion.button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <motion.button
                type="button"
                onClick={() => navigate("/login")}
                className="font-medium text-green-600 hover:text-green-500 
                  transition-colors duration-300"
              >
                Sign in
              </motion.button>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
