"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ASK FOR US", href: "/ask-for-us" },
    {
      label: "ASK FOR SOLUTIONS",
      href: "/ask-for-solutions",
      subMenu: [
        { label: "CONSEIL RH", href: "/ask-for-solutions/conseil-rh" },
        { label: "COACHING", href: "/ask-for-solutions/coaching" },
        { label: "HEADHUNTING", href: "/ask-for-solutions/headhunting" },
        { label: "FORMATION", href: "/ask-for-solutions/formation" },
        { label: "TEAM-BUILDING", href: "/ask-for-solutions/team-building" },
      ],
    },
    { label: "ASK FOR SUCCESS", href: "/ask-for-success" },
    { label: "CONTACTEZ-NOUS", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/logo_askadvisory.png"
                alt="Ask Advisory Logo"
                width={250}
                height={60}
                className="w-[250px] h-[60px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.subMenu && setShowSolutionsMenu(true)}
                onMouseLeave={() => item.subMenu && setShowSolutionsMenu(false)}
              >
                {item.subMenu ? (
                  <>
                    <button
                      className="text-[#316082] hover:text-[#68b0d9] transition-colors duration-200 font-medium flex items-center py-8"
                      onClick={() => setShowSolutionsMenu(!showSolutionsMenu)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {/* Invisible element to prevent gap */}
                    <div className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent" />
                    {/* Submenu */}
                    {showSolutionsMenu && (
                      <div className="absolute left-0 top-full w-64 bg-white rounded-lg shadow-xl py-2">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-[#316082] hover:bg-gray-50 hover:text-[#68b0d9] transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#316082] hover:text-[#68b0d9] transition-colors duration-200 font-medium py-8"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#316082] hover:text-[#68b0d9] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.subMenu ? (
                  <div>
                    <button
                      onClick={() => setShowSolutionsMenu(!showSolutionsMenu)}
                      className="w-full text-left px-3 py-2 text-[#316082] hover:text-[#68b0d9] transition-colors duration-200 font-medium flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${showSolutionsMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showSolutionsMenu && (
                      <div className="pl-6 space-y-1">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-3 py-2 text-[#316082] hover:text-[#68b0d9] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-[#316082] hover:text-[#68b0d9] transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;