'use client';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { buildApiUrl, API_ENDPOINTS } from "../config/api";


// Dynamic import MapSection at top-level, outside any component
const MapSection = dynamic(() => import('../contact/mapSection'), { ssr: false });
// Beautiful Popup Notification Component
function NotificationPopup({ type, message, onClose, isVisible }) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed top-6 right-6 z-50 max-w-sm transform transition-all duration-300 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95'
      }`}
    >
      <div className={`p-4 rounded-2xl shadow-2xl border backdrop-blur-lg ${
        type === 'success' 
          ? 'bg-green-50/90 border-green-200 text-green-800' 
          : 'bg-red-50/90 border-red-200 text-red-800'
      }`}>
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {type === 'success' ? (
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">
              {type === 'success' ? 'Success!' : 'Error'}
            </p>
            <p className="text-sm opacity-90">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function showNotification(type, message) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(buildApiUrl(API_ENDPOINTS.CONTACT_SUBMIT), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to submit");
      
      showNotification('success', 'Thank you! Your message has been sent successfully. We\'ll respond soon.');
      setData({ name: "", email: "", message: "" });
    } catch (err) {
      showNotification('error', err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <NotificationPopup
        type={notification?.type}
        message={notification?.message}
        onClose={() => setNotification(null)}
        isVisible={!!notification}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <section className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-slide-down">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-delayed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-left">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
                      <p className="text-gray-600">Krishna Power Tool, Near SBI Bank<br />Uttam nagar, Hansi, Hansi<br />Haryana 125033</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9416346327</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">contact@getwellsoon.org</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Enhanced Map Section */}
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20 animate-slide-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Find Us Here</h2>
                    <p className="text-gray-600 text-sm">Interactive map with directions</p>
                  </div>
                </div>
                <MapSection />
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-right">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      onChange={handleChange} 
                      value={data.name}
                      placeholder="Your Name" 
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-blue-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <input 
                      required 
                      type="email" 
                      name="email" 
                      onChange={handleChange} 
                      value={data.email}
                      placeholder="Your Email" 
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-blue-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      required 
                      name="message" 
                      rows={5} 
                      onChange={handleChange} 
                      value={data.message}
                      placeholder="Type your message here..."
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-blue-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500 resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
