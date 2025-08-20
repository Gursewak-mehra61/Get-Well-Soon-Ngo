"use client";
import { useState } from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Youtube",
    url: "https://youtube.com/company/getwellsoon",
    color: "bg-[#FF0000]",
    tooltip: "Youtube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 relative z-10 text-black group-hover:text-white transition-all duration-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.103C19.505 3.5 12 
          3.5 12 3.5s-7.505 0-9.404.583A2.974 2.974 0 0 0 .502 
          6.186C0 8.092 0 12 0 12s0 3.908.502 
          5.814a2.974 2.974 0 0 0 2.094 
          2.103C4.495 20.5 12 20.5 12 20.5s7.505 0 
          9.404-.583a2.974 2.974 0 0 0 2.094-2.103C24 
          15.908 24 12 24 12s0-3.908-.502-5.814zM9.75 
          15.02V8.98L15.5 12l-5.75 3.02z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/getwellsoon",
    color: "bg-gradient-to-br from-[#fd1d1d] via-[#e1306c] to-[#fccc63]",
    tooltip: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 relative z-10 text-black group-hover:text-white transition-all duration-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.5 2C4.462 2 2 4.462 2 
          7.5v9C2 19.538 4.462 22 7.5 
          22h9c3.038 0 5.5-2.462 
          5.5-5.5v-9C22 4.462 19.538 2 
          16.5 2h-9zm0 2h9A3.497 3.497 
          0 0 1 20 7.5v9c0 1.93-1.57 3.5-3.5 
          3.5h-9A3.497 3.497 0 0 1 4 
          16.5v-9C4 5.57 5.57 4 7.5 4zm9.75 
          1a.75.75 0 0 0-.75.75v1.5a.75.75 
          0 0 0 1.5 0v-1.5a.75.75 0 0 
          0-.75-.75zM12 7a5 5 0 1 0 0 
          10 5 5 0 0 0 0-10zm0 2a3 3 0 1 
          1 0 6 3 3 0 0 1 0-6z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/getwellsoonsanstha",
    color: "bg-[#1877F3]",
    tooltip: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 relative z-10 text-black group-hover:text-white transition-all duration-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M22.675 0h-21.35C.597 0 0 
          .597 0 1.326v21.348C0 23.403.597 
          24 1.326 24h11.494v-9.294H9.691V11.29h3.129V8.413c0-3.1 
          1.893-4.788 4.659-4.788 1.325 
          0 2.464.099 2.797.143v3.24l-1.92.001c-1.505 
          0-1.796.716-1.796 1.764v2.316h3.587l-.467 
          3.416h-3.12V24h6.116C23.403 24 24 
          23.403 24 22.674V1.326C24 .597 23.403 
          0 22.675 0z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/getwellsoon",
    color: "bg-[#1DA1F2]",
    tooltip: "Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 relative z-10 text-black group-hover:text-white transition-all duration-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
          1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 
          1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 
          0-4.932 2.208-4.932 4.932 0 .39.045.765.127 
          1.124-4.094-.205-7.725-2.165-10.157-5.144-.424.729-.666 
          1.577-.666 2.475 0 1.708.869 3.216 2.188 
          4.099-.807-.026-1.566-.247-2.229-.616v.061c0 
          2.385 1.693 4.374 3.946 
          4.827-.413.111-.849.171-1.296.171-.317 
          0-.626-.03-.928-.086.627 1.956 2.444 
          3.377 4.6 3.419-1.68 1.319-3.808 
          2.105-6.102 2.105-.396 0-.788-.023-1.175-.068 
          2.179 1.397 4.768 2.213 7.557 
          2.213 9.054 0 14-7.496 14-13.986 
          0-.21 0-.423-.015-.633.962-.689 
          1.8-1.56 2.46-2.548l-.047-.02z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Volunteer", href: "/volunteer" },
  ];

  const contactInfo = [
  {
    icon: (
      <svg
        className="text-blue-400 w-5 h-5 flex-shrink-0 mt-[2px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Location"
      >
        <path d="M12 22c-.3 0-.6-.1-.8-.4C7.5 17.2 5 13.9 5 10a7 7 0 1 1 14 0c0 3.9-2.5 7.2-6.2 11.6-.2.3-.5.4-.8.4ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>
    ),
    text: "Krishna Power Tool, Near SBI Bank Hansi, Hisar, Uttam nagar, Hansi, Haryana 125033",
  },
  {
    icon: (
      <svg
  className="text-blue-400 w-5 h-5"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-label="Phone icon"
>
  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.73 3.85.73a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.25 2.65.73 3.85a1 1 0 01-.21 1.11l-2.2 2.2z"/>
</svg>
    ),
    text: "+91 9416346327",
  },
  {
    icon: (
      <svg
        className="text-blue-400 w-5 h-5 flex-shrink-0 mt-[2px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Mail"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 
        0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.5l8 
        5 8-5V6H4zm16 12V9.2l-7.4 
        4.6c-.4.2-.8.2-1.2 
        0L4 9.2V18h16z"/>
      </svg>
    ),
    text: "getwellsoon@gmail.com",
  },
];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <span className="text-2xl font-extrabold text-blue-400 font-mono">
              Get Well Soon सेवा समिति हांसी
            </span>
          </Link>
          <p className="mb-6 text-gray-300 max-w-md text-sm sm:text-base">
            Spreading care and warmth in hospitals by providing essential
            support to patients and their families. Together, we make healing
            journeys a little easier with compassion and dedication.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ name, url, color, icon , tooltip}) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="relative group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-white"
              >
                {/* Background fill on hover */}
                <span
                  className={`absolute inset-0 ${color} translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0`}
                ></span>

                {/* Icon */}
                <span className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {icon}
                </span>

                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 translate-y-2 rounded bg-gray-800 px-2 py-1 text-xs font-semibold text-white opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {tooltip}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-bold text-base sm:text-lg mb-3 text-white flex justify-between items-center cursor-pointer select-none md:justify-start"
            onClick={() => toggleAccordion(0)}
          >
            Quick Links
            <span className="md:hidden text-xl">
              {activeIndex === 0 ? "−" : "+"}
            </span>
          </h4>
          <ul
            className={`text-sm sm:text-base overflow-hidden transition-max-height duration-300 ease-in-out md:overflow-visible md:max-h-full ${
              activeIndex === 0 ? "max-h-40" : "max-h-0"
            }`}
          >
            {quickLinks.map((link) => (
              <li key={link.name} className="mb-2 md:mb-3">
                <Link
                  href={link.href}
                  className="hover:text-blue-300 transition block md:inline"
                  onClick={() => setActiveIndex(null)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="font-bold text-base sm:text-lg mb-3 text-white flex justify-between items-center cursor-pointer select-none md:justify-start"
            onClick={() => toggleAccordion(1)}
          >
            Contact Info
            <span className="md:hidden text-xl">
              {activeIndex === 1 ? "−" : "+"}
            </span>
          </h4>
          <ul
            className={`text-sm sm:text-base space-y-3 overflow-hidden transition-max-height duration-300 ease-in-out md:overflow-visible md:max-h-full ${
              activeIndex === 1 ? "max-h-48" : "max-h-0"
            }`}
          >
            {contactInfo.map((info, i) => (
              <li key={i} className="flex items-center gap-3">
                {info.icon}
                <span>{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-5 border-t border-gray-700 pt-5 mt-6 text-xs sm:text-sm text-gray-400 text-center select-none">
        &copy; {new Date().getFullYear()} Get Well Soon . All rights reserved. |
        Spreading Care &amp; Warmth in Hospitals
      </div>
    </footer>
  );
}
