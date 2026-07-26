import React from "react";
import {
  Wrench,
  Phone,
  Mail,
  Globe,
  Clock3,
  MessageCircle,
} from "lucide-react";

const Maintenance = ({ message }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950">

      {/* Animated Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Card */}
      <div className="relative flex items-center justify-center min-h-screen px-5">

        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-10 text-center">

          {/* Logo */}

          <div className="flex justify-center mb-6">

            <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">

              {/* Replace with your logo */}

              <img
                src="/Gurukrupa-logo.png"
                alt="Logo"
                className="w-20 h-20 object-contain"
              />

            </div>

          </div>

          {/* Icon */}

          <div className="flex justify-center mb-6">

            <div className="bg-orange-500 rounded-full p-5 animate-bounce shadow-lg">

              <Wrench size={45} className="text-white" />

            </div>

          </div>

          {/* Heading */}

          <h1 className="text-5xl font-bold text-white mb-4">

            Website Under Maintenance

          </h1>

          <p className="text-gray-300 text-lg mb-8">

            We're working hard to improve your experience.

          </p>

          {/* Message */}

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-8">

            <p className="text-gray-200 text-lg leading-8">

              {message}

            </p>

          </div>

          {/* Loading */}

          <div className="flex justify-center items-center gap-2 mb-8">

            <Clock3 className="text-orange-400" />

            <span className="text-gray-300">

              We will be back shortly...

            </span>

            <div className="flex gap-1">

              <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></span>

              <span
                className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>

              <span
                className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mb-10">

            <a
              href="https://wa.me/+917796083551"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
              href="tel:+917796083551"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
            >
              <Phone size={20} />
              Call Us
            </a>

            <a
              href="mailto:info@gurukrupaenterprises.com"
              className="flex items-center gap-2 border border-white/30 hover:bg-white/10 transition px-6 py-3 rounded-xl text-white font-semibold"
            >
              <Mail size={20} />
              Email
            </a>

          </div>

          {/* Company */}

          <div className="border-t border-white/10 pt-8">

            <h2 className="text-3xl font-bold text-white">

              Gurukrupa Enterprises

            </h2>

            <p className="text-gray-400 mt-3">

              Your Trusted Partner for Quality Products

            </p>

            <div className="flex justify-center items-center gap-2 mt-5 text-gray-400">

              <Globe size={18} />

              <span>www.gurukrupaenterprises.com</span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Maintenance;