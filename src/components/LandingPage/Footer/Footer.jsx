import React from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    solutions: [
      { name: "Smart Farming", href: "#" },
      { name: "IoT Integration", href: "#" },
      { name: "Data Analytics", href: "#" },
      { name: "Precision Agriculture", href: "#" },
      { name: "Sustainability", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Research Papers", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Webinars", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Licensing", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/Hayle_HB",
      icon: <FaTelegram className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/haylemeskel-haylemariam-b9212b298/",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/Hayle_HB",
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Hayle-HB",
      icon: <FaGithub className="w-6 h-6" />,
    },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/20 to-[#ffd700]/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Stay Updated with EcoFarmIQ
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Subscribe to our newsletter for the latest insights in smart
              farming and agricultural innovation.
            </p>
            <form className="max-w-md mx-auto px-4 sm:px-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 border border-white/20 
                    focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent
                    placeholder-gray-400 text-sm sm:text-base w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#00ffff] to-[#ffd700]
                    text-gray-900 font-semibold text-sm sm:text-base hover:from-[#00ffff]/90 hover:to-[#ffd700]/90
                    focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition-all duration-300 w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3 sm:space-y-4">
              <h3 className="text-lg font-semibold mb-3 sm:mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-400 hover:text-[#00ffff] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact the Developer & Social Links */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#00ffff] to-[#ffd700] bg-clip-text text-transparent flex">
              {Array.from("Contact the Developer").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      repeat: Infinity,
                      repeatDelay: 5
                    }
                  }}
                  whileHover={{ 
                    y: [-2, 2, -2], 
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-[#00ffff] transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 EcoFarmIQ. All rights reserved. Transforming agriculture
              through innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
