import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import api from "./services/api";

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
  // ============================================================
  // LOADING STATE
  // ============================================================

  const [loading, setLoading] = useState(true);

  // ============================================================
  // MAINTENANCE STATE
  // ============================================================

  const [maintenance, setMaintenance] = useState({
    enabled: false,
    message: "",
  });

  // ============================================================
  // CHECK MAINTENANCE — ON INITIAL APP LOAD ONLY
  // ============================================================

  useEffect(() => {
    let isMounted = true;

    const checkMaintenance = async () => {
      try {
        const response = await api.get("/maintenance");

        const data = response.data;

        if (!isMounted) {
          return;
        }

        setMaintenance({
          enabled: Boolean(data.enabled),
          message: data.message || "",
        });
      } catch (error) {
        console.error(
          "Maintenance check failed:",
          error
        );

        // If maintenance API fails,
        // allow the website to load normally.
        if (isMounted) {
          setMaintenance({
            enabled: false,
            message: "",
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Run ONLY once when App mounts
    checkMaintenance();

    // Cleanup
    return () => {
      isMounted = false;
    };
  }, []);

  // ============================================================
  // LOADING SCREEN
  // ============================================================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  // ============================================================
  // MAINTENANCE MODE
  // ============================================================

  if (maintenance.enabled) {
    return (
      <Maintenance
        message={maintenance.message}
      />
    );
  }

  // ============================================================
  // NORMAL WEBSITE
  // ============================================================

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