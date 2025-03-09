import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Headphones, Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex justify-between items-center px-6 py-4 w-full absolute top-0 left-0 z-20 ${
        isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-1">
        <img src={assets.logo} className="logo max-w-9" />
        <span className="text-2xl text-black font-bold">ENTUGO</span>
      </div>

      {/* Hamburger Button (visible on mobile/tablet) */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col items-center absolute top-16 left-0 w-full bg-white shadow-md p-6"
            : "hidden"
        } md:flex md:items-center md:space-x-6 md:static md:bg-transparent md:shadow-none md:p-0 text-black`}
      >
        <li className="py-2 md:py-0">
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/features"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/pricing"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <a href="mailto:support@entugo.com">
            <Headphones className="h-6 w-6 text-black" />
          </a>
        </li>
        <li className="py-2 md:py-0">
          <Button
            text="Register"
            primary
            onClick={() => setIsMenuOpen(false)}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;