import React from 'react';
import { Link } from 'react-router-dom';

const WA = '+91XXXXXXXXXX'; // Replace with real number

export default function ProductCard({ product }) {
  const imgSrc = product.image?.startsWith('/uploads/')
    ? `http://localhost:5000${product.image}`
    : product.image || 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&q=80';

  return (
    <div className="product-card bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col group">
      <Link to={`/products/${product._id}`} className="block overflow-hidden bg-gray-50 h-44">
        <img src={imgSrc} alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'; }}
          loading="lazy"
        />
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <span className="text-[10px] font-semibold text-[#1a6fc4] uppercase tracking-wider mb-1">{product.brand}</span>
        <Link to={`/products/${product._id}`}>
          <h3 className="text-sm font-display font-semibold text-gray-800 hover:text-[#1a6fc4] line-clamp-2 mb-2 leading-snug">
            {product.name}
          </h3>
        </Link>
        <ul className="space-y-0.5 mb-3 flex-1">
          {(product.shortSpecs || []).slice(0, 3).map((s, i) => (
            <li key={i} className="text-xs text-gray-500 flex items-start gap-1">
              <span className="text-[#10b981] mt-0.5">✔</span>{s}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-auto">
          <Link to={`/products/${product._id}`}
            className="flex-1 text-center text-xs font-semibold py-1.5 rounded-lg border border-[#1a6fc4] text-[#1a6fc4] hover:bg-[#1a6fc4] hover:text-white transition-colors">
            View Details
          </Link>
          <a href={`https://wa.me/${WA.replace(/\D/g,'')}?text=${encodeURIComponent(`Hi! I'd like a quote for: ${product.name}`)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold py-1.5 rounded-lg bg-[#10b981] text-white hover:bg-[#059669] transition-colors">
            Request Quote
          </a>
        </div>
      </div>
    </div>
  );
}