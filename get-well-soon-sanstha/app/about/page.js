"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sr. Manjeet Singh",
    img: "/team/sr-manjeet-pic.png",
    roles: ["Co-Founder"],
  },
  {
    name: "Mr. Parveen Dhamija",
    img: "/team/parveen-pic.png",
    roles: ["Co-Founder"],
  },
  {
    name: "Mr. Subash Chawla",
    img: "/team/subash-pic.png",
    roles: ["Volunteer"],
  },
  {
    name: "Mr. Virender Arora",
    img: "/team/virender-pic.png",
    roles: ["Volunteer"],
  },
  {
    name: "Mr. Puneet Nagpal",
    img: "/team/puneet-pic.png",
    roles: ["Volunteer"],
  },
  {
    name: "Mr. Ish Khurana",
    img: "/team/ish-pic.png",
    roles: ["Volunteer"],
  },
];

const chef = {
  name: "Chef Vikram Singh",
  img: "/team/chef-vikram.png",
  role: "Head Chef",
  bio: "Vikram brings 15+ years of culinary experience to our kitchen. He ensures every meal for patients and families is hot, nutritious, and made with care and hygiene.",
};

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto py-8 px-4"
    >
      {/* Header */}
      <div className="bg-blue-50 rounded-xl py-5 px-4 sm:py-6 sm:px-6 mb-10 shadow-md max-w-full sm:max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3 text-center">
          About Get Well Soon
        </h1>
        <p className="mb-2 text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-full sm:max-w-2xl mx-auto px-2 sm:px-0">
          Founded in 2018, Get Well Soon Sanstha has served over 150,000 people,
          providing care and support during their most vulnerable moments. On
          average, we assist 50 individuals daily, ensuring every patient
          receives not only medical attention but also kindness, warmth, and
          essential daily needs.
        </p>
      </div>

      {/* Our Story */}
      <div className="bg-green-50 rounded-xl px-4 py-5 mb-10 shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-2 text-center">
          Our Story
        </h2>
        <p className="mb-2 text-gray-700 text-center max-w-2xl mx-auto text-sm sm:text-base">
          Our volunteers saw firsthand how a meal, a blanket, or a kind word
          could transform a patient’s day. With every new member and supporter,
          our impact continues to grow.
        </p>
      </div>

      {/* Team Grid */}
      <div className="mb-14">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-5 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: idx * 0.18 }}
              className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col items-center shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-20 h-20 mb-3 object-cover ring-2 ring-blue-100"
                style={{ boxShadow: "0 2px 18px 0 rgba(34,197,94,.09)" }}
              />
              <div className="text-base sm:text-lg font-bold text-blue-700 mb-1 text-center">
                {member.name}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 text-center">
                {member?.roles?.map((role, idx) => (
                  <p key={idx}>{role}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chef Section */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-orange-700 mt-10 mb-4 text-center">
          Meet Our Chef
        </h2>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border border-orange-100 rounded-xl shadow-lg p-6 sm:p-7 flex flex-col items-center max-w-xs"
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="rounded-full w-24 h-24 mb-4 object-cover border-4 border-orange-200"
            />
            <div className="text-lg sm:text-xl font-bold text-orange-700 mb-1 text-center">
              {chef.name}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mb-2 text-center">
              {chef.role}
            </div>
            <p className="text-gray-700 text-sm sm:text-base text-center">
              {chef.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
