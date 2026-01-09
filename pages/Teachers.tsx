
import React from 'react';
import { TEACHERS } from '../constants';
import { Award, Book, Clock } from 'lucide-react';

const Teachers: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Expert Faculty</h1>
          <p className="text-xl text-gray-600">The minds behind our students' success.</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {TEACHERS.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col md:flex-row group transition-all hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={teacher.image}
                  alt={teacher.name}
                  className="
                    w-full h-full object-cover
                    object-top md:object-center
                    transition-all duration-500
                    scale-105 group-hover:scale-100
                  "
                />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-indigo-600 font-bold mb-2">
                  <Award size={18} /> {teacher.type}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-1">{teacher.name}</h2>
                <div className="text-gray-500 font-medium mb-4">{teacher.qualification}</div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock size={18} className="text-indigo-400" />
                    <span className="font-medium">{teacher.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Book size={18} className="text-indigo-400" />
                    <span>Specializes in {teacher.subjects.join(', ')}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{teacher.description}"
                </p>
                
                <div className="mt-8 flex gap-3">
                  {teacher.subjects.map(s => (
                    <span key={s} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl text-center border border-dashed border-indigo-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Faculty Joining Soon!</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            We are constantly expanding our team to provide the best specialized education for all subjects including Languages and Social Sciences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
