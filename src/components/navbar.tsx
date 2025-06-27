"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Text from "../assets/text.png";

const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  {
    name: "SOLUTIONS",
    href: "/solutions",
    dropdown: [
      {
        name: "AI Agents & Automation Ecosystem",
        href: "/solutions/ai-agents-automations",
      },
      {
        name: "Data Intelligence & IoT Ecosystem",
        href: "/solutions/data-intelligence-iot",
      },
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    dropdown: [
      {
        name: "AI & Intelligent Systems Services",
        href: "/services/ai-intelligent-systems",
      },
      {
        name: "Enterprise Digital Solutions & Integration Services",
        href: "/services/enterprise-digital-solutions",
      },
    ],
  },
  { name: "CUSTOMERS", href: "/customers" },
  { name: "SUPPORT", href: "/support" },
  { name: "NEWS & EVENTS", href: "/news&events" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Effect to handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Adjusted for better contrast on a transparent background, especially when scrolled
  const navHover =
    "hover:bg-white/20 hover:text-white transition-colors duration-150 text-sm"; // Lightened hover

  const dropdownStyle = cn(
    "absolute left-0 top-full min-w-[200px] bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg z-20 py-3 backdrop-blur-md transition-all duration-300 ease-in-out", // Added backdrop-blur
  );

  const dropdownItemStyle = cn(
    "block px-4 py-2 text-gray-800 dark:text-white text-sm rounded-md font-medium transition-colors duration-200",
    "hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white",
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 shadow-lg" // Darker, blurred background on scroll
          : "bg-transparent border-b border-transparent", // Fully transparent when not scrolled
      )}
    >
      <div className="container flex h-20 items-center justify-between px-2 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 p-2 mr-8 rounded-md hover:bg-white/10 transition"
        >
          <Image src={Logo} alt="Logo" height={44} />
          <Image src={Text} alt="Text" height={32} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "uppercase px-4 py-2 font-semibold text-white text-base tracking-wide flex items-center gap-1 rounded-md", // Text color is white for transparent
                    navHover,
                    openDropdown === item.name && "text-blue-300 bg-white/10", // Lighter active state
                  )}
                  style={{ letterSpacing: "0.04em" }}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>

                {openDropdown === item.name && (
                  <div
                    className={dropdownStyle}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        href={drop.href}
                        className={dropdownItemStyle}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "uppercase px-4 py-2 font-semibold text-white text-base rounded-md tracking-wide", // Text color is white for transparent
                  navHover,
                )}
                style={{ letterSpacing: "0.04em" }}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white/10 text-white" // Adjusted for transparent
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/80 transition-opacity duration-300 backdrop-blur-sm",
            isMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 w-4/5 max-w-xs h-full shadow-2xl flex flex-col p-6 transition-transform duration-300 bg-gray-900/95 dark:bg-gray-900/95 border-l border-gray-700 dark:border-gray-700 backdrop-blur-md", // Darker for mobile menu
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src={Logo} alt="Dharvix" height={36} />
              <Image src={Text} alt="Dharvix" height={28} />
            </Link>
            <button
              className="p-2 rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white" // Adjusted for dark background
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col gap-1 mb-6">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="flex flex-col">
                  <span className="uppercase px-2 py-2 font-semibold text-white text-base">
                    {item.name}
                  </span>
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.name}
                      href={drop.href}
                      className="pl-6 py-2 text-gray-300 text-base rounded-md font-medium hover:bg-white/10 hover:text-white transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {drop.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="uppercase px-2 py-2 font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-400 tracking-wide text-base text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
