import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";
import useMutation from "../../hooks/useMutation";
import logo from "../../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Initialize useMutation with the correct URL and options
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
    console.log("Form submitted"); // Debug log

    try {
      const response = await mutate(formData);
      console.log("Login response:", response); // Debug log

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
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {error && (
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Submit button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
            </div>
          </form>

          {/* Sign up link */}
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <motion.button
              type="button"
              onClick={() => navigate("/signup")}
              whileHover={{ scale: 1.05 }}
              className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
            >
              Sign up now
            </motion.button>
          </p>
        </div>
      </div>
    </>
  );
}
