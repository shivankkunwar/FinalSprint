import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-neutral-900 border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-coral-500 text-2xl font-bold">FinalSprint</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-coral-500 transition-colors duration-300">Home</a>
              <a href="#features" className="text-gray-300 hover:text-coral-500 transition-colors duration-300">UI Problems</a>
              <a href="/flashcards" className="text-gray-300 hover:text-coral-500 transition-colors duration-300">DSA Flashcards</a>
              <a href="#howitworks" className="text-gray-300 hover:text-coral-500 transition-colors duration-300">How It Works</a>
              <a href="#testimonials" className="text-gray-300 hover:text-coral-500 transition-colors duration-300">Testimonials</a>
              <button className="bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-neutral-900 border-b border-neutral-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#hero" className="block text-gray-300 hover:text-coral-500 transition-colors duration-300 px-3 py-2">Home</a>
          <a href="#features" className="block text-gray-300 hover:text-coral-500 transition-colors duration-300 px-3 py-2">UI Problems</a>
          <a href="#features" className="block text-gray-300 hover:text-coral-500 transition-colors duration-300 px-3 py-2">DSA Flashcards</a>
          <a href="#howitworks" className="block text-gray-300 hover:text-coral-500 transition-colors duration-300 px-3 py-2">How It Works</a>
          <a href="#testimonials" className="block text-gray-300 hover:text-coral-500 transition-colors duration-300 px-3 py-2">Testimonials</a>
          <button className="w-full mt-2 bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;