"use client";

import { useState } from "react";
import Image from "next/image";

const programs = [
  {
    title: "Explore Iconic Landmarks",
    shortDescription: "Dive into Australia’s most famous landmarks, from the Sydney Opera House to the majestic Uluru.",
    fullDescription:
      "Discover the heart of Australia by exploring its most iconic landmarks. Marvel at the architectural brilliance of the Sydney Opera House, feel the spirit of the outback at Uluru, and immerse yourself in the culture and history of these world-renowned destinations. Guided tours, local delicacies, and breathtaking sights await!",
    image: "/White_sundays.png",
  },
  {
    title: "Discover Hidden Gems",
    shortDescription: "Step off the beaten path and uncover Australia’s best-kept secrets.",
    fullDescription:
      "Unveil a side of Australia you’ve never seen before. From secluded beaches kissed by turquoise waves to charming outback towns where every corner tells a story, this adventure takes you to places only a few have witnessed. Enjoy authentic experiences with locals and leave with memories of unparalleled beauty.",
    image: "/Palace3Day2Nigh.jpg",
  },
  {
    title: "Adventure in Nature",
    shortDescription: "Embark on thrilling outdoor escapades across Australia’s pristine landscapes.",
    fullDescription:
      "Feel the adrenaline rush as you hike through lush rainforests, snorkel in crystal-clear waters teeming with marine life, and camp under a sky full of stars. This is your chance to reconnect with nature, witness diverse wildlife, and experience Australia’s natural wonders like never before.",
    image: "/Travel-Buddies-Tile-1.png",
  },
  {
    title: "Cultural Immersion Experiences",
    shortDescription: "Connect with Australia’s rich cultural heritage and vibrant traditions.",
    fullDescription:
      "Immerse yourself in the soul of Australia through authentic cultural experiences. Participate in Aboriginal art workshops, witness traditional ceremonies, and explore the stories passed down through generations. Discover the fusion of modern and traditional cultures in vibrant cities and rural communities. With guided activities, heartfelt connections, and unforgettable moments, this is a journey of discovery and respect.",
    image: "/program4.jpg",
  },
];

export default function Programs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 via-white to-teal-50">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Discover Australia</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your gateway to unforgettable experiences awaits! Let us take you on a journey filled with wonder, beauty, and adventure.
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        {programs.map((program, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={program.image}
              alt={program.title}
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
              <p className="text-gray-600">
                {expandedIndex === index ? program.fullDescription : program.shortDescription}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-teal-500 font-semibold mt-4 inline-block"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
