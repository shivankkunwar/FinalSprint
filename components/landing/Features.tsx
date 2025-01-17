import React from 'react';
import { Code, BookOpen } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Feature Highlights</h2>
          <p className="text-gray-300 text-lg animate-fadeIn animate-delay-1s">Choose your path to interview success</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* UI Problems Card */}
          <div className="bg-neutral-900 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInLeft">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-coral-500/20 mb-6">
              <Code className="w-10 h-10 text-coral-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Frontend UI Problems</h3>
            <p className="text-gray-300 mb-6">Master real-world UI challenges with our interactive coding environment.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Build a File Explorer</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Design a Pagination System</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Create an Interactive Carousel</span>
              </div>
            </div>
            
            <button className="w-full bg-coral-500 text-white py-3 rounded-lg hover:bg-coral-600 transition-colors duration-300">
              Explore UI Problems
            </button>
          </div>

          {/* DSA Flashcards Card */}
          <div className="bg-neutral-900 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInRight">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-coral-500/20 mb-6">
              <BookOpen className="w-10 h-10 text-coral-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">DSA Flashcards</h3>
            <p className="text-gray-300 mb-6">Practice algorithms and data structures with our smart flashcard system.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Algorithm-focused with pseudocode hints</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Topic-based filtering system</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Progress tracking & bookmarking</span>
              </div>
            </div>
            
            <button className="w-full border-2 border-coral-500 text-coral-500 py-3 rounded-lg hover:bg-coral-500 hover:text-white transition-colors duration-300">
              Start DSA Flashcards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;