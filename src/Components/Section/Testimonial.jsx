import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Rosalina D. William',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      review: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      id: 2,
      name: 'Maria Roshana',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      review: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      id: 3,
      name: 'John Smith',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      review: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      review: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.'
    }
  ];

  // Group testimonials in pairs for side-by-side display
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonialPairs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialPairs.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center mb-16 tracking-wider" 
            style={{
              WebkitTextStroke: '2px #FFB347',
              WebkitTextFillColor: 'transparent',
              color: '#FFA07A'
            }}>
          REVIEWS
        </h1>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonialPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {pair.map((testimonial) => (
                      <div key={testimonial.id} className="bg-gray-100 rounded-2xl p-8 relative">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-40 h-40 object-cover rounded-lg"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {testimonial.review}
                            </p>
                            
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-gray-900">
                                {testimonial.name}
                              </h3>
                              <p className="text-orange-500 font-medium">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>

                        {/* Quote Icon */}
                        <div className="absolute bottom-6 right-6">
                          <MessageCircle className="w-16 h-16 text-orange-300 opacity-40" strokeWidth={1.5} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-orange-500'
                  : 'w-3 h-3 bg-orange-300 hover:bg-orange-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}