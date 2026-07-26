//import React from 'react';
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Maintenance from './pages/Maintenance';

export default function App() {

 const [loading, setLoading] = useState(true);

const [maintenance, setMaintenance] = useState({
  enabled: false,
  message: "",
});
  /*
  useEffect(() => {
  fetch("http://localhost:5000/api/maintenance")
    .then((res) => res.json())
    .then((data) => {
      setMaintenance(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);
  
*/
  
  useEffect(() => {
  const checkMaintenance = async () => {
    try {
      const res = await fetch("https://gurukrupa-backend-zat5.onrender.com/api/maintenance");
      const data = await res.json();

      setMaintenance(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Check immediately
  checkMaintenance();

  // Check every 30 seconds
  const interval = setInterval(checkMaintenance, 30000);

  return () => clearInterval(interval);
  }, []);
  
  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (maintenance.enabled) {
    return <Maintenance message={maintenance.message} />;
  }

  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/products"     element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/contact"      element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}