import { Link } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative">
      {/* Gradient background with glass effect */}
      <div className="navbar sticky  bg-white backdrop-blur-md bg-opacity-95 text-black px-6 py-3  top-0 z-50 shadow-2xl border-b border-white/10">

        {/* Logo section with glow effect */}
        <div className="flex items-center gap-3 flex-1">
          <div className="relative group">
            <img
              className="w-16 h-16 object-cover  transition-all duration-300 "
              src="/assets/nav_logo.png"
              alt="Logo"
            />
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

        </div>

        {/* Desktop menu with enhanced styling */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li>
            <Link
              to="/"
              className="relative text-black   text-[16px] font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-black   text-[16px] font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="relative text-black  text-[16px] font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="relative text-black  text-[16px] font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Portfolio</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="relative text-black   text-[16px] font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Blogs</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative text-black  text-[16px] font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </li>

  
          {/* Download Button (Blue slides left → right on hover) */}
          <div>
            <button className="relative flex items-center justify-center rounded-md overflow-hidden text-white font-semibold px-8 py-3 group">
              {/* Base background (pink, stays fixed) */}
              <span className="absolute inset-0 bg-[#e6500b]"></span>

              {/* Blue half (slides left → right on hover) */}
              <span className="absolute top-0 left-0 w-1/2 h-full bg-[#0e2c3d] transform group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>

              {/* Centered Text */}
              <span className="relative z-10">Download CV</span>
            </button>
          </div>


        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
        >
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#0f1f60] to-[#1a2b7a] transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-20 px-6">
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-400 text-lg font-medium py-3 border-b border-white/10 transition-colors duration-300"
              >
                Home
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;