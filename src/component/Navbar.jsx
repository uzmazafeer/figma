import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className=".flex-shrink-0 flex items-center cursor-pointer">
            {/* Circle Logo Placeholder - Images folder se path update kar sakte hain */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-[6px] border-[#00d2d3] border-r-transparent rotate-45"></div>
              <span className="text-2xl font-bold text-[#1a202c] tracking-tight">circle</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#00d2d3] font-medium transition">Products</a>
            <a href="#" className="text-gray-600 hover:text-[#00d2d3] font-medium transition">Resources</a>
            <a href="#" className="text-gray-600 hover:text-[#00d2d3] font-medium transition">Testimonials</a>
            <a href="#" className="text-gray-600 hover:text-[#00d2d3] font-medium transition">Pricing</a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black font-medium px-4 py-2">
              Log in
            </button>
            <button className="bg-[#1a202c] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-lg">
          <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Products</a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Resources</a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Testimonials</a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Pricing</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <button className="w-full text-center py-2 text-gray-600 font-medium">Log in</button>
            <button className="w-full text-center py-2 bg-[#1a202c] text-white rounded-md font-medium">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;