// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   CheckCircle2,
//   ChevronRight,
//   Headphones,
//   ShieldCheck,
//   Settings,
//   Truck,
//   Wrench,
//   Building2,
//   Printer,
//   Projector,
//   Monitor,
//   Phone,
//   MessageCircle,
//   Star,
//   Sparkles,
//   Quote,
//   PackageCheck,
//   ScanLine,
// } from "lucide-react";

// import { productsAPI, categoriesAPI } from "../services/api";
// import ProductCard from "../components/ProductCard";

// /* =========================================================
//    BUSINESS SOLUTIONS
// ========================================================= */

// const businessSolutions = [
//   {
//     title: "Corporate Offices",
//     description:
//       "Complete office equipment solutions designed for professional workplaces and growing teams.",
//     icon: Building2,
//   },
//   {
//     title: "Small & Medium Business",
//     description:
//       "Reliable and cost-effective equipment for everyday business operations.",
//     icon: Monitor,
//   },
//   {
//     title: "Educational Institutions",
//     description:
//       "Printing and presentation solutions for schools, colleges and institutions.",
//     icon: Projector,
//   },
//   {
//     title: "Commercial Businesses",
//     description:
//       "Practical technology solutions designed to improve workplace productivity.",
//     icon: Printer,
//   },
// ];

// /* =========================================================
//    SERVICES
// ========================================================= */

// const services = [
//   {
//     icon: Wrench,
//     title: "Installation & Setup",
//     description:
//       "Professional installation and configuration of your office equipment.",
//   },
//   {
//     icon: Settings,
//     title: "AMC & Maintenance",
//     description:
//       "Regular maintenance services to keep your equipment reliable.",
//   },
//   {
//     icon: Headphones,
//     title: "Technical Support",
//     description:
//       "Dedicated assistance for technical questions and product issues.",
//   },
//   {
//     icon: Truck,
//     title: "Delivery Support",
//     description:
//       "Reliable delivery support for your business equipment requirements.",
//   },
// ];

// /* =========================================================
//    TESTIMONIALS
// ========================================================= */

// const testimonials = [
//   {
//     name: "Rajesh Patil",
//     role: "Manager, Pimpri Textiles",
//     text: "The team understood our requirements and helped us select the right equipment. The overall experience was excellent.",
//   },
//   {
//     name: "Sunita Sharma",
//     role: "Director, Sharma & Associates",
//     text: "Professional service, genuine products and very good support. We are happy with our experience.",
//   },
//   {
//     name: "Amit Deshmukh",
//     role: "IT Head, TechNova Solutions",
//     text: "Quick response, reliable products and excellent after-sales support. Highly recommended.",
//   },
// ];

// /* =========================================================
//    STATS
// ========================================================= */

// const stats = [
//   ["18+", "Years Experience"],
//   ["500+", "Products"],
//   ["1,200+", "Happy Clients"],
//   ["50+", "Trusted Brands"],
// ];

// export default function HomePage() {
//   const [featured, setFeatured] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* =========================================================
//      LOAD HOMEPAGE DATA
//   ========================================================= */

//   useEffect(() => {
//     const loadHomeData = async () => {
//       try {
//         const [productsResponse, categoriesResponse] =
//           await Promise.all([
//             productsAPI.getAll({
//               featured: true,
//               limit: 8,
//             }),
//             categoriesAPI.getAll(),
//           ]);

//         setFeatured(productsResponse.data?.products || []);

//         if (Array.isArray(categoriesResponse.data)) {
//           setCategories(categoriesResponse.data);
//         } else if (
//           Array.isArray(categoriesResponse.data?.data)
//         ) {
//           setCategories(categoriesResponse.data.data);
//         } else {
//           setCategories([]);
//         }
//       } catch (error) {
//         console.error("Homepage loading error:", error);

//         setFeatured([]);
//         setCategories([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadHomeData();
//   }, []);

//   return (
//     <main className="overflow-hidden bg-white text-gray-800">

//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#061A35]">

//         {/* Main gradient */}

//         <div className="absolute inset-0 bg-gradient-to-br from-[#061A35] via-[#0B4F96] to-[#1685D8]" />

