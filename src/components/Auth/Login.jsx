import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import useMutation from "../../hooks/useMutation";
import image from "../../assets/images/agri/agri3.jpg";

const Login = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error, mutate } = useMutation(
    "https://ecofarm.onrender.com/api/auth/login",
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
    <div className="relative h-screen flex overflow-hidden">
      {/* Main Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-white to-green-50/40`}
        />
        <motion.div
          className="absolute inset-0 bg-gray-900"
          initial={{ y: "-100%" }}
          animate={{ y: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative hidden lg:block lg:w-1/2"
      >
        <img
          src={image}
          alt="Agriculture"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-emerald-600/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Welcome Back!
            </h2>
            <p className="text-xl text-white/90 max-w-md mx-auto leading-relaxed drop-shadow-md">
              Sign in to continue your sustainable farming journey with
              EcoFarmIQ
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div className="relative w-full lg:w-1/2 h-screen overflow-y-auto p-8">
        <div className="max-w-md mx-auto pt-8">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={() => navigate("/")}
              className={`font-medium ${
                isDarkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-700 hover:text-green-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
            <motion.button
              onClick={() => navigate("/signup")}
              className={`font-medium ${
                isDarkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-700 hover:text-green-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up →
            </motion.button>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <motion.h2
              className={`text-3xl sm:text-4xl font-bold mb-3 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Welcome to <span className="text-green-500">EcoFarmIQ</span>
            </motion.h2>
            <motion.p
              className={isDarkMode ? "text-gray-300" : "text-gray-600"}
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

          {/* Form Box with Progressive Dark Theme */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            {/* Form Box Background */}
            <div className="absolute inset-0">
              <div
                className={`absolute inset-0 transition-colors duration-500 
                ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
              />
              <motion.div
                className="absolute inset-0 bg-gray-800"
                variants={{
                  light: { y: "-100%" },
                  dark: { y: "0%" },
                }}
                initial="light"
                animate={isDarkMode ? "dark" : "light"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              />
            </div>

            {/* Form Content */}
            <motion.div className="relative p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "border-gray-300 text-gray-900"
                      }`}
                      placeholder="name@company.com"
                      required
                    />
                  </motion.div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "border-gray-300 text-gray-900"
                      }`}
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
                      className={`h-4 w-4 ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-gray-300"
                      } focus:ring-green-500 rounded`}
                    />
                    <label
                      htmlFor="remember-me"
                      className={`ml-2 block text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className={`text-sm font-medium ${
                      isDarkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-green-600 hover:text-green-500"
                    }`}
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
                  className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 
                    text-white py-3 px-4 rounded-lg font-medium shadow-lg 
                    shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 
                    focus:outline-none focus:ring-4 focus:ring-green-500/20 
                    transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed
                    cursor-pointer ${
                      isDarkMode ? "bg-gray-800 shadow-gray-900/50" : "bg-white"
                    }`}
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
                    className={`font-medium ${
                      isDarkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-green-600 hover:text-green-500"
                    } transition-colors duration-300`}
                  >
                    Sign up now
                  </motion.button>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
