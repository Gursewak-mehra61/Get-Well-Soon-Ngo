import './globals.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

export const metadata = {
  title: 'Get Well Soon',
  description: 'Spreading Care & Warmth in Hospitals',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <meta name="google-site-verification" content="google53500dcf61868f64" />
        {/* Tailwind CDN (sirf testing ke liye, production me npm install karna better hai) */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Fonts for a clean NGO theme */}
          <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0ea5e9" />
        {/* Lenis Smooth Scroll */}
        <script src="https://unpkg.com/@studio-freight/lenis/dist/lenis.min.js" defer></script>
      </head>
      <body className="bg-gradient-to-tr from-sky-50 via-emerald-50 to-white font-sans min-h-screen text-gray-800 antialiased">
        <SmoothScroll />
        <Navbar />
        <main className="pt-16 md:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
