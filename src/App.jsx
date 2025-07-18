import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './lib/utils';

import StickyNavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Contact from './pages/Home/components/CTA/Contact';
import AboutUs from './pages/About/About';
import Feature from './pages/Feature/Feature';
import Page404 from './pages/NotFound/Page404';

function App() {
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Router>
      <ScrollToTop />
      <StickyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/feature/:solution" element={<Feature />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
