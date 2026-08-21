import React, { useState } from "react";
import { Link } from "react-router-dom";

const WA = "+91XXXXXXXXXX"; // Replace with real number

// ============================================================
// BACKEND URL
// ============================================================

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Remove /api from backend URL
const BACKEND_URL = API_URL.replace(/\/api\/?$/, "");

// ============================================================
// LOCAL FALLBACK IMAGE
// ============================================================
// This does NOT make another network request.
// Therefore, no repeated failed placeholder requests.

const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="300"
      viewBox="0 0 400 300"
    >
      <rect width="400" height="300" fill="#f1f5f9"/>
      <rect
        x="145"
        y="90"
        width="110"
        height="85"
        rx="10"
        fill="#cbd5e1"
      />
      <circle
        cx="180"
        cy="120"
        r="10"
        fill="#94a3b8"
      />
      <path
        d="M155 160 L180 135 L200 153 L220 130 L245 160 Z"
        fill="#94a3b8"
      />
      <text
        x="200"
        y="215"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="16"
        fill="#64748b"
      >
        Image unavailable
      </text>
    </svg>
  `);

export default function ProductCard({ product }) {
  // ============================================================
  // IMAGE ERROR STATE
  // ============================================================

  const [imageError, setImageError] = useState(false);

  // ============================================================
  // BUILD IMAGE URL
  // ============================================================

  const getImageSrc = () => {
    // If image already failed,
    // immediately use local fallback.
    if (imageError) {
      return FALLBACK_IMAGE;
    }

    const image = product?.image;

    // No image
    if (!image) {
      return FALLBACK_IMAGE;
    }

    // Backend uploaded image
    if (image.startsWith("/uploads/")) {
      return `${BACKEND_URL}${image}`;
    }

    // Full external / Cloudinary URL
    return image;
  };

  const imgSrc = getImageSrc();

  return (
    <div className="product-card bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col group">

      {/* ======================================================
          PRODUCT IMAGE
      ====================================================== */}

      <Link
        to={`/products/${product._id}`}
        className="block overflow-hidden bg-gray-50 h-44"
      >
        <img
          src={imgSrc}
          alt={product?.name || "Product"}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={() => {
            // Stop requesting the failed URL.
            // React will render the local fallback instead.
            setImageError(true);
          }}
        />
      </Link>

      {/* ======================================================
          PRODUCT INFORMATION
      ====================================================== */}

      <div className="p-3 flex flex-col flex-1">

        {/* Brand */}

        <span className="text-[10px] font-semibold text-[#1a6fc4] uppercase tracking-wider mb-1">
          {product?.brand}
        </span>

        {/* Product name */}

        <Link to={`/products/${product._id}`}>
          <h3 className="text-sm font-display font-semibold text-gray-800 hover:text-[#1a6fc4] line-clamp-2 mb-2 leading-snug">
            {product?.name}
          </h3>
        </Link>

        {/* ==================================================
            SHORT SPECIFICATIONS
        ================================================== */}

        <ul className="space-y-0.5 mb-3 flex-1">

          {(product?.shortSpecs || [])
            .slice(0, 3)
            .map((s, i) => (
              <li
                key={i}
                className="text-xs text-gray-500 flex items-start gap-1"
              >
                <span className="text-[#10b981] mt-0.5">
                  ✔
                </span>

                {s}
              </li>
            ))}

        </ul>

        {/* ==================================================
            ACTION BUTTONS
        ================================================== */}

        <div className="flex gap-2 mt-auto">

          {/* View Details */}

          <Link
            to={`/products/${product._id}`}
            className="flex-1 text-center text-xs font-semibold py-1.5 rounded-lg border border-[#1a6fc4] text-[#1a6fc4] hover:bg-[#1a6fc4] hover:text-white transition-colors"
          >
            View Details
          </Link>

          {/* Request Quote */}

          <a
            href={`https://wa.me/${WA.replace(
              /\D/g,
              ""
            )}?text=${encodeURIComponent(
              `Hi! I'd like a quote for: ${product?.name || "this product"}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold py-1.5 rounded-lg bg-[#10b981] text-white hover:bg-[#059669] transition-colors"
          >
            Request Quote
          </a>

        </div>

      </div>
    </div>
  );
}