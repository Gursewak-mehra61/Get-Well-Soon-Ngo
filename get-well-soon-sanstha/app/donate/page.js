'use client';
import { useState } from "react";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

// UPI deep link generator
function getUpiLink({ upi, amount }) {
  return `upi://pay?pa=${encodeURIComponent(upi)}&pn=Get%20Well%20Soon%20Sanstha&am=${amount || ''}&cu=INR`;
}

export default function Donate() {
  const [donationType, setDonationType] = useState("One-time");
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [success, setSuccess] = useState(false);

  // Real UPI
  const UPI_ID = "mehraalpha20@okaxis";
  const QR_UPI = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(getUpiLink({ upi: UPI_ID, amount }))}`;
  const PAYPAL_LINK = "https://paypal.me/dummyngo";
  const GMAIL = "getwellsoon@gmail.com";

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value));
  };

  function handlePaymentSubmit(e) {
    e.preventDefault();
    if (amount < 100) return alert("Amount must be at least ₹100!");
    setSuccess(true);
  }

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
          alt="Donation Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow">Make a Donation</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-3 max-w-2xl mx-auto">
            Your generous contribution helps us provide essential support to hospital patients and their families during their most challenging times.
          </p>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="max-w-6xl mx-auto py-10 px-3">
        <h2 className="text-2xl font-bold text-center mb-2">Your Impact</h2>
        <p className="text-center text-gray-600 mb-7">See how your donation directly translates into care and support for those who need it most</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 text-center">
          <div className="bg-blue-50 p-7 rounded-xl shadow">
            <div className="text-2xl font-bold text-blue-700 mb-3">₹500</div>
            <div className="mb-2 text-gray-700">Provides meals for 5 patients for one day</div>
            <div className="text-2xl">🍛</div>
          </div>
          <div className="bg-blue-50 p-7 rounded-xl shadow">
            <div className="text-2xl font-bold text-blue-700 mb-3">₹1,000</div>
            <div className="mb-2 text-gray-700">Supplies blankets to 4-5 patients</div>
            <div className="text-2xl">🛏️</div>
          </div>
          <div className="bg-blue-50 p-7 rounded-xl shadow">
            <div className="text-2xl font-bold text-blue-700 mb-3">₹2,500</div>
            <div className="mb-2 text-gray-700">Funds counseling sessions for 10 families</div>
            <div className="text-2xl">💬</div>
          </div>
          <div className="bg-blue-50 p-7 rounded-xl shadow">
            <div className="text-2xl font-bold text-blue-700 mb-3">₹5,000</div>
            <div className="mb-2 text-gray-700">Covers essential supplies for one month</div>
            <div className="text-2xl">🩺</div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4 text-center">Choose Donation Amount</h3>
          <p className="text-center text-gray-600 mb-7">
            Every contribution, no matter the size, makes a meaningful difference
          </p>

          {/* Type Toggle */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-5 py-2 rounded-full font-medium transition ${donationType === "One-time" ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setDonationType("One-time")}
            >
              One-time Donation
            </button>
            <button
              className={`px-5 py-2 rounded-full font-medium transition ${donationType === "Monthly" ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setDonationType("Monthly")}
            >
              Monthly Donation
            </button>
          </div>

          {/* Amount grid + custom input */}
          <form onSubmit={handlePaymentSubmit}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
              {donationAmounts.map(val => (
                <button
                  type="button"
                  key={val}
                  className={`rounded-2xl px-3 py-2 border text-lg font-medium ${amount===val?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
                  onClick={() => {setAmount(val); setCustomAmount("");}}
                >
                  ₹{val.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Enter amount (minimum ₹100)"
                min={100}
                value={customAmount}
                onChange={handleCustomAmount}
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 outline-none"
              />
            </div>
            <h4 className="font-medium mb-3 mt-6">Choose Payment Method</h4>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <button
                type="submit"
                onClick={() => setPaymentMethod("Google Pay")}
                className={`bg-gray-50 rounded-xl border flex flex-col items-center py-5 hover:bg-blue-50 transition`}
              >
                <img src="https://img.icons8.com/color/48/google-pay-india.png" className="w-8 h-8 mb-1" alt="Google Pay" />
                <span className="font-semibold text-gray-700">Google Pay</span>
              </button>
              <button
                type="submit"
                onClick={() => setPaymentMethod("PayPal")}
                className={`bg-gray-50 rounded-xl border flex flex-col items-center py-5 hover:bg-blue-50 transition`}
              >
                <img src="https://img.icons8.com/color/48/paypal.png" className="w-8 h-8 mb-1" alt="PayPal" />
                <span className="font-semibold text-gray-700">PayPal</span>
              </button>
              <button
                type="submit"
                onClick={() => setPaymentMethod("UPI")}
                className={`bg-gray-50 rounded-xl border flex flex-col items-center py-5 hover:bg-blue-50 transition`}
              >
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-upi-2085056-1747946.png?f=webp&w=512" className="w-8 h-8 mb-1" alt="UPI" />
                <span className="font-semibold text-gray-700">UPI</span>
              </button>
            </div>
            {/* Success UI + QR/Link */}
            {success && (
              <>
                <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center mb-7">
                  <h4 className="font-bold text-lg mb-2 text-green-700">Thank you for supporting!</h4>
                  <p className="mb-2">
                    You chose <b>{paymentMethod}</b> for ₹{amount || customAmount}.
                  </p>
                  {(paymentMethod === "UPI" || paymentMethod === "Google Pay") && (
                    <div>
                      <img src={QR_UPI} alt="UPI QR" className="w-36 h-36 mx-auto mb-3 rounded" />
                      <div className="font-medium text-blue-700 mb-1">UPI ID: <span className="font-mono">{UPI_ID}</span></div>
                      {/* Pay Now: Only shows if window.navigator.userAgent includes 'Android' or 'iPhone' */}
                      <a href={getUpiLink({ upi: UPI_ID, amount })} className="bg-green-500 hover:bg-green-600 transition text-white rounded-full px-7 py-2 font-semibold mt-3 inline-block" target="_blank" rel="noopener">
                        Pay Now
                      </a>
                      <div className="text-xs text-gray-500 mt-2">Send screenshot to: {GMAIL}</div>
                    </div>
                  )}
                  {paymentMethod === "PayPal" && (
                    <div>
                      <a href={PAYPAL_LINK} target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 inline-block mb-2 transition">
                        PayPal Pay
                      </a>
                      <div className="text-xs text-gray-600">After payment, mail at: {GMAIL}</div>
                    </div>
                  )}
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Other Ways to Help */}
      {/* <section className="max-w-6xl mx-auto py-8 px-3 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-3">Other Ways to Help</h4>
          <ul className="mb-5 space-y-3">
            <li className="flex items-center gap-2 text-blue-700"><span>🧣</span>
              <span className="font-bold">In-Kind Donations</span>
              <span className="text-gray-600 font-normal ml-2">Donate blankets, clothes, medicines, food etc. at our centers.</span>
            </li>
            <li className="flex items-center gap-2 text-green-700"><span>🤝</span>
              <span className="font-bold">Corporate Partnerships</span>
              <span className="text-gray-600 font-normal ml-2">Partner for CSR, large community impact.</span>
            </li>
            <li className="flex items-center gap-2 text-purple-700"><span>📢</span>
              <span className="font-bold">Spread Awareness</span>
              <span className="text-gray-600 font-normal ml-2">Share our mission on social & help more people in need.</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1504439904031-93ded9d6d5cd?auto=format&fit=crop&w=1200&q=80" alt="Other Ways Help" className="rounded-xl shadow w-full object-cover" />
        </div>
      </section> */}

      {/* Transparency Section */}
      <section className="bg-blue-50 py-12">
        <h3 className="text-2xl font-bold text-center mb-2">Transparency & Accountability</h3>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-9">
          We believe in complete transparency about how your donations are used to make a difference
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center mb-5">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-3xl font-extrabold text-blue-700 mb-2">100%</div>
            <div className="text-gray-700 font-medium mb-1">Direct Patient Support</div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-3xl font-extrabold text-green-700 mb-2">0%</div>
            <div className="text-gray-700 font-medium mb-1">Operations & Infrastructure</div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-3xl font-extrabold text-purple-700 mb-2">0%</div>
            <div className="text-gray-700 font-medium mb-1">Administrative Costs</div>
          </div>
        </div>
        {/* <p className="mt-3 text-center text-gray-600">
          All donations are tax-deductible under Section 80G. You will receive a receipt for tax purpose.<br/>
          <a href="#" className="text-blue-600 underline hover:text-blue-800">Request Financial Reports &rarr;</a>
        </p> */}
      </section>
    </div>
  );
}
