import { useState, useEffect } from "react";

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative overflow-hidden bg-white min-h-screen flex items-center">

            <div className="relative z-10 container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

                    {/* Text Section */}
                    <div
                        className={`flex-1 text-left max-w-2xl ml-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                            }`}
                    >
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            <span className="bg-black bg-clip-text text-transparent">
                                I'm{" "}
                                <span className="bg-gradient-to-r from-orange-700 via-orange-600 bg-clip-text text-transparent">
                                    Manilla
                                </span>
                            </span>

                            <span className="bg-black bg-clip-text text-transparent block">
                                UI & UX Designer
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl mb-8 text-black leading-relaxed font-light">
                            <span className="text-black font-semibold">It is a long established fact that a reader will be distracted by the readable content.</span>
                        </p>

                        <div>
                            <button className="relative flex items-center justify-center rounded-md overflow-hidden text-white font-semibold px-8 py-3 group">
                                {/* Base background (pink, stays fixed) */}
                                <span className="absolute inset-0 bg-[#e6500b]"></span>

                                {/* Blue half (slides left → right on hover) */}
                                <span className="absolute top-0 left-0 w-1/2 h-full bg-[#0e2c3d] transform group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>

                                {/* Centered Text */}
                                <span className="relative z-10">Hire Me</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Section with Multiple Circular Animations */}
                    <div className={`flex-1 flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative flex items-center justify-center">
                            {/* Multiple Circular Animations Background */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                                {/* Circle 1 - Largest */}
                                <div className="absolute">
                                    <svg
                                        width="600"
                                        height="600"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <circle cx="300" cy="300" r="280" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                    </svg>
                                    <div
                                        className="absolute top-1/2 left-1/2 animate-spin"
                                        style={{ animationDuration: "8s" }}
                                    >
                                        <div
                                            className="absolute w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
                                            style={{
                                                transform: "translate(-50%, -280px)", // move dot outward to circle radius
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Circle 2 - Medium */}
                                <div className="absolute">
                                    <svg
                                        width="500"
                                        height="500"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <circle cx="250" cy="250" r="230" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                    </svg>
                                    <div
                                        className="absolute top-1/2 left-1/2 animate-spin"
                                        style={{ animationDuration: "6s", animationDirection: "reverse" }}
                                    >
                                        <div
                                            className="absolute w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"
                                            style={{
                                                transform: "translate(-50%, -230px)",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Circle 3 - Small */}
                                <div className="absolute">
                                    <svg
                                        width="400"
                                        height="400"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <circle cx="200" cy="200" r="180" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                    </svg>
                                    <div
                                        className="absolute top-1/2 left-1/2 animate-spin"
                                        style={{ animationDuration: "5s" }}
                                    >
                                        <div
                                            className="absolute w-3 h-3 bg-orange-600 rounded-full shadow-lg shadow-orange-600/50"
                                            style={{
                                                transform: "translate(-50%, -180px)",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                            </div>


                            {/* Main image */}
                            <img
                                src="/assets/man.png"
                                alt="Workout"
                                className="relative z-10 w-full h-auto max-w-md object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;