import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import agri1 from "../../../assets/images/agri/smart agri 1.jpg";
import agri2 from "../../../assets/images/agri/plant1.jpg";
import agri3 from "../../../assets/images/agri/plant2.jpg";
import agri4 from "../../../assets/images/agri/agri4.jpg";
import agri5 from "../../../assets/images/agri/agri5.jpg";
import agri6 from "../../../assets/images/agri/agri6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      image: agri1,
      category: "smart-farming",
      title: "Smart Irrigation Systems",
      description: "AI-powered water management for optimal crop growth",
    },
    {
      id: 2,
      image: agri2,
      category: "sustainable",
      title: "Organic Farming",
      description: "Sustainable practices for healthier produce",
    },
    {
      id: 3,
      image: agri3,
      category: "technology",
      title: "Drone Monitoring",
      description: "Advanced aerial crop analysis",
    },
    {
      id: 4,
      image: agri4,
      category: "smart-farming",
      title: "Automated Greenhouses",
      description: "Climate-controlled growing environments",
    },
    {
      id: 5,
      image: agri5,
      category: "sustainable",
      title: "Vertical Farming",
      description: "Space-efficient urban agriculture",
    },
    {
      id: 6,
      image: agri6,
      category: "technology",
      title: "IoT Sensors",
      description: "Real-time environmental monitoring",
    },
  ]);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "smart-farming", label: "Smart Farming" },
    { id: "sustainable", label: "Sustainable" },
    { id: "technology", label: "Technology" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="gallery" className="bg-gradient-to-b from-white via-green-50/30 to-white flex flex-col justify-center overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-green-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-3" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Explore our innovative agricultural solutions in action
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                shadow-sm hover:shadow-md ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-50"
                }`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`gallery-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.3 }}
                className="aspect-square relative overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() => setSelectedImage(item)}
              >
                <motion.div
                  className="w-full h-full group"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-all duration-300
                      grayscale group-hover:grayscale-0"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expanded Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                layoutId={`gallery-item-${selectedImage.id}`}
                className="relative bg-black rounded-xl overflow-hidden"
                initial={{ width: "100px", height: "100px" }}
                animate={{
                  width: "min(80vw, 800px)",
                  height: "min(80vh, 600px)",
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-full relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                      from-black/90 via-black/60 to-transparent p-6"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white text-xl font-semibold mb-2"
                    >
                      {selectedImage.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-200 text-sm"
                    >
                      {selectedImage.description}
                    </motion.p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 text-white w-10 h-10 rounded-full 
                      bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300
                      flex items-center justify-center text-2xl"
                    onClick={() => setSelectedImage(null)}
                  >
                    ×
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading dots for filtered items */}
        <AnimatePresence>
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center space-x-2 mt-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
