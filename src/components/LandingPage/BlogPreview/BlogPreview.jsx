import React from "react";
import { motion } from "framer-motion";

const BlogPreview = () => {
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
    <section className="bg-gradient-to-b from-white to-green-50/40 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-green-600">Insights</span>
          </h2>
          <p className="text-lg text-gray-600">
            In-depth analysis and research in agricultural technology
          </p>
        </motion.div>

        <div className="space-y-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-700 ease-out"
                >
                  <div
                    className="absolute -inset-[100%] bg-gradient-to-r from-green-50/50 
                    via-emerald-50/50 to-teal-50/50 rounded-[100%] group-hover:animate-spin-slow"
                  />
                </div>
              </div>

              <div className="absolute inset-0">
                <div
                  className="absolute left-0 top-0 w-0.5 h-0 bg-gradient-to-b 
                  from-green-600 via-emerald-500 to-teal-600 group-hover:h-full 
                  transition-all duration-700 ease-out"
                />

                <div
                  className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r 
                  from-green-600 via-emerald-500 to-teal-600 group-hover:w-full 
                  transition-all duration-700 ease-out"
                />

                <div
                  className="absolute right-0 top-1/2 h-0.5 w-0 bg-gradient-to-l 
                  from-teal-600 to-emerald-500 group-hover:w-6 -translate-y-1/2 
                  transition-all duration-300 ease-out delay-500"
                />
              </div>

              <div className="pl-6 relative">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <span
                    className="bg-gradient-to-r from-green-100 to-emerald-100 
                    text-green-800 px-2.5 py-0.5 rounded-full text-xs font-medium 
                    group-hover:from-green-200 group-hover:to-emerald-200 
                    transition-all duration-300"
                  >
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3
                  className="text-2xl font-semibold text-gray-900 mb-3 
                  group-hover:text-emerald-700 transition-colors duration-300"
                >
                  {blog.title}
                </h3>

                <p
                  className="text-gray-600 mb-4 line-clamp-2 leading-relaxed 
                  group-hover:text-gray-700 transition-colors duration-300"
                >
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {blog.author}
                      </p>
                      <p className="text-sm text-gray-500">{blog.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-500 border border-gray-200 
                          rounded-full px-2.5 py-0.5 hover:border-emerald-500 
                          hover:text-aqua-600 transition-colors duration-300
                          group-hover:border-emerald-200 group-hover:bg-black group-hover:text-white hover:text-blue-300"
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
          className="text-center mt-16"
        >
          <button
            className="px-8 py-3 bg-white border-2 border-emerald-600 
            text-emerald-600 rounded-full font-medium hover:bg-gradient-to-r 
            hover:from-green-600 hover:to-emerald-600 hover:text-white 
            transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
