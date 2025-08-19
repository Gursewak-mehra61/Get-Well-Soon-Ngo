'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function Volunteer() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", why: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to submit");
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", why: "" });
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
      className="max-w-lg mx-auto py-12 px-4"
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Join as Volunteer</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4">
        <motion.input required name="name" onChange={handleChange} value={form.name}
          placeholder="Full Name" className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        <motion.input required name="phone" onChange={handleChange} value={form.phone}
          placeholder="Phone Number" className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        <motion.input required name="email" type="email" onChange={handleChange} value={form.email}
          placeholder="Email Address" className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        <motion.textarea required name="why" rows={3} onChange={handleChange} value={form.why}
          placeholder="Why do you want to join?" className="border rounded p-2" whileFocus={{ scale: 1.03 }} />
        {error && <div className="text-red-600">{error}</div>}
        <motion.button type="submit" disabled={loading} className="bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 disabled:opacity-60" whileTap={{ scale: 0.98 }}>
          {loading ? "Submitting..." : "Submit"}
        </motion.button>
        {submitted && <div className="text-green-700 mt-2">Thank you! We'll be in touch soon.</div>}
      </form>
    </motion.section>
  );
}
