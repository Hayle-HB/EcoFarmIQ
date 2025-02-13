import React from "react";
import { motion } from "framer-motion";
import featureImage1 from "../../../assets/images/agri/agri3.jpg";
import featureImage2 from "../../../assets/images/agri/agri3.jpg";
import featureImage3 from "../../../assets/images/agri/agri3.jpg";

const Features = () => {
  const features = [
    {
      title: "Smart Crop Recommendations",
      description:
        "Uses AI to suggest the best crops based on soil quality, weather, and market trends.",
      image: featureImage1,
      benefits: [
        "Soil analysis integration",
        "Weather pattern tracking",
        "Market trend analysis",
      ],
      icon: "🌱",
    },
    {
      title: "Plant Health Monitoring",
      description:
        "AI-powered analysis detects diseases, nutrient deficiencies, and pest infestations early.",
      image: featureImage2,
      benefits: ["Disease detection", "Nutrient tracking", "Pest management"],
      icon: "📸",
    },
    {
      title: "Environmental Analysis",
      description:
        "Monitors soil moisture, temperature, and climate conditions for optimal farming decisions.",
      image: featureImage3,
      benefits: [
        "Climate monitoring",
        "Soil condition tracking",
        "Environmental alerts",
      ],
      icon: "🌍",
    },
  ];

  return (
    <section id="features" className="h-screen bg-gradient-to-b from-green-50/40 to-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Innovative <span className="text-green-600">Features</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-4" />
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto font-mono">
            Discover how our cutting-edge technology transforms traditional
            farming into a sustainable and profitable venture
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                overflow-hidden border border-gray-100 hover:border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Feature Image */}
              <div className="relative h-50 overflow-hidden">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform grayscale-0
                    group-hover:grayscale-100 group-hover:scale-110 
                    transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-green-600/10 group-hover:bg-transparent transition-colors duration-300" />
                <span className="absolute top-3 right-3 text-3xl filter drop-shadow-lg">
                  {feature.icon}
                </span>
              </div>

              {/* Feature Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 
                  transition-colors duration-300 flex items-center gap-2"
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + benefitIndex * 0.1 }}
                    >
                      <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <motion.button
                  className="mt-4 w-full py-2.5 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium
                    transition-all duration-300 hover:bg-green-600 hover:text-white group relative 
                    overflow-hidden border border-gray-200 hover:border-green-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Explore Feature</span>
                  <div
                    className="absolute inset-0 bg-green-600 scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300 origin-left -z-0"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
