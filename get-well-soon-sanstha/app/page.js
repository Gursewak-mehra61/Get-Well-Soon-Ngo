import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] flex items-center justify-center overflow-hidden">
        <img
          src="/hero/hero-img.jpg"
          alt="Ngo"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[20px] sm:text-3xl md:text-5xl font-extrabold text-white mb-2 sm:mb-3 drop-shadow-2xl leading-tight animate-slide-down">
            Spreading Care &amp; Warmth
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">in Hospitals</span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8 max-w-[22rem] sm:max-w-xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-delayed">
            We provide essential support to hospital patients and their families through free meals, blankets, and emotional care during their healing journey.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center animate-fade-in">
            <Link href="/" className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs sm:text-lg font-semibold rounded-full shadow-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300">
              Donate Now
            </Link>
            <Link href="/volunteer" className="px-4 sm:px-8 py-2 sm:py-3 border-2 border-white/80 backdrop-blur-sm text-white text-xs sm:text-lg font-semibold rounded-full shadow-2xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-5 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-down">
            Our Impact
          </h2>
          <p className="text-center text-gray-600 mb-12 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-in-delayed">
            Making a difference in the lives of patients and families across multiple hospitals
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            <div className="text-center bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-none">150,000+</div>
              <div className="text-gray-700 font-medium text-base sm:text-lg leading-snug">Patients Helped</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-none">8+</div>
              <div className="text-gray-700 font-medium text-base sm:text-lg leading-snug">Volunteers</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-right">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-none">2+</div>
              <div className="text-gray-700 font-medium text-base sm:text-lg leading-snug">Hospitals Covered</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-delayed">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-none">7+</div>
              <div className="text-gray-700 font-medium text-base sm:text-lg leading-snug">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
     <section className="bg-blue-50 py-10 sm:py-16 px-4 sm:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 tracking-tight text-gray-900 leading-tight">
    Our Mission &amp; Vision
  </h2>
  <p className="text-center text-gray-600 mb-12 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
    Dedicated to bringing comfort and hope to those who need it most during their medical journey
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {/* Mission */}
    <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 flex flex-col border border-blue-100">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 border-4 border-blue-200 shadow group-hover:scale-105 transition">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
      </div>
      <div className="mt-10">
        <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-gray-900 text-center leading-snug">
          Our Mission
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center leading-relaxed">
          To provide comprehensive support to hospital patients and their families by offering free meals, warm blankets, emotional counseling, and motivation during their healing process.
          <br />
          <span className="font-semibold text-blue-600">
            Extending care beyond medical treatment to include comfort, dignity, and hope.
          </span>
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 flex flex-col border border-green-100">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-100 via-green-200 to-green-50 border-4 border-green-200 shadow group-hover:scale-105 transition">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M10 10h4v4h-4z"></path>
          </svg>
        </span>
      </div>
      <div className="mt-10">
        <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-gray-900 text-center leading-snug">
          Our Vision
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center leading-relaxed">
          To create a world where no patient or family faces their medical challenges alone. We envision hospitals filled with compassion, where every individual receives not just medical care but also emotional support, comfort, and the warmth of human kindness during their recovery journey.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="bg-white py-12 sm:py-14 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3">Our Services</h2>
        <p className="text-center text-gray-600 mb-8 text-xs sm:text-sm md:text-base max-w-4xl mx-auto">
          Comprehensive support services designed to make hospital stays more comfortable and hopeful
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div className="font-bold mb-2 text-sm sm:text-base">Free Meals</div>
            <p className="text-xs sm:text-sm">Nutritious meals provided to patients and their families during their hospital stay.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5 5 0 0 1 0 7.07l-7.07 7.07a5 5 0 0 1-7.07-7.07l7.07-7.07a5 5 0 0 1 7.07 0z"></path>
              </svg>
            </div>
            <div className="font-bold mb-2 text-sm sm:text-base">Warm Blankets</div>
            <p className="text-xs sm:text-sm">Clean, comfortable blankets to ensure patients stay warm and comfortable.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 12.79 3h.01"></path>
              </svg>
            </div>
            <div className="font-bold mb-2 text-sm sm:text-base">Emotional Support</div>
            <p className="text-xs sm:text-sm">Counseling and motivation sessions to help patients stay positive during recovery.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-3 mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-teal-100">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M15 9v6a2 2 0 1 1-4 0V9"></path>
              </svg>
            </div>
            <div className="font-bold mb-2 text-sm sm:text-base">Family Care</div>
            <p className="text-xs sm:text-sm">Support services for family members who stay with patients during treatment.</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/services" className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-700 transition">
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-16 sm:py-20 px-4 sm:px-8 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-down">
            Make a Difference Today
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 leading-relaxed opacity-90 animate-fade-in-delayed">
            Your support can bring comfort and hope to patients and families during their most challenging times. Every contribution makes a meaningful impact in someone's healing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in">
            <Link href="/" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-white/20">
               Donate Now
            </Link>
            <Link href="/volunteer" className="bg-transparent border-2 border-white/80 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 shadow-2xl transform hover:scale-105 transition-all duration-300">
               Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
