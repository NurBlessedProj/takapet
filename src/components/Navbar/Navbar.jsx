"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/available-puppies", label: "Available Puppies" },
  { href: "/shipping", label: "Shipping" },
  { href: "/health", label: "Health Guarantee" },
  { href: "/review", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

function Navbar() {
  const isMobile = useMediaQuery("(max-width:740px)");
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setIsScrolled(currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300
    ${isScrollingUp ? "top-0" : "-top-28"}
    ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}
    ${pathname === "/pd-page" ? "text-black" : ""}
  `;

  return (
    <>
      <header className={navbarClasses.trim()}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer flex items-center"
              onClick={() => router.push("/")}
            >
              <Image
                src="/irishlogo.png"
                width={180}
                height={80}
                alt="Tariq's Irish Wolfhound Puppies logo"
                className="h-20 w-auto object-contain"
                priority
              />
               
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        pathname === link.href
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`
          md:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          overflow-hidden bg-white
        `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${
                    pathname === link.href
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />

      {/* Call to action banner that appears when scrolled */}
      {pathname !== "/available-puppies" ||
        pathname !== "pd-page" ||
        (pathname !== "allpd" && (
          <div
            className={`
        fixed bottom-0 left-0 right-0 bg-emerald-600 text-white py-3 px-4 transition-all duration-300 z-40
        ${isScrolled ? "translate-y-0" : "translate-y-full"}
      `}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
              <p className="font-medium mb-2 sm:mb-0">
                <span className="hidden sm:inline">
                  Looking for an Irish Wolfhound puppy?{" "}
                </span>
                Check our available puppies!
              </p>
              <button
                onClick={() => router.push("/available-puppies")}
                className="bg-white text-emerald-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-emerald-50 transition-colors"
              >
                View Available Puppies
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Navbar;
