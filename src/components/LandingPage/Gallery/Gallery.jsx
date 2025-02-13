import React, { useState, useEffect, useCallback } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState(0);
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

  // Auto-slide functionality for mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    if (!isMobile) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === filteredItems.length - 1 ? 0 : prev + 1
      );
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [filteredItems.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [filteredItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // minimum distance to trigger slide change

    if (dragDistance > dragThreshold) {
      // Dragged right - show previous slide
      prevSlide();
    } else if (dragDistance < -dragThreshold) {
      // Dragged left - show next slide
      nextSlide();
    }
  };

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white via-green-50/30 to-white flex flex-col justify-center overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-green-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-3" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            Explore our innovative agricultural solutions in action
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
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

        {/* Mobile Slider */}
        <div className="sm:hidden relative mb-8">
          <motion.div
            className="relative h-[280px] w-full overflow-hidden rounded-xl"
            layout
          >
            <AnimatePresence initial={false}>
              {filteredItems.map(
                (item, index) =>
                  index === currentSlide && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 touch-pan-y"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.7}
                      onDragStart={(e, info) => setDragStart(info.point.x)}
                      onDragEnd={handleDragEnd}
                      onClick={(e) => {
                        // Only trigger zoom if it wasn't a drag
                        if (Math.abs(e.clientX - dragStart) < 5) {
                          setSelectedImage(item);
                        }
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 pointer-events-none">
                        <h3 className="text-white text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full
                font-bold text-xl transition-all duration-300 z-10"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full
                font-bold text-xl transition-all duration-300 z-10"
              onClick={nextSlide}
            >
              →
            </button>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-green-600 w-4"
                    : "bg-gray-300 hover:bg-green-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
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

        {/* Expanded Image Modal - Adjusted size and controls */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                layoutId={`gallery-item-${selectedImage.id}`}
                className="relative bg-black rounded-lg sm:rounded-xl overflow-hidden"
                initial={{ width: "100px", height: "100px" }}
                animate={{
                  width: "min(85vw, 700px)", // Reduced from 90vw, 800px
                  height: "min(85vh, 500px)", // Reduced from 90vh, 600px
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
                      from-black/90 via-black/60 to-transparent p-3 sm:p-6"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2"
                    >
                      {selectedImage.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-200 text-xs sm:text-sm"
                    >
                      {selectedImage.description}
                    </motion.p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full 
                      bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300
                      flex items-center justify-center text-2xl sm:text-3xl font-bold"
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
