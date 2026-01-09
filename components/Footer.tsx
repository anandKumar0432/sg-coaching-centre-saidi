import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap } from 'lucide-react';
import { COACHING_INFO, DEVELOPER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold tracking-tight">{COACHING_INFO.name}</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Leading the way in quality education for students of Nalanda. With experienced faculty and modern teaching methods, we shape futures.
            </p>
            <div className="flex items-center text-gray-400 text-sm italic">
              Empowering {COACHING_INFO.studentCount}+ Students since {COACHING_INFO.established}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/teachers" className="text-gray-400 hover:text-white transition-colors">Faculty</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/dev" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">Developer <ExternalLink size={12} /></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span>{COACHING_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span>{COACHING_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span>{COACHING_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Info & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SG Coaching Centre. All rights reserved.
            </p>
            <div className="bg-gray-800 px-4 py-2 rounded-lg inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm">
              <Link to="/dev" className="hover:cursor-pointer">
              <span className="text-indigo-400 font-semibold">Developed by:</span> <br />
              <span className="font-medium">{DEVELOPER_INFO.name}</span>
              </Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <span className="text-gray-400">{DEVELOPER_INFO.email}</span>
              <span className="hidden md:inline text-gray-600">|</span>
              <span className="text-gray-400">{DEVELOPER_INFO.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
