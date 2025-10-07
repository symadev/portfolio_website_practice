export default function Review() {
  const education = [
    {
      year: '2006-2008',
      institution: 'Oxford University',
      degree: 'MSC in Computer Engineer'
    },
    {
      year: '2004-2006',
      institution: 'Oxford University',
      degree: 'MSC in Computer Engineer'
    },
    {
      year: '2002-2004',
      institution: 'Oxford University',
      degree: 'MSC in Computer Engineer'
    }
  ];

  const experience = [
    {
      year: '2010-2012',
      company: 'Envato Company',
      position: 'Full Stack Web Developer'
    },
    {
      year: '2012-2014',
      company: 'Envato Company',
      position: 'Full Stack Web Developer'
    },
    {
      year: '2014-2021',
      company: 'Envato Company',
      position: 'Full Stack Web Developer'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1
          className="text-5xl lg:text-6xl font-bold text-center mb-16 tracking-wider"
          style={{
            WebkitTextStroke: '2px #ea580c',
            WebkitTextFillColor: 'transparent',
            color: '#ea580c',
          }}
        >
          MY RESUME
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Education
            </h2>

            <div className="space-y-8 relative">
              {education.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full z-10"></div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-orange-600 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="relative">
                      <span className="inline-block bg-orange-600 text-white px-4 py-1 rounded text-sm font-medium mb-3">
                        {item.year}
                      </span>
                      {/* Arrow pointer */}
                      <div className="absolute left-4 top-7 w-0 h-0 border-t-8 border-t-orange-600 border-l-6 border-l-transparent border-r-6 border-r-transparent"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-gray-600">{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Experience
            </h2>

            <div className="space-y-8 relative">
              {experience.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full z-10"></div>
                    {index !== experience.length - 1 && (
                      <div className="w-0.5 h-full bg-orange-600 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="relative">
                      <span className="inline-block bg-orange-600 text-white px-4 py-1 rounded text-sm font-medium mb-3">
                        {item.year}
                      </span>
                      {/* Arrow pointer */}
                      <div className="absolute left-4 top-7 w-0 h-0 border-t-8 border-t-orange-600 border-l-6 border-l-transparent border-r-6 border-r-transparent"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.company}
                    </h3>
                    <p className="text-gray-600">{item.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
