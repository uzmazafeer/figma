import React from "react";
import { motion } from "framer-motion";
import award1 from "../../public/image/award1.png";
import award2 from "../../public/image/award2.png";
import award3 from "../../public/image/award3.png";
import award4 from "../../public/image/award4.png";
import award5 from "../../public/image/award5.png";
import award6 from "../../public/image/award6.png";

export default function AwardsSection() {
  const awards = [
    { title: "Market leader across 18 categories", img: award1 },
    { title: "Most loved SaaS tool in 2021", img: award2 },
    { title: "Category leader in 2022", img: award3 },
    { title: "Most recommended tool in 2021", img: award4 },
    { title: "Champion in survey tool 2022", img: award5 },
    { title: "Top performer spring 2021", img: award6 },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">
        An award winning platform, loved by customers.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-10 rounded-2xl shadow-md hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={award.img} className="h-20 mx-auto mb-6" />
            <p className="font-semibold">{award.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
