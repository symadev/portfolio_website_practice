import React, { useEffect, useRef } from 'react';
import { User, Heart, Calendar } from 'lucide-react';

const Blogs = () => {
  const swiperRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      author: 'Admin',
      category: 'Business',
      title: 'Timely Tested Website Development',
      excerpt:
        'Discover how thoughtful web development practices lead to sustainable, scalable, and user-friendly solutions that last.',
      date: '16 October 2021'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      author: 'Admin',
      category: 'Business',
      title: 'Building Websites that Convert',
      excerpt:
        'Learn the secrets behind designing websites that not only look good but also drive meaningful conversions for your business.',
      date: '16 October 2021'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      author: 'Admin',
      category: 'Business',
      title: 'Modern UI/UX Practices',
      excerpt:
        'Explore the modern design trends and UX principles that can take your digital experience to the next level.',
      date: '16 October 2021'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      author: 'Admin',
      category: 'Business',
      title: 'Digital Marketing Strategies',
      excerpt:
        'Unlock the power of digital marketing with proven strategies that drive engagement and boost your online presence.',
      date: '16 October 2021'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      author: 'Admin',
      category: 'Business',
      title: 'Team Collaboration Tools',
      excerpt:
        'Discover the best tools and practices for remote team collaboration and productivity in the modern workplace.',
      date: '16 October 2021'
    }
  ];

  useEffect(() => {
    // Load Swiper CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    // Load Swiper JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Swiper && swiperRef.current) {
        new window.Swiper(swiperRef.current, {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-5xl font-extrabold text-center mb-14 tracking-widest uppercase"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px #FFA07A',
            textStroke: '2px #FFC966'
          }}
        >
          Latest Blog
        </h2>

        {/* Swiper Container */}
        <div className="relative pb-16">
          <div ref={swiperRef} className="swiper mySwiper">
            <div className="swiper-wrapper">
              {blogPosts.map((post) => (
                <div key={post.id} className="swiper-slide">
                  <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden border border-pink-100 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <User className="w-4 h-4 text-orange-500" />
                          <span>By <span className="font-semibold">{post.author}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-500">
                          <Heart className="w-4 h-4 fill-orange-500" />
                          <span>{post.category}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span>{post.date}</span>
                        </div>
                        <button className="text-orange-500 text-sm font-bold tracking-wide hover:text-orange-600 hover:underline transition-all">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="swiper-button-next" style={{ color: '#FFA07A' }}></div>
            <div className="swiper-button-prev" style={{ color: '#FFA07A' }}></div>

            {/* Pagination */}
            <div className="swiper-pagination" style={{ bottom: '0' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        .swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          max-width: 90vw;
        }

        .swiper-slide-active {
          transform: scale(1);
        }

        .swiper-pagination-bullet {
          background: #FFA07A;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #FFA07A;
          opacity: 1;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .swiper-slide {
            width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Blogs;