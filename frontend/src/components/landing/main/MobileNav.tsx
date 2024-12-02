import React, { useState } from "react";
import { COMPANY_LOGO } from "../image";

const MobileNav = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu open/close
  const toggleMobileMenu = () => {
    console.log(" okay");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-4 pl-2 lg:hidden">
      {/* Desktop Navigation (hidden on small screens) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img
          loading="lazy"
          src={COMPANY_LOGO}
          alt="Company Logo"
          className="object-contain shrink-0 self-start max-w-full aspect-[3.77] w-[162px]"
        />
        <div
          className="z-50 border-blue-10"
          //   style={{ border: "1px solid red", zIndex: 50 }}
          onClick={toggleMobileMenu}
        >
          <div className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden on md and up) */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden p-4 absolute z-100 bg-white rounded w-full`}
      >
        <a href="/" className="block text-black py-2">
          Home
        </a>
        <a href="/about" className="block text-black py-2">
          How it works
        </a>
        <a href="/services" className="block text-black py-2">
          About us
        </a>
        <a href="/contact" className="block text-black py-2">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
