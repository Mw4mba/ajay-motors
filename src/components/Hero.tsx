import Image from 'next/image';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="py-4 px-4 md:px-6 mt-20">
      <div className="container mx-auto">
        <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl">
          {/* Hero Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200"
              alt="Luxury car dealership"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-red-900/20 z-10"></div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
              Ajay Motors
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-light italic animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Connecting you with cars you love
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Premium selection of Mercedes, BMW, and Audi vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={onGetStarted}
                className="bg-red-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Started
              </button>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                View Inventory
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
