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
      {/* Gallery Hero Banner */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1600&q=80"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 drop-shadow">
            Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-2 max-w-2xl mx-auto">
            Moments of compassion, care, and hope captured during our service to hospital patients and their families.
          </p>
        </div>
      </section>

      {/* Gallery Activity Filter */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Our Activities in Pictures</h2>
        <p className="text-center text-gray-600 mb-7 text-sm sm:text-base md:text-lg">
          See how we spread care and warmth through our various support services.
        </p>
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                tag === activeTag
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-7">
          {filteredActivities.map((activity, index) => (
            <div
              key={activity.id}
              className="overflow-hidden cursor-pointer rounded-lg shadow hover:shadow-lg transition"
              onClick={() => setZoomIndex(index)}
            >
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

       {/* Videos Section */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Our Videos</h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Watch moments of compassion and hope captured in our video stories.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Meal Distribution Drive",
              desc: "Watch how volunteers prepare and distribute nutritious meals.",
              videoSrc: "/video/vid1.mp4",
              poster: "/videos/posters/meal-distribution.jpg",
            },
            {
              id: 2,
              title: "Emotional Support Session",
              desc: "Counselors providing emotional care to patients and families.",
              videoSrc: "/video/vid2.mp4",
              poster: "/videos/posters/emotional-support.jpg",
            },
            {
              id: 3,
              title: "Special Events Highlights",
              desc: "Highlights from our community celebrations and drives.",
              videoSrc: "/video/vid3.mp4",
              poster: "/videos/posters/special-events.jpg",
            },
          ].map(({ id, title, desc, videoSrc, poster }) => (
            <article key={id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <video
                className="w-full h-auto aspect-video bg-black"
                controls
                preload="metadata"
                src={videoSrc}
                poster={poster}
                aria-label={title}
              />
              {/* <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div> */}
            </article>
          ))}
        </div>
      </section>

      {/* Share Your Moments Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-2xl mx-auto rounded-xl bg-white shadow p-8 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2 text-blue-700">Share Your Moments</h3>
          <p className="mb-6 text-gray-600">
            Have you been part of our activities? We'd love to feature your photos and experiences. Share your moments of spreading care and warmth with our community.
          </p>
          <div className="flex gap-4 mt-3 flex-wrap">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Share Your Photos
            </a>
            <a
              href="#"
              className="bg-gray-100 text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-200 transition"
            >
              Follow Us on Social Media
            </a>
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
