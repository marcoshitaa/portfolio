import React from 'react';
import me from '../assets/foto3.png';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div name="home" className="min-h-screen w-full bg-slate-950 relative" style={{backgroundColor: '#020617'}}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 md:min-h-[calc(100vh-80px)] px-8 gap-16">
        
        {/* Left side - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 max-w-lg">
          
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-blue-400 text-lg font-medium tracking-wide uppercase text-sm">
              {t("home.charge")}
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t("home.title")}
            </h2>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5">
            <Link
              to="experience"
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-blue-400"
              className={`
                relative transition-all duration-300 
                'text-sm font-medium'}
                text-slate-300 hover:text-blue-400 cursor-pointer
                after:content-[''] after:absolute after:w-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-blue-400 
                after:transition-all after:duration-300 
                hover:after:w-full
              `}
            >
              {t("home.about-me")}
            </Link>
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Tech stack indicators */}
          <div className="flex gap-6 pt-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700/50">
                <span className="text-blue-400 font-bold text-sm">PHP</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700/50">
                <span className="text-blue-400 font-bold text-sm">Laravel</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700/50">
                <span className="text-blue-400 font-bold text-sm">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative">
          
          {/* Main image container - mejorado pero limpio */}
          <div className="relative group">
            {/* Subtle border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
            
            {/* Image frame */}
            <div className="relative bg-slate-900 p-6 rounded-3xl border border-slate-800/50 shadow-2xl">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-600 p-1">
                <img src={me} alt="Profile Photo" className="w-full h-full object-contain rounded-2xl" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-slate-600">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-5 flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;