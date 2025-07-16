import React, { useState, useEffect } from 'react';
import HeroBg from '../../../../assets/images/hero.jpg';

const Hero = () => {
    const taglines = [
        "Smarter living, effortless control, seamless comfort.",
        "Transform your home into a smart haven.",
        "Automate your home, simplify your life.",
        "Future-ready homes, today’s smart automation."
    ];

    const [currentTagline, setCurrentTagline] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentTagline((prev) => (prev + 1) % taglines.length);
                setIsVisible(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [taglines.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${HeroBg}')`,
                    filter: 'brightness(0.7)',
                    transition: 'filter 0.3s ease-in-out',
                }}
            >

                <div className="absolute inset-0 bg-black/30"></div>
            </div>


            <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-8">


                    <div className="flex-1 max-w-md lg:max-w-2xl">
                        <h1
                            className={`text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            {taglines[currentTagline]}
                        </h1>
                    </div>

                    {/* Static Text - Bottom Right */}
                    <div className="flex-shrink-0">
                        <div className="text-right">
                            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium">
                                Established 2025
                            </p>
                            <p className="text-white/80 text-xs sm:text-sm md:text-base mt-1">
                                Simple. Secure. Smart.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;