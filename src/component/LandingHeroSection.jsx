import React from "react";
import { motion } from "framer-motion";
import { img } from "motion/react-client";
import image from "../../public/image/computer.png";

export default function LandingHeroSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <span className="inline-block bg-teal-500/20 text-teal-900 px-4 py-1 rounded-full text-sm font-medium">
            OUR PROMISE
          </span>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Whether you want to edit your Google Docs, resolve Jira issues,
            or collaborate over Zoom.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Circle has 100+ integrations with tools you already use and
            love.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg">
            Get started free
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image} // Replace with your image path
              alt="Team collaboration"
              className=" object-cover"
              height={500} width={400}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
