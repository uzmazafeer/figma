 import React from "react";
 import img1 from "../../public/image/Rectangle 45.png";
 import img2 from "../../public/image/Rectangle 46.png";
 import img3 from "../../public/image/Rectangle 47.png";

export default function ResourcesCardsSection() {
  const cards = [
    {
      img: img1,
      title: "Excepteur sint occaecat cupidatat non proident",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    },
    {
      img: img2,
      title: "Quis nostrum exercitationem ullam corporis suscipit",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
      img: img3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text: "Coluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
  ];

  return (
    <section className="w-full bg-[#e9f5f8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Label */}
        <div className="text-center mb-12">
          <span className="bg-teal-500/20 text-teal-700 text-xs px-4 py-1 rounded-full">
            RESOURCES
          </span>
          <h3 className="text-2xl font-bold mt-4">stay in the know</h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col"
            >
              <img
                src={card.img}
                alt="resource"
                className="w-full h-44 object-cover rounded-md mb-6"
              />

              <h3 className="font-semibold text-lg mb-4">{card.title}</h3>

              <p className="text-gray-600 mb-6">{card.text}</p>

              <button className="mt-auto bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded font-medium w-fit">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
