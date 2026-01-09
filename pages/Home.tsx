
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Megaphone, CheckCircle2 } from 'lucide-react';
import { NOTICES, COACHING_INFO, TEACHERS, TESTIMONIALS, FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 overflow-hidden py-10 md:pt-10 md:pb-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center bg-indigo-500/30 border border-indigo-400/50 px-3 py-1 rounded-full text-sm font-medium">
                <span className="mr-2">✨</span> Join the #1 Coaching in Saidi
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Unlock Your Potential with <span className="text-indigo-400">SG Coaching</span> Centre
              </h1>
              <p className="text-lg text-indigo-100 max-w-lg">
                High-quality education for Class X+ students. Expert guidance, personal attention, and proven results to help you excel in board exams and competitive tests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2">
                  Enroll Now <ArrowRight size={20} />
                </Link>
                <Link to="/teachers" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-center backdrop-blur-sm transition-all">
                  Meet Our Faculty
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl p-1 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" 
                  alt="Student studying" 
                  className="rounded-3xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-indigo-100 flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Users className="text-indigo-600 h-8 w-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{COACHING_INFO.studentCount}+</div>
                  <div className="text-sm text-gray-500">Active Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Megaphone className="text-orange-600 h-6 w-6 animate-pulse" />
              <h2 className="text-xl font-bold text-orange-800">Recent Notice</h2>
            </div>
            {NOTICES.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{NOTICES[0].title}</h3>
                <p className="text-gray-700 mt-2">{NOTICES[0].content}</p>
                <div className="mt-3 text-sm text-orange-600 font-medium">Published: {NOTICES[0].date}</div>
              </div>
            ) : (
              <p className="text-gray-500 italic">No new notices at the moment.</p>
            )}
          </div>
        </div>
      </section>

      {/* Features/Stats */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SG Coaching?</h2>
            <p className="text-gray-600 italic">"Ghar se coaching tak ka safar, safalta ke sang."</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-indigo-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
              <p className="text-gray-600">Guidance from Pankaj Sir and other highly qualified teachers with years of board exam experience.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-indigo-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Small Batches</h3>
              <p className="text-gray-600">Personalized attention to every student to ensure all doubts are cleared on time.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-indigo-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600">Our students consistently achieve top rankings in Bihar Board and CBSE exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Teacher Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-indigo-50 rounded-[2.5rem] overflow-hidden">
            <div className="w-full md:w-1/2 p-12 md:p-20 order-2 md:order-1">
              <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold mb-6">HEAD FACULTY</div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{TEACHERS[0].name}</h2>
              <div className="text-indigo-600 font-semibold text-lg mb-6">{TEACHERS[0].qualification}</div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {TEACHERS[0].description} With over {TEACHERS[0].experience} of experience, Pankaj Sir is known for his unique problem-solving techniques in Mathematics.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-500" /> Specialist in Board Prep
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-500" /> Conceptual Learning Approach
                </li>
              </ul>
              <Link to="/teachers" className="inline-flex items-center text-indigo-600 font-bold hover:gap-2 transition-all">
                View All Faculty Members <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[600px] order-1 md:order-2">
              <img 
                src={TEACHERS[0].image} 
                alt={TEACHERS[0].name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-indigo-200">Hear from those who reached their goals with us.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-xl italic mb-6">"{t.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold">
                    {t.studentName[0]}
                  </div>
                  <div>
                    <div className="font-bold">{t.studentName}</div>
                    <div className="text-indigo-300 text-sm">{t.class}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join SG Coaching Centre today and give your academics the professional boost it needs. Admissions for the current session are closing soon!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
                Contact Office
              </Link>
              <Link to="/login" className="bg-indigo-500 text-white border border-indigo-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-600 transition-colors">
                Register Student
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
