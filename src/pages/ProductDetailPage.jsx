import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsAPI } from "../services/api";
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct]   = useState(null);
  const [related, setRelated]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error,   setError]     = useState('');

  useEffect(() => {
    setLoading(true);
    productsAPI.getOne(id)
      .then(r => {
        setProduct(r.data);
        // Load related by category
        if (r.data.category?._id) {
          productsAPI.getAll({ category: r.data.category._id, limit: 5 })
            .then(pr => setRelated((pr.data.products || []).filter(p => p._id !== id)));
        }
      })
      .catch(() => setError('Product not found'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl h-96 animate-pulse" />
    </div>
  );
  if (error || !product) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-4">😕</div>
      <h2 className="font-display font-bold text-xl mb-2">Product Not Found</h2>
      <Link to="/products" className="text-[#1a6fc4] hover:underline text-sm">← Back to Products</Link>
    </div>
  );

  const imgSrc = product.image?.startsWith('/uploads/')
    ? `http://localhost:5000${product.image}`
    : product.image || 'https://via.placeholder.com/500x400?text=No+Image';

  const waMsg = `Hi! I'd like a quote for: *${product.name}*. Please share pricing and availability.`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-5 flex flex-wrap gap-1">
        <Link to="/" className="hover:text-[#1a6fc4]">Home</Link> /
        <Link to="/products" className="hover:text-[#1a6fc4]">Products</Link> /
        {product.category && <Link to={`/products?category=${product.category._id}`} className="hover:text-[#1a6fc4]">{product.category.name}</Link>}
        / <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* Main card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-96 bg-gray-50 flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
            <img src={imgSrc} alt={product.name} className="max-h-72 w-full object-contain rounded-xl"
              onError={e => { e.target.src='https://via.placeholder.com/400x300?text=No+Image'; }} />
          </div>
          <div className="flex-1 p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-[#e6f0fb] text-[#1a6fc4] text-xs font-semibold px-2.5 py-1 rounded-full">{product.brand}</span>
              {product.category && <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{product.category.icon} {product.category.name}</span>}
              {product.isFeatured && <span className="bg-yellow-50 text-yellow-700 text-xs px-2.5 py-1 rounded-full">⭐ Featured</span>}
            </div>
            <h1 className="font-display font-bold text-2xl text-gray-900 mb-3">{product.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {(product.shortSpecs || []).map((s, i) => (
                <span key={i} className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">✔ {s}</span>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{product.description}</p>

            {(product.features || []).length > 0 && (
              <>
                <h3 className="font-display font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="space-y-1.5 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#1a6fc4] font-bold mt-0.5">→</span>{f}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(waMsg)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1a6fc4] hover:bg-[#155ba3] text-white px-6 py-3 rounded-xl font-display font-semibold text-sm transition-colors shadow">
                📋 Request Quote
              </a>
              <a href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(waMsg)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-3 rounded-xl font-display font-semibold text-sm transition-colors">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Specs table */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="bg-[#1a6fc4] text-white px-6 py-3">
            <h2 className="font-display font-semibold">Technical Specifications</h2>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(product.specs).map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-5 py-3 font-medium text-gray-700 w-1/3 border-b border-gray-100">{k}</td>
                  <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2 className="font-display font-bold text-xl text-gray-800 mb-5">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}