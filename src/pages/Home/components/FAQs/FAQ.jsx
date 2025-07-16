import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from '../../../../constants';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="min-h-[70vh]  py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got Questions?
            <br />
            <span className="text-gray-300">We Have Answers.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our automation solutions
            and how they can transform your life.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2C2C2C] rounded-xl border border-gray-700/20 overflow-hidden transition-all duration-300 hover:border-gray-600/70 cursor-pointer"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none transition-all duration-200 cursor-pointer"
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-gray-200 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-gradient-to-r from-gray-700 to-transparent mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}