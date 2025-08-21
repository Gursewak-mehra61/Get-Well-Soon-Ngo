"use client";
import { useState, useEffect } from "react";

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
        isAnimating
          ? "translate-y-0 opacity-100 scale-100"
          : "-translate-y-12 opacity-0 scale-95"
      }`}
    >
      <div
        className={`p-4 rounded-2xl shadow-2xl border backdrop-blur-lg ${
          type === "success"
            ? "bg-green-50/90 border-green-200 text-green-800"
            : "bg-red-50/90 border-red-200 text-red-800"
        }`}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              type === "success" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {type === "success" ? (
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">
              {type === "success" ? "Success!" : "Error"}
            </p>
            <p className="text-sm opacity-90">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Volunteer() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", why: "" });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function showNotification(type, message) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/api/volunteer/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();
      if (!res.ok || !json.ok)
        throw new Error(json.error || "Failed to submit");

      showNotification(
        "success",
        "Thank you for volunteering! We'll be in touch soon to discuss opportunities."
      );
      setForm({ name: "", phone: "", email: "", why: "" });
    } catch (err) {
      showNotification(
        "error",
        err.message || "Something went wrong. Please try again."
      );
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

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <section className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-slide-down">
              Join as Volunteer
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-delayed">
              Make a difference in your community. Join our team of dedicated
              volunteers and help us create positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Volunteer Benefits */}
            <div className="space-y-8 animate-slide-left">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Why Volunteer With Us?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Make a Real Impact
                      </h3>
                      <p className="text-gray-600">
                        Directly contribute to improving lives in your community
                        through meaningful volunteer work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Build Connections
                      </h3>
                      <p className="text-gray-600">
                        Meet like-minded people and build lasting friendships
                        while working towards common goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Develop Skills
                      </h3>
                      <p className="text-gray-600">
                        Gain valuable experience and develop new skills while
                        contributing to a worthy cause.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Flexible Schedule
                      </h3>
                      <p className="text-gray-600">
                        Choose volunteer opportunities that fit your schedule
                        and availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="animate-slide-right">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Volunteer Application
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      required
                      name="name"
                      onChange={handleChange}
                      value={form.name}
                      placeholder="Full Name"
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-green-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      required
                      name="phone"
                      onChange={handleChange}
                      value={form.phone}
                      placeholder="Phone Number"
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-green-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      required
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={form.email}
                      placeholder="Email Address"
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-green-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      name="why"
                      rows={5}
                      onChange={handleChange}
                      value={form.why}
                      placeholder="Why do you want to volunteer with us? What skills or experience do you bring?"
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-green-500 focus:outline-none focus:scale-105 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-teal-700 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          <span>Join Our Team</span>
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