//         {/* Orange glow */}

//         <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F28C28]/20 blur-[120px]" />

//         {/* Blue glow */}

//         <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#60A5FA]/20 blur-[120px]" />

//         {/* Grid */}

//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
//             backgroundSize: "55px 55px",
//           }}
//         />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">

//           {/* HERO CONTENT */}

//           <div>

//             <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F28C28]">

//                 <Sparkles
//                   size={13}
//                   className="text-white"
//                 />

//               </span>

//               <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
//                 Professional Office Solutions
//               </span>

//             </div>

//             <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">

//               Powering
//               <span className="block text-[#FFD08A]">
//                 smarter workplaces.
//               </span>

//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">

//               Discover reliable printers, scanners, copiers,
//               projectors, office furniture and accessories
//               designed to keep your business moving.

//             </p>

//             {/* Product types */}

//             <div className="mt-6 flex flex-wrap gap-2">

//               {[
//                 "Printers",
//                 "Copiers",
//                 "Scanners",
//                 "Projectors",
//                 "Office Equipment",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur"
//                 >
//                   {item}
//                 </span>
//               ))}

//             </div>

//             {/* CTA */}

//             <div className="mt-9 flex flex-wrap gap-4">

//               <Link
//                 to="/products"
//                 className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0B4F96] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
//               >
//                 Explore Products

//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-[#0B4F96]"
//               >
//                 Get a Quote
//               </Link>

//             </div>

//             {/* Stats */}

//             <div className="mt-12 grid max-w-xl grid-cols-2 gap-y-6 border-t border-white/20 pt-7 sm:grid-cols-4">

//               {stats.map(([number, label]) => (
//                 <div
//                   key={label}
//                   className="border-white/10 px-3 first:pl-0 sm:border-r last:border-r-0"
//                 >

//                   <p className="text-2xl font-bold text-white">
//                     {number}
//                   </p>

//                   <p className="mt-1 text-[11px] text-blue-100">
//                     {label}
//                   </p>

//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* =================================================
//               HERO PRODUCT SHOWCASE
//           ================================================= */}

//           <div className="relative">

//             <div className="relative mx-auto max-w-[510px]">

//               {/* Main card */}

//               <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">

//                 {/* Header */}

//                 <div className="flex items-center justify-between border-b border-gray-100 pb-4">

//                   <div>

//                     <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
//                       Featured Equipment
//                     </p>

//                     <h2 className="mt-1 text-lg font-bold text-gray-900">
//                       Office Technology
//                     </h2>

//                   </div>

//                   <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold text-green-600">

//                     <span className="h-2 w-2 rounded-full bg-green-500" />

//                     Quality Assured

//                   </div>

//                 </div>

//                 {/* Product image */}

//                 <div className="relative flex h-[310px] items-center justify-center">

//                   <div className="absolute h-60 w-60 rounded-full bg-gradient-to-br from-blue-100 to-blue-50" />

//                   <div className="absolute h-48 w-48 rounded-full border border-blue-100" />

//                   {featured[0]?.image ? (
//                     <img
//                       src={
//                         featured[0].image.startsWith(
//                           "/uploads/"
//                         )
//                           ? `http://localhost:5000${featured[0].image}`
//                           : featured[0].image
//                       }
//                       alt={
//                         featured[0]?.name ||
//                         "Office equipment"
//                       }
//                       className="relative z-10 max-h-56 max-w-[300px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
//                     />
//                   ) : (
//                     <div className="relative z-10 flex h-48 w-56 items-center justify-center rounded-2xl bg-white shadow-xl">

//                       <Printer
//                         size={100}
//                         strokeWidth={1}
//                         className="text-[#1A6FC4]"
//                       />

//                     </div>
//                   )}

//                 </div>

//                 {/* Bottom */}

//                 <div className="flex items-center justify-between border-t border-gray-100 pt-4">

//                   <div>

//                     <p className="text-xs text-gray-400">
//                       Business equipment
//                     </p>

//                     <p className="mt-1 text-sm font-bold text-gray-900">
//                       Built for productivity
//                     </p>

//                   </div>

