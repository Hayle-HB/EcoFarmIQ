import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import agri1 from "../../../assets/images/agri/smart agri 1.jpg";
import agri2 from "../../../assets/images/agri/plant1.jpg";
import agri3 from "../../../assets/images/agri/plant2.jpg";
import agri4 from "../../../assets/images/agri/agri4.jpg";
import agri5 from "../../../assets/images/agri/agri5.jpg";
import agri6 from "../../../assets/images/agri/agri6.jpg";

const Gallery = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
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
    // {
    //   id: 6,
    //   image: agri6,
    //   category: "technology",
    //   title: "IoT Sensors",
    //   description: "Real-time environmental monitoring",
    // },
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
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-white to-green-50/40`}
        />
        <motion.div
          className="absolute inset-0 bg-gray-900"
          initial={{ x: "100%" }}
          animate={{ x: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`font-playfair text-3xl sm:text-4xl font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our <span className="text-green-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-3" />
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto font-light px-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore our innovative agricultural solutions in action
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm 
                font-medium transition-all duration-300 shadow-sm hover:shadow-md 
                ${
                  activeFilter === filter.id
                    ? isDarkMode
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white"
                      : "bg-gradient-to-r from-green-500 to-green-600 text-white"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
                className="aspect-square relative overflow-hidden rounded-xl 
                  cursor-zoom-in bg-white"
                onClick={() => setSelectedImage(item)}
              >
                {/* Dark mode overlay that follows the theme transition */}
                <motion.div
                  className="absolute inset-0 bg-gray-800 backdrop-blur-sm"
                  initial={{ x: "100%" }}
                  animate={{ x: isDarkMode ? "0%" : "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                <motion.div
                  className="w-full h-full group relative z-10"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-300
                      ${isDarkMode ? "" : "grayscale hover:grayscale-0"}`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Slider */}
        <div className="sm:hidden relative mb-8">
          <motion.div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-white">
            {/* Dark mode overlay for mobile */}
            <motion.div
              className="absolute inset-0 bg-gray-800 backdrop-blur-sm z-10"
              initial={{ x: "100%" }}
              animate={{ x: isDarkMode ? "0%" : "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

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
                        className={`w-full h-full object-cover pointer-events-none
                          ${
                            isDarkMode
                              ? "" // Remove grayscale in dark mode
                              : "grayscale hover:grayscale-0" // Only apply grayscale in light mode
                          }`}
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

        {/* Expanded Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 mt-16
                cursor-zoom-out ${isDarkMode ? "bg-black/0" : "bg-black/0"}`}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40"
                onClick={() => setSelectedImage(null)}
              />

              <motion.div
                layoutId={`gallery-item-${selectedImage.id}`}
                className={`relative overflow-hidden rounded-lg sm:rounded-xl 
                  ${isDarkMode ? "bg-gray-900" : "bg-black"}`}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  duration: 0.6,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full 
                    bg-black/50 hover:bg-black/70 text-white/90 hover:text-white
                    transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="w-[85vw] h-[70vh] sm:w-[80vw] sm:h-[65vh] 
                    md:w-[70vw] md:h-[60vh] lg:w-[60vw] lg:h-[70vh]"
                >
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                      from-black/90 via-black/60 to-transparent p-4 sm:p-6"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-white text-lg sm:text-xl font-semibold mb-2"
                    >
                      {selectedImage.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="text-gray-200 text-sm sm:text-base"
                    >
                      {selectedImage.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
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
