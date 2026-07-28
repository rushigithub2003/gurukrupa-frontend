import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { categoriesAPI } from "../services/api";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Fetch categories from API
  useEffect(() => {
    categoriesAPI
      .getAll()
      .then((res) => {
        console.log("Categories API response:", res.data);

        // ✅ Handle different response formats safely
        if (Array.isArray(res.data)) {
          setCategories(res.data);
        } else if (Array.isArray(res.data.data)) {
          setCategories(res.data.data);
        } else {
          setCategories([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setCategories([]);
      });
  }, []);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navLinks = [
    ["/", "Home"],
    ["/products", "Products"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      {/* Top Bar */}
      <div className="bg-[#1a6fc4] text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>📞 +91 98765 43210 | ✉️ info@gurukrupaenterprises.com</span>
        <span className="hidden sm:block">Mon–Sat: 9:00 AM – 6:30 PM</span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/log-guru.png"
            alt="Gurukrupa Enterprises"
            className="h-20 lg:h-24 w-auto object-contain"
          />
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-6">
          <div className="flex rounded-xl overflow-hidden border border-gray-300 shadow-sm focus-within:border-[#1a6fc4] focus-within:ring-2 focus-within:ring-blue-100 transition">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search printers, scanners, projectors…"
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#1a6fc4] hover:bg-[#155da5] transition-colors text-white px-5"
            >
              🔍
            </button>
          </div>
        </form>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-md text-sm font-medium
                ${
                  location.pathname === to
                    ? "bg-[#1a6fc4] text-white"
                    : "text-gray-700  hover:bg-blue-50 hover:text-[#1a6fc4]"
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Category Strip */}
      <div className="bg-[#f0f6ff] border-t border-blue-100 overflow-x-auto hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex">
          {Array.isArray(categories) &&
            categories.map((cat) => (
              <Link
                key={cat._id}
                to={`/products?category=${cat._id}`}
                className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-[#1a6fc4]"
              >
                {cat.name}
              </Link>
            ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {navLinks.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 border-b"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
