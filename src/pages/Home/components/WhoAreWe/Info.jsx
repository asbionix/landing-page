import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import about from '../../../../assets/images/about.png';
import { Link } from 'react-router-dom';

export default function Info() {
    return (
        <div id='aboutus' className="text-gray-300">
            <div className="container mx-auto px-6 sm:px-12 py-16 lg:py-24 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                                Why Choose Asbionix
                            </p>
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                Experience the Perfect
                                <br />
                                <span>
                                    Blend of Convenience,
                                </span>
                                <br />
                                Security, and Efficiency.
                            </h1>
                        </div>

                        <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-lg">
                            Designed to make your life easier, safer, and more energy-efficient—so
                            you can focus on what truly matters.
                        </p>

                        {/* Features List */}
                        <div className="space-y-2 sm:space-y-4">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm sm:text-lg font-medium group-hover:text-[#39e75f] transition-colors duration-300">
                                    Ultimate Convenience & Automation
                                </span>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm sm:text-lg font-medium group-hover:text-[#39e75f] transition-colors duration-300">
                                    Enhanced Home Security & Safety
                                </span>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm sm:text-lg font-medium group-hover:text-[#39e75f] transition-colors duration-300">
                                    Energy Efficiency & Cost Savings
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="sm:pt-4">
                            <Link to={'about'} className="group cursor-pointer w-fit bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                                <span>Learn more</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative">
                        <div className="rounded-3xl w-full h-full lg:h-[500px] flex items-center justify-center">
                            <img src={about} alt="About Asbionix" className="object-contain rounded-3xl shadow-lg" />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-7 -right-4 w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full animate-bounce"></div>
                        <div className="absolute -left-4 w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}