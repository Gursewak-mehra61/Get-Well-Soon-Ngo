import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-blue-700">
          Get Well Soon Sanstha
        </div>
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/volunteer">Volunteer</Link></li>
          {/* <li><Link href="/donate">Donate</Link></li> */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
