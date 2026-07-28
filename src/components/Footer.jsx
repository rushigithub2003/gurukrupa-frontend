import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="mb-5">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src="/log-guru.png"
                  alt="Gurukrupa Enterprises"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your trusted partner for premium office equipment. Serving
            Maharashtra since 2005.
          </p>
        </div>
        <div>
          <h4 className="text-white font-display font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/products", "Products"],
              ["/about", "About Us"],
              ["/contact", "Contact"],
            ].map(([to, l]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-[#60a5fa] transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display font-semibold mb-3">
            Categories
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Printers",
              "Scanners",
              "Projectors",
              "Copiers & MFPs",
              "Office Chairs",
              "Accessories",
            ].map((c) => (
              <li key={c}>
                <Link
                  to="/products"
                  className="hover:text-[#60a5fa] transition-colors"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display font-semibold mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Shop No. 5, Indrayani Complex, Pimpri, Pune – 411018</li>
            <li>
              📞{" "}
              <a href="tel:+919876543210" className="hover:text-[#60a5fa]">
                +91 98765 43210
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@gurukrupaenterprises.com"
                className="hover:text-[#60a5fa]"
              >
                info@gurukrupaenterprises.com
              </a>
            </li>
            <li>🕐 Mon–Sat: 9:00 AM – 6:30 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <strong>Gurukrupa Enterprises</strong>.
            All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="text-white font-medium">
              RushiStack Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
