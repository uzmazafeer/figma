import React from 'react';

const Footer = () => {
  // Simple Inline SVG Icons taaki koi library install na karni pade
  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
  );

  return (
    <footer className="bg-[#1c1c1c] text-gray-400 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Map Column */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="relative w-40 h-24 flex items-center justify-center">
               {/* USA Map Shape (Simple CSS/Text fallback) */}
               <div className="absolute inset-0 bg-[#00d2d3] opacity-80" style={{ clipPath: 'polygon(10% 25%, 35% 25%, 45% 10%, 65% 10%, 85% 20%, 95% 40%, 90% 80%, 70% 90%, 50% 85%, 30% 90%, 10% 70%)' }}></div>
               <p className="relative text-white text-[10px] font-bold text-center leading-tight z-10">
                Made with lots of ❤️  in San Francisco
              </p>
            </div>
          </div>

          {/* Links: Products */}
          <div>
            <h3 className="text-white font-bold mb-5">Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition">Delta</li>
              <li className="hover:text-white cursor-pointer transition">Sigma</li>
              <li className="hover:text-white cursor-pointer transition">Zeta</li>
              <li className="hover:text-white cursor-pointer transition">Alpha</li>
              <li className="hover:text-white cursor-pointer transition">Acumen</li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h3 className="text-white font-bold mb-5">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition">Help</li>
              <li className="hover:text-white cursor-pointer transition">Training Videos</li>
              <li className="hover:text-white cursor-pointer transition">Webinars</li>
              <li className="hover:text-white cursor-pointer transition">Request a Demo</li>
              <li className="hover:text-white cursor-pointer transition">Create Surveys</li>
              <li className="hover:text-white cursor-pointer transition">Quiz Maker</li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h3 className="text-white font-bold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Team</li>
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Border Line */}
        <div className="border-t border-gray-800 w-full mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">Copyright 2022 Circle. All rights reserved.</p>

          {/* Social Icons (Plain White Circles) */}
          <div className="flex gap-4">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200">
              <LinkedInIcon />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200">
              <TwitterIcon />
            </div>
          </div>

          {/* Footer Bottom Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-gray-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-white cursor-pointer">Data & Security</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-white cursor-pointer">Data & Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;