import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const TestimonyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "CEO, TechCorp",
            content: "This service has completely transformed how we operate. The attention to detail and customer support is exceptional."
        },
        {
            name: "Michael Chen",
            position: "Creative Director, Design Studio",
            content: "Working with this team has been an absolute pleasure. They delivered beyond our expectations and on time."
        },
        {
            name: "Emily Rodriguez",
            position: "Marketing Manager, StartupXYZ",
            content: "The results speak for themselves. Our conversion rates increased by 300% within the first month of implementation."
        },
        {
            name: "David Thompson",
            position: "Founder, InnovateLab",
            content: "Professional, reliable, and incredibly talented. I wouldn't hesitate to recommend their services to anyone."
        },
        {
            name: "Lisa Wang",
            position: "VP of Operations, GlobalTech",
            content: "The level of expertise and commitment they bring to every project is truly remarkable. Outstanding work!"
        }
    ];

    const slideTo = (index, dir) => {
        setDirection(dir);
        setCurrentIndex(index);
    };

    const nextTestimonial = () => {
        const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        slideTo(next, 'left');
    };

    const prevTestimonial = () => {
        const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        slideTo(prev, 'right');
    };

    // Auto-advance every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => slideTo((currentIndex + 1) % testimonials.length, 'left'), 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextTestimonial(),
        onSwipedRight: () => prevTestimonial(),
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="flex items-center px-4">
            <div className="w-full max-w-7xl mx-auto bg-[#2C2C2C] rounded-2xl p-8">
                {/* === DESKTOP === */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:min-h-[300px]">
                    <div className="col-span-12 flex justify-end">
                        <div className="space-x-6">
                            <button
                                onClick={prevTestimonial}
                                className="p-4 hover:bg-white/90 hover:text-black/80 text-white cursor-pointer rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-4 hover:bg-white/90 hover:text-black/80 text-white cursor-pointer rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="col-span-3 text-left">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white leading-tight animate-fade-slide-up">
                                {currentTestimonial.name}
                            </h3>
                            <p className="text-gray-100/70 text-lg font-medium animate-fade-slide-up">
                                {currentTestimonial.position}
                            </p>

                            <div className="flex space-x-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => slideTo(index, index > currentIndex ? 'left' : 'right')}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-white scale-110'
                                            : 'bg-gray-600 hover:bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div key={currentIndex} className="col-span-9 text-start px-8">
                        <blockquote className="text-3xl lg:text-4xl font-light text-white leading-relaxed animate-fade-slide-up">
                            "{currentTestimonial.content}"
                        </blockquote>
                    </div>
                </div>

                {/* === MOBILE / TABLET === */}
                <div
                    className="lg:hidden relative overflow-hidden min-h-[340px]"
                    {...swipeHandlers}
                >
                    <div
                        key={currentIndex}
                        className={`absolute inset-0 px-4 transition-transform duration-500 ease-out will-change-transform
                            ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}
                    >
                        <div className="text-center px-2">
                            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                                "{currentTestimonial.content}"
                            </blockquote>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0">
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {currentTestimonial.name}
                                </h3>
                                <p className="text-gray-100/70 text-base sm:text-lg font-medium">
                                    {currentTestimonial.position}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center space-x-2 mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => slideTo(index, index > currentIndex ? 'left' : 'right')}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white scale-110'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCarousel;