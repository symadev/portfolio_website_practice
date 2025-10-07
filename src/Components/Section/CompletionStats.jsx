import React, { useState, useEffect, useRef } from 'react';
import { CheckSquare, Dna, Gem, User } from 'lucide-react';

const CompletionStats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: CheckSquare, target: 555, label: 'Projects Completed' },
    { icon: Dna, target: 255, label: 'Remaining Project' },
    { icon: Gem, target: 100, label: 'Business Start-up' },
    { icon: User, target: 50, label: 'Support Team' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = stat.target;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, stepDuration);
    });
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div 
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="flex justify-center mb-5">
                <Icon className="w-14 h-14 text-orange-500" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counts[index]} +
              </div>
              <div className="text-base font-normal text-gray-700">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompletionStats;