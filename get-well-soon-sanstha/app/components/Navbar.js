'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 py-3 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none" onClick={() => setIsOpen(false)}>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700">Get Well Soon</span>
          </Link>

          {/* Desktop Navigation remains unchanged */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 text-base md:text-lg font-medium hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="px-6 py-2 rounded-full bg-green-500 text-white text-base md:text-lg font-semibold shadow hover:bg-green-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger / Cross Button (SVG) */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              // Cross SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu right aligned, fit width, no extra left space */}
        <div
          className={`md:hidden fixed top-14 right-2 bg-white shadow-lg rounded-2xl transition-all duration-300 ease-in-out overflow-y-auto border border-gray-200
            ${isOpen ? 'max-h-96 opacity-100 w-fit pointer-events-auto' : 'max-h-0 opacity-0 w-fit pointer-events-none'}`}
          style={{
            minWidth: '120px',
            maxWidth: '85vw',
            boxSizing: 'border-box'
          }}
        >
          <nav className="flex flex-col gap-2 py- pr-6 pl-6 items-end">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 px-4 rounded hover:bg-blue-50 font-semibold text-gray-900 text-right w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
}
