import { Home, Settings, Volume2, Wifi, ShieldCheck, MonitorPlay, Tv, Building2, Shield, Music, Network, Monitor, Cpu, Building } from 'lucide-react';
import { solutions } from './solutions';
import { audio, curtain, led, network, pc, smarthome, theatre, school, lock } from '../assets/images';

const navItems = [
  {
    name: "About",
    link: "about",
    expandable: false,
  },
  {
    name: "Solutions",
    link: "#solutiions-1",
    expandable: true,
    siblings: [
      {
        title: "Home Automation",
        description: "Seamless control of lighting, HVAC, security, and more through intuitive mobile and touch panel interfaces.",
        link: "home-automation",
        icon: Home
      },
      {
        title: "Motorized Curtain",
        description: "Automated curtain systems with app, keypad, and schedule-based controls to manage light and privacy.",
        link: "motorized-curtain",
        icon: Settings
      },
      {
        title: "Multiroom Audio",
        description: "Enjoy immersive, high-quality sound in every room with centralized control and flexible zoning.",
        link: "multiroom-audio",
        icon: Volume2
      },
      {
        title: "Networking",
        description: "High-speed, consistent connectivity with strategically placed access points for complete property coverage.",
        link: "networking",
        icon: Wifi
      },
      {
        title: "Security System",
        description: "Smart security solutions with surveillance, sensors, and locks—fully manageable from your mobile device.",
        link: "security-system",
        icon: ShieldCheck
      },
      {
        title: "Home Theatre",
        description: "Cinematic audio-visual experience at home with custom projector or TV setups and surround sound.",
        link: "home-theatre",
        icon: MonitorPlay
      },
      {
        title: "Customized PC",
        description: "Tailored computers for gamers and professionals, built with premium components and optimized performance.",
        link: "customized-pc",
        icon: Cpu
      },
      {
        title: "LED Display",
        description: "Bespoke LED installations for homes and businesses with smart integration and content control.",
        link: "led-display",
        icon: Tv
      },
      {
        title: "Smart Institutions",
        description: "Smart automation, security, and AV solutions for schools, colleges, and corporate campuses.",
        link: "smart-institutions",
        icon: Building2
      }
    ]
  },
  {
    name: "Contact",
    link: "#contact",
    expandable: false,
  }
];

const faqs = [
  {
    question: "What makes Asbionix different from other tech solution providers?",
    answer: "Asbionix delivers smart, scalable, and user-friendly solutions tailored to exact project requirements. A unique blend of innovation, reliability, and personalized support distinguishes it in the tech industry."
  },
  {
    question: "How to get started with Asbionix services?",
    answer: "Initial consultation can be scheduled through the website or contact form. A representative will guide through the entire setup process."
  },
  {
    question: "Is technical knowledge required to operate Asbionix products?",
    answer: "No technical expertise is needed. All solutions are designed for ease of use and come with training and continuous support."
  },
  {
    question: "What support is available after installation?",
    answer: "Comprehensive support includes 24/7 customer service, routine maintenance, and regular system updates to maintain peak performance."
  },
  {
    question: "Can solutions be tailored to specific business requirements?",
    answer: "Yes. All solutions are fully customizable to suit unique business needs—whether for a small office, large facility, or industrial environment."
  },
  {
    question: "Are Asbionix solutions suitable for both residential and commercial use?",
    answer: "Yes. The solution portfolio caters to homes, offices, retail outlets, and industrial complexes—scalable from a single room to full-building automation."
  },
  {
    question: "Is remote monitoring and control available?",
    answer: "Yes. All solutions include remote monitoring and control via mobile apps or web dashboards, ensuring real-time access from anywhere."
  }
];

