import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  
  const handleClick = () => setNav(!nav);

  // Efecto para detectar scroll y cambiar el navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [nav]);

  const menuItems = [
    { name: 'navbar.home', to: 'home' },
    { name: 'navbar.about', to: 'about' },
    // { name: 'Proyectos', to: 'work' },
    { name: 'navbar.experience', to: 'experience' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      to: 'https://es.linkedin.com/in/marcos-hita-335756193', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverColor: 'hover:text-blue-400'
    },
    // {
    //   name: 'Email',
    //   to: 'mailto:marcos.hita@optimaretail.es',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    //     </svg>
    //   ),
    // }
    // { 
    //   name: 'GitHub', 
    //   to: 'https://github.com/marcoshitaa', 
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    //     </svg>
    //   ),
    //   hoverColor: 'hover:text-blue-400'
    // },
  ];

  const renderMenuItems = (items, mobile = false) => {
    return items.map((item, index) => (
      <li key={index} className="cursor-pointer">
        <Link
          to={item.to}
          smooth={true}
          duration={600}
          offset={-70} // ajusta según tu navbar
          onClick={mobile ? handleClick : undefined}
          spy={true}
          activeClass="text-blue-400"
          className={`
            relative transition-all duration-300 
            ${mobile ? 'text-3xl py-4' : 'text-sm font-medium'}
            text-slate-300 hover:text-blue-400 cursor-pointer
            after:content-[''] after:absolute after:w-0 after:h-0.5 
            after:bottom-0 after:left-0 after:bg-blue-400 
            after:transition-all after:duration-300 
            hover:after:w-full
          `}
        >
          {t(item.name)}
        </Link>
      </li>
    ));
  };

  const renderSocialLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <a 
          href={link.to} 
          target='_blank' 
          rel="noreferrer"
          className={`
            flex items-center justify-center w-12 h-12 
            bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50
            text-slate-400 transition-all duration-300 
            ${link.hoverColor} hover:bg-slate-700/50 hover:border-blue-400/50
            hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20
          `}
        >
          {link.icon}
        </a>
      </li>
    ));
  };

  return (
    <>
      {/* Main navbar */}
      <nav className={`
        fixed w-full h-20 flex justify-between items-center px-6 lg:px-8 
        z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-slate-900 border-b border-slate-800 shadow-md' 
          : 'bg-slate-950'
        }
      `}>
        
        {/* Logo */}
        <div className="relative group">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MH
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {renderMenuItems(menuItems)}
          
          {/* Language Selector Placeholder */}
          <LanguageSelector />
        </ul>

        {/* Mobile Hamburger */}
        <button 
          onClick={handleClick} 
          className="md:hidden z-20 p-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-300 hover:text-blue-400 transition-colors"
        >
          {!nav ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-slate-900 backdrop-blur-lg transition-all duration-300 md:hidden
          ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <ul className="flex flex-col justify-center items-center h-full space-y-8">
            {renderMenuItems(menuItems, true)}
            
            {/* Mobile Language Selector */}
            <LanguageSelector />
          </ul>
        </div>
      </nav>

      {/* Social Links - Desktop sidebar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <ul className="flex flex-col space-y-4">
          {renderSocialLinks(socialLinks)}
        </ul>
      </div>
    </>
  );
};

export default Navbar;