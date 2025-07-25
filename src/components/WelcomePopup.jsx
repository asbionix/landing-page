import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import invitation from '../assets/images/invitation.jpg';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show popup on first load
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHomepage');
    if (!hasVisited) {
      setIsVisible(true);
      sessionStorage.setItem('hasVisitedHomepage', 'true');
      triggerConfetti();
    }
  }, []);

  // Lock/unlock body scroll
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  // Trigger confetti effect
  const triggerConfetti = () => {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a55eea', '#26de81', '#fd79a8'];

    const frame = () => {
      if (Date.now() > end) return;

      // Left side cannon
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });

      // Right side cannon
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      // Center burst
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        origin: { x: 0.5, y: 0.3 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Popup Modal */}
      <div className="popup-container popup-enter relative rounded-2xl shadow-2xl max-w-[35rem] w-full mx-4 transform">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200 z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className='w-full overflow-hidden'>
          <img src={invitation} alt="Welcome Invitation" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;