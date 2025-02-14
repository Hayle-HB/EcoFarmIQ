import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Haylemeskel from "../../../assets/images/person/Haylemeskel.jpg";
import Haylemariam from "../../../assets/images/person/Hayle3.png";
import Mewal from "../../../assets/images/person/Mewal.png";

const Team = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const teamMembers = [
    {
      name: "Haylemekskel Haylemariam",
      role: "Founder & CEO",
      position: "Software Engineer",
      image: Haylemeskel,
      bio: "ML model expert and software developer specializing in agricultural data analysis and smart farming solutions.",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/haylemeskel-haylemariam-b9212b298/",
        twitter: "",
        github: "https://github.com/Hayle-HB",
      },
    },
    {
      name: "Haylemariam Daget",
      role: "Founder & co-CEO",
      position: "ElectroMechanical Engineer",
      image: Haylemariam,
      bio: "Expert in electromechanical systems driving IoT integration for precision farming.",
      socials: {
        linkedin: "https://www.linkedin.com/in/haylemaryam-daget-64418023a/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Mewal Mizan",
      role: "Technical Advisor and Mentorship",
      position: "Lecturer and Researcher at AASTU and Automation Engineer",
      image: Mewal,
      bio: "Strategic advisor for agricultural innovation, research, and the implementation of cutting-edge automation solutions.",
      socials: {
        linkedin: "linkedin.com/in/mewael-mizan-375a32138",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Join Our Team",
      role: "Future Position",
      position: "Your Expertise",
      image: "none",
      bio: "Be part of the agricultural revolution",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section
      id="teams"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white`}
        />

        {/* Single dark overlay from left */}
        <motion.div
          className="absolute inset-0 bg-gray-900/95"
          initial={{ x: "-100%" }}
          animate={{ x: isDarkMode ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Meet Our <span className="text-emerald-500">Expert Team</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pioneering smart agricultural solutions through innovative
            technology and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div
                className={`relative overflow-hidden rounded-xl shadow-lg 
                transition-all duration-300 hover:shadow-xl h-full flex flex-col
                ${
                  isDarkMode
                    ? "bg-gray-800 shadow-gray-900/50"
                    : "bg-white shadow-gray-100/50"
                }`}
              >
                {/* Image Container */}
                {member.image === "none" ? (
                  <div className="relative h-40 sm:h-44 md:h-48 lg:h-50 overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-700">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <div className="rotate-[-12deg] transform">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                            Come Join Us!
                          </h3>
                          <p className="text-lg sm:text-xl font-medium text-emerald-200">
                            Shape the Future of
                          </p>
                          <p className="text-lg sm:text-xl font-medium text-emerald-200">
                            Smart Agriculture
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-40 sm:h-44 md:h-48 lg:h-50 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-center transform 
                        group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Social Links Overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 transform translate-y-full 
                      group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <div className="flex justify-center space-x-3 sm:space-x-4">
                        <a
                          href={`https://${member.socials.linkedin.replace(
                            /^https?:\/\//,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-emerald-400 transition-colors duration-300"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href={`https://${member.socials.twitter.replace(
                            /^https?:\/\//,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-emerald-400 transition-colors duration-300"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </a>
                        <a
                          href={`https://${member.socials.github.replace(
                            /^https?:\/\//,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-emerald-400 transition-colors duration-300"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {/* Content */}
                <div className="p-3 sm:p-4 flex-grow flex flex-col">
                  <h4
                    className={`text-base sm:text-lg font-semibold mb-1 ${
                      isDarkMode ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {member.name}
                  </h4>
                  <p className="text-sm sm:text-base text-emerald-500 font-medium mb-1 sm:mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium mb-2 sm:mb-3">
                    {member.position}
                  </p>
                  <p
                    className={`text-xs sm:text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {member.bio}
                  </p>
                  {member.image !== "none" && (
                    <div className="mt-auto pt-2 sm:pt-4">
                      <Link
                        to={`/team/${member.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className={`inline-flex items-center text-sm sm:text-base group/more
                          ${
                            isDarkMode
                              ? "text-emerald-400 hover:text-emerald-300"
                              : "text-emerald-600 hover:text-emerald-700"
                          }`}
                      >
                        More
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform transition-transform 
                            duration-300 group-hover/more:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
