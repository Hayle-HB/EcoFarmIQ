import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src, alt, className = "", size = "medium" }) => {
  const defaultImage =
    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };

  return (
    <img
      src={src || defaultImage}
      alt={alt || "User avatar"}
      className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
      onError={(e) => {
        e.target.src = defaultImage;
      }}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};


export default Avatar;
