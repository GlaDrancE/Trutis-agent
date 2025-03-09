import React from "react";
import { assets } from "../assets/assets";

const OurCustomers: React.FC = () => {
  // Array of customer data
  const customers = [
    { logo: assets.company1, name: "Acme Corp" },
    { logo: assets.company2, name: "Quantum" },
    { logo: assets.company3, name: "Echo Valley" },
    { logo: assets.company4, name: "Tiktok" },
    { logo: assets.company5, name: "Intel" },
    { logo: assets.company6, name: "Uber" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Scrolling Logo Container */}
        <div className="logos overflow-hidden relative">
          {/* Fading edges for smooth transition */}
          <div className="absolute top-0 left-0 w-32  h-full bg-gradient-to-l from-transparent to-white z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-r from-transparent to-white z-10"></div>

          {/* Animated Wrapper */}
          <div className="logo_items flex space-x-10 animate-slides">
            {/* Infinite Loop: Duplicate logos multiple times */}
            {[...Array(4)].flatMap((_, i) =>
              customers.map((customer, index) => (
                <div key={`${i}-${index}`} className="flex items-center">
                  <img
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated CSS for infinite scrolling animation
const styles = `
  @keyframes slides {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .animate-slides {
    display: flex;
    animation: slides 20s linear infinite;
    width: max-content;
  }

  .logos:hover .animate-slides {
    animation-play-state: paused;
  }
`;

// Inject the styles
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default OurCustomers;

