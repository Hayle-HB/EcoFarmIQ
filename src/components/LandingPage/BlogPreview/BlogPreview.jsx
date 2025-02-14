import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const BlogPreview = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [activeArticle, setActiveArticle] = useState(1);

  const blogs = [
    {
      id: 1,
      title: "The Future of Precision Agriculture: AI-Driven Decision Making",
      description:
        "An in-depth analysis of how artificial intelligence is revolutionizing farm management through predictive analytics and automated decision support systems.",
      author: "Dr. Sarah Chen",
      role: "Agricultural Technology Researcher",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Precision Farming"],
    },
    {
      id: 2,
      title:
        "Sustainable Agriculture: Balancing Productivity and Environmental Impact",
      description:
        "Exploring the intersection of modern farming techniques and environmental conservation, with a focus on carbon sequestration and biodiversity preservation.",
      author: "Prof. Michael Roberts",
      role: "Environmental Science Director",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Sustainability",
      tags: ["Sustainability", "Conservation", "Carbon Neutral"],
    },
    {
      id: 3,
      title: "IoT Integration in Modern Farming: A Technical Deep Dive",
      description:
        "Technical analysis of sensor networks, data collection methodologies, and real-time monitoring systems in contemporary agricultural operations.",
      author: "Emma Thompson",
      role: "IoT Systems Architect",
      date: "March 10, 2024",
      readTime: "15 min read",
      category: "Technical",
      tags: ["IoT", "Sensors", "Data Analytics"],
    },
    {
      id: 4,
      title: "Economic Implications of Smart Farming Adoption",
      description:
        "A comprehensive study of ROI metrics, implementation costs, and long-term economic benefits of transitioning to smart farming technologies.",
      author: "Dr. James Wilson",
      role: "Agricultural Economics Expert",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Economics",
      tags: ["ROI", "Investment", "Market Analysis"],
    },
  ];

  return (
    <section
      id="blog"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-white to-green-50/40`}
        />
        <motion.div
          className="absolute inset-0 bg-gray-900"
          initial={{ x: "-100%" }}
          animate={{ x: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 transition-colors duration-500 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Latest <span className="text-emerald-500">Insights</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            In-depth analysis and research in agricultural technology
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveArticle(blog.id)}
              className={`group relative p-4 sm:p-6 rounded-xl overflow-hidden 
                border border-transparent
                hover:border-emerald-500/30
                transition-all duration-500
                ${activeArticle === blog.id ? "bg-white/70" : "bg-white/50"} 
                backdrop-blur-sm shadow-sm hover:shadow-md 
                sm:hover:scale-[1.02] sm:hover:-translate-y-1`}
            >
              {/* Dark mode overlay that follows the theme transition */}
              <motion.div
                className="absolute inset-0 bg-gray-800/70 backdrop-blur-sm"
                initial={{ x: "-100%" }}
                animate={{ x: isDarkMode ? "0%" : "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Background Animation */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ease-out
                  ${activeArticle === blog.id || "group-hover:opacity-100"} 
                  sm:opacity-0 sm:group-hover:opacity-100`}
                >
                  <div
                    className={`absolute -inset-[100%] rounded-[100%] animate-spin-slow
                    ${
                      isDarkMode
                        ? "bg-gradient-to-r from-emerald-900/30 via-green-800/30 to-teal-900/30"
                        : "bg-gradient-to-r from-green-50/50 via-emerald-50/50 to-teal-50/50"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 pl-3 sm:pl-6">
                <div className="flex flex-wrap items-center text-sm gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium 
                      transition-colors duration-300 ${
                        isDarkMode
                          ? "group-hover:bg-emerald-900/60 group-hover:text-emerald-200"
                          : "group-hover:bg-gradient-to-r from-green-200 to-emerald-200 group-hover:text-green-800"
                      }`}
                  >
                    {blog.category}
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                  >
                    {blog.date}
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                  >
                    {blog.readTime}
                  </span>
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 
                    transition-colors duration-300 line-clamp-2 
                    group-hover:text-emerald-500`}
                >
                  {blog.title}
                </h3>

                <p
                  className={`text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 
                    leading-relaxed transition-colors duration-300 ${
                      activeArticle === blog.id
                        ? isDarkMode
                          ? "text-gray-300"
                          : "text-gray-700"
                        : isDarkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                >
                  {blog.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {blog.author}
                      </p>
                      <p
                        className={
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }
                      >
                        {blog.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs border rounded-full px-2 py-0.5 
                          transition-colors duration-300 ${
                            activeArticle === blog.id
                              ? isDarkMode
                                ? "border-emerald-700 bg-emerald-800/60 text-emerald-200"
                                : "border-emerald-200 bg-emerald-900 text-white"
                              : isDarkMode
                              ? "text-gray-300 border-gray-700 hover:border-emerald-700"
                              : "text-gray-500 border-gray-200 hover:border-emerald-500"
                          }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button with synchronized transitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: isDarkMode
                ? "0 10px 20px rgba(6, 78, 59, 0.3)"
                : "0 10px 20px rgba(4, 120, 87, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 overflow-hidden
              rounded-full text-sm sm:text-base font-medium shadow-sm 
              transition-all duration-500 ${
                isDarkMode
                  ? "bg-white border-2 border-emerald-600 text-emerald-600"
                  : "bg-gray-800 border-2 border-emerald-500 text-emerald-400"
              }`}
          >
            <span
              className="relative z-10 transition-colors duration-300 
              group-hover:text-white"
            >
              View All Articles
            </span>
            <div
              className={`absolute inset-0 -translate-x-full 
              group-hover:translate-x-0 transition-transform duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-emerald-800 to-green-700"
                  : "bg-gradient-to-r from-green-600 to-emerald-600"
              }`}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Add this to your CSS/Tailwind config
const styles = {
  keyframes: {
    "border-dance": {
      "0%, 100%": {
        "clip-path": "inset(0 0 98% 0)",
      },
      "25%": {
        "clip-path": "inset(0 98% 0 0)",
      },
      "50%": {
        "clip-path": "inset(98% 0 0 0)",
      },
      "75%": {
        "clip-path": "inset(0 0 0 98%)",
      },
    },
  },
  animation: {
    "border-dance": "border-dance 4s linear infinite",
  },
};

export default BlogPreview;
