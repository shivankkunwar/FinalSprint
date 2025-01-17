import React from 'react';

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">How It Works</h2>
          <p className="text-gray-300 text-lg animate-fadeIn animate-delay-1s">Simple steps to mastery</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-coral-500/30"></div>

          <div className="space-y-16 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center animate-fadeInLeft">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0">
                <div className="bg-neutral-800 p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-coral-500/20 mb-6">
                    <span className="text-2xl font-bold text-coral-500">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Choose Your Path</h3>
                  <p className="text-gray-300">Select from our curated collection of UI problems or DSA flashcard topics based on your learning goals.</p>
                </div>
              </div>
              <div className="hidden md:block w-8 h-8 bg-coral-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center animate-fadeInRight">
              <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0">
                <div className="bg-neutral-800 p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-coral-500/20 mb-6">
                    <span className="text-2xl font-bold text-coral-500">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Interactive Learning</h3>
                  <p className="text-gray-300">Work through interactive UI challenges or flip through comprehensive DSA flashcards at your own pace.</p>
                </div>
              </div>
              <div className="hidden md:block w-8 h-8 bg-coral-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center animate-fadeInLeft">
              <div className="md:w-1/2 md:pr-16">
                <div className="bg-neutral-800 p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-coral-500/20 mb-6">
                    <span className="text-2xl font-bold text-coral-500">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Master Concepts</h3>
                  <p className="text-gray-300">Learn with detailed hints, pseudocode examples, and hands-on practice to reinforce your understanding.</p>
                </div>
              </div>
              <div className="hidden md:block w-8 h-8 bg-coral-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;