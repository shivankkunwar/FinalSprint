import React from 'react';
import { ChevronRight, Plus } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[70vh] pt-16 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Master Frontend Interviews & DSA with Interactive Tools!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fadeIn">
              Solve real-world UI problems, practice DSA concepts with flashcards, and get ready to ace your dream job interview.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105">
                <ChevronRight className="w-5 h-5 mr-2" />
                Explore UI Problems
              </button>
              <button className="flex items-center justify-center border-2 border-coral-500 text-coral-500 px-8 py-3 rounded-lg hover:bg-coral-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5 mr-2" />
                Start DSA Flashcards
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="bg-neutral-800 rounded-lg p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-3/4 h-4 bg-neutral-700 rounded"></div>
                  <div className="w-full h-4 bg-neutral-700 rounded"></div>
                  <div className="w-5/6 h-4 bg-neutral-700 rounded"></div>
                  <div className="w-2/3 h-4 bg-coral-500/30 rounded"></div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-neutral-800 p-4 rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-40 h-24 bg-neutral-700 rounded-lg flex items-center justify-center">
                  <span className="text-coral-500 font-bold">DSA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;