//                   <Link
//                     to="/products"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#1A6FC4] transition hover:bg-[#1A6FC4] hover:text-white"
//                   >
//                     <ArrowUpRight size={19} />
//                   </Link>

//                 </div>

//               </div>

//               {/* Warranty badge */}

//               <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl sm:block">

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F28C28]">

//                     <ShieldCheck size={22} />

//                   </div>

//                   <div>

//                     <p className="text-[10px] text-gray-400">
//                       Product Protection
//                     </p>

//                     <p className="text-sm font-bold text-gray-900">
//                       Manufacturer Warranty
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               {/* Brands badge */}

//               <div className="absolute -right-4 -top-5 hidden rounded-2xl bg-[#F28C28] px-5 py-4 text-white shadow-xl sm:block">

//                 <p className="text-[10px] uppercase tracking-wider opacity-80">
//                   Trusted
//                 </p>

//                 <p className="mt-1 text-lg font-bold">
//                   50+ Brands
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           TRUST STRIP
//       ===================================================== */}

//       <section className="relative border-b border-gray-100 bg-white">

//         <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 px-4 py-7 sm:grid-cols-4 sm:px-6 lg:px-8">

//           {[
//             {
//               icon: ShieldCheck,
//               title: "Genuine Products",
//               text: "Trusted brands",
//             },
//             {
//               icon: PackageCheck,
//               title: "Warranty Assured",
//               text: "Manufacturer support",
//             },
//             {
//               icon: Truck,
//               title: "Reliable Delivery",
//               text: "Business ready",
//             },
//             {
//               icon: Headphones,
//               title: "Expert Support",
//               text: "We're here to help",
//             },
//           ].map(({ icon: Icon, title, text }) => (
//             <div
//               key={title}
//               className="flex items-center gap-3 px-4 py-3 first:pl-0"
//             >

//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1A6FC4]">

//                 <Icon size={20} />

//               </div>

//               <div>

//                 <p className="text-xs font-bold text-gray-800">
//                   {title}
//                 </p>

//                 <p className="mt-0.5 text-[10px] text-gray-400">
//                   {text}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>

//       </section>

//       {/* =====================================================
//           CATEGORIES
//       ===================================================== */}

//       <section className="bg-white py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mb-10 flex items-end justify-between">

//             <div>

//               <div className="flex items-center gap-2">

//                 <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
//                   Explore Categories
//                 </span>

//               </div>

//               <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                 Find the right equipment
//               </h2>

//               <p className="mt-3 text-sm text-gray-500">
//                 Explore our range of office and business solutions.
//               </p>

//             </div>

//             <Link
//               to="/products"
//               className="hidden items-center gap-1 text-sm font-semibold text-[#1A6FC4] sm:flex"
//             >
//               View All
//               <ArrowRight size={16} />
//             </Link>

//           </div>

//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

//             {categories.map((category) => (
//               <Link
//                 key={category._id}
//                 to={`/products?category=${category._id}`}
//                 className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#1A6FC4]/40 hover:shadow-xl"
//               >

//                 <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition group-hover:opacity-100" />

//                 <div className="relative">

//                   <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF4FF] to-[#F7FBFF] text-2xl shadow-sm transition duration-300 group-hover:scale-110 group-hover:from-[#1A6FC4] group-hover:to-[#0B4F96]">

//                     {category.icon || "📦"}

//                   </div>

//                   <h3 className="mt-5 text-sm font-bold text-gray-800 transition group-hover:text-[#1A6FC4]">
//                     {category.name}
//                   </h3>

//                   <div className="mt-4 flex items-center text-xs font-semibold text-gray-400 transition group-hover:text-[#1A6FC4]">

//                     Explore

//                     <ChevronRight
//                       size={14}
//                       className="ml-1 transition-transform group-hover:translate-x-1"
//                     />

//                   </div>

//                 </div>

//               </Link>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FEATURED PRODUCTS
//       ===================================================== */}

//       <section className="bg-gradient-to-b from-[#F4F8FD] to-white py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mb-10 flex items-end justify-between">

//             <div>

//               <div className="flex items-center gap-2">

//                 <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
//                   Featured Collection
//                 </span>

//               </div>

