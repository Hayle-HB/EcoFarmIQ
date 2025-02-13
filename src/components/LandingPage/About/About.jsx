import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/agri/agri3.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-6xl font-bold text-gray-900 mb-4">
            About <span className="text-green-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Pioneering sustainable agriculture through innovation and technology
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.img
                src={aboutImage}
                alt="Smart Farming Innovation"
                className="w-full h-[600px] object-cover transform"
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 1.5, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -z-10 -top-8 -left-8 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-10 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold leading-tight">
                Revolutionizing Farming for a
                <span className="text-green-600 block mt-2">
                  Better Tomorrow
                </span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                At EcoFarmIQ, we're not just developing technology – we're
                cultivating a sustainable future. Our innovative platform
                bridges the gap between traditional farming wisdom and
                cutting-edge technology, empowering farmers to achieve
                unprecedented levels of efficiency and sustainability.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "Cutting-edge AI and IoT solutions tailored for modern agriculture",
                  icon: "💡",
                },
                {
                  title: "Sustainability",
                  desc: "Eco-friendly practices that protect our planet's resources",
                  icon: "🌱",
                },
                {
                  title: "Efficiency",
                  desc: "Optimized operations that maximize yield and minimize waste",
                  icon: "⚡",
                },
                {
                  title: "Community",
                  desc: "Supporting farmers with knowledge and resources",
                  icon: "🤝",
                },
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl 
                    transition-all duration-300 border border-green-100/50 hover:border-green-200
                    hover:bg-white group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="group relative px-8 py-4 bg-green-600 text-white rounded-xl 
                overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 font-medium text-lg">
                Discover Our Story
              </span>
              <div
                className="absolute inset-0 bg-green-700 scale-x-0 group-hover:scale-x-100 
                transition-transform duration-500 origin-left"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
