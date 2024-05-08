import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