const carouselData = [
  {
    id: 1,
    image: smarthome,
    number: "01",
    label: "Home Automation",
    link: "home-automation",
    bgColor: "from-zinc-800 to-zinc-600",
    content: "Automate lighting, curtains, HVAC, gates, and security via an intuitive GUI. Control everything from your phone, iPad, or touch panel for comfort, energy efficiency, and security."
  },
  {
    id: 6,
    image: theatre,
    number: "02",
    label: "Home Theatre",
    link: "home-theatre",
    bgColor: "from-zinc-900 to-neutral-700",
    content: "Create a cinematic experience at home with HD projectors/TVs, surround sound, and acoustic optimization. Seamlessly integrates for premium entertainment."
  },
  {
    id: 2,
    image: curtain,
    number: "03",
    label: "Motorized Curtain",
    link: "motorized-curtain",
    bgColor: "from-neutral-800 to-neutral-600",
    content: "Effortlessly control curtains via app, schedule, or keypad. Enhances privacy, comfort, and energy savings with intelligent automation and stylish operation."
  },
  {
    id: 3,
    image: audio,
    number: "04",
    label: "Multiroom Audio",
    link: "multiroom-audio",
    bgColor: "from-stone-800 to-stone-600",
    content: "Enjoy personalized, high-quality audio in every room. Manage playlists and audio zones via mobile app for immersive sound throughout your home."
  },
  {
    id: 4,
    image: network,
    number: "05",
    label: "Networking",
    link: "networking",
    bgColor: "from-slate-800 to-slate-600",
    content: "High-speed, seamless connectivity with strategic indoor/outdoor access points. Easily monitor and control devices and network activity remotely."
  },
  {
    id: 5,
    image: lock,
    number: "06",
    label: "Security System",
    link: "security-system",
    bgColor: "from-gray-800 to-gray-600",
    content: "Advanced surveillance, alarm, sensors, and smart locks. Remote app control lets you view, manage, and secure your property from anywhere."
  },
  {
    id: 7,
    image: pc,
    number: "07",
    label: "Customized PC",
    link: "customized-pc",
    bgColor: "from-stone-900 to-stone-700",
    content: "Tailor-built PCs for gamers, creatives, and professionals. High-performance systems with custom design, testing, support, and future upgrades."
  },
  {
    id: 8,
    image: led,
    number: "08",
    label: "LED Display",
    link: "led-display",
    bgColor: "from-gray-900 to-gray-700",
    content: "Custom LED panels for homes and commercial spaces. Includes art walls, backdrops, advertising displays, smart integration, and cloud-based content systems."
  },
  {
    id: 9,
    image: school,
    number: "09",
    label: "Smart Institutions",
    link: "smart-institutions",
    bgColor: "from-slate-900 to-slate-700",
    content: "Smart automation for schools, colleges, and corporates—automated lighting, attendance, surveillance, Wi-Fi, smart classrooms, and auditoriums for a tech-enabled campus."
  }
];

const services = [
  { 
    icon: Home, 
    title: "Home Automation", 
    description: "Intelligent spaces with seamless control", 
    link: "home-automation" 
  },
  { 
    icon: Shield, 
    title: "Security & Surveillance", 
    description: "Comprehensive protection solutions", 
    link: "security-system" 
  },
  { 
    icon: Music, 
    title: "Multiroom Audio", 
    description: "Immersive sound throughout your space", 
    link: "multiroom-audio" 
  },
  { 
    icon: Tv, 
    title: "Home Theater", 
    description: "Cinematic experience at home", 
    link: "home-theatre" 
  },
  { 
    icon: Network, 
    title: "Networking Solutions", 
    description: "Reliable, high-speed connectivity", 
    link: "networking" 
  },
  { 
    icon: Monitor, 
    title: "LED Displays", 
    description: "Premium display solutions", 
    link: "led-display" 
  },
  { 
    icon: Cpu, 
    title: "Customized PCs", 
    description: "Tailored computing solutions", 
    link: "customized-pc" 
  },
  { 
    icon: Building, 
    title: "Smart Institutions", 
    description: "Future-ready institutional solutions", 
    link: "smart-institutions" 
  }
];

const coreValues = [
  { title: "Simple", description: "Intuitive solutions that work effortlessly" },
  { title: "Secure", description: "Advanced protection for peace of mind" },
  { title: "Smart", description: "Intelligent technology for modern living" }
];

export {
  solutions, navItems, faqs,
  services, coreValues, carouselData
}