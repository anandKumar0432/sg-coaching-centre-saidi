
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, GraduationCap, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center text-indigo-600 font-bold hover:underline mb-8">
            <ArrowLeft size={18} className="mr-2" /> Back to Website
          </Link>
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-600 p-3 rounded-2xl text-white">
              <GraduationCap size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Sign In</h1>
          <p className="text-gray-500 mt-2">Access your study material and notices</p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Student ID / Phone</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Enter ID" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 font-medium text-gray-600">
                <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 font-bold hover:underline">Forgot?</a>
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500">Not registered yet?</p>
            <Link to="/contact" className="text-indigo-600 font-bold hover:underline">Visit office for Admission</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
