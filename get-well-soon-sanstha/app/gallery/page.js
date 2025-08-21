'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  {
    id: 1,
    title: "Daily Meal Distribution",
    desc: "Volunteers serving nutritious meals to patients and their families.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-1.jpg",
  },
  {
    id: 2,
    title: "Blanket Distribution Drive",
    desc: "Providing warm blankets to patients during winter season.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-2.jpg",
  },
  {
    id: 3,
    title: "Emotional Support Session",
    desc: "Volunteer providing emotional support to a patient family.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-3.jpg",
  },
  {
    id: 4,
    title: "Children's Day Celebration",
    desc: "Special event organized for young patients in pediatric ward.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-4.jpg",
  },
  {
    id: 5,
    title: "Kitchen Preparation",
    desc: "Our team preparing fresh meals in the community kitchen.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-5.jpg",
  },
  {
    id: 6,
    title: "Group Therapy Session",
    desc: "Group counseling session for patient families.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-6.jpg",
  },
  {
    id: 7,
    title: "Health Awareness Camp",
    desc: "Conducting health awareness workshop for patients.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-7.jpg",
  },
  {
    id: 8,
    title: "Clothing Distribution",
    desc: "Distributing clean clothes and essential items to patients.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-8.jpg",
  },
  {
    id: 9,
    title: "Special Diet Meals",
    desc: "Preparing special dietary meals for patients with medical conditions.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-9.jpg",
  },
  {
    id: 10,
    title: "Volunteer Training",
    desc: "Training session for new volunteers joining our mission.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-10.jpg",
  },
  {
    id: 11,
    title: "Family Counseling",
    desc: "One-on-one counseling support for patient families.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-11.jpg",
  },
  {
    id: 12,
    title: "Donation Drive",
    desc: "Community donation collection event for hospital supplies.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-12.jpg",
  },
  {
    id: 13,
    title: "Event Title 13",
    desc: "Description for event 13 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-13.jpg",
  },
  {
    id: 14,
    title: "Event Title 14",
    desc: "Description for event 14 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-14.jpg",
  },
  {
    id: 15,
    title: "Event Title 15",
    desc: "Description for event 15 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-15.jpg",
  },
  {
    id: 16,
    title: "Event Title 16",
    desc: "Description for event 16 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-16.jpg",
  },
  {
    id: 17,
    title: "Event Title 17",
    desc: "Description for event 17 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-17.jpg",
  },
  {
    id: 18,
    title: "Event Title 18",
    desc: "Description for event 18 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-18.jpg",
  },
  {
    id: 19,
    title: "Event Title 19",
    desc: "Description for event 19 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-19.jpg",
  },
  {
    id: 20,
    title: "Event Title 20",
    desc: "Description for event 20 goes here.",
    tag: "Food Distribution",
    img: "/food-distribution/fd-20.jpg",
  },
  {
    id: 21,
    title: "Event Title 21",
    desc: "Description for event 20 goes here.",
    tag: "Special Events",
    img: "/special-event/se-1.jpg",
  },
  {
    id: 22,
    title: "Event Title 22",
    desc: "Description for event 20 goes here.",
    tag: "Special Events",
    img: "/special-event/se-2.jpg",
  },
  {
    id: 23,
    title: "Event Title 23",
    desc: "Description for event 20 goes here.",
    tag: "Special Events",
    img: "/special-event/se-3.jpg",
  },
  {
  id: 24,
  title: "Event Title 24",
  desc: "Description for event 24 goes here.",
  tag: "Food Distribution",
  img: "/food-distribution/fd-24.jpg",
},
{
  id: 25,
  title: "Event Title 25",
  desc: "Description for event 25 goes here.",
  tag: "Food Distribution",
  img: "/food-distribution/fd-25.jpg",
},
{
  id: 26,
  title: "Event Title 26",
  desc: "Description for event 26 goes here.",
  tag: "Food Distribution",
  img: "/food-distribution/fd-26.jpg",
},
{
  id: 27,
  title: "Event Title 27",
  desc: "Description for event 27 goes here.",
  tag: "Special Events",
  img: "/special-event/se-4.jpg",
},


];

const tags = [
  "All Activities",
  "Food Distribution",
  "Blanket Distribution",
  "Counseling Sessions",
  "Special Events",
];