//               <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                 Popular products
//               </h2>

//               <p className="mt-3 text-sm text-gray-500">
//                 Equipment selected for modern workplaces.
//               </p>

//             </div>

//             <Link
//               to="/products"
//               className="hidden items-center gap-1 text-sm font-semibold text-[#1A6FC4] sm:flex"
//             >
//               View All Products
//               <ArrowRight size={16} />
//             </Link>

//           </div>

//           {loading ? (

//             <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">

//               {[...Array(8)].map((_, index) => (
//                 <div
//                   key={index}
//                   className="h-80 animate-pulse rounded-2xl bg-gray-200"
//                 />
//               ))}

//             </div>

//           ) : featured.length > 0 ? (

//             <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">

//               {featured.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   product={product}
//                 />
//               ))}

//             </div>

//           ) : (

//             <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

//               <PackageCheck
//                 size={40}
//                 className="mx-auto text-gray-300"
//               />

//               <p className="mt-4 text-sm text-gray-500">
//                 Featured products will appear here.
//               </p>

//               <Link
//                 to="/products"
//                 className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1A6FC4]"
//               >
//                 Browse Products
//                 <ArrowRight size={15} />
//               </Link>

//             </div>

//           )}

//         </div>

//       </section>

//       {/* =====================================================
//           BUSINESS SOLUTIONS
//       ===================================================== */}

//       <section className="bg-white py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//             <div>

//               <div className="flex items-center gap-2">

//                 <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
//                   Business Solutions
//                 </span>

//               </div>

//               <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">

//                 Technology built around
//                 <span className="block text-[#1A6FC4]">
//                   your business.
//                 </span>

//               </h2>

//               <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">

//                 Every workplace has different requirements.
//                 We help you choose equipment based on your
//                 workload, budget and business goals.

//               </p>

//               <Link
//                 to="/contact"
//                 className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A6FC4] to-[#0B4F96] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
//               >
//                 Discuss Your Requirements
//                 <ArrowRight size={17} />
//               </Link>

//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">

//               {businessSolutions.map(
//                 ({
//                   title,
//                   description,
//                   icon: Icon,
//                 }) => (
//                   <div
//                     key={title}
//                     className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
//                   >

//                     <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-50 opacity-0 blur-3xl transition group-hover:opacity-100" />

//                     <div className="relative">

//                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF4FF] to-[#F5F9FF] text-[#1A6FC4] transition duration-300 group-hover:from-[#1A6FC4] group-hover:to-[#0B4F96] group-hover:text-white">

//                         <Icon size={22} />

//                       </div>

//                       <h3 className="mt-6 font-bold text-gray-900">
//                         {title}
//                       </h3>

//                       <p className="mt-2 text-sm leading-6 text-gray-500">
//                         {description}
//                       </p>

//                       <div className="mt-5 flex items-center text-xs font-bold text-[#1A6FC4]">

//                         Learn More

//                         <ArrowRight
//                           size={14}
//                           className="ml-1 transition-transform group-hover:translate-x-1"
//                         />

//                       </div>

//                     </div>

