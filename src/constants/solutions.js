import sound1 from "../assets/logos/1sound.png";
import acoustics from "../assets/logos/acoustics.png";
import aero from "../assets/logos/aero.svg";
import aet from "../assets/logos/aet.png";
import ajax from "../assets/logos/ajax.png";
import amd from "../assets/logos/amd.png";
import apc from "../assets/logos/apc.png";
import archi from "../assets/logos/archi.png";
import barco from "../assets/logos/barco.png";
import basalte from "../assets/logos/basalte.png";
import beg from "../assets/logos/beg.jpeg";
import benq from "../assets/logos/benq.png";
import bn from "../assets/logos/bn.png";
import bo from "../assets/logos/bo.png";
import bw from "../assets/logos/bw.png";
import coolauto from "../assets/logos/coolauto.jpg";
import coolermaster from "../assets/logos/coolermaster.png";
import cp from "../assets/logos/cp.png";
import crestron from "../assets/logos/crestron.png";
import crucial from "../assets/logos/crucial.png";
import dell from "../assets/logos/dell.png";
import denon from "../assets/logos/denon.png";
import dftech from "../assets/logos/dftech.webp";
import dlink from "../assets/logos/dlink.jpeg";
import dsc from "../assets/logos/dsc.png";
import ef from "../assets/logos/ef.png";
import elac from "../assets/logos/elac.png";
import epson from "../assets/logos/epson.png";
import everglow from "../assets/logos/everglow.png";
import focal from "../assets/logos/focal.png";
import frontech from "../assets/logos/frontech.png";
import gb from "../assets/logos/gb.png";
import geze from "../assets/logos/geze.png";
import gsnet from "../assets/logos/gsnet.png";
import hikvision from "../assets/logos/hikvision.png";
import honey from "../assets/logos/honey.png";
import hp from "../assets/logos/hp.png";
import hpe from "../assets/logos/hpe.png";
import knx from "../assets/logos/knx.png";
import kordz from "../assets/logos/kordz.png";
import krix from "../assets/logos/krix.png";
import lapcare from "../assets/logos/lapcare.webp";
import legrand from "../assets/logos/legrand.png";
import lenovo from "../assets/logos/lenovo.png";
import lg from "../assets/logos/lg.png";
import maarantz from "../assets/logos/maarantz.png";
import marvel from "../assets/logos/marvel.png";
import mcintosh from "../assets/logos/mcintosh.png";
import moorgen from "../assets/logos/moorgen.png";
import msi from "../assets/logos/msi.png";
import netgear from "../assets/logos/netgear.png";
import numeric from "../assets/logos/numeric.png";
import nvidia from "../assets/logos/nvidia.png";
import rhombus from "../assets/logos/rhombus.png";
import seagate from "../assets/logos/seagate.png";
import sim from "../assets/logos/sim.jpg";
import somfy from "../assets/logos/somfy.png";
import sonos from "../assets/logos/sonos.png";
import sonus from "../assets/logos/sonus.png";
import tone from "../assets/logos/tone.jpeg";
import western from "../assets/logos/western.png";
import xtreme from "../assets/logos/xtreme.png";
import yale from "../assets/logos/yale.png";

import { audio, curtain, led, network, pc, smarthome, theatre, school, lock } from '../assets/images';

