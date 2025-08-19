import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] flex items-center justify-center">
        <img
          src="/hero/hero-img.jpg"
          alt="Ngo"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[26px] leading-tight sm:text-4xl md:text-6xl font-extrabold text-white mb-2 sm:mb-3 drop-shadow">
            Spreading Care &amp; Warmth<br />
            <span className="text-blue-300">in Hospitals</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-[22rem] sm:max-w-xl mx-auto">
            We provide essential support to hospital patients and their families through free meals, blankets, and emotional care during their healing journey.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center">
            <Link href="/donate" className="px-5 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
              Donate Now
            </Link>
            <Link href="/volunteer" className="px-5 sm:px-8 py-2 sm:py-3 border-2 border-white text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition">
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="bg-white py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Our Impact</h2>
        <p className="text-center text-gray-500 mb-10 text-sm sm:text-base md:text-lg">
          Making a difference in the lives of patients and families across multiple hospitals
        </p>
        <div className="flex flex-col md:flex-row gap-7 justify-center items-center mb-5">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">1500+</div>
            <div className="text-gray-700 font-medium">Patients Helped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">5+</div>
            <div className="text-gray-700 font-medium">Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">2+</div>
            <div className="text-gray-700 font-medium">Hospitals Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">5+</div>
            <div className="text-gray-700 font-medium">Years of Service</div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="bg-blue-50 py-16 px-3">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 tracking-tight text-gray-900">
    Our Mission &amp; Vision
  </h2>
  <p className="text-center text-gray-600 mb-14 text-base sm:text-lg max-w-2xl mx-auto">
    Dedicated to bringing comfort and hope to those who need it most during their medical journey
  </p>
  <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
    {/* Mission Card */}
    <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-10 flex-1 border border-blue-100">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 border-4 border-blue-200 shadow group-hover:scale-105 transition">
          {/* Replace with a better health/compassion icon if needed */}
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
      </div>
      <div className="mt-10">
        <h3 className="font-extrabold text-2xl mb-3 text-gray-900 text-center">Our Mission</h3>
        <p className="text-gray-700 text-base text-center">
          To provide comprehensive support to hospital patients and their families by offering free meals, warm blankets, emotional counseling, and motivation during their healing process.<br/>
          <span className="font-semibold text-blue-600">
            Extending care beyond medical treatment to include comfort, dignity, and hope.
          </span>
        </p>
      </div>
    </div>
    {/* Vision Card */}
    <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-10 flex-1 border border-green-100">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 via-green-200 to-green-50 border-4 border-green-200 shadow group-hover:scale-105 transition">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M10 10h4v4h-4z"></path>
          </svg>
        </span>
      </div>
      <div className="mt-10">
        <h3 className="font-extrabold text-2xl mb-3 text-gray-900 text-center">Our Vision</h3>
        <p className="text-gray-700 text-base text-center">
          To create a world where no patient or family faces their medical challenges alone. We envision hospitals filled with compassion, where every individual receives not just medical care but also emotional support, comfort, and the warmth of human kindness during their recovery journey.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="bg-white py-14 px-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Our Services</h2>
        <p className="text-center text-gray-600 mb-10 text-sm sm:text-base md:text-lg">
          Comprehensive support services designed to make hospital stays more comfortable and hopeful
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-7 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div className="font-bold mb-2">Free Meals</div>
            <p>Nutritious meals provided to patients and their families during their hospital stay.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-7 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5 5 0 0 1 0 7.07l-7.07 7.07a5 5 0 0 1-7.07-7.07l7.07-7.07a5 5 0 0 1 7.07 0z"></path>
              </svg>
            </div>
            <div className="font-bold mb-2">Warm Blankets</div>
            <p>Clean, comfortable blankets to ensure patients stay warm and comfortable.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-7 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 12.79 3h.01"></path>
              </svg>
            </div>
            <div className="font-bold mb-2">Emotional Support</div>
            <p>Counseling and motivation sessions to help patients stay positive during recovery.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-7 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
              <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M15 9v6a2 2 0 1 1-4 0V9"></path>
              </svg>
            </div>
            <div className="font-bold mb-2">Family Care</div>
            <p>Support services for family members who stay with patients during treatment.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition">
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 py-14 px-3 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Make a Difference Today</h2>
        <p className="max-w-xl mx-auto text-base sm:text-lg mb-8">
          Your support can bring comfort and hope to patients and families during their most challenging times. Every contribution makes a meaningful impact in someone's healing journey.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <Link href="/donate" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 shadow">
            Donate Now
          </Link>
          <Link href="/volunteer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 shadow">
            Become a Volunteer
          </Link>
        </div>
      </section>

      
      
    </div>
  );
}
