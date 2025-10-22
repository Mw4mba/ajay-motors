import Image from 'next/image';

export default function SellWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative h-80 md:h-full min-h-[400px] order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1556223779-d26a2de2c7e1?w=800"
                alt="Sell your car with Ajay Motors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-right">
                Sell With Us
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Looking to sell your vehicle? Ajay Motors offers a hassle-free selling experience with competitive valuations and quick turnaround times.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Professional Valuation</h3>
                    <p className="text-gray-600 text-sm">Get an accurate market value for your vehicle within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Payment</h3>
                    <p className="text-gray-600 text-sm">Fast and secure payment once your vehicle is sold</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">We Handle the Paperwork</h3>
                    <p className="text-gray-600 text-sm">Complete documentation and transfer assistance included</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Wide Network of Buyers</h3>
                    <p className="text-gray-600 text-sm">Access to premium buyers across South Africa</p>
                  </div>
                </div>
              </div>

              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-md">
                Get Your Valuation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
