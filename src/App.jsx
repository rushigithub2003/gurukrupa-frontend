import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
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