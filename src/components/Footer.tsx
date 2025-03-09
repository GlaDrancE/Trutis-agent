import React from "react";
import { assets } from "../assets/assets";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-8 bg-[#1A1A1A] text-gray-400"
      style={{
        background: "#1A1A1A", // Matches the dark background from the image
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img
              src={assets.logo} // Replace with your logo 3D model PNG path
              alt="Logo"
              className="h-10 mb-4 object-contain"
            />
            <p className="text-sm max-w-xs">
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1">
            <h3 className="text-sm font-medium text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#functions" className="hover:text-gray-300">
                  Functions
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-gray-300">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-gray-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#language" className="hover:text-gray-300">
                  Language
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#examples" className="hover:text-gray-300">
                  Examples
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-gray-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-gray-300">
                  Guides
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-gray-300">
                  Docs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-gray-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-gray-300">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#facebook" className="hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#twitter" className="hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#linkedin" className="hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.366-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#instagram" className="hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.998 0 8.618.012 7.35.07c-1.366.062-2.636.322-3.61 1.297C2.69 2.424 2.43 3.694 2.368 5.06c-.058 1.268-.07 1.648-.07 4.85s.012 3.582.07 4.85c.062 1.366.322 2.636 1.297 3.61.975.975 2.244 1.235 3.61 1.297 1.268.058 1.648.07 4.85.07s3.582-.012 4.85-.07c1.366-.062 2.636-.322 3.61-1.297.975-.975 1.235-2.244 1.297-3.61.058-1.268.07-1.648.07-4.85s-.012-3.582-.07-4.85c-.062-1.366-.322-2.636-1.297-3.61-.975-.975-2.244-1.235-3.61-1.297-1.268-.058-1.648-.07-4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#youtube" className="hover:text-gray-300">
            <span className="sr-only">YouTube</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;