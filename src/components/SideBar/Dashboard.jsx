import React, { useState } from "react";
import { Search, Bell, User, X } from "lucide-react";

const Navbar = ({ isSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={`flex justify-between items-center bg-white  p-4 fixed left-40 top-0 ${
        isSidebarOpen ? "left-64" : "left-0"
      } left-94 right-0 z-50 transition-all`}
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

export default Navbar;

import { MoreVertical } from "lucide-react";

const NavbarRightContent = () => {
  return (
    <div className="flex items-center space-x-6">
      <div className="relative">
        <Bell className="text-gray-700 cursor-pointer" size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">1</span>
      </div>
      <div className="relative">
        <User className="text-gray-700 cursor-pointer rounded-full" size={32} />
        <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></span>
      </div>
      <MoreVertical className="text-gray-700 cursor-pointer" size={24} />
    </div>
  );
};

