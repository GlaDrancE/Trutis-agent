import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 text-center">
      <p className="text-sm">
        <span className="block sm:inline">
          Enjoy a 14-day free trial, exclusively for early adopters.
        </span>
        <a
          href="#"
          className="underline font-medium sm:ml-1 block sm:inline"
        >
          Get Started free →
        </a>
      </p>
    </header>
  );
};

export default Header;