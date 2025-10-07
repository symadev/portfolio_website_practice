import { useState } from 'react';
import { Code, Layers, Wrench, Gem, Palette, Megaphone } from 'lucide-react';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Design",
      icon: "laptop-code",
      description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
      highlighted: false
    },
    {
      id: 2,
      title: "Web Development",
      icon: "layers",
      description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
     
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "tools",
      description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
      highlighted: false
    },
    {
      id: 4,
      title: "App Design & Develop",
      icon: "diamond",
      description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
      highlighted: false
    },
    {
      id: 5,
      title: "Graphic Design",
      icon: "palette",
      description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
      highlighted: false
    },
    {
      id: 6,
      title: "SEO Marketing",
      icon: "megaphone",
      description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
      highlighted: false
    }
  ];

  const getIcon = (iconName) => {
    const iconMap = {
      'laptop-code': <Code className="w-16 h-16" />,
      'layers': <Layers className="w-16 h-16" />,
      'tools': <Wrench className="w-16 h-16" />,
      'diamond': <Gem className="w-16 h-16" />,
      'palette': <Palette className="w-16 h-16" />,
      'megaphone': <Megaphone className="w-16 h-16" />
    };
    return iconMap[iconName] || <Code className="w-16 h-16" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wider" 
            style={{
              WebkitTextStroke: '2px #FFA07A',
              WebkitTextFillColor: 'transparent',
              color: '#FFA07A'
            }}>
          MY SERVICES
        </h1>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white shadow-lg overflow-hidden group"
            >
              {/* Center Fill Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-rose-500 rounded-2xl transition-all duration-700 ease-out scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100" 
                   style={{
                     transformOrigin: 'center center'
                   }}>
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`transition-colors duration-500 ${
                    hoveredIndex === index
                      ? 'text-white'
                      : 'text-orange-500'
                  }`}>
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold text-center mb-4 transition-colors duration-500 ${
                  hoveredIndex === index
                    ? 'text-white'
                    : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-center leading-relaxed transition-colors duration-500 ${
                  hoveredIndex === index
                    ? 'text-white/90'
                    : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Decorative line at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-500 z-20 ${
                hoveredIndex === index
                  ? 'bg-white/30'
                  : 'bg-orange-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}