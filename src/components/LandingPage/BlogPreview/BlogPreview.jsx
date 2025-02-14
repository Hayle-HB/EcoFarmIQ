import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const blogs = [
    {
      id: 1,
      title: "The Future of Precision Agriculture: AI-Driven Decision Making",
      summary:
        "Artificial intelligence is revolutionizing modern farming practices through advanced data analytics and automated decision-making systems.",
      content: [
        {
          subtitle: "Introduction to AI in Agriculture",
          text: "The integration of artificial intelligence in agriculture represents a significant leap forward in farming efficiency and sustainability. Modern farms are increasingly relying on AI-powered systems to optimize resource usage, predict weather patterns, and manage crop health.",
        },
        {
          subtitle: "Key Technologies",
          text: "Machine learning algorithms, computer vision systems, and IoT sensors form the backbone of modern agricultural AI. These technologies work in concert to provide farmers with real-time insights and actionable recommendations.",
        },
        {
          subtitle: "Impact on Farming Practices",
          text: "Studies show that AI-driven farming can increase crop yields by up to 20% while reducing water usage by 30%. These improvements are achieved through precise irrigation, optimal planting schedules, and early disease detection.",
        },
      ],
      author: "Dr. Sarah Chen",
      credentials:
        "Ph.D. in Agricultural Technology, Senior Researcher at AgriTech Institute",
      date: "March 15, 2024",
      readTime: "8 min read",
      references: [
        "Journal of Agricultural Science (2024)",
        "IEEE Smart Agriculture Conference 2023",
        "FAO Report on Digital Agriculture",
      ],
    },
    {
      id: 2,
      title:
        "Sustainable Agriculture: Balancing Productivity and Environmental Impact",
      summary:
        "Exploring the intersection of modern farming techniques and environmental conservation, with a focus on carbon sequestration and biodiversity preservation.",
      content: [
        {
          subtitle: "The Challenge of Sustainable Farming",
          text: "Modern agriculture faces the dual challenge of increasing food production while minimizing environmental impact. This balance requires innovative approaches and careful resource management.",
        },
        {
          subtitle: "Carbon Sequestration in Agriculture",
          text: "Agricultural practices can play a crucial role in carbon capture and storage. Through proper soil management and crop selection, farms can become effective carbon sinks.",
        },
        {
          subtitle: "Biodiversity Conservation",
          text: "Maintaining biodiversity in agricultural landscapes is essential for ecosystem health and resilient farming systems. This includes protecting beneficial insects and wildlife habitats.",
        },
      ],
      author: "Prof. Michael Roberts",
      credentials:
        "Environmental Science Director, Agricultural Research Institute",
      date: "March 12, 2024",
      readTime: "12 min read",
      references: [
        "Environmental Science Journal (2024)",
        "Sustainable Agriculture Review",
        "Biodiversity in Agriculture Report",
      ],
    },
    {
      id: 3,
      title: "IoT Integration in Modern Farming: A Technical Deep Dive",
      summary:
        "Technical analysis of sensor networks, data collection methodologies, and real-time monitoring systems in contemporary agricultural operations.",
      content: [
        {
          subtitle: "Sensor Network Architecture",
          text: "Modern agricultural IoT systems rely on sophisticated sensor networks that monitor various environmental and crop health parameters in real-time.",
        },
        {
          subtitle: "Data Collection and Analysis",
          text: "Advanced algorithms process the collected data to provide actionable insights for farmers, enabling precise decision-making in various aspects of farm management.",
        },
      ],
      author: "Emma Thompson",
      credentials: "IoT Systems Architect, AgTech Solutions",
      date: "March 10, 2024",
      readTime: "15 min read",
      references: [
        "IoT in Agriculture Handbook",
        "Smart Farming Technology Review",
        "Agricultural Sensors Guide",
      ],
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
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white`}
        />
        <motion.div
          className="absolute inset-0 bg-gray-900/95"
          initial={{ x: "-100%" }}
          animate={{ x: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl font-serif mb-12 text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Latest Research & Insights
        </motion.h2>

        <div className="space-y-16">
          {blogs &&
            blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`prose ${
                  isDarkMode ? "prose-invert" : ""
                } max-w-none`}
              >
                {/* Article Header */}
                <div className="border-b pb-4 mb-6">
                  <h3
                    className={`text-2xl sm:text-3xl font-serif mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {blog.title}
                  </h3>
                  <div
                    className={`flex flex-wrap gap-4 text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span>By {blog.author}</span>
                    <span>{blog.credentials}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Article Summary */}
                <p
                  className={`text-lg font-medium mb-6 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {blog.summary}
                </p>

                {/* Article Content */}
                <div className="space-y-6">
                  {blog.content &&
                    blog.content.map((section, idx) => (
                      <div key={idx}>
                        <h4
                          className={`text-xl font-serif mb-3 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {section.subtitle}
                        </h4>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {section.text}
                        </p>
                      </div>
                    ))}
                </div>

                {/* References */}
                <div className="mt-8 pt-4 border-t">
                  <h5
                    className={`text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    References
                  </h5>
                  <ul
                    className={`text-sm space-y-1 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {blog.references &&
                      blog.references.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                  </ul>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${blog.id}`}
                  className={`inline-block mt-6 text-sm font-medium transition-colors ${
                    isDarkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-700"
                  }`}
                >
                  Continue reading →
                </Link>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
