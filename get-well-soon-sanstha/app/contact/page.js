'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to submit");
      setSubmitted(true);
      setData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-xl mx-auto py-12 px-4"
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-2">Contact Us</h1>
      <div className="mb-6">
        <div className="font-semibold text-gray-700">Hospital Address:</div>
        <div>Get Well Soon Sanstha, Room 10, City Hospital, Main Road, Sector 5, Delhi – 110011</div>
        <div className="font-semibold mt-2 text-gray-700">Phone:</div>
        <div>+91 9876543210</div>
        <div className="font-semibold mt-2 text-gray-700">Email:</div>
        <div>contact@getwellsoon.org</div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 flex flex-col gap-4">
        <motion.input required type="text" name="name" onChange={handleChange} value={data.name}
               placeholder="Your Name" className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        <motion.input required type="email" name="email" onChange={handleChange} value={data.email}
               placeholder="Your Email" className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        <motion.textarea required name="message" rows={3} onChange={handleChange} value={data.message}
                  placeholder="Type your message..." className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        {error && <div className="text-red-600">{error}</div>}
        <motion.button type="submit" disabled={loading} className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:opacity-60" whileTap={{ scale: 0.98 }}>
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
        {submitted && <div className="text-green-700 mt-2">Thank you! We'll respond soon.</div>}
      </form>
    </motion.section>
  );
}
