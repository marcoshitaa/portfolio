import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0a192f] to-[#1c2833] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Me Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-sm leading-relaxed">
            I’m a passionate developer focused on building visually stunning and functional web applications.
            Let's create something amazing together!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 transition-all duration-300 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 transition-all duration-300 ease-in-out"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-all duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Connect with Me</h2>
          <p className="text-sm mb-4">Let’s get social! Follow me on:</p>
          <div className="flex space-x-5">
          
          {/* <a href="https://github.com/">GitHub</a> */}

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-all duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-5 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500">Marcos Hita</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
