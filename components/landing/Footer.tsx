import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center pb-12 border-b border-neutral-800">
          {/* Company Info - Centered */}
          <div className="max-w-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">PrepMaster</h3>
            <p className="text-gray-400 mb-6">
              Your ultimate platform for mastering frontend interviews and DSA preparation.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

          {/* Quick Links */}
          {/* <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">UI Problems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">DSA Flashcards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Interview Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Success Stories</a></li>
            </ul>
          </div> */}

          {/* Legal */}
          {/* <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-300">Security</a></li>
            </ul>
          </div> */}

        {/* Bottom Bar */}
        {/* <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 PrepMaster. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-coral-500 transition-colors duration-300">
              Sitemap
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-sm text-gray-400 hover:text-coral-500 transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;