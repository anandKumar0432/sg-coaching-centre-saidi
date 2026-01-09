
import React from 'react';
import { Target, Users, History, GraduationCap } from 'lucide-react';
import { COACHING_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About SG Coaching Centre</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing transformative education for over half a decade in Nalanda, helping students bridge the gap between effort and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" 
              alt="Education" 
              className="rounded-3xl shadow-2xl h-[400px] w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              SG Coaching Centre was founded with a single goal: to make quality education accessible to every student in Saidi and surrounding areas. We believe that Class X is the foundation of a student's career, and we ensure that this foundation is rock solid.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We focus on building conceptual clarity rather than rote memorization. Our approach has helped {COACHING_INFO.studentCount}+ students find their path to success in various professional fields.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <Target className="text-indigo-600" />
                <span className="font-semibold">Goal Oriented</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <Users className="text-indigo-600" />
                <span className="font-semibold">Student Centric</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white text-center">
          <h2 className="text-3xl font-bold mb-12">Our Journey at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">{new Date().getFullYear() - COACHING_INFO.established}+</div>
              <div className="text-indigo-200">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">{COACHING_INFO.studentCount}+</div>
              <div className="text-indigo-200">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">100%</div>
              <div className="text-indigo-200">Board Pass Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">500+</div>
              <div className="text-indigo-200">Successful Alumni</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
