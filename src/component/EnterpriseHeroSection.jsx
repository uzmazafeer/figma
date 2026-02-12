 import React from "react";
 import imgs from "../../public/image/enterprise.jpg";

export default function EnterpriseHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="text-white-100 px-8 py-16 space-y-6">
          <p className="text-lg text-white-300 leading-relaxed max-w-md">
            Check out Sagolytics enterprise feedback and experience
            management platform.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-semibold rounded">
              Learn more
            </button>

            <button className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 font-semibold rounded transition">
              Schedule a consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-80 w-full relative">
          <img
            src={imgs} // put your image in public folder
            alt="enterprise"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
