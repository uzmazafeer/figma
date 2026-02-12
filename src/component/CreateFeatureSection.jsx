import React, { useState } from "react";
import { motion } from "framer-motion";
import img from "../../public/image/feature-image.png";
export default function CreateFeatureSection() {
  const [activeTab, setActiveTab] = useState("Create");

  const tabs = ["Create", "Distribute", "Collect", "Analyze"];

  return (
    <section className="w-full bg-[#eff4f5]">
      {/* Top Tabs */}
      <div className="bg-white text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm md:text-base font-medium transition ${
                activeTab === tab ? "text-teal-400" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-teal-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{activeTab}</h2>

          <h3 className="text-lg font-semibold">
            Advanced research software
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Ask the right questions and get the answers you need with the
            most secure and collaborative survey platform on the market
            featuring powerful logic, sophisticated analytics, and built-in
            automation and integration.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
            Get started for free
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          key={activeTab + "image"}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={img} // put your image in public folder
            alt="feature"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
