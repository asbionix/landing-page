import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { carouselData } from '../constants';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check scroll position and update button states
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll to active item to keep it in view
  const scrollToActiveItem = (index) => {
    if (scrollContainerRef.current && !isMobile) {
      const container = scrollContainerRef.current;
      const itemWidth = 160; // Approximate width including margins
      const activeItemWidth = 256; // Width of active item
      const containerWidth = container.clientWidth;

      // Calculate scroll position to center the active item
      const scrollPosition = (index * itemWidth) - (containerWidth / 2) + (activeItemWidth / 2);

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    scrollToActiveItem(index);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % carouselData.length;
    setActiveIndex(newIndex);
    scrollToActiveItem(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + carouselData.length) % carouselData.length;
    setActiveIndex(newIndex);
    scrollToActiveItem(newIndex);
  };

  // Mobile carousel view
  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full px-2 mb-6 text-start">
          <div
            key={carouselData[activeIndex].id}
            className="transition-opacity duration-500 ease-in-out animate-fade-slide-up"
          >
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              {carouselData[activeIndex].label}
            </h2>
            <p className="text-gray-300 text-sm">
              {carouselData[activeIndex].content}
            </p>
          </div>
        </div>

        {/* Apply swipe handlers here */}
        <div {...swipeHandlers} className="relative w-full max-w-sm">
          <div className="relative w-full h-96 rounded-3xl overflow-hidden">
            {carouselData.map((item, index) => (
              <Link
                to={`/feature/${item.link}`}
                key={item.id}
                className={`
                absolute inset-0 transition-transform duration-500 ease-in-out
                ${index === activeIndex ? 'translate-x-0' :
                    index < activeIndex ? '-translate-x-full' : 'translate-x-full'}
              `}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.bgColor} opacity-5`} />
                <div className="absolute inset-0 bg-black opacity-20" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="text-4xl font-bold mb-2">{item.number}</div>
                  <div className="text-lg font-medium">{item.label}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-colors duration-200 z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-colors duration-200 z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2 flex-wrap">
            {carouselData.map((_, index) => (
              <button
                key={index}
                className={`
                w-1.5 h-1.5 rounded-full transition-all duration-300 m-1
                ${index === activeIndex
                    ? 'bg-white shadow-lg scale-125'
                    : 'bg-gray-300/40 hover:bg-gray-400'}
              `}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }


  // Desktop view with horizontal scrolling
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Feature Display */}
      <div className="w-full mb-6 text-start px-12">
        <div
          key={carouselData[activeIndex].id}
          className="transition-opacity duration-500 ease-in-out animate-fade-slide-up"
        >
          <h2 className="text-5xl font-bold text-gray-100 mb-3">
            {carouselData[activeIndex].label}
          </h2>
          <p className="text-gray-300 max-w-2xl">
            {carouselData[activeIndex].content}
          </p>
        </div>
      </div>
      <div className="relative w-full">
        {/* Scroll Left Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scroll Right Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center space-x-3 overflow-auto px-12 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
          onScroll={updateScrollButtons}
        >
          {carouselData.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                to={`/feature/${item.link}`}
                key={item.id}
                className={`
                  ${isActive ? 'w-[40%]' : 'w-48'}
                  flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer
                  transition-all duration-500 ease-in-out transform
                  ${isActive ? 'shadow-2xl' : 'shadow-lg hover:scale-100'}
                  group
                `}
                style={{
                  height: '400px',
                }}
                onMouseEnter={() => handleItemClick(index)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.bgColor} opacity-5`} />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-20" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                    <div className={`font-bold mb-2 ${isActive ? 'text-5xl' : 'text-3xl'}`}>
                      {item.number}
                    </div>
                    <div className={`font-medium ${isActive ? 'text-xl' : 'text-base'}`}>
                      {item.label}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;