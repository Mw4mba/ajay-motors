'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  color: string;
}

interface FeaturedCarsProps {
  cars: Car[];
  onMakeRequest: () => void;
}

export default function FeaturedCars({ cars, onMakeRequest }: FeaturedCarsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardsToShow = 3;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= cars.length ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cars.length]);

  const nextCar = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= cars.length ? 0 : next;
    });
  };

  const prevCar = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getVisibleCars = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % cars.length;
      visible.push(cars[index]);
    }
    return visible;
  };

  const visibleCars = getVisibleCars();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with View More button */}
        <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 animate-fade-in">
              Featured Cars
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our handpicked selection of premium vehicles
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors animate-fade-in">
            View More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleCars.map((car, idx) => (
              <div
                key={`${car.id}-${idx}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Square Image Section */}
                <div className="relative aspect-square bg-gray-200">
                  <Image
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Car Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {car.year} {car.make} {car.model}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{car.color}</p>
                  
                  <p className="text-2xl font-bold text-red-600 mb-4">
                    R {car.price.toLocaleString()}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <p className="text-xs text-gray-500">Mileage</p>
                      <p className="text-sm font-semibold text-gray-900">{car.mileage}</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <p className="text-xs text-gray-500">Trans</p>
                      <p className="text-sm font-semibold text-gray-900">{car.transmission}</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <p className="text-xs text-gray-500">Fuel</p>
                      <p className="text-sm font-semibold text-gray-900">{car.fuelType}</p>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevCar}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot Navigation - Show only 5 dots */}
            <div className="flex gap-2">
              {(() => {
                const maxDots = 5;
                const totalCars = cars.length;
                let startIndex = Math.max(0, currentIndex - Math.floor(maxDots / 2));
                let endIndex = Math.min(totalCars, startIndex + maxDots);
                
                if (endIndex - startIndex < maxDots) {
                  startIndex = Math.max(0, endIndex - maxDots);
                }
                
                const dots = [];
                for (let i = startIndex; i < endIndex; i++) {
                  dots.push(
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`transition-all rounded-full ${
                        i === currentIndex
                          ? 'w-8 h-3 bg-red-600'
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  );
                }
                return dots;
              })()}
              <span className="text-sm text-gray-600 ml-2 self-center">
                {currentIndex + 1} / {cars.length}
              </span>
            </div>

            <button
              onClick={nextCar}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all"
              aria-label={isAutoPlaying ? 'Pause' : 'Play'}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Make a Request Section - Playful Typography */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl shadow-xl p-12 text-center animate-scale-in">
          <div className="mb-6">
            <h3 className="text-gray-900 leading-tight mb-4">
              <span className="block text-3xl md:text-4xl font-light text-gray-500">Can't find</span>
              <span className="block text-5xl md:text-7xl font-black bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent my-2">
                YOUR CAR?
              </span>
              <span className="block text-2xl md:text-3xl font-medium text-gray-600">
                We'll help you <span className="text-red-600 font-bold italic">find it!</span>
              </span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tell us what you're looking for and our team will search our extensive network to find your perfect match.
            </p>
          </div>
          <button
            onClick={onMakeRequest}
            className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Make a Request
          </button>
        </div>
      </div>
    </section>
  );
}
