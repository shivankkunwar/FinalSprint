import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">What our Users are saying</h2>
          <p className="text-gray-300 text-lg animate-fadeIn animate-delay-1s">Success stories from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-neutral-900 p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fadeInLeft">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-coral-500/20 rounded-full flex items-center justify-center">
                <span className="text-coral-500 text-xl font-bold">SK</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-semibold">Shivank Kunwar</h4>
                <p className="text-gray-400">Cracked coder</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">"This app is so good, I almost forgot I built it myself."</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-neutral-900 p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fadeIn">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-coral-500/20 rounded-full flex items-center justify-center">
                <span className="text-coral-500 text-xl font-bold">SK</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-semibold">Shivank Kunwar</h4>
                <p className="text-gray-400">Professional Typewriter</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">"Finally, an app that understands me… because I wrote it."</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-neutral-900 p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fadeInRight">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-coral-500/20 rounded-full flex items-center justify-center">
                <span className="text-coral-500 text-xl font-bold">SK</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-semibold">Shivank Kunwar</h4>
                <p className="text-gray-400">Wifi router</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">"Using this app is like finding a Wi-Fi signal in the middle of nowhere—pure bliss!"</p>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16">
          {['GOOGLE', 'AMAZON', 'META', 'NETFLIX'].map((company) => (
            <div key={company} className="w-32 h-12 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors duration-300">
              <span className="text-gray-400 font-bold">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
