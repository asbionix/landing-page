// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import confetti from 'canvas-confetti';
// import invitation from '../assets/images/invitation.jpg';

// const WelcomePopup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show popup on first load
//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisitedHomepage');
//     if (!hasVisited) {
//       setIsVisible(true);
//       sessionStorage.setItem('hasVisitedHomepage', 'true');
//       triggerConfetti();
//     }
//   }, []);

//   // Lock/unlock body scroll
//   useEffect(() => {
//     if (isVisible) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     // Cleanup on unmount
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isVisible]);

//   // Trigger confetti effect
//   const triggerConfetti = () => {
//     const duration = 3 * 1000; // 3 seconds
//     const end = Date.now() + duration;
//     const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a55eea', '#26de81', '#fd79a8'];

//     const frame = () => {
//       if (Date.now() > end) return;

//       // Left side cannon
//       confetti({
//         particleCount: 2,
//         angle: 60,
//         spread: 55,
//         startVelocity: 60,
//         origin: { x: 0, y: 0.5 },
//         colors: colors,
//       });

//       // Right side cannon
//       confetti({
//         particleCount: 2,
//         angle: 120,
//         spread: 55,
//         startVelocity: 60,
//         origin: { x: 1, y: 0.5 },
//         colors: colors,
//       });

//       // Center burst
//       confetti({
//         particleCount: 3,
//         angle: 90,
//         spread: 45,
//         startVelocity: 45,
//         origin: { x: 0.5, y: 0.3 },
//         colors: colors,
//       });

//       requestAnimationFrame(frame);
//     };

//     frame();
//   };

//   const closePopup = () => {
//     setIsVisible(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop with blur */}
//       <div
//         className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
//         onClick={closePopup}
//       />

//       {/* Popup Modal */}
//       <div className="popup-container popup-enter relative rounded-2xl shadow-2xl max-w-[35rem] w-full mx-4 transform">
//         {/* Close Button */}
//         <button
//           onClick={closePopup}
//           className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200 z-10"
//           aria-label="Close popup"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>

//         {/* Content */}
//         <div className='w-full overflow-hidden'>
//           <img src={invitation} alt="Welcome Invitation" className="w-full h-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePopup;

import React, { useEffect, useState } from "react";

const TestingNoticePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show popup every time page loads
    setVisible(true);
  }, []);

  const closePopup = () => setVisible(false);

  if (!visible) return null;

  return (
    <div id="testingNoticePopup" className="testing-notice-popup">
      <div className="popup-content">
        <div className="popup-header">
          ⚠️ <span>Important Notice – Testing Mode</span>
        </div>

        <div className="popup-body">
          <p>
            <strong>ASBIONIX Retail Hub</strong> is currently under testing.
          </p>
          <p>
            All product listings, images, descriptions, and prices are for testing purposes only.
          </p>
          <p>
            No orders can be placed, and no transactions are valid at this stage.
          </p>
          <p>
            All products displayed belong to their respective brands and owners. ASBIONIX does not claim ownership of any brand.
          </p>
          <p>
            This store is not yet an authorized sales channel for any brand.
          </p>
          <p>
            <strong>Thank you for your understanding.</strong>
          </p>
        </div>

        <button className="popup-btn-secondary" onClick={() => window.open('https://retailhub.asbionix.in', '_blank')}>
          Visit Store
        </button>

        <button className="popup-btn" onClick={closePopup}>
          I Understand
        </button>

        <style jsx>{`
          .testing-notice-popup {
            display: flex;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(3px);
            z-index: 9999;
            justify-content: center;
            align-items: center;
            font-family: inherit;
          }

          .popup-content {
            background: #fff;
            max-width: 480px;
            padding: 2rem;
            border-radius: 12px;
            text-align: left;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.2s ease;
          }

          .popup-header {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            font-weight: 600;
            color: #b91c1c;
            margin-bottom: 1rem;
            gap: 0.5rem;
          }

          .popup-body p {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #333;
            margin-bottom: 0.6rem;
          }

          .popup-btn {
            display: inline-block;
            background: #000;
            color: #fff;
            padding: 0.7rem 1.4rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            width: 100%;
            margin-top: 1rem;
            transition: background 0.2s;
          }

          .popup-btn:hover {
            background: #1d1d1d;
          }

          .popup-btn-secondary {
            display: inline-block;
            background: #f3f4f6;
            color: #111827;
            padding: 0.7rem 1.4rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            width: 100%;
            margin-top: 1rem;
            transition: background 0.2s;
          }

          .popup-btn-secondary:hover {
            background: #e5e7eb;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestingNoticePopup;