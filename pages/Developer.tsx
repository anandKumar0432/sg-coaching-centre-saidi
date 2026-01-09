
import React from 'react';
import { Mail, Phone, Linkedin, Code2, Globe } from 'lucide-react';
import { DEVELOPER_INFO } from '../constants';

const Developer: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-indigo-100">
          <div className="h-64 bg-gradient-to-r from-indigo-600 to-indigo-800 relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
          </div>
          <div className="px-10 pb-16 relative">
            <div className="flex flex-col items-center -mt-32">
              <div className="w-64 h-64 rounded-full border-8 border-white overflow-hidden shadow-2xl bg-gray-200">
                <img 
                  src={DEVELOPER_INFO.image} 
                  alt={DEVELOPER_INFO.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-8 text-4xl font-extrabold text-gray-900">{DEVELOPER_INFO.name}</h1>
              <p className="text-indigo-600 font-bold text-xl mb-4">{DEVELOPER_INFO.role}</p>
              <p className="text-gray-600 text-center max-w-2xl text-lg mb-10 leading-relaxed">
                {DEVELOPER_INFO.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mb-12">
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:bg-indigo-50 transition-colors border border-gray-100 group">
                  <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm group-hover:scale-110 transition-transform"><Mail size={20}/></div>
                  <span className="text-gray-700 font-md text-sm">{DEVELOPER_INFO.email}</span>
                </a>
                <a href={`tel:${DEVELOPER_INFO.phone}`} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:bg-indigo-50 transition-colors border border-gray-100 group">
                  <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm group-hover:scale-110 transition-transform"><Phone size={20}/></div>
                  <span className="text-gray-700 font-md text-sm">{DEVELOPER_INFO.phone}</span>
                </a>
              </div>

              <div className="w-full border-t border-gray-100 pt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                   <Code2 className="text-indigo-600" /> Expertise & Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Cloud Architecture', 'Mobile App Dev'].map(skill => (
                    <span key={skill} className="bg-white border border-indigo-100 text-indigo-700 px-5 py-2 rounded-xl font-bold text-sm shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center space-y-4">
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Connect with me</p>
                <div className="flex justify-center gap-8">
                  <a href={DEVELOPER_INFO.linkedIn} className="text-gray-400 hover:text-indigo-600 transition-colors"><Linkedin size={32}/></a>
                  <a href={DEVELOPER_INFO.portfolio} className="text-gray-400 hover:text-indigo-600 transition-colors"><Globe size={32}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
