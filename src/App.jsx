import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Maintenance from "./pages/Maintenance";

export default function App() {
  const [loading, setLoading] = useState(true);

  const [maintenance, setMaintenance] = useState({
    enabled: false,
    message: "",
  });

  useEffect(() => {
    let isMounted = true;

    const checkMaintenance = async () => {
      try {
        const res = await fetch(
          "https://gurukrupa-backend-zat5.onrender.com/api/maintenance"
        );

        if (!res.ok) {
          throw new Error("Maintenance API request failed");
        }

        const data = await res.json();

        if (isMounted) {
          setMaintenance({
            enabled: Boolean(data.enabled),
            message: data.message || "",
          });

          setLoading(false);
        }
      } catch (err) {
        console.error("Maintenance check failed:", err);

        if (isMounted) {
          /*
           * If the maintenance API is unavailable,
           * allow the website to load normally.
           */
          setMaintenance({
            enabled: false,
            message: "",
          });

          setLoading(false);
        }
      }
    };

    // Check maintenance status ONCE when the website starts
    checkMaintenance();

    return () => {
      isMounted = false;
    };
  }, []);

  // Initial loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />

          <p className="text-sm text-gray-500">
            Loading Gurukrupa Enterprises...
          </p>
        </div>
      </div>
    );
  }

  // Maintenance mode
  if (maintenance.enabled) {
    return <Maintenance message={maintenance.message} />;
  }

  // Normal website
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/products"
            element={<ProductsPage />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetailPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
    </Router>
  );
}