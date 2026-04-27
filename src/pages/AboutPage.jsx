// AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const milestones = [
  { year:'2005', event:'Founded in Pimpri, Pune as a small printer dealership.' },
  { year:'2009', event:'Became authorised dealer for HP and Epson.' },
  { year:'2013', event:'Expanded into projectors, MFPs, and office furniture.' },
  { year:'2017', event:'Opened second showroom and service centre.' },
  { year:'2021', event:'Launched AMC (Annual Maintenance Contract) services.' },
  { year:'2024', event:'Serving 1,200+ clients across Maharashtra.' },
];

export default function AboutPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#0f3c6b] to-[#1a6fc4] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-3"><Link to="/" className="hover:text-white">Home</Link> / About Us</nav>
          <h1 className="font-display font-bold text-3xl mb-2">About Gurukrupa Enterprises</h1>
          <p className="text-blue-100">Your trusted partner for premium office equipment since 2005.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        <section className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="font-display font-bold text-2xl text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Gurukrupa Enterprises was founded in 2005 in Pimpri, Pune with a simple mission: to provide businesses with reliable, high-quality office equipment at competitive prices. What started as a small printer dealership has grown into one of Maharashtra's most trusted office equipment suppliers.</p>
            <p className="text-gray-600 leading-relaxed">Today, we are the authorised dealer for over 15 leading global brands, offering printers, scanners, projectors, copiers, ergonomic chairs, and accessories — all backed by outstanding after-sales service.</p>
          </div>
          <div className="lg:w-80 bg-[#f0f6ff] rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 gap-4">
              {[['18+','Years'],['1,200+','Clients'],['50+','Brands'],['500+','Products']].map(([n,l]) => (
                <div key={l} className="bg-white rounded-xl p-4">
                  <div className="font-display font-bold text-2xl text-[#1a6fc4]">{n}</div>
                  <div className="text-xs text-gray-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="font-display font-bold text-2xl text-gray-800 mb-6">Our Journey</h2>
          <div className="relative border-l-2 border-[#1a6fc4] pl-6 space-y-6">
            {milestones.map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-[#1a6fc4] border-2 border-white shadow" />
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <span className="text-xs font-display font-bold text-[#1a6fc4] bg-[#e6f0fb] px-2 py-0.5 rounded-full mr-2">{year}</span>
                  <span className="text-sm text-gray-700">{event}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#1a6fc4] rounded-2xl text-white p-8 text-center">
          <h2 className="font-display font-bold text-xl mb-2">Ready to Upgrade Your Office?</h2>
          <div className="flex gap-3 justify-center mt-5">
            <Link to="/products" className="bg-white text-[#1a6fc4] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition">Browse Products</Link>
            <Link to="/contact" className="border border-white/50 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </section>
      </div>
    </div>
  );
}