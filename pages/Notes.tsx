
import React from 'react';
import { BookOpen, Clock, Lock } from 'lucide-react';

const Notes: React.FC = () => {
  return (
    <div className="pb-20 pt-10 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 text-indigo-600 rounded-3xl mb-8">
          <BookOpen size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Digital Library</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Access high-quality, exam-oriented notes and study materials curated by our expert faculty.
        </p>
        
        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-indigo-50 max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-500 text-white px-6 py-1 rounded-bl-xl font-bold text-sm tracking-widest uppercase">Coming Soon</div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full md:w-1/2">
                <Lock className="mx-auto text-gray-400 mb-3" />
                <h3 className="font-bold text-gray-900">Class X Materials</h3>
                <p className="text-sm text-gray-500 mt-2">Uploading PDF Notes, Practice Sets & Board Papers</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full md:w-1/2">
                <Lock className="mx-auto text-gray-400 mb-3" />
                <h3 className="font-bold text-gray-900">Class XII Materials</h3>
                <p className="text-sm text-gray-500 mt-2">Mathematics and Science specialized notes</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold animate-pulse">
              <Clock size={20} />
              Launching in the next session!
            </div>
            
            <button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed px-10 py-4 rounded-xl font-bold w-full md:w-auto">
              Login to Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
