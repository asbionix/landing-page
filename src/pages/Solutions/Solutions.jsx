import React, { useEffect, useRef, useState } from 'react';
import {
  Home,
  Shield,
  Music,
  MonitorPlay,
  Wifi,
  Eye,
  Lightbulb,
  Settings,
  Building2,
  Tv,
  ArrowRight,
  Zap,
  Lock,
  Volume2,
  DotIcon
} from 'lucide-react';

import featuresBG from '../../assets/images/features.jpg';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    smartsolutions: 0,
    automations: 0,
    security: 0,
    possibilities: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'smartsolutions',
      value: 8,
      label: 'Smart Solutions',
      description: 'Over 8 years of revolutionizing modern living with intelligent home systems',
      icon: Home,
      suffix: '+'
    },
    {
      id: 'automations',
      value: 100,
      label: 'Automations',
      description: '100% custom-built automation systems tailored for homes and businesses',
      icon: Settings,
      suffix: '%'
    },
    {
      id: 'security',
      value: '24/7',
      label: 'Security',
      description: 'Round-the-clock protection with reliable smart surveillance and controls',
      icon: Shield,
      suffix: ''
    },
    {
      id: 'possibilities',
      value: '∞',
      label: 'Possibilities',
      description: 'Endless opportunities to expand, personalize, and evolve your smart home',
      icon: Lightbulb,
      suffix: ''
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
      const duration = 300;
      const steps = 30;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        // Check if value is a number for animation
        if (typeof stat.value === 'number') {
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
          }, stepDuration + (index * 30));
        } else {
          // For string values, set directly without animation
          setAnimatedValues(prev => ({
            ...prev,
            [stat.id]: stat.value
          }));
        }
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="sm:pl-0 pl-2 mx-auto flex flex-col pb-10 sm:pb-20">
      <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-12">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className={`group flex-1 w-1/2 sm:min-w-[200px] lg:min-w-[240px] max-w-[300px] transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                flex: '1 1 calc(50% - 1rem)'
              }}
            >
              <div className="text-start py-4 sm:py-8 px-2 sm:px-4">
                {/* Massive Number - Main Focus */}
                <div className="mb-4">
                  <span className="text-6xl sm:text-8xl font-bold text-white leading-none tracking-tight hover:text-[#39e75f] transition-colors duration-500">
                    {animatedValues[stat.id]}{stat.suffix}
                  </span>
                </div>
                {/* Header with Icon */}
                <div className="flex gap-3 mb-3">
                  <IconComponent className="w-5 h-5 text-white flex-shrink-0" />
                  <h3 className="text-md sm:text-xl font-semibold text-gray-200 hover:text-white transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-[250px] hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const FeatureCard = ({ icon: Icon, title, description, features, gradient }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-[#2c2c2c]  border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
    <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
    <div className="relative p-8">
      <div className="flex items-center mb-6">
        <div className={`p-3`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-[#39e75f] transition-all duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <DotIcon className="w-4 h-4 text-[#fff] mt-0.5 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const AnimatedCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gray-200 p-12 text-center border-2 border-gray-200 shadow-2xl">
        {/* Subtle overlay for depth */}
        <div className="relative">
          {/* Main heading with staggered animation */}
          <h2 className={`text-4xl tracking-tighter md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            Ready to Transform Your Space?
          </h2>

          {/* Subtitle with delayed animation */}
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            Experience the future of intelligent living with Asbionix's comprehensive automation solutions
          </p>

          {/* Buttons with staggered entrance and hover effects */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-500 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            <button
              className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 group"
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="flex items-center justify-center gap-2">
                Get Started
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'primary' ? 'translate-x-1' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 group"
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="flex items-center justify-center gap-2">
                Contact Us
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'secondary' ? 'rotate-12' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AsbionixFeatures() {
  const features = [
    {
      icon: Home,
      title: "Home Automation",
      description: "Elevate your living experience with seamless control, enhanced comfort, and advanced security through intelligent automation systems.",
      features: [
        "Motorized gate control for secure access",
        "Curtain control for privacy and lighting",
        "Light scheduling for energy efficiency",
        "DALI light control for precise management",
        "Camera integration for real-time surveillance",
        "HVAC control for perfect indoor climate"
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Shield,
      title: "Security System",
      description: "Comprehensive protection for your home or business with advanced surveillance, access control, and real-time monitoring capabilities.",
      features: [
        "Camera surveillance with live footage",
        "Door and window sensors",
        "Smart door lock system",
        "Mobile app control and alerts",
        "Indoor and outdoor protection",
        "24/7 monitoring and control"
      ],
      gradient: "from-red-600 to-pink-600"
    },
    {
      icon: Music,
      title: "Multiroom Audio",
      description: "Immersive sound experience throughout your home with high-quality audio systems that can be controlled independently in each room.",
      features: [
        "Play music in multiple zones",
        "Independent room control",
        "Mobile app management",
        "Playlist and volume control",
        "Audio source switching",
        "Superior sound quality"
      ],
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: MonitorPlay,
      title: "Home Theatre",
      description: "Transform your living space into a cinematic experience with custom-designed systems featuring stunning visuals and immersive sound.",
      features: [
        "High-definition projectors or TVs",
        "Surround sound speakers",
        "Acoustic treatments",
        "Theater-like atmosphere",
        "Gaming compatibility",
        "Seamless integration"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Reliable, high-speed connectivity for residential and commercial spaces with strategically placed access points for complete coverage.",
      features: [
        "Indoor and outdoor Access Points",
        "Seamless coverage elimination",
        "Strong signal strength",
        "Mobile app monitoring",
        "Device management",
        "Enhanced security protocols"
      ],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Settings,
      title: "Motorized Curtains",
      description: "Smart curtain control system for managing natural light, privacy, and ambiance with scheduled settings and mobile app control.",
      features: [
        "Blinds, sheer, and curtain control",
        "Scheduled automated movements",
        "Mobile app and keypad control",
        "Energy efficiency optimization",
        "Time-based automation",
        "Enhanced comfort and convenience"
      ],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: Tv,
      title: "LED Display",
      description: "Complete LED display solutions for residential and commercial spaces with premium panels and custom installations.",
      features: [
        "Digital art walls for homes",
        "Commercial advertising displays",
        "Smart home integration",
        "Indoor and outdoor systems",
        "Content management platforms",
        "Professional installation"
      ],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: Building2,
      title: "Smart Institutions",
      description: "Transform educational and corporate institutions with cutting-edge automation, security, networking, and audio-visual systems.",
      features: [
        "Automated attendance systems",
        "Smart classroom solutions",
        "CCTV surveillance",
        "High-speed Wi-Fi networks",
        "Smart auditoriums",
        "Energy-efficient automation"
      ],
      gradient: "from-teal-600 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0">
          <img src={featuresBG} alt="Features Background" className="w-full h-full object-cover opacity-60" />
        </div>
        {/* Content on top of the background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-white">Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge solutions that transform your space into an intelligent,
              secure, and connected environment
            </p>
            <div className="flex items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Simple</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Smart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <AnimatedCTASection />
    </div>
  );
}