import React from "react";
import { Bell, Check, X } from "lucide-react";

const NotificationItem = ({
  title,
  description,
  time,
  isRead,
  onMarkAsRead,
}) => {
  return (
    <div
      className={`group relative p-4 hover:bg-gray-50 transition-all duration-200 ${
        !isRead ? "bg-blue-50/40" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
            !isRead ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
        <div className="flex-grow">
          <h4
            className={`text-sm ${
              !isRead ? "font-semibold" : "font-medium"
            } text-gray-900`}
          >
            {title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
          <span className="text-xs text-gray-400 mt-2 block">{time}</span>
        </div>
        {!isRead && (
          <button
            onClick={onMarkAsRead}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-100 rounded-full"
            title="Mark as read"
          >
            <Check size={14} className="text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
};

const NotificationDropdown = ({ isOpen, onClose, notifications = [] }) => {
  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg border border-gray-100 animate-fade-in-down">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <p className="text-xs text-gray-500 mt-1">
              You have {unreadCount} unread messages
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="max-h-[480px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            No notifications yet
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <button className="w-full py-2 px-4 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
