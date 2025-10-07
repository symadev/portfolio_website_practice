import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Web Development', percentage: 88 },
    { name: 'IOS Development', percentage: 80 },
    { name: 'Web Design', percentage: 98 },
    { name: 'App Development', percentage: 80 },
    { name: 'PhotoShop', percentage: 90 },
  ];

  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">My Skills</h2>
            <p className="text-gray-600 mt-2">A snapshot of my core abilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                  <div className="relative">
                    <div className="bg-gray-900 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                      {skill.percentage}%
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-gray-900"></div>
                  </div>
                </div>

                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gray-900 rounded-full transition-all duration-[1500ms] ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
