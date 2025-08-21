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
        <div className="max-w-7xl mx-auto px-5 py-2 md:py-3 flex items-center justify-between">
          {/* Logo */}
          
          <Link href="/" className="flex items-center gap-3 select-none group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Get Well Soon
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium -mt-1 hidden sm:block">
                Spreading Care & Hope
              </span>
            </div>
          </Link>

          {/* Desktop Navigation remains unchanged */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 text-base md:text-lg font-semibold hover:text-blue-600 hover:scale-105 transition-all duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="px-6 py-2 rounded-full bg-gradient-to-br from-green-500 to-blue-600 text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger / Cross Button (SVG) */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-full transition-all duration-500 ease-in-out transform ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`}></span>
              <span className={`block h-0.5 w-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-full transition-all duration-500 ease-in-out transform ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Modern Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl transition-all duration-500 ease-out border border-white/20 overflow-hidden
            ${isOpen ? 'max-h-screen opacity-100 scale-100 pointer-events-auto' : 'max-h-0 opacity-0 scale-95 pointer-events-none'}`}
          style={{
            minWidth: '280px',
            maxWidth: '90vw',
            transformOrigin: 'top right'
          }}
        >
          <div className="bg-gradient-to-br from-blue-50/80 to-green-50/80 p-1 rounded-3xl">
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative py-3 px-6 rounded-2xl font-semibold text-gray-800 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              
              {/* Mobile Donate Button */}
              <Link
                href="/donate"
                className="group relative py-2 px-4 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-md hover:scale-105 animate-fade-in bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-sm"
                style={{ animationDelay: `${navItems.length * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Donate
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
