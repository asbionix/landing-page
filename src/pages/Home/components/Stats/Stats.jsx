import React, { useState, useEffect, useRef } from 'react';
import { Calendar, CheckCircle, Users, Heart } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    years: 0,
    projects: 0,
    tradespeople: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'years',
      value: 8,
      label: 'Years experience',
      description: 'Improving homes with expert craftsmanship for years',
      icon: Calendar,
      suffix: ''
    },
    {
      id: 'projects',
      value: 26,
      label: 'Projects completed',
      description: 'Over 250 successful projects delivered with quality and care',
      icon: CheckCircle,
      suffix: ''
    },
    {
      id: 'tradespeople',
      value: 30,
      label: 'Skilled Tradespeople',
      description: 'Our team of 30 experts ensures top-quality results',
      icon: Users,
      suffix: ''
    },
    {
      id: 'satisfaction',
      value: 100,
      label: 'Client satisfaction',
      description: 'All of our clients are satisfied with our work and service',
      icon: Heart,
      suffix: '%'
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible) {
      const duration = 300; // reduced from 1000 to 300ms
      const steps = 30;     // reduced steps for quicker animation
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }

          setAnimatedValues(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, stepDuration + (index * 30)); // reduced stagger delay too
      });
    }
  }, [isVisible]);

  return (
    <div className="py-20 px-4">
      <div
        ref={sectionRef}
        className="max-w-9xl mx-auto flex flex-col"
      >
        <h3 className='text-center self-center py-16 text-[#ddd] max-w-4xl text-lg'>Engineered for peace of mind—our smart home solutions are trusted to deliver seamless control, top-tier security, and intelligent living</h3>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group flex-1 min-w-[280px] sm:min-w-[200px] lg:min-w-[240px] max-w-[300px] transform transition-all duration-700 ease-out ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  flex: '1 1 calc(50% - 1rem)' // Mobile: 2 items per row
                }}
              >
                <div className="text-start py-8 px-4">
                  {/* Massive Number - Main Focus */}
                  <div className="mb-4">
                    <span className="text-8xl sm:text-9xl lg:text-[8rem] font-bold text-white leading-none tracking-tight hover:text-blue-400 transition-colors duration-500">
                      {animatedValues[stat.id]}{stat.suffix}
                    </span>
                  </div>

                  {/* Header with Icon */}
                  <div className="flex gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-white flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-200 hover:text-white transition-colors duration-300">
                      {stat.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[250px] mx-auto hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;