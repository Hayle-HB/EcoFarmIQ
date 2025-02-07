import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice.js";
import { Tooltip, IconButton } from "@mui/material";
import Dashboard from "./Dashboard.jsx";
import Dash from "./Dash.jsx";
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
} from "lucide-react"; // Icons

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div
        className={`bg-green-900 text-white shadow-lg transition-all duration-300 z-1000 ${
          isOpen ? "w-64" : "w-26"
        } h-screen fixed top-0 left-0 flex flex-col p-4`}
      >
        {/* Logo & Toggle */}
        <div className="flex justify-between items-center">
          <span
            className={`text-green-300 text-xl font-bold transition-all ${
              isOpen ? "opacity-100" : "opacity-0"
            } delay-150`}
          >
            EcoFarmIQ
          </span>
          <Tooltip
            title={isOpen ? "Close the sidebar" : "Open the sidebar"}
            arrow
            placement="right"
            sx={{
              "& .MuiTooltip-tooltip": {
                backgroundColor: "black",
                color: "white",
                fontSize: "0.875rem",
                padding: "6px 12px",
                borderRadius: "6px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(toggleSidebar())}
              sx={{
                p: .5,
                bgcolor: "#32CD32", // Light green background
                borderRadius: "50%",
                transition: "all 300ms",
                ml: isOpen ? 0 : -2, // Adjust positioning
                zIndex: 1000,
                "&:hover": { bgcolor: "#2E8B57" }, // Darker green on hover
              }}
            >
              {isOpen ? (
                <ChevronLeft sx={{ color: "white" }} />
              ) : (
                <ChevronRight sx={{ color: "white" }} />
              )}
            </IconButton>
          </Tooltip>
        </div>

        {/* User Profile */}
        <div className="flex items-center mt-6 mb-6 space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              alt="User"
              className="w-full h-full rounded-full"
            />
          </div>
          {isOpen && (
            <div>
              <p className="text-1xl font-bold">Hayle HB.</p>
              <p className="text-xs text-green-300">Farmer</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-2">
          <SidebarItem
            icon={<LayoutDashboard />}
            text="Dashboard"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Leaf />}
            text="Smart Crop Recommendations"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Eye />}
            text="Plant Health Monitoring"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Cloud />}
            text="Environmental Analysis"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Droplet />}
            text="Irrigation Management"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<BarChart />}
            text="Reports & Analytics"
            isOpen={isOpen}
          />
          <SidebarItem icon={<Settings />} text="Settings" isOpen={isOpen} />
        </nav>
      </div>

      {/* Content Area
      <div
        className={`flex-1 transition-all ml-${
          isOpen ? "64" : "20"
        } mt-10 duration-300 p-5`}
      >
        <h1 className="text-green-900 text-2xl font-bold flex justify-center align-center">
          Welcome to EcoFarmIQ! 🌱
        </h1>
        <div className="flex flex-col">
          <Dashboard />
          <Dash />
        </div>
      </div> */}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="flex items-center p-3 my-2 rounded-lg hover:bg-green-800 transition cursor-pointer">
    <span className="text-white">{icon}</span>
    <span
      className={`ml-4 text-white font-medium transition-all ${
        isOpen ? "opacity-100" : "opacity-0"
      } delay-150`}
    >
      {text}
    </span>
  </div>
);

export default Sidebar;
