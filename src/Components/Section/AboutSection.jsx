import { User, MapPin, Calendar, Phone, Mail, AtSign } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-tr-[100px] lg:rounded-tr-none lg:rounded-br-[100px]">
                <img
                  src="/assets/about_section.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-tr-[100px] lg:rounded-tr-none lg:rounded-br-[100px] p-4"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 xl:p-16">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-2 tracking-wide">About Us</p>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Failure Is The Condiment That Gives{' '}
                    <span className="text-orange-600">Success</span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem
                  vitae ultricies. Integer porta, libero sit amet pretium lobortis, tortor mauris eleifend
                  urna, ut laoreet velit nisi scelerisque ex. Fusce vel pulvinar ligula. Etiam eget dolor leo.
                  Phasellus eu dolor cursus, sodales nunc at, tempor turpis
                </p>

                {/* Download Button */}
                <div>
                  <button className="relative flex items-center justify-center rounded-md overflow-hidden text-white font-semibold px-8 py-3 group">
                    {/* Base background (pink, stays fixed) */}
                    <span className="absolute inset-0 bg-[#e6500b]"></span>

                    {/* Blue half (slides left → right on hover) */}
                    <span className="absolute top-0 left-0 w-1/2 h-full bg-[#0e2c3d] transform group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>

                    {/* Centered Text */}
                    <span className="relative z-10">Download CV</span>
                  </button>
                </div>


                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="text-orange-600 w-5 h-5" />
                      <span className="text-gray-800 font-medium">Devid Manilla</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <AtSign className="text-orange-600 w-5 h-5" />
                      <span className="text-gray-800 font-medium">info@devid</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-orange-600 w-5 h-5" />
                      <span className="text-gray-800 font-medium">info@example.com</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-orange-600 w-5 h-5" />
                      <span className="text-gray-800 font-medium">2015 NewYork, USA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="text-orange-600 w-5 h-5" />
                      <span className="text-gray-800 font-medium">25 Jan, 1988</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-orange-600 w-5 h-5" />
                      <span className="text-gray-800 font-medium">5687 456 5862</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}