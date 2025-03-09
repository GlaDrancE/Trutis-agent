import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-custom-gradient min-h-[calc(100vh-5vh)]"
      style={{
        background: "linear-gradient(201.28deg, #EAEEFE 45.21%, #183EC2 97.31%)",
      }}
    >
      {/* Navbar positioned absolutely at the top */}
      <Navbar />

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full z-10">
        {/* Text Section */}
        <div className="max-w-lg space-y-6 text-center md:text-left max-md:mt-[7vh]">
          <div className="space-y-2">
            <span className="text-gray-700 text-sm font-poppins">
              Version 1.0 is here
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-poppins">
              Boost Your Visibility
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-poppins">
              Increase Returning
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 font-poppins">
              Customers
            </h1>
          </div>

          <p className="text-black text-base sm:text-lg leading-relaxed font-poppins">
            Grow your Google review count and keep customers coming back. Our automated
            QR-based feedback system and discount coupons make it simple to turn
            first-time visitors into loyal patrons.
          </p>

          <div className="flex flex-row space-x-3 justify-center md:justify-start">
            <Button text="Get Started for Free" primary className="w-[55%]" />
            <Button text="Learn more →" transparent className="w-[45%]" />
          </div>
        </div>

        {/* Image Section (moves below text on smaller screens) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <div className="relative w-full max-w-2xl">
            <img
              src={assets.model3d}
              className="w-full h-auto"
              alt="3D Model"
            />
            <img
              src={assets.cylinder}
              className="absolute max-lg:hidden md:block max-lg:left-[0%] left-[-25%] w-1/4 md:top-[-4rem] md:right-[80%] md:w-5/12"
              alt="Cylinder"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;