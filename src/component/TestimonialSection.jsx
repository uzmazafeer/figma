import React from "react";
import imgs from "../../public/image/Testimonial.jpg";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
        {/* Left Side */}
        <div className="text-white space-y-8">
          <span className="bg-teal-500/20 text-teal-700 text-xs px-4 py-1 rounded-full">
            TESTIMONIALS
          </span>
          <br />
          <br />
          <h3 className="text-2xl font-bold text-teal-950" > See how  <br />customers <br />
drive impact</h3>

          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 text-white font-semibold rounded">
            See case studies
          </button>
        </div>

        {/* Center Image */}
        <div className="relative col-span-1 md:col-span-1" height={200} width={100}>
          <img
            src={imgs} // put your image in public folder
            alt="testimonial"
            className="rounded-lg  object-cover "  
            height={100} width={200}/>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
              <span className="text-white text-2xl">▶</span>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#d7e6e8] p-8 rounded-md space-y-4">
          <h3 className="text-xl font-bold text-blue-700">PayPal</h3>

          <p className="text-gray-700 leading-relaxed">
            "I used to have a bunch of different tools I had to pay for,
            with Circle you get everything in one bundle."
          </p>

          <div>
            <p className="font-semibold">Michel Dedrick</p>
            <p className="text-gray-600 text-sm">
              Senior Conversion Optimizer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
