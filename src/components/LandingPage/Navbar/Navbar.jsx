import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/svg/ecofarm.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
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
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href.substring(1) } });
    } else {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Add effect to handle scrolling when returning to home page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } top-0`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <motion.div
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
                  className="text-gray-700 font-medium transition-colors duration-300
                    hover:text-[#40e0d0] py-2 cursor-pointer"
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="ml-1 inline-block">▼</span>
                  )}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#40e0d0] 
                    group-hover:w-full transition-all duration-300"
                  />
                  <span
                    className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-[#40e0d0] to-[#ffd700] 
                    group-hover:w-full transition-all duration-300 delay-150"
                  />
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          onClick={() => handleNavigation(subItem.href)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r 
                            hover:from-[#00ffff]/10 hover:to-[#ffd700]/10 hover:text-[#40e0d0]
                            transition-all duration-300 cursor-pointer"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#00ffff] to-[#ffd700] text-gray-900 
                px-6 py-2 rounded-full font-medium hover:from-[#ffd700] hover:to-[#00ffff] 
                transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                hover:text-[#40e0d0] focus:outline-none transition-colors duration-300"
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
        className={`md:hidden overflow-hidden bg-white/80 backdrop-blur-lg`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={item.name}>
              <a
                onClick={() => item.href && handleNavigation(item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                  hover:text-[#40e0d0] hover:bg-gray-50 transition-all duration-300"
              >
                {item.name}
                {item.dropdown && <span className="ml-1 inline-block">▼</span>}
              </a>

              {/* Mobile Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <div className="pl-4">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      onClick={() => handleNavigation(subItem.href)}
                      className="block px-3 py-2 text-sm text-gray-600
                        hover:text-[#40e0d0] transition-colors duration-300"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 bg-gradient-to-r from-[#00ffff] to-[#ffd700] 
              text-gray-900 px-3 py-2 rounded-full font-medium hover:from-[#ffd700] 
              hover:to-[#00ffff] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
