import { User, Mail, Phone, FileText, Edit3, Home, PhoneCall } from 'lucide-react';

export default function ContactForm() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-5xl lg:text-6xl font-bold text-center mb-16 tracking-wider"
                    style={{
                        WebkitTextStroke: '2px #FFB347',
                        WebkitTextFillColor: 'transparent',
                        color: '#FFB347'
                    }}>
                    CONTACT NOW
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form - Left Side (2 columns) */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Your Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-4 pr-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors"
                                />
                                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                            </div>

                            {/* Your Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-4 pr-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition-colors"
                                />
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                            </div>

                            {/* Your Phone */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full px-4 py-4 pr-12  bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition-colors"
                                />
                                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                            </div>

                            {/* Your Subjects */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Subjects"
                                    className="w-full px-4 py-4 pr-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition-colors"
                                />
                                <FileText className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="relative mb-6">
                            <textarea
                                placeholder="Write Message"
                                rows="6"
                                className="w-full px-4 py-4 pr-12  bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition-colors resize-none"
                            ></textarea>
                            <Edit3 className="absolute right-4 top-4 w-5 h-5 text-orange-500" />
                        </div>

                        {/* Send Button */}
                        <div>
                            <button className="relative flex items-center justify-center rounded-md overflow-hidden text-white font-semibold px-8 py-3 group">
                                {/* Base background (pink, stays fixed) */}
                                <span className="absolute inset-0 bg-[#e6500b]"></span>

                                {/* Blue half (slides left → right on hover) */}
                                <span className="absolute top-0 left-0 w-1/2 h-full bg-[#0e2c3d] transform group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>

                                {/* Centered Text */}
                                <span className="relative z-10">Send Massage</span>
                            </button>
                        </div>
                    </div>

                    {/* Contact Info Card - Right Side (1 column) */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-white h-full shadow-lg">
                            <h2 className="text-3xl font-bold mb-8">
                                Don't Hesitate To<br />Contact Us
                            </h2>

                            <div className="space-y-6">
                                {/* Locations */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <Home className="w-6 h-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Locations</h3>
                                        <p className="text-sm text-pink-50">
                                            2512, New Market, Eliza Road, Sincher<br />
                                            80 CA, Canada, USA
                                        </p>
                                    </div>
                                </div>

                                {/* Drop A Mail */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Drop A Mail</h3>
                                        <p className="text-sm text-pink-50">
                                            support@example.com<br />
                                            example@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Call Us */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <PhoneCall className="w-6 h-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <p className="text-sm text-pink-50">
                                            (+1) 123 521 458<br />
                                            +91 235 548 7548
                                        </p>
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