import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ms1.png';
import ThemeToggle from './ThemeToggle'; // Your Shadcn toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo & title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Mindspace logo" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold">Mindspace</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-7 font-semibold text-lg">
          <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-red-400 transition-colors">Dashboard</Link></li>
          <li><Link to="/journal" className="hover:text-red-400 transition-colors">Journal</Link></li>
          <li><Link to="/chart-tracker" className="hover:text-red-400 transition-colors">Visualize</Link></li>
        
        </ul>

        {/* Theme toggle + hamburger */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close icon
              <svg className="w-7 h-7 text-red-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-7 h-7 text-gray-200 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with slide-down animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-2 font-semibold text-lg bg-blue-900 dark:bg-gray-900">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-red-400 transition-colors">Home</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block hover:text-red-400 transition-colors">Dashboard</Link>
          <Link to="/journal" onClick={() => setMenuOpen(false)} className="block hover:text-red-400 transition-colors">Journal</Link>
          <Link to="/chart-tracker" onClick={() => setMenuOpen(false)} className="block hover:text-red-400 transition-colors">Visualize</Link>
          <Link to="/calendar" onClick={() => setMenuOpen(false)} className="block hover:text-red-400 transition-colors">Calendar</Link>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
