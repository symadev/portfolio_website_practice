import { Facebook, Twitter, Instagram, Linkedin, ChevronUp } from 'lucide-react';

export default function SimpleFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', label: 'LinkedIn' }
  ];

  const footerLinks = [
    { name: 'Faq', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms & Condition', url: '#' }
  ];

  return (
    <footer className="bg-gray-100 py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Social Icons - Left */}
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Brand & Description - Center */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">ABFOLIO</h2>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Lorem ipsum dolor sit amet, cons aring elit sed dllao the eimod tempor inciunt.
            </p>
          </div>

          {/* Footer Links - Right */}
          <div className="flex justify-center md:justify-end gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-center text-gray-600 text-sm">
            Copyright © 2021 ABFOLIO. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-orange-600 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
}