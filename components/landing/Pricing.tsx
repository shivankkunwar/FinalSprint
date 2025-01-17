import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 text-lg animate-fadeIn animate-delay-1s">Choose the plan that fits your learning journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-coral-500 transition-all duration-300 animate-fadeInLeft">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Basic</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold text-white">Free</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {['5 UI Problems', 'Basic DSA Flashcards', 'Community Support'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-coral-500 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-neutral-800 rounded-xl p-8 border-2 border-coral-500 transform scale-105 shadow-2xl animate-fadeInUp">
            <div className="absolute top-0 right-0 bg-coral-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Popular
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Pro</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold text-white">$29</span>
                <span className="text-gray-300 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'All UI Problems',
                'Full DSA Flashcard Access',
                'Progress Tracking',
                'Priority Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-coral-500 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-coral-500 text-white hover:bg-coral-600 transition-colors duration-300">
              Get Pro Access
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-coral-500 transition-all duration-300 animate-fadeInRight">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold text-white">$99</span>
                <span className="text-gray-300 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Everything in Pro',
                'Custom Problem Sets',
                'Team Management',
                'Dedicated Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-coral-500 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;