const tagColors = {
  "Food Distribution": "bg-orange-100 text-orange-700",
  "Blanket Distribution": "bg-blue-100 text-blue-700",
  "Counseling Sessions": "bg-green-100 text-green-700",
  "Special Events": "bg-purple-100 text-purple-700",
};

export default function Gallery() {
  const [activeTag, setActiveTag] = useState("All Activities");
  const [zoomIndex, setZoomIndex] = useState(null);

  const filteredActivities =
    activeTag === "All Activities"
      ? activities
      : activities.filter((a) => a.tag === activeTag);

  function closePopup() {
    setZoomIndex(null);
  }

  function prevImage() {
    if (zoomIndex === null) return;
    setZoomIndex((zoomIndex - 1 + filteredActivities.length) % filteredActivities.length);
  }

  function nextImage() {
    if (zoomIndex === null) return;
    setZoomIndex((zoomIndex + 1) % filteredActivities.length);
  }

  return (
    <div className="bg-white">
      {/* Modern Gallery Hero */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-green-600/80 to-teal-600/90"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 animate-slide-down">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-slide-up">
            Our <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Capturing moments of compassion, hope, and community impact through our mission to spread care and warmth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
              <span className="text-white font-semibold">150,000+ Lives Touched</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
              <span className="text-white font-semibold">2+ Hospitals Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Our Impact in Action
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Witness the moments that define our mission - spreading care, warmth, and hope throughout our community
            </p>
          </div>

          {/* Modern Filter Tabs */}
          <div className="flex justify-center mb-12 animate-slide-up">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
              <div className="flex gap-1 flex-wrap justify-center">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      tag === activeTag
                        ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105"
                        : "text-gray-700 hover:bg-white/80 hover:shadow-md hover:scale-105"
                    }`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modern Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {filteredActivities.map((activity, index) => (
              <div
                key={activity.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setZoomIndex(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Tag Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${tagColors[activity.tag] || 'bg-gray-100 text-gray-700'} backdrop-blur-sm`}>
                    {activity.tag}
                  </div>
                  
                  {/* Hover Overlay */}
                  {/* <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {activity.desc}
                      </p>
                    </div>
                  </div> */}
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Videos Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stories in Motion
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Experience the heartwarming moments and impactful stories through our video collection
            </p>
          </div> */}
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-slide-up">
            {[
              {
                id: 1,
                title: "Meal Distribution Drive",
                desc: "Watch how volunteers prepare and distribute nutritious meals to patients and families.",
                videoSrc: "/video/vid1.mp4",
                poster: "/videos/posters/meal-distribution.jpg",
                category: "Community Service"
              },
              {
                id: 2,
                title: "Emotional Support Session",
                desc: "Counselors providing emotional care and support to patients and their families.",
                videoSrc: "/video/vid2.mp4",
                poster: "/videos/posters/emotional-support.jpg",
                category: "Mental Health"
              },
              {
                id: 3,
                title: "Special Events Highlights",
                desc: "Highlights from our community celebrations, drives, and special occasions.",
                videoSrc: "/video/vid3.mp4",
                poster: "/videos/posters/special-events.jpg",
                category: "Events"
              },
            ].map(({ id, title, desc, videoSrc, poster, category }) => (
              <article key={id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <video
                    className="w-full h-64 object-cover bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-700 group-hover:scale-105"
                    controls
                    preload="metadata"
                    src={videoSrc}
                    poster={poster}
                    aria-label={title}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Modern CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Share Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Story</span>
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Been part of our mission? We'd love to showcase your photos and experiences. Help us inspire others by sharing your moments of spreading care and warmth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="group px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Share Your Photos
                </span>
              </a>
              <a
                href="#"
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Follow Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Popup */}
      <AnimatePresence>
        {zoomIndex !== null && (
          <motion.div
            key="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full mx-4 sm:mx-8 rounded-xl overflow-hidden bg-white/30 backdrop-blur-md shadow-lg border border-white/40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredActivities[zoomIndex].img}
                alt={filteredActivities[zoomIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
                loading="eager"
              />
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white transition"
                aria-label="Close zoomed image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white transition"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white transition"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  function closePopup() {
    setZoomIndex(null);
  }
}