//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           WHY CHOOSE US
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-gradient-to-br from-[#061A35] via-[#0B4F96] to-[#1685D8] py-20">

//         <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />

//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//             <div className="text-white">

//               <div className="flex items-center gap-2">

//                 <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
//                   Why Gurukrupa
//                 </span>

//               </div>

//               <h2 className="mt-4 text-3xl font-bold sm:text-4xl">

//                 More than a supplier.

//                 <span className="block text-[#FFD08A]">
//                   Your business partner.
//                 </span>

//               </h2>

//               <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100">

//                 From product selection to installation and
//                 maintenance, our focus is on helping your
//                 business work efficiently.

//               </p>

//               <div className="mt-8 space-y-4">

//                 {[
//                   "Genuine products from trusted brands",
//                   "Manufacturer warranty",
//                   "Professional installation support",
//                   "Reliable after-sales service",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3"
//                   >

//                     <CheckCircle2
//                       size={19}
//                       className="shrink-0 text-green-300"
//                     />

//                     <span className="text-sm text-white">
//                       {item}
//                     </span>

//                   </div>
//                 ))}

//               </div>

//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">

//               {[
//                 {
//                   icon: ShieldCheck,
//                   title: "Genuine Products",
//                   text: "Quality equipment backed by manufacturer warranty.",
//                 },
//                 {
//                   icon: Wrench,
//                   title: "Professional Service",
//                   text: "Experienced support for installation and maintenance.",
//                 },
//                 {
//                   icon: Headphones,
//                   title: "Customer Support",
//                   text: "Prompt assistance whenever your business needs us.",
//                 },
//                 {
//                   icon: Truck,
//                   title: "Reliable Delivery",
//                   text: "Dependable delivery support for your requirements.",
//                 },
//               ].map(
//                 ({
//                   icon: Icon,
//                   title,
//                   text,
//                 }) => (
//                   <div
//                     key={title}
//                     className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
//                   >

//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">

//                       <Icon
//                         size={23}
//                         className="text-blue-100"
//                       />

//                     </div>

//                     <h3 className="mt-5 font-bold text-white">
//                       {title}
//                     </h3>

//                     <p className="mt-2 text-sm leading-6 text-blue-100">
//                       {text}
//                     </p>

//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="bg-white py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mb-10">

//             <div className="flex items-center gap-2">

//               <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//               <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
//                 Our Services
//               </span>

//             </div>

//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
//               Support beyond the sale.
//             </h2>

//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//             {services.map(
//               ({
//                 icon: Icon,
//                 title,
//                 description,
//               }) => (
//                 <div
//                   key={title}
//                   className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
//                 >

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF4FF] to-[#F5F9FF] text-[#1A6FC4] transition group-hover:from-[#1A6FC4] group-hover:to-[#0B4F96] group-hover:text-white">

//                     <Icon size={23} />

//                   </div>

//                   <h3 className="mt-6 font-bold text-gray-900">
//                     {title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-gray-500">
//                     {description}
//                   </p>

//                 </div>
//               )
//             )}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           TESTIMONIALS
//       ===================================================== */}

//       <section className="bg-[#F4F8FD] py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mx-auto mb-12 max-w-2xl text-center">

//             <div className="flex items-center justify-center gap-2">

//               <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//               <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A6FC4]">
//                 Customer Experiences
//               </span>

//               <span className="h-1 w-8 rounded-full bg-[#F28C28]" />

//             </div>

//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
//               Trusted by businesses
//             </h2>

//             <p className="mt-3 text-sm text-gray-500">
//               Real relationships are built through reliable service.
//             </p>

//           </div>

//           <div className="grid gap-6 md:grid-cols-3">

//             {testimonials.map(
//               ({
//                 name,
//                 role,
//                 text,
//               }) => (
//                 <div
//                   key={name}
//                   className="group relative rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
//                 >

//                   <Quote
//                     size={38}
//                     className="absolute right-6 top-6 text-blue-50"
//                   />

//                   <div className="flex gap-1 text-[#F28C28]">

//                     {[...Array(5)].map(
//                       (_, index) => (
//                         <Star
//                           key={index}
//                           size={15}
//                           fill="currentColor"
//                         />
//                       )
//                     )}

//                   </div>

//                   <p className="relative mt-6 text-sm leading-7 text-gray-600">
//                     "{text}"
//                   </p>

//                   <div className="mt-6 border-t border-gray-100 pt-5">

//                     <p className="text-sm font-bold text-gray-900">
//                       {name}
//                     </p>

//                     <p className="mt-1 text-xs text-gray-400">
//                       {role}
//                     </p>

//                   </div>

//                 </div>
//               )
//             )}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-gradient-to-r from-[#061A35] via-[#0B4F96] to-[#1685D8] py-20">

//         <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#F28C28]/20 blur-[100px]" />

//         <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">

//             <Sparkles
//               size={25}
//               className="text-[#FFD08A]"
//             />

//           </div>

//           <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">

//             Let's find the right solution
//             <span className="block text-[#FFD08A]">
//               for your business.
//             </span>

//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">

//             Tell us about your requirements and our team
//             will help you choose the right equipment for
//             your workplace.

//           </p>

//           <div className="mt-9 flex flex-wrap justify-center gap-4">

//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#0B4F96] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
//             >
//               <Phone size={17} />
//               Contact Us
//             </Link>

//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#1DA851]"
//             >
//               <MessageCircle size={17} />
//               WhatsApp Us
//             </a>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }


//old code

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI, categoriesAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

const reasons = [
  { icon: '🏆', title: 'Authorised Dealer',  desc: 'Official dealer for HP, Epson, Canon, and 15+ leading brands.' },
  { icon: '⚡', title: 'Fast Service',        desc: 'Same-day delivery within Pune. Express installation support.' },
  { icon: '🛡️', title: 'Warranty Assured',   desc: 'All products come with full manufacturer warranty.' },
  { icon: '💬', title: '24/7 Support',        desc: 'Dedicated WhatsApp & phone support for all your queries.' },
  { icon: '💰', title: 'Best Pricing',        desc: 'Competitive prices with bulk-order and annual contract discounts.' },
  { icon: '🔧', title: 'AMC Services',        desc: 'Affordable Annual Maintenance Contracts for all office equipment.' },
];

const testimonials = [
  { name:'Rajesh Patil',    role:'Manager, Pimpri Textiles',     text:'Excellent service! Our printing costs dropped 40% after switching to Gurukrupa.' },
  { name:'Sunita Sharma',   role:'Director, Sharma & Associates', text:'Very professional. They helped us pick the perfect MFP for our law firm.' },
  { name:'Amit Deshmukh',   role:'IT Head, TechNova Solutions',   text:'Fast delivery, genuine products, great after-sales support. 5-year customer.' },
];

export default function HomePage() {
  const [featured,   setFeatured]   = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    Promise.all([
      productsAPI.getAll({ featured: true, limit: 8 }),
      categoriesAPI.getAll(),
    ]).then(([pr, cr]) => {
      setFeatured(pr.data.products || []);
      setCategories(cr.data || []);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f3c6b] via-[#1a6fc4] to-[#1e8a6e] text-white py-16 px-4 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block text-xs bg-white/20 px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Pune's Trusted Office Equipment Partner</span>
            <h1 className="font-display font-bold text-3xl sm:text-5xl leading-tight mb-4">
              Gurukrupa<br /><span className="text-[#6ee7b7]">Enterprises</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg max-w-lg mb-8">
              Premium printers, scanners, projectors, copiers & office furniture — all under one roof. Authorised dealer. Genuine products.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="bg-white text-[#1a6fc4] px-6 py-3 rounded-lg font-display font-semibold hover:bg-blue-50 transition shadow">Explore Products</Link>
              <Link to="/contact"  className="border border-white/50 text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-white/10 transition">Get a Quote</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['18+','Years'], ['500+','Products'], ['1,200+','Clients'], ['50+','Brands']].map(([n, l]) => (
              <div key={l} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center min-w-[110px]">
                <div className="font-display font-bold text-2xl text-[#6ee7b7]">{n}</div>
                <div className="text-xs text-blue-200 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-display font-bold text-xl text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {categories.map(cat => (
            <Link key={cat._id} to={`/products?category=${cat._id}`}
              className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-xl p-4 hover:border-[#1a6fc4] hover:shadow-md transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-gray-800">Featured Products</h2>
          <Link to="/products" className="text-sm text-[#1a6fc4] hover:underline font-medium">View All →</Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f0f6ff] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xl text-gray-800 mb-2 text-center">Why Choose Gurukrupa Enterprises?</h2>
          <p className="text-sm text-gray-500 text-center mb-8">Trusted by 1,200+ businesses across Pune & Maharashtra</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-display font-bold text-xl text-gray-800 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text }) => (
            <div key={name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-[#facc15] mb-3">★★★★★</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">"{text}"</p>
              <div className="font-display font-semibold text-sm text-gray-800">{name}</div>
              <div className="text-xs text-gray-400">{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a6fc4] text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl mb-3">Need Help Choosing the Right Equipment?</h2>
          <p className="text-blue-100 text-sm mb-6">Our experts will help you find the perfect solution for your office.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-white text-[#1a6fc4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Contact Us</Link>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1da851] transition">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}