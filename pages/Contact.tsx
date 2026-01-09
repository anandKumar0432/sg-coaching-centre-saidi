
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { COACHING_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pb-20 pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions or fees? Get in touch with us directly or visit our centre in Nalanda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Detailed Contact Info */}
          <div className="space-y-10">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">Reach Out Directly</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-indigo-600 p-4 rounded-2xl text-white h-fit shadow-lg shadow-indigo-200">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed max-w-xs">{COACHING_INFO.address}</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-indigo-600 text-sm font-bold mt-2 inline-block">View on Google Maps</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-indigo-600 p-4 rounded-2xl text-white h-fit shadow-lg shadow-indigo-200">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600 text-lg font-semibold">{COACHING_INFO.phone}</p>
                    <p className="text-gray-500 text-sm">Available Mon-Sat: 6am - 7pm</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-indigo-600 p-4 rounded-2xl text-white h-fit shadow-lg shadow-indigo-200">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 text-lg">{COACHING_INFO.email}</p>
                    <p className="text-gray-500 text-sm">Typical response time: 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-indigo-600 p-4 rounded-2xl text-white h-fit shadow-lg shadow-indigo-200">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Morning Shift: 6:00 AM - 9:00 AM</p>
                    <p className="text-gray-600">Evening Shift: 3:00 PM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900 p-8 rounded-[2rem] text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl mb-1">Quick Chat?</h3>
                <p className="text-indigo-200 text-sm">Message us on WhatsApp</p>
              </div>
              <a href={`https://wa.me/${COACHING_INFO.phone.replace(/[^0-9]/g, '')}`} className="bg-green-500 hover:bg-green-600 p-4 rounded-2xl transition-all">
                <MessageCircle size={32} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 relative">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Class</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option>Class X</option>
                    <option>Class XI</option>
                    <option>Class XII</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" required placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} required placeholder="Tell us how we can help..." className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-indigo-100">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
