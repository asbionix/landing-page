import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import about from '../../assets/images/aboutbg.webp';
import { services, coreValues } from '../../constants';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[75vh] sm:h-[70vh] bg-[#1d1d1d] flex items-center justify-center">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ASBIONIX
            </h1>
            <p className="text-xl md:text-2xl uppercase text-gray-300 mb-8 font-light">
              tech brand of Mahalakshmi Traders.<br />
              <span className='text-[1rem] normal-case opacity-85'>The Properitor is Mrs. Mahalakshmi Arumugam</span>
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-8 animate-pulse"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Where innovation works quietly in the background, so you can enjoy the forefront of comfort and control
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="section-about" className="sm:py-20 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${visibleSections['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About Us
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  At Asbionix, we create intelligent spaces designed for seamless living. Our expertise spans home automation, networking solutions, multiroom audio, and home theaters, bringing together technology and convenience in perfect balance.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Every solution is crafted with precision, ensuring effortless control, enhanced security, and an immersive experience tailored to your needs. From concept to completion, we focus on delivering reliability, discretion, and lasting value.
                </p>
              </div>
              {/* Right Image Section */}
              <div className="relative">
                <div className="rounded-3xl h-96 lg:h-[500px] flex items-center justify-center">
                  <img src={about} alt="About Asbionix" className="w-full h-full object-cover rounded-3xl shadow-lg" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="section-vision" className="sm:py-20 py-8 px-6">
        <div className="max-w-6xl mx-auto flex sm:flex-row flex-col justify-center gap-8">
          <div className="relative sm:w-1/2 w-full">
            <div className="absolute inset-0 bg-[#2c2c2c] min-h-[200px] rounded-2xl"></div>
            <div className="relative z-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To redefine modern living by integrating technology seamlessly into everyday spaces - enhancing comfort, security, and entertainment through solutions that are intuitive, reliable, and built to last.
              </p>
            </div>
          </div>
          <div className="relative sm:w-1/2 w-full">
            <div className="absolute inset-0 bg-[#2c2c2c] min-h-[210px] rounded-2xl"></div>
            <div className="relative z-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To transform modern living spaces through innovative technology solutions that enhance comfort, security, and entertainment while maintaining simplicity and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="section-values" className="pt-0 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${visibleSections['section-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 border border-gray-200/10 bg-[#1d1d1d] rounded-lg hover:border-gray-200/20 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="section-services" className="sm:pb-20 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${visibleSections['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link
                  to={`/feature/${service.link}`}
                  key={index}
                  className="group p-6 border bg-[#2C2C2C] rounded-2xl border-gray-200/10 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <service.icon className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors mb-4" />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;