
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap, User } from 'lucide-react';
import { COACHING_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">{COACHING_INFO.name}</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 font-medium">About</Link>
            <Link to="/teachers" className="text-gray-600 hover:text-indigo-600 font-medium">Teachers</Link>
            <Link to="/notes" className="text-gray-600 hover:text-indigo-600 font-medium">Notes</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</Link>
            <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <User size={18} />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 animate-in fade-in duration-200">
          <Link onClick={() => setIsOpen(false)} to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/teachers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Teachers</Link>
          <Link onClick={() => setIsOpen(false)} to="/notes" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Notes</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Contact</Link>
          <Link onClick={() => setIsOpen(false)} to="/login" className="block px-3 py-2 bg-indigo-600 text-white rounded-md font-bold text-center">Sign In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
