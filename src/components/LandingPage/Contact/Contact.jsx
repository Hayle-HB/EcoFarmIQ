import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.7128, // Replace with your location
    lng: -74.006, // Replace with your location
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Our Location",
      details: ["Addis Ababa", "Ethiopia"],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      details: ["support@ecofarmiq.com", "info@ecofarmiq.com"],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      details: ["+251 962 484 250", "+251 943 432 526"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-b from-white via-emerald-50/30 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions about EcoFarmIQ? We're here to help. Send us a
            message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl 
                transition-all duration-300 group ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border border-emerald-100"
                }`}
            >
              <div
                className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 
                to-lime-500 rounded-full flex items-center justify-center mb-4 
                group-hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white">{info.icon}</span>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-emerald-400" : "text-emerald-800"
                }`}
              >
                {info.title}
              </h3>
              {info.details.map((detail, i) => (
                <p
                  key={i}
                  className={
                    isDarkMode ? "text-emerald-300" : "text-emerald-600"
                  }
                >
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-lg ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border border-emerald-100"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className={`block w-full px-4 py-3 rounded-lg 
                    focus:ring focus:ring-opacity-40 transition-colors duration-200 peer
                    ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-400"
                        : "bg-white border-emerald-200 text-gray-700 focus:border-emerald-400 focus:ring-emerald-300"
                    }`}
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute text-sm duration-300 transform 
                    -translate-y-6 scale-75 top-3 z-10 origin-[0] left-4 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6 
                    ${
                      isDarkMode
                        ? "text-gray-400 peer-focus:text-emerald-400 bg-gray-800"
                        : "text-gray-500 peer-focus:text-emerald-600 bg-white"
                    } px-2`}
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`block w-full px-4 py-3 rounded-lg 
                    focus:ring focus:ring-opacity-40 transition-colors duration-200 peer
                    ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-400"
                        : "bg-white border-emerald-200 text-gray-700 focus:border-emerald-400 focus:ring-emerald-300"
                    }`}
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute text-sm duration-300 transform 
                    -translate-y-6 scale-75 top-3 z-10 origin-[0] left-4 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6 
                    ${
                      isDarkMode
                        ? "text-gray-400 peer-focus:text-emerald-400 bg-gray-800"
                        : "text-gray-500 peer-focus:text-emerald-600 bg-white"
                    } px-2`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  className={`block w-full px-4 py-3 rounded-lg 
                    focus:ring focus:ring-opacity-40 transition-colors duration-200 peer
                    ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-400"
                        : "bg-white border-emerald-200 text-gray-700 focus:border-emerald-400 focus:ring-emerald-300"
                    }`}
                  required
                />
                <label
                  htmlFor="subject"
                  className={`absolute text-sm duration-300 transform 
                    -translate-y-6 scale-75 top-3 z-10 origin-[0] left-4 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6 
                    ${
                      isDarkMode
                        ? "text-gray-400 peer-focus:text-emerald-400 bg-gray-800"
                        : "text-gray-500 peer-focus:text-emerald-600 bg-white"
                    } px-2`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className={`block w-full px-4 py-3 rounded-lg 
                    focus:ring focus:ring-opacity-40 transition-colors duration-200 peer resize-none
                    ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-400"
                        : "bg-white border-emerald-200 text-gray-700 focus:border-emerald-400 focus:ring-emerald-300"
                    }`}
                  required
                />
                <label
                  htmlFor="message"
                  className={`absolute text-sm duration-300 transform 
                    -translate-y-6 scale-75 top-3 z-10 origin-[0] left-4 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6 
                    ${
                      isDarkMode
                        ? "text-gray-400 peer-focus:text-emerald-400 bg-gray-800"
                        : "text-gray-500 peer-focus:text-emerald-600 bg-white"
                    } px-2`}
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 text-white font-medium tracking-wide 
                  rounded-lg transition-all duration-300 transform 
                  hover:-translate-y-0.5 focus:outline-none focus:ring-2 
                  shadow-lg hover:shadow-xl ${
                    isDarkMode
                      ? "bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-400"
                      : "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-green-500 hover:to-emerald-500 focus:ring-emerald-300"
                  }`}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map using Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-xl overflow-hidden shadow-lg h-[400px] ${
              isDarkMode ? "border-gray-700" : "border border-emerald-100"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d986.1112835410372!2d38.806986230206135!3d8.882737437828125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1739414359991!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`filter transition-all duration-300 ${
                isDarkMode
                  ? "contrast-75 hover:contrast-100"
                  : "hover:contrast-[1.1]"
              }`}
              title="EcoFarmIQ Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
