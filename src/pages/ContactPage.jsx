import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#0f3c6b] to-[#1a6fc4] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-3"><Link to="/" className="hover:text-white">Home</Link> / Contact</nav>
          <h1 className="font-display font-bold text-3xl mb-2">Get in Touch</h1>
          <p className="text-blue-100">We'd love to hear from you.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon:'📍', title:'Address', info:'Shop No. 5, Indrayani Complex,\nPimpri, Pune – 411018' },
              { icon:'📞', title:'Phone',   info:'+91 98765 43210' },
              { icon:'✉️', title:'Email',   info:'info@gurukrupaenterprises.com' },
              { icon:'🕐', title:'Hours',   info:'Mon–Sat: 9:00 AM – 6:30 PM' },
            ].map(({ icon, title, info }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3 shadow-sm">
                <span className="text-xl">{icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-sm text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{info}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-xl text-green-800 mb-2">Message Sent!</h3>
                <p className="text-sm text-green-700 mb-5">Our team will reach out within 1 business day.</p>
                <button onClick={() => setSubmitted(false)} className="text-sm text-[#1a6fc4] hover:underline">Send another message</button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-display font-bold text-lg text-gray-800 mb-5">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                      <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a6fc4]" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a6fc4]" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a6fc4]" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Subject *</label>
                      <select required name="subject" value={form.subject} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a6fc4] bg-white">
                        <option value="">Select…</option>
                        <option>Product Inquiry</option><option>Request a Quote</option><option>After-Sales Support</option><option>AMC Services</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Message *</label>
                    <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Your message…"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a6fc4] resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#1a6fc4] hover:bg-[#155ba3] text-white py-3 rounded-xl font-display font-semibold text-sm transition-colors shadow">
                    Send Message →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.256369370478!2d73.79799847461282!3d18.62285486689046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99dfa3f8d5b%3A0x0!2sPimpri%2C%20Pune!5e0!3m2!1sen!2sin"
            width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </div>
      </div>
    </div>
  );
}