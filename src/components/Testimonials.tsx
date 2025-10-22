import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  vehicle: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Thabo Mokoena',
    location: 'Sandton, Johannesburg',
    rating: 5,
    vehicle: '2023 BMW 3 Series',
    comment: 'Fantastic experience with Ajay Motors. Professional service and found my dream BMW within my budget. The finance process was smooth and transparent.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    id: 2,
    name: 'Nomvula Dlamini',
    location: 'Cape Town',
    rating: 5,
    vehicle: '2024 Mercedes-Benz C-Class',
    comment: 'Excellent dealership! The team went above and beyond to help me find the perfect Mercedes. Very knowledgeable and patient throughout the process.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 3,
    name: 'Johan van der Merwe',
    location: 'Pretoria',
    rating: 5,
    vehicle: '2023 Audi A4',
    comment: 'Best car buying experience I\'ve had. No pressure, honest advice, and great after-sales support. Highly recommend Ajay Motors!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
  {
    id: 4,
    name: 'Zanele Khumalo',
    location: 'Durban',
    rating: 5,
    vehicle: '2024 BMW X3',
    comment: 'Professional, efficient, and trustworthy. They made the entire process easy and stress-free. My new BMW X3 is perfect!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 animate-fade-in">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real reviews from real customers
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9</span>
            <span className="text-gray-600">/ 5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 line-clamp-4 text-sm">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">{testimonial.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8">
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View More Reviews →
          </button>
        </div>
      </div>
    </section>
  );
}
