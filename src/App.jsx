import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { maintenanceAPI } from "./services/api";

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
  // LOADING
  // ============================================================

  const [loading, setLoading] = useState(true);

  // ============================================================
  // MAINTENANCE
  // ============================================================

  const [maintenance, setMaintenance] = useState({
    enabled: false,
    message: "",
  });

  // ============================================================
  // ADMIN PREVIEW
  // ============================================================

  const [previewMode, setPreviewMode] = useState(false);

  // ============================================================
  // INITIAL WEBSITE CHECK
  // ============================================================

  useEffect(() => {
    let isMounted = true;

    const initializeWebsite = async () => {
      try {
        // ======================================================
        // 1. CHECK FOR PREVIEW TOKEN IN URL
        // ======================================================

        const params = new URLSearchParams(
          window.location.search
        );

        let previewToken = params.get("preview");

        // ======================================================
        // 2. IF NO URL TOKEN, CHECK SESSION STORAGE
        // ======================================================

        if (!previewToken) {
          previewToken =
            sessionStorage.getItem(
              "gurukrupa_preview_token"
            );
        }

        // ======================================================
        // 3. VALIDATE PREVIEW TOKEN
        // ======================================================

        if (previewToken) {
          try {
            const response =
              await maintenanceAPI.validatePreview(
                previewToken
              );

            if (
              response.data?.valid === true
            ) {
              if (isMounted) {
                setPreviewMode(true);
              }

              // ------------------------------------------------
              // Save token for refresh
              // ------------------------------------------------

              sessionStorage.setItem(
                "gurukrupa_preview_token",
                previewToken
              );

              // ------------------------------------------------
              // Remove token from URL
              // ------------------------------------------------

              if (
                window.location.search
              ) {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname
                );
              }

            } else {
              // Invalid token
              sessionStorage.removeItem(
                "gurukrupa_preview_token"
              );
            }

          } catch (previewError) {
            console.warn(
              "Website preview validation failed:",
              previewError
            );

            // Remove invalid/expired token
            sessionStorage.removeItem(
              "gurukrupa_preview_token"
            );
          }
        }

        // ======================================================
        // 4. CHECK MAINTENANCE STATUS
        // ======================================================

        const response =
          await maintenanceAPI.get();

        if (!isMounted) {
          return;
        }

        const data =
          response.data || {};

        setMaintenance({
          enabled: Boolean(data.enabled),
          message:
            data.message ||
            "Our website is currently under maintenance. Please visit again later.",
        });

      } catch (error) {
        console.error(
          "Website initialization failed:",
          error
        );

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

    initializeWebsite();

    return () => {
      isMounted = false;
    };
  }, []);

  // ============================================================
  // LOADING SCREEN
  // ============================================================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-5">

        <div className="w-full max-w-xs text-center">

          <div className="mb-7 flex justify-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-lg">

              <img
                src="/log-guru.png"
                alt="Gurukrupa Enterprises"
                className="h-16 w-16 object-contain"
              />

            </div>

          </div>

          <h2 className="text-lg font-semibold text-slate-800">
            Gurukrupa Enterprises
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Loading website...
          </p>

          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">

            <div className="h-full w-1/3 animate-pulse rounded-full bg-blue-600" />

          </div>

        </div>

      </div>
    );
  }

  // ============================================================
  // MAINTENANCE MODE
  // ============================================================

  if (
    maintenance.enabled &&
    !previewMode
  ) {
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