// Import necessary dependencies
import React, { useState } from 'react'; 
// Import icons we'll use for our navbar
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector';


const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t } = useTranslation();

  const menuItems = [
    { name: t("navbar.home"), to: 'home' },
    { name: t("navbar.about"), to: 'about' },
    { name: t("navbar.work"), to: 'work' },
    { name: t("navbar.experience"), to: 'experience' }

  ];

  
  const socialLinks = [
    { name: 'LinkedIn', to: 'https://es.linkedin.com/in/marcos-hita-335756193', icon: <FaLinkedin size={30} />, color: 'bg-[#0077B5]' },
    { name: 'GitHub', to: 'https://github.com/marcoshitaa', icon: <FaGithub size={30} />, color: 'bg-[#333]' },
  ];

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className = "cursor-pointer">
        <Link to={item.to} smooth={true} duration={500}>
          {item.name}
        </Link>
      </li>
    ));
  };

  const renderSocialLinks = (links) => {
    return links.map((link, index) => (
      <li key={index} className={`w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${link.color}`}>
      <a href={link.to} className='flex justify-between items-center w-full text-gray-300 px-4' target='_blank'>
        {link.name} {link.icon}
      </a>
      </li>
    ));
  };

  const mobileMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className='py-6 text-4xl'>
        <Link onClick={handleClick} to={item.to} smooth={true} duration={500}>
          {item.name}
        </Link>
      </li>
    ));
  };

  return (
    // Main navbar container - fixed at top, full width
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-50'>
      {/* Your logo or brand name */}
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>MH</h1>
      </div>

      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8'>
        <LanguageSelector />
        {renderMenuItems(menuItems)}
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        {mobileMenuItems(menuItems)}
      </ul>

      {/* Social icons - hidden on smaller screens, shown on large screens */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        {renderSocialLinks(socialLinks)}
      </div>
    </div>
  );
};

export default Navbar;