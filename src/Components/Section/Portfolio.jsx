import { useState } from 'react';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = ['All', 'Design', 'Development', 'App'];

  const portfolioItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
      category: 'Design',
      title: 'UI/UX Design Project'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      category: 'App',
      title: 'Mobile App Development'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      category: 'Development',
      title: 'Web Development'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      category: 'Design',
      title: 'Wireframe Design'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      category: 'Development',
      title: 'Code Development'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      category: 'App',
      title: 'Branding Design'
    }
  ];

  const handleFilterChange = (category) => {
    if (category !== activeFilter) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFilter(category);
        setTimeout(() => setIsAnimating(false), 50);
      }, 350);
    }
  };

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 tracking-wide">
        My Portfolio
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Showcasing my best creative and development projects
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl bg-white transform transition-all duration-700 ${
              isAnimating
                ? 'opacity-0 scale-75 rotate-3 blur-sm'
                : 'opacity-100 scale-100 rotate-0 blur-0 hover:scale-105 hover:-rotate-1'
            }`}
            style={{
              transitionDelay: isAnimating ? '0ms' : `${index * 100}ms`,
            }}
          >
            {/* Glow border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 glow-border"></div>

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
              />

              {/* Overlay with shine + text animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 shine-effect"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-700">
                  <span className="inline-block px-4 py-1.5 bg-white text-orange-600 text-xs font-bold rounded-full mb-3 shadow-md animate-pulse-slow">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold drop-shadow-md transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {item.title}
                  </h3>
                  <button className="mt-3 px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 delay-200 hover:bg-orange-600 hover:text-white">
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl font-medium">
            No projects found in this category
          </p>
        </div>
      )}

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .shine-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          width: 100%;
          height: 100%;
          animation: shine 3s ease-in-out infinite;
        }

        .glow-border {
          animation: glow 2s ease-in-out infinite;
          border-radius: 1.5rem;
        }
      `}</style>
    </div>
  );
}
