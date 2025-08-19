import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80"
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-center w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 drop-shadow">Our Services</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-100">Comprehensive support services designed to bring comfort, care, and hope to hospital patients and their families.</p>
        </div>
      </section>

      {/* Core Service Cards */}
      <section className="max-w-7xl mx-auto py-14 px-4">
        {/* Service 1: Meals */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
              </span>
              <h2 className="text-xl font-bold text-blue-800">Free Nutritious Meals</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We provide freshly prepared, nutritious meals to patients and their accompanying family members. Our menu considers dietary restrictions and medical requirements.
            </p>
            <ul className="list-disc ml-6 text-gray-600 text-sm">
              <li>Freshly prepared daily meals</li>
              <li>Special diet considerations</li>
              <li>Vegetarian & non-vegetarian options</li>
              <li>Breakfast, lunch, dinner service</li>
              <li>Snacks for extended stays</li>
            </ul>
            <Link href="/volunteer" className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Get Involved</Link>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80" alt="Nutritious Meals" className="rounded-lg shadow w-full object-cover" />
          </div>
        </div>

        {/* Service 2: Blankets & Clothing */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <div className="md:order-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
              </span>
              <h2 className="text-xl font-bold text-green-800">Warm Blankets & Clothing</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Clean, comfortable blankets and essential clothing items for patients to stay warm and maintain dignity during their hospital stay.
            </p>
            <ul className="list-disc ml-6 text-gray-600 text-sm">
              <li>Seasonal clothing support</li>
              <li>Clean, sanitized blankets</li>
              <li>Personal hygiene items</li>
            </ul>
            <Link href="/volunteer" className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Get Involved</Link>
          </div>
          <div className="md:order-1">
            <img src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80" alt="Blanket Distribution" className="rounded-lg shadow w-full object-cover" />
          </div>
        </div>

        {/* Service 3: Emotional Counseling */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
              </span>
              <h2 className="text-xl font-bold text-indigo-800">Emotional Counseling</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Professional counseling services and emotional support to help patients and families cope with the stress and anxiety of medical treatment.
            </p>
            <ul className="list-disc ml-6 text-gray-600 text-sm">
              <li>One-on-one counseling sessions</li>
              <li>Group therapy session</li>
              <li>Family counseling support</li>
              <li>Grief and loss counseling</li>
              <li>Motivational workshops</li>
            </ul>
            <Link href="/volunteer" className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Get Involved</Link>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1516309931664-b2ff2f27c9f6?auto=format&fit=crop&w=1200&q=80" alt="Emotional Counseling" className="rounded-lg shadow w-full object-cover" />
          </div>
        </div>

        {/* Service 4: Family Support */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <div className="md:order-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
              </span>
              <h2 className="text-xl font-bold text-teal-800">Family Support Services</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Comprehensive support for family members accompanying patients: accommodation assistance, emotional guidance, and counseling.
            </p>
            <ul className="list-disc ml-6 text-gray-600 text-sm">
              <li>Accommodation assistance</li>
              <li>Childcare guidance</li>
              <li>Financial counseling</li>
              <li>Support group facilitation</li>
            </ul>
            <Link href="/volunteer" className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Get Involved</Link>
          </div>
          <div className="md:order-1">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80" alt="Family Support" className="rounded-lg shadow w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Additional Support Services */}
      <section className="bg-blue-50 py-10 px-4">
        <h3 className="text-2xl font-bold mb-2 text-center text-blue-700">Additional Support Services</h3>
        <p className="text-center text-gray-600 mb-10">
          Beyond our core services, we offer various additional support programs to address diverse patient needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-2 mb-3"><span className="bg-indigo-100 text-indigo-600 py-1 px-3 rounded">📚</span>
              <div className="font-bold">Educational Workshops</div>
            </div>
            <div className="text-gray-500 text-sm">Health awareness and disease prevention workshops for patients and families.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-2 mb-3"><span className="bg-green-100 text-green-600 py-1 px-3 rounded">💊</span>
              <div className="font-bold">Medicine Support</div>
            </div>
            <div className="text-gray-500 text-sm">Assistance with essential medicines for underprivileged patients.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-2 mb-3"><span className="bg-blue-100 text-blue-600 py-1 px-3 rounded">♿</span>
              <div className="font-bold">Mobility Aids</div>
            </div>
            <div className="text-gray-500 text-sm">Provision of wheelchairs, crutches, and other mobility devices.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-2 mb-3"><span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded">📞</span>
              <div className="font-bold">24/7 Helpline</div>
            </div>
            <div className="text-gray-500 text-sm">Round-the-clock telephone support for emergency assistance and guidance.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-2 mb-3"><span className="bg-teal-100 text-teal-600 py-1 px-3 rounded">📅</span>
              <div className="font-bold">Appointment Assistance</div>
            </div>
            <div className="text-gray-500 text-sm">Help with scheduling medical appointments and follow-ups.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center gap-2 mb-3"><span className="bg-pink-100 text-pink-600 py-1 px-3 rounded">👨‍⚕️</span>
              <div className="font-bold">Health Monitoring</div>
            </div>
            <div className="text-gray-500 text-sm">Basic health checks and wellness support during long-term stays.</div>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold mb-2 text-center text-blue-700">How We Deliver Our Services</h3>
        <p className="text-center text-gray-600 mb-14">
          Our systematic approach ensures effective and compassionate service delivery to every patient and family
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
          <div className="flex flex-col items-center">
            <div className="mb-2 text-2xl font-bold text-blue-600">01</div>
            <div className="font-semibold mb-2">Identification</div>
            <div className="text-gray-500 text-center text-sm">
              Our volunteers identify patients and families needing help and direct referrals.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-2xl font-bold text-blue-600">02</div>
            <div className="font-semibold mb-2">Assessment</div>
            <div className="text-gray-500 text-center text-sm">
              Needs are assessed and support plans created in partnership with medical professionals.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-2xl font-bold text-blue-600">03</div>
            <div className="font-semibold mb-2">Service Delivery</div>
            <div className="text-gray-500 text-center text-sm">
              We maintain robust protocols and provide support with compassion.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-2xl font-bold text-blue-600">04</div>
            <div className="font-semibold mb-2">Follow-up</div>
            <div className="text-gray-500 text-center text-sm">
              Our team conducts periodic follow-ups to ensure continued support throughout the healing journey.
            </div>
          </div>
        </div>
      </section>

      {/* Need Our Services Section */}
      <section className="bg-blue-50 py-14 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 rounded-xl bg-white shadow p-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Need Our Services?</h3>
            <p className="mb-5 text-gray-600">
              If you or someone you know needs support, reach out anytime. Our services are provided free of charge to all patients and families in need during their hospital stay.
            </p>
            <ul className="list-disc ml-6 text-gray-600 text-sm mb-4">
              <li>Available 24/7 for emergency support</li>
              <li>No documentation required for basic services</li>
              <li>Confidential and respectful service delivery</li>
            </ul>
            <div className="flex gap-4 mt-2 flex-wrap">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Contact Us</Link>
              <a href="#" className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-200 transition">Emergency Helpline</a>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&q=80" alt="Help Service" className="rounded-lg shadow w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 py-12 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Support Our Services</h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Help us expand our services and reach more patients in need. Your support enables us to provide comprehensive care and comfort.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <Link href="/donate" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 shadow">
            Donate Now
          </Link>
          <Link href="/volunteer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 shadow">
            Volunteer With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
