// Import required components and assets
import React from 'react';
import me from '../assets/foto3.png';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div name="home" className="h-screen w-full bg-[#0a192f] pt-10">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-y-10 md:gap-x-10">
        {/* Left side - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {t("home.title")}
          </h2>
          <div className="mt-8">
            <Link
              to="about"
              smooth
              duration={500}
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl shadow-md transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              {t('home.about-me')}
            </Link>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="p-4 bg-gradient-to-tr from-green-400 to-blue-500 rounded-3xl shadow-2xl">
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl w-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
