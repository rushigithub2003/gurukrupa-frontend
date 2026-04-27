import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsAPI, categoriesAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [products,    setProducts]    = useState([]);
  const [categories,  setCategories]  = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy,      setSortBy]      = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pagination,  setPagination]  = useState({ total: 0, page: 1, pages: 1 });

  // Sync from URL params on mount
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || '');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Load categories
  useEffect(() => {
    categoriesAPI.getAll().then(r => setCategories(r.data)).catch(() => {});
  }, []);

  // Load products
  const fetchProducts = useCallback(() => {
    setLoading(true);
    const params = { limit: 24 };
    if (activeCategory) params.category = activeCategory;
    if (searchQuery)    params.search   = searchQuery;
    productsAPI.getAll(params)
      .then(r => {
        setProducts(r.data.products || []);
        setPagination({ total: r.data.total, page: r.data.page, pages: r.data.pages });
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [activeCategory, searchQuery]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'name-asc')  return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0;
  });

  const countFor = (id) => id ? products.filter(p => p.category?._id === id).length : products.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-[#1a6fc4]">Home</a> / <span className="text-gray-700">Products</span>
        {searchQuery && <> / <span>Search: "{searchQuery}"</span></>}
      </nav>

      <div className="flex gap-6">
        {/* Mobile overlay */}
        {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300
          lg:static lg:z-auto lg:w-56 lg:shadow-none lg:transform-none lg:flex-shrink-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <button className="lg:hidden absolute top-3 right-3 text-xl" onClick={() => setSidebarOpen(false)}>✕</button>

          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-10 lg:mt-0">
            <div className="bg-[#1a6fc4] text-white px-4 py-3">
              <h3 className="font-display font-semibold text-sm">Product Categories</h3>
            </div>
            <ul>
              <li>
                <button onClick={() => { setActiveCategory(''); setSidebarOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between border-b border-gray-50 transition-colors
                    ${!activeCategory ? 'bg-[#e6f0fb] text-[#1a6fc4] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                  🗂️ All Products
                  <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">{pagination.total}</span>
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat._id}>
                  <button onClick={() => { setActiveCategory(cat._id); setSidebarOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between border-b border-gray-50 transition-colors
                      ${activeCategory === cat._id ? 'bg-[#e6f0fb] text-[#1a6fc4] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                    <span className="flex items-center gap-2">{cat.icon} {cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help */}
          <div className="mt-4 bg-[#f0f6ff] rounded-xl p-4 border border-blue-100">
            <p className="text-xs font-semibold text-gray-600 mb-1">Need a recommendation?</p>
            <p className="text-xs text-gray-500 mb-3">Talk to our experts for free.</p>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="block text-center text-xs bg-[#25D366] text-white py-2 rounded-lg font-semibold hover:bg-[#1da851] transition-colors">
              WhatsApp Expert
            </a>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <button className="lg:hidden flex items-center gap-2 text-sm border border-gray-200 px-3 py-2 rounded-lg"
              onClick={() => setSidebarOpen(true)}>☰ Filters</button>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products…"
              className="flex-1 min-w-[140px] border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1a6fc4]" />
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none bg-white">
              <option value="default">Default</option>
              <option value="name-asc">Name A→Z</option>
              <option value="name-desc">Name Z→A</option>
            </select>
            <span className="ml-auto text-sm text-gray-500 whitespace-nowrap">{pagination.total} products</span>
          </div>

          {/* Active filters */}
          {(activeCategory || searchQuery) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeCategory && (
                <span className="flex items-center gap-1 bg-blue-50 text-[#1a6fc4] text-xs px-3 py-1 rounded-full">
                  {categories.find(c => c._id === activeCategory)?.name}
                  <button onClick={() => setActiveCategory('')} className="hover:text-red-500 ml-1">✕</button>
                </span>
              )}
              {searchQuery && (
                <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-red-500 ml-1">✕</button>
                </span>
              )}
            </div>
          )}

          {/* Product grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {[...Array(12)].map((_, i) => <div key={i} className="bg-white rounded-xl border h-64 animate-pulse" />)}
            </div>
          ) : sorted.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {sorted.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-display font-semibold text-lg mb-2">No products found</p>
              <button onClick={() => { setActiveCategory(''); setSearchQuery(''); }}
                className="mt-2 text-sm text-[#1a6fc4] hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}