'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      <h1 className="text-4xl font-bold text-blue-800 mb-4">About Get Well Soon</h1>
      <p className="mb-6 text-lg text-gray-700">
        Founded in 2023, Get Well Soon Sanstha is dedicated to supporting hospital patients in their most vulnerable moments. Our team began with a simple mission: to ensure every patient receives not just medical attention, but also kindness, warmth, and daily essentials.
      </p>
      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Our Story</h2>
      <p className="mb-4 text-gray-700">
        Our volunteers saw firsthand how a meal, a blanket, or a kind word could transform a patient’s day. With every new member and supporter, our impact continues to grow.
      </p>
      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          'https://randomuser.me/api/portraits/men/31.jpg',
          '/team/parveen-pic.png',
          'https://randomuser.me/api/portraits/men/31.jpg',
          '/team/virender-pic.png',
          'https://randomuser.me/api/portraits/men/31.jpg',
          '/team/ish-pic.png'
        ].map((img, idx)=>(
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx*0.2 }}
            className="bg-white rounded shadow p-4 text-center"
          >
            <img src={img} alt="Team Member" className="mx-auto rounded-full w-24 h-24 mb-2 object-cover" />
            <div className="text-lg font-bold text-blue-700">{['Sr. Manjeet Singh','Mr. Parveen Dhamija' , 'Mr. Subash Chawla','Mr. Virender Arora', 'Puneet Nagpal' , 'Ish Khurana'][idx]}</div>
            <div className="text-sm text-gray-500">Volunteer</div>
            {/* <div className="text-sm text-gray-500">{['Volunteer', 'Volunteer', 'Volunteer', 'Volunteer', 'Volunteer', ][idx]}</div> */}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
