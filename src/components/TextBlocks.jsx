import React, { useState, useEffect, useRef } from 'react';

const TextBlocks = ({ 
  eyebrow = "KEY FEATURES",
  title = "Seamless Automation, Unmatched Security, Effortless Control.",
  description = "Elevate your home to a Smart Home paradise! Effortlessly manage your surroundings with a simple tap or voice command.",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  containerClassName = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`py-16 px-4 sm:py-20 lg:py-24 ${className}`}
    >
      <div className={`max-w-7xl mx-auto ${containerClassName}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Eyebrow Text */}
            <div 
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className={`
                text-sm font-medium tracking-wider text-gray-400 uppercase
                ${eyebrowClassName}
              `}>
                {eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <div 
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h1 className={`
                text-3xl sm:text-5xl lg:text-6xl 
                font-bold text-white leading-tight tracking-tight
                ${titleClassName}
              `}>
                {title}
              </h1>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:pl-8">
            <div 
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className={`
                sm:text-xl text-gray-300 leading-relaxed
                ${descriptionClassName}
              `}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBlocks;