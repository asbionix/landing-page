import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { solutions } from '../../constants'
import { useParams } from 'react-router-dom';
import { Marquee } from '../../components/Marquee';

const FeaturePage = () => {
  const { solution } = useParams();
  const selectedSolution = solutions.find(s => s.link === solution);

  if (!selectedSolution) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Solution not found.
      </div>
    );
  }

  const { name, description, image, trustedCompanies, features } = selectedSolution;

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative bg-[#1d1d1d] overflow-hidden py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {name}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      {trustedCompanies.length > 0 && (
        <div className="pb-6 sm:pb-16 bg-[#2c2c2c]">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-400 text-lg">
              Join thousands of companies that rely on our solutions
            </p>
          </div>
          <Marquee items={trustedCompanies} speed='slow' />
        </div>)}

      {/* Features Section */}
      <div className="bg-[#2c2c2c] w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Key Capabilities</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the powerful features that make this solution essential for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-6 rounded-xl bg-[#212121] transition-colors duration-200">
              <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
              <span className="text-gray-200 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;