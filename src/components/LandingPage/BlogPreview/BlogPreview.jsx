import React, { useState } from "react";
import { motion } from "framer-motion";

const BlogPreview = () => {
  const [activeArticle, setActiveArticle] = useState(1); // Initialize with first article

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
      className="bg-gradient-to-b from-white to-green-50/40 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Latest <span className="text-green-600">Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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
                ${activeArticle === blog.id ? "bg-white/70" : "bg-white/50"} 
                backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
            >
              {/* Background Animation - Only visible for active article */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ease-out
                  ${activeArticle === blog.id ? "opacity-100" : "opacity-0"}`}
                >
                  <div
                    className="absolute -inset-[100%] bg-gradient-to-r from-green-50/50 
                    via-emerald-50/50 to-teal-50/50 rounded-[100%] animate-spin-slow"
                  />
                </div>
              </div>

              {/* Border Animations - Only active for selected article */}
              <div className="absolute inset-0">
                <div
                  className={`absolute left-0 top-0 w-0.5 bg-gradient-to-b 
                  from-green-600 via-emerald-500 to-teal-600 transition-all duration-700 ease-out
                  ${activeArticle === blog.id ? "h-full" : "h-0"}`}
                />
                <div
                  className={`absolute left-0 top-0 h-0.5 bg-gradient-to-r 
                  from-green-600 via-emerald-500 to-teal-600 transition-all duration-700 ease-out
                  ${activeArticle === blog.id ? "w-full" : "w-0"}`}
                />
                <div
                  className={`absolute right-0 top-1/2 h-0.5 bg-gradient-to-l 
                  from-teal-600 to-emerald-500 -translate-y-1/2 transition-all duration-300 ease-out
                  ${activeArticle === blog.id ? "w-6" : "w-0"}`}
                />
              </div>

              <div className="pl-3 sm:pl-6 relative">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 sm:mb-3 gap-2 sm:gap-4">
                  <span
                    className={`bg-gradient-to-r from-green-100 to-emerald-100 
                    text-green-800 px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300
                    ${
                      activeArticle === blog.id
                        ? "from-green-200 to-emerald-200"
                        : ""
                    }`}
                  >
                    {blog.category}
                  </span>
                  <span className="text-xs sm:text-sm">{blog.date}</span>
                  <span className="text-xs sm:text-sm">{blog.readTime}</span>
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 
                  transition-colors duration-300 line-clamp-2
                  ${
                    activeArticle === blog.id
                      ? "text-emerald-700"
                      : "text-gray-900"
                  }`}
                >
                  {blog.title}
                </h3>

                <p
                  className={`text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 
                  leading-relaxed transition-colors duration-300
                  ${
                    activeArticle === blog.id
                      ? "text-gray-700"
                      : "text-gray-600"
                  }`}
                >
                  {blog.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {blog.author}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {blog.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs border rounded-full px-2 py-0.5 
                          transition-colors duration-300
                          ${
                            activeArticle === blog.id
                              ? "border-emerald-200 bg-emerald-900 text-white"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(4, 120, 87, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-white overflow-hidden
              border-2 border-emerald-600 text-emerald-600 rounded-full text-sm sm:text-base 
              font-medium shadow-sm transition-all duration-300"
          >
            <span
              className="relative z-10 transition-colors duration-300 
              group-hover:text-white"
            >
              View All Articles
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 
              -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
