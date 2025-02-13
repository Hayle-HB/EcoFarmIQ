import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/agri/agri3.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-green-50/40 py-8 sm:py-16 lg:py-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-6 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-2">
            About <span className="text-green-600">Us</span>
          </h2>
          <div className="w-12 sm:w-24 h-1 bg-green-500 mx-auto rounded-full mb-2 sm:mb-6" />
          <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Pioneering sustainable agriculture through innovation and technology
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-20 items-center mb-6 sm:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto lg:mx-0 order-1 lg:order-1 mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <motion.img
                src={aboutImage}
                alt="Smart Farming Innovation"
                className="w-full h-[200px] sm:h-[400px] lg:h-[500px] object-cover transform"
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
            <div className="absolute -z-10 -bottom-4 -right-4 w-24 sm:w-72 h-24 sm:h-72 bg-green-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -z-10 -top-4 -left-4 w-24 sm:w-72 h-24 sm:h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-4 sm:space-y-8 order-2 lg:order-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-3">
              <h3 className="text-lg sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Revolutionizing Farming for a
                <span className="text-green-600 block mt-1">
                  Better Tomorrow
                </span>
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                At EcoFarmIQ, we're not just developing technology – we're
                cultivating a sustainable future. Our innovative platform
                bridges the gap between traditional farming wisdom and
                cutting-edge technology.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-2 sm:gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "Cutting-edge AI and IoT solutions",
                  icon: "💡",
                },
                {
                  title: "Sustainability",
                  desc: "Eco-friendly farming practices",
                  icon: "🌱",
                },
                {
                  title: "Efficiency",
                  desc: "Maximize yield, minimize waste",
                  icon: "⚡",
                },
                {
                  title: "Community",
                  desc: "Supporting local farmers",
                  icon: "🤝",
                },
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg hover:shadow-lg 
                    transition-all duration-300 border border-green-100/50 hover:border-green-200
                    hover:bg-white group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-lg sm:text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </span>
                  <h4 className="text-sm sm:text-xl font-semibold text-gray-900 mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-base text-gray-600">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="group relative px-4 sm:px-8 py-2.5 sm:py-4 bg-green-600 text-white rounded-lg 
                overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto
                mt-4 sm:mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 font-medium text-sm sm:text-lg">
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
