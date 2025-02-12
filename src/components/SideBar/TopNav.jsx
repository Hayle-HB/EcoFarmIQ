import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, User, X } from "lucide-react";
import NotificationDropdown from "../Notifications/NotificationDropdown";

const TopNav = ({ isOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={`flex justify-between bg-white p-5 fixed left-0 top-0 ${
        isOpen ? "ml-30" : "ml-20"
      } left-94 right-0 transition-all -z-10`}
    >
      {/* Search Bar */}
      <div className="relative flex items-center">
        <Search
          className="text-gray-500 cursor-pointer"
          size={24}
          onClick={() => setSearchOpen(true)}
          onMouseEnter={() => setSearchOpen(true)}
        />
        {searchOpen && (
          <div
            className="absolute left-8 top-0 bg-gray-200 p-2 rounded-lg flex items-center shadow-md transition-all"
            onMouseLeave={() => {
              if (!searchValue) setSearchOpen(false);
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-transparent outline-none ml-2 w-60"
            />
            {searchValue && (
              <X
                className="text-gray-500 cursor-pointer ml-2"
                size={18}
                onClick={() => {
                  setSearchValue("");
                  setSearchOpen(false);
                }}
              />
            )}
          </div>
        )}
      </div>
      {/* Right-Side Content */}
      <div className="flex items-center space-x-6">
        <NavbarRightContent />
      </div>
    </div>
  );
};

export default TopNav;

import { MoreVertical } from "lucide-react";

const NotificationItem = ({ title, time, isRead }) => {
  return (
    <div
      className={`p-3 hover:bg-gray-100 cursor-pointer ${
        !isRead ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex justify-between items-start">
        <p className={`text-sm ${!isRead ? "font-semibold" : ""}`}>{title}</p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};

const NavbarRightContent = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  // Sample notifications - replace with your actual data
  const notifications = [
    {
      id: 1,
      title: "New Project Invitation",
      description: "John Doe invited you to join Project X",
      time: "5 minutes ago",
      isRead: false,
      onMarkAsRead: () => console.log("Marked as read"),
    },
    {
      id: 2,
      title: "Task Completed",
      description: "Frontend development task has been marked as complete",
      time: "1 hour ago",
      isRead: false,
      onMarkAsRead: () => console.log("Marked as read"),
    },
    {
      id: 3,
      title: "System Update",
      description: "System maintenance scheduled for tonight",
      time: "2 hours ago",
      isRead: true,
      onMarkAsRead: () => console.log("Marked as read"),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center space-x-6">
      <div className="relative" ref={notificationRef}>
        <div className="group relative">
          <Bell
            className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-200"
            size={24}
            onClick={() => setNotificationOpen(!notificationOpen)}
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
            {notifications.filter((n) => !n.isRead).length}
          </span>

          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
            <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              Show notifications
            </div>
          </div>
        </div>

        <NotificationDropdown
          isOpen={notificationOpen}
          onClose={() => setNotificationOpen(false)}
          notifications={notifications}
        />
      </div>
      <div className="relative">
        <User className="text-gray-700 cursor-pointer rounded-full" size={32} />
        <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></span>
      </div>
      <MoreVertical className="text-gray-700 cursor-pointer" size={24} />
    </div>
  );
};
