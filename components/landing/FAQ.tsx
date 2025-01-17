import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Do I need coding experience to use this platform?",
      answer: "Basic programming knowledge in HTML, CSS, and JavaScript is recommended for UI problems. For DSA flashcards, familiarity with any programming language is helpful but not mandatory as we provide pseudocode explanations."
    },
    {
      question: "How are DSA flashcards curated?",
      answer: "I add data as I learn it myself"
    },
    {
        question: "Will there be updates to this app?",
        answer: "Yes, whenever I stop procrastinating. So… don’t hold your breath.",
      },
    {
      question: "Can I track my progress?",
      answer: "Someday for sure"
    },  
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg animate-fadeIn animate-delay-1s">Find answers to common questions about our platform</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-neutral-900 rounded-lg">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-coral-500 transform transition-transform duration-300 ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-4 transition-all duration-300 ${
                  openItem === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;