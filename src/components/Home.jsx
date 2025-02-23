// Import required components and assets
import React from 'react';
import me from '../assets/foto2.png'; // Your profile photo
import { Link } from "react-scroll"; // For smooth scrolling
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

 return (
   // Main container - full screen with dark background
   <div name="home" className="h-screen w-full bg-[#0a192f]">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center h-full">
         {/* Main headline */}
         <h2 className="text-4xl sm:text-7xl font-bold text-white">
           {t("home.title")}
         </h2>
         
         <div className="flex flex-col mt-10">
           <Link to="about" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            {t("home.about-me")}
           </Link>
         </div>
       </div>
       {/* Right side - Profile image */}
        <div className="p-8 bg-gradient-to-tr from-green-400 to-blue-500 rounded-3xl shadow-2xl">
          <img 
            src={me} 
            alt="my profile" 
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
     </div>
   </div>
 );
};

export default Home;