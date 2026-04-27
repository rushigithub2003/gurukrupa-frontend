import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI, categoriesAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

const reasons = [
  { icon: '🏆', title: 'Authorised Dealer',  desc: 'Official dealer for HP, Epson, Canon, and 15+ leading brands.' },
  { icon: '⚡', title: 'Fast Service',        desc: 'Same-day delivery within Pune. Express installation support.' },
  { icon: '🛡️', title: 'Warranty Assured',   desc: 'All products come with full manufacturer warranty.' },
  { icon: '💬', title: '24/7 Support',        desc: 'Dedicated WhatsApp & phone support for all your queries.' },
  { icon: '💰', title: 'Best Pricing',        desc: 'Competitive prices with bulk-order and annual contract discounts.' },
  { icon: '🔧', title: 'AMC Services',        desc: 'Affordable Annual Maintenance Contracts for all office equipment.' },
];

const testimonials = [
  { name:'Rajesh Patil',    role:'Manager, Pimpri Textiles',     text:'Excellent service! Our printing costs dropped 40% after switching to Gurukrupa.' },
  { name:'Sunita Sharma',   role:'Director, Sharma & Associates', text:'Very professional. They helped us pick the perfect MFP for our law firm.' },
  { name:'Amit Deshmukh',   role:'IT Head, TechNova Solutions',   text:'Fast delivery, genuine products, great after-sales support. 5-year customer.' },
];

export default function HomePage() {
  const [featured,   setFeatured]   = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    Promise.all([
      productsAPI.getAll({ featured: true, limit: 8 }),
      categoriesAPI.getAll(),
    ]).then(([pr, cr]) => {
      setFeatured(pr.data.products || []);
      setCategories(cr.data || []);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f3c6b] via-[#1a6fc4] to-[#1e8a6e] text-white py-16 px-4 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block text-xs bg-white/20 px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Pune's Trusted Office Equipment Partner</span>
            <h1 className="font-display font-bold text-3xl sm:text-5xl leading-tight mb-4">
              Gurukrupa<br /><span className="text-[#6ee7b7]">Enterprises</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg max-w-lg mb-8">
              Premium printers, scanners, projectors, copiers & office furniture — all under one roof. Authorised dealer. Genuine products.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="bg-white text-[#1a6fc4] px-6 py-3 rounded-lg font-display font-semibold hover:bg-blue-50 transition shadow">Explore Products</Link>
              <Link to="/contact"  className="border border-white/50 text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-white/10 transition">Get a Quote</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['18+','Years'], ['500+','Products'], ['1,200+','Clients'], ['50+','Brands']].map(([n, l]) => (
              <div key={l} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center min-w-[110px]">
                <div className="font-display font-bold text-2xl text-[#6ee7b7]">{n}</div>
                <div className="text-xs text-blue-200 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-display font-bold text-xl text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {categories.map(cat => (
            <Link key={cat._id} to={`/products?category=${cat._id}`}
              className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-xl p-4 hover:border-[#1a6fc4] hover:shadow-md transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-gray-800">Featured Products</h2>
          <Link to="/products" className="text-sm text-[#1a6fc4] hover:underline font-medium">View All →</Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f0f6ff] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xl text-gray-800 mb-2 text-center">Why Choose Gurukrupa Enterprises?</h2>
          <p className="text-sm text-gray-500 text-center mb-8">Trusted by 1,200+ businesses across Pune & Maharashtra</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-display font-bold text-xl text-gray-800 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text }) => (
            <div key={name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-[#facc15] mb-3">★★★★★</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">"{text}"</p>
              <div className="font-display font-semibold text-sm text-gray-800">{name}</div>
              <div className="text-xs text-gray-400">{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a6fc4] text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl mb-3">Need Help Choosing the Right Equipment?</h2>
          <p className="text-blue-100 text-sm mb-6">Our experts will help you find the perfect solution for your office.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-white text-[#1a6fc4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Contact Us</Link>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1da851] transition">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}