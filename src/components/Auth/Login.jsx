import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import useMutation from "../../hooks/useMutation";

const Login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error, mutate } = useMutation(
    "http://localhost:1000/api/auth/login",
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutate(formData);
      console.log("Login response:", response);

      if (response.status === "success") {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/welcome");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Welcome to <span className="text-green-600">EcoFarmIQ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Sign in to access your dashboard
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

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-green-100/50 
            border border-green-100/50 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                    focus:ring-4 focus:ring-green-500/20 transition-all duration-300
                    text-gray-900 placeholder-gray-400"
                  placeholder="name@company.com"
                  required
                />
              </motion.div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                <input
                  id="password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 
                    focus:ring-4 focus:ring-green-500/20 transition-all duration-300
                    text-gray-900 placeholder-gray-400 pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 
                    hover:text-gray-600 transition-colors duration-300"
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
              </motion.div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 
                    border-gray-300 rounded transition-all duration-300"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-green-600 hover:text-green-500 
                transition-colors duration-300"
              >
                Forgot password?
              </a>
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
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign in"
              )}
            </motion.button>

            {/* Sign up Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <motion.button
                type="button"
                onClick={() => navigate("/signup")}
                className="font-medium text-green-600 hover:text-green-500 
                transition-colors duration-300"
              >
                Sign up now
              </motion.button>
            </p>
          </form>

          {/* Social Login section remains unchanged */}
          {/* ... */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