export const solutions = [
  {
    name: "Home Automation",
    link: "home-automation",
    description: "Experience intelligent living with Asbionix's home automation system. Control lighting, HVAC, security, motorized gates, curtains, and appliances through a sleek interface available on your phone, iPad, or touch panel. Features like DALI lighting, HVAC zoning, and integrated video door phones offer a seamless, energy-efficient, and secure smart home experience.",
    image: smarthome,
    trustedCompanies: [crestron, knx, basalte, moorgen, beg, coolauto, rhombus, bn],
    features: [
      "DALI light control and scheduling",
      "Motorized gate and curtain automation",
      "HVAC and climate control",
      "Integrated CCTV and video door phone",
      "Mobile, tablet, and panel GUI access",
      "Energy-saving automation"
    ]
  },
  {
    name: "Motorized Curtain",
    link: "motorized-curtain",
    description: "Automate your curtains with Asbionix’s smart control system. Open, close, or adjust curtains based on time, app commands, or physical keypads. Enhances privacy, reduces heat loss/gain, and adds a luxurious touch to your home environment.",
    image: curtain,
    trustedCompanies: [somfy, marvel],
    features: [
      "Scheduled curtain movements",
      "Mobile and keypad control",
      "Smart ambient light adjustment",
      "Energy efficiency improvement",
      "Quiet and smooth operation",
      "Supports sheer and dual-layer blinds"
    ]
  },
  {
    name: "Multiroom Audio",
    link: "multiroom-audio",
    description: "Fill your entire home with music using Asbionix's multiroom audio system. Control each room's audio independently or play synchronized music across all zones. Enjoy intuitive app-based control, playlist management, and superior audio fidelity.",
    image: audio,
    trustedCompanies: [acoustics, sonos, denon],
    features: [
      "Zone-based audio control",
      "App-enabled volume and source management",
      "High-fidelity sound in every room",
      "Supports streaming and local playback",
      "Party sync mode",
      "Easy integration with home assistants"
    ]
  },
  {
    name: "Networking",
    link: "networking",
    description: "Ensure fast, uninterrupted internet across your entire property with Asbionix’s indoor and outdoor access points. Designed for homes and commercial spaces, the system removes dead zones and enables full network visibility and control from a mobile app.",
    image: network,
    trustedCompanies: [netgear, dlink, gsnet, legrand, hpe, kordz],
    features: [
      "Seamless Wi-Fi coverage",
      "Indoor & outdoor access point deployment",
      "Dead zone elimination",
      "Remote monitoring and control",
      "Secure, encrypted connections",
      "Ideal for high bandwidth needs"
    ]
  },
  {
    name: "Security System",
    link: "security-system",
    description: "Protect your property with Asbionix’s comprehensive security suite. Includes live surveillance, smart locks, alarms, door/window sensors, and mobile alerts—giving you total peace of mind and control from anywhere.",
    image: lock,
    trustedCompanies: [cp, hikvision, ajax, yale, dsc, geze, honey],
    features: [
      "Live camera surveillance",
      "Smart locking systems",
      "Motion and intrusion sensors",
      "Alarm and alert systems",
      "Mobile security management",
      "Outdoor and indoor protection"
    ]
  },
  {
    name: "Home Theatre",
    link: "home-theatre",
    description: "Turn your living room into a movie theatre with customized projector or TV systems, high-end surround sound, and acoustic design. Asbionix ensures cinematic immersion and seamless media control.",
    image: theatre,
    trustedCompanies: [krix, elac, mcintosh, ef, sonos, maarantz, bw, bo, dftech, epson, benq, focal, tone, sonus, sound1, barco, sim, archi],
    features: [
      "4K projectors and large-screen TVs",
      "Dolby Atmos surround sound",
      "Custom acoustic treatments",
      "Seamless media integration",
      "Smart lighting sync",
      "Universal remote or app control"
    ]
  },
  {
    name: "Customized PC",
    link: "customized-pc",
    description: "Build the ultimate workstation or gaming rig with Asbionix. Every system is tailored to your performance goals, from component selection to OS installation. Perfect for creators, professionals, and gamers.",
    image: pc,
    trustedCompanies: [nvidia, crucial, amd, gb, msi, frontech, lapcare, coolermaster, numeric, apc, lenovo, dell, hp, lg, western, seagate],
    features: [
      "Performance-based configuration",
      "Gaming and productivity builds",
      "Top-tier components",
      "Professional assembly and testing",
      "Technical support and warranty",
      "Future upgrade flexibility"
    ]
  },
  {
    name: "LED Display",
    link: "led-display",
    description: "Create impactful visual environments with Asbionix LED panels. Perfect for homes (media walls, ambient displays) and businesses (ads, branding, events), with full integration and control systems.",
    image: led,
    trustedCompanies: [aet, xtreme, everglow, aero],
    features: [
      "Indoor and outdoor LED panels",
      "Custom layout and resolution",
      "Smart control and scheduling",
      "Crestron & KNX integration",
      "Live streaming compatibility",
      "Commercial & residential support"
    ]
  },
  {
    name: "Smart Institutions",
    link: "smart-institutions",
    description: "Transform schools, colleges, and corporates into smart campuses with attendance automation, lighting control, high-speed internet, smart AV, and campus-wide security. Optimize efficiency and learning with tech-forward solutions.",
    image: school,
    trustedCompanies: [],
    features: [
      "Automated attendance and lighting",
      "CCTV and access control",
      "Campus-wide Wi-Fi",
      "Smart classrooms & AV systems",
      "Auditorium automation",
      "Energy-saving infrastructure"
    ]
  }
];