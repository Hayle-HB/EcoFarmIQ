import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice.js";
import { Tooltip, IconButton } from "@mui/material";
import TopNav from "./TopNav.jsx";
import {
  LayoutDashboard,
  Leaf,
  Eye,
  Cloud,
  Droplet,
  BarChart,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-[1000]">
        <IconButton
          onClick={toggleMobileMenu}
          sx={{
            bgcolor: "#32CD32",
            "&:hover": { bgcolor: "#2E8B57" },
          }}
        >
          {mobileMenuOpen ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </IconButton>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen
          bg-green-900 text-white shadow-xl
          transition-all duration-300 ease-in-out
          z-[999]
          ${
            isMobile
              ? mobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : isOpen
              ? "w-64"
              : "w-20"
          }
          ${isMobile ? "w-[280px]" : ""}
        `}
      >
        {/* Logo & Toggle */}
        <div className="flex justify-between items-center p-4 h-16 border-b border-green-800">
          <span
            className={`text-green-300 text-xl font-bold transition-all
              ${isMobile ? "" : isOpen ? "opacity-100" : "opacity-0"}
              delay-150
            `}
          >
            EcoFarmIQ
          </span>
          {!isMobile && (
            <Tooltip
              title={isOpen ? "Close sidebar" : "Open sidebar"}
              arrow
              placement="right"
            >
              <IconButton
                onClick={() => dispatch(toggleSidebar())}
                sx={{
                  p: 0.5,
                  bgcolor: "#32CD32",
                  borderRadius: "50%",
                  transition: "all 300ms",
                  ml: isOpen ? 0 : -2,
                  "&:hover": { bgcolor: "#2E8B57" },
                }}
              >
                {isOpen ? (
                  <ChevronLeft sx={{ color: "white" }} />
                ) : (
                  <ChevronRight sx={{ color: "white" }} />
                )}
              </IconButton>
            </Tooltip>
          )}
        </div>

        {/* Scrollable Content Area */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          {/* User Profile */}
          <div className="flex items-center mt-6 mb-6 px-4 space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                alt="User"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {(isMobile || isOpen) && (
              <div>
                <p className="text-1xl font-bold">Hayle HB.</p>
                <p className="text-xs text-green-300">Farmer</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="px-2 space-y-1">
            <SidebarItem
              icon={<LayoutDashboard />}
              text="Dashboard"
              isOpen={isMobile || isOpen}
            />
            <SidebarItem
              icon={<Leaf />}
              text="Smart Crop Recommendations"
              isOpen={isMobile || isOpen}
            />
            <SidebarItem
              icon={<Eye />}
              text="Plant Health Monitoring"
              isOpen={isMobile || isOpen}
            />
            <SidebarItem
              icon={<Cloud />}
              text="Environmental Analysis"
              isOpen={isMobile || isOpen}
            />
            <SidebarItem
              icon={<Droplet />}
              text="Irrigation Management"
              isOpen={isMobile || isOpen}
            />
            <SidebarItem
              icon={<BarChart />}
              text="Reports & Analytics"
              isOpen={isMobile || isOpen}
            />
            <SidebarItem
              icon={<Settings />}
              text="Settings"
              isOpen={isMobile || isOpen}
            />
          </nav>
        </div>
        <div className={`${isOpen ? "ml-30" : "ml-20"}`}>
          <TopNav />
        </div>
      </aside>
    </>
  );
};

// SidebarItem component with improved hover effect
const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="relative flex items-center p-3 my-1 rounded-lg hover:bg-green-800 transition-all duration-200 cursor-pointer group">
    <span className="text-white">{icon}</span>
    <span
      className={`
        ml-4 text-white font-medium transition-all
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
        duration-200
      `}
    >
      {text}
    </span>
    {!isOpen && (
      <div className="absolute left-20 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[1000]">
        {text}
      </div>
    )}
  </div>
);

export default Sidebar;
