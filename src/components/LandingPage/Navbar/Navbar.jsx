import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/svg/ecofarm.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "Smart Farming", href: "#smart-farming" },
        { name: "IoT Integration", href: "#iot" },
        { name: "Data Analytics", href: "#analytics" },
        { name: "Precision Agriculture", href: "#precision" },
        { name: "Sustainability", href: "#sustainability" },
      ],
    },
    {
      name: "Products",
      dropdown: [
        { name: "Sensor Networks", href: "#sensors" },
        { name: "Farm Management", href: "#management" },
        { name: "Weather Forecasting", href: "#weather" },
        { name: "Crop Monitoring", href: "#monitoring" },
        { name: "Mobile Apps", href: "#apps" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Case Studies", href: "#cases" },
        { name: "Webinars", href: "#webinars" },
        { name: "Research Papers", href: "#research" },
      ],
    },
    {
      name: "More",
      dropdown: [
        { name: "Features", href: "#features" },
        { name: "Our Team", href: "#teams" },
        { name: "Blog", href: "#blog" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavigation = (href) => {
    // Remove the '#' from the href
    const sectionId = href.replace("#", "");
    console.log("Trying to navigate to section:", sectionId); // Debug log

    // Find the element
    const element = document.getElementById(sectionId);
    console.log("Found element:", element); // Debug log

    if (element) {
      // Close menus first
      setIsMenuOpen(false);
      setActiveDropdown(null);

      // Scroll after a small delay to ensure menus are closed
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      console.log("Section not found:", sectionId); // Debug log
    }
  };

  // Handle scrolling when returning to home page
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        // Clear the state
        window.history.replaceState({}, document.title);
      }, 100); // Small delay to ensure the page has loaded
    }
  }, [location]);

  const handleMobileNavigation = (href) => {
    if (!href) {
      console.log("No href provided"); // Debug log
      return;
    }

    console.log("Mobile navigation to:", href); // Debug log
    handleNavigation(href);
  };

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } top-0`}
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Navbar Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <span
              className="text-3xl font-bold bg-gradient-to-r from-[#00ffff] via-[#40e0d0] to-[#ffd700] 
              bg-clip-text text-transparent hover:from-[#ffd700] hover:via-[#40e0d0] hover:to-[#00ffff] 
              transition-all duration-500 cursor-pointer"
            >
              EcoFarmIQ
            </span>
          </motion.div> */}

          <img
            src={logo}
            alt="EcoFarmIQ"
            className="w-50 h-100  -ml-10 hover:scale-110 transition duration-300"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  onClick={() => item.href && handleNavigation(item.href)}
                  className={`font-medium py-2 cursor-pointer flex items-center gap-1
                    relative group/item transition-all duration-300
                    ${
                      isDarkMode
                        ? "text-gray-300 hover:text-emerald-400"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4 transition-all duration-200 group-hover:rotate-180
                        group-hover:text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {/* Animated underline */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 
                    bg-gradient-to-r from-emerald-500 to-teal-500
                    group-hover:w-full transition-all duration-300"
                  />
                </a>

                {/* Invisible bridge to maintain hover */}
                {item.dropdown && activeDropdown === index && (
                  <>
                    <div className="absolute -bottom-2 left-0 w-full h-4" />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`absolute left-0 top-full pt-2 w-56`}
                      style={{ zIndex: 1000 }}
                    >
                      <div
                        className={`rounded-xl shadow-lg ring-1 ring-black/5
                        ${
                          isDarkMode
                            ? "bg-gray-800/95 ring-white/10"
                            : "bg-white/95 ring-black/5"
                        } backdrop-blur-sm overflow-hidden`}
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              onClick={() => handleNavigation(subItem.href)}
                              className={`block px-4 py-3 text-sm relative
                                transition-all duration-300 cursor-pointer
                                ${
                                  isDarkMode
                                    ? "text-gray-300 hover:text-emerald-400 hover:bg-emerald-950/50"
                                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80"
                                }
                                group/subitem`}
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                <span
                                  className="w-1.5 h-1.5 rounded-full 
                                  bg-emerald-500 opacity-0 transition-opacity duration-300
                                  group-hover/subitem:opacity-100"
                                />
                                {subItem.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            ))}

            {/* Get Started Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white
                px-6 py-2 rounded-full font-medium hover:from-teal-500 hover:to-emerald-500
                transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md
                hover:text-[#40e0d0] focus:outline-none transition-colors duration-300
                ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Dropdowns */}
      <motion.div
        initial={false}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${
          isDarkMode ? "bg-gray-800/95" : "bg-white/95"
        } backdrop-blur-lg`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={item.name}>
              <button
                onClick={() => {
                  if (item.dropdown) {
                    setActiveDropdown(activeDropdown === index ? null : index);
                  } else if (item.href) {
                    handleMobileNavigation(item.href);
                  }
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium 
                  flex items-center justify-between
                  transition-all duration-300
                  ${
                    isDarkMode
                      ? "text-gray-200 hover:text-emerald-400 hover:bg-gray-700/50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 
                      ${activeDropdown === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.dropdown && (
                <motion.div
                  initial={false}
                  animate={
                    activeDropdown === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  className="overflow-hidden"
                >
                  <div
                    className={`pl-4 py-2 space-y-1 
                    ${isDarkMode ? "bg-gray-800/50" : "bg-gray-50/50"}`}
                  >
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          console.log("Clicked:", subItem.name, subItem.href); // Debug log
                          handleMobileNavigation(subItem.href);
                        }}
                        className={`w-full text-left block px-4 py-2 text-sm rounded-md
                          transition-colors duration-300 cursor-pointer
                          ${
                            isDarkMode
                              ? "text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50"
                              : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
                          }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          {/* Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500
              text-white px-4 py-2 rounded-full font-medium 
              hover:from-teal-500 hover:to-emerald-500
              transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
