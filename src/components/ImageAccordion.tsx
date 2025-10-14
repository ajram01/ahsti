"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionImage {
  src: string;
  alt: string;
  title?: string;
}

const images: AccordionImage[] = [
  { src: "/accordion/accordion1.png", alt: "House 1", title: "Home Buying" },
  { src: "/accordion/accordion2.png", alt: "House 2", title: "Home Improvement" },
  { src: "/accordion/accordion3.png", alt: "House 3", title: "Emergency Repair Grant" },
  { src: "/accordion/accordion4.png", alt: "House 4", title: "Rental & Mortgage Assistance" },
];

export default function ImageAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex h-[450px] w-full overflow-hidden rounded-2xl">
      {images.map((img, index) => (
        <div
          key={index}
          className={`relative flex-1 transition-all duration-500 ease-in-out ${
            hoveredIndex === index
              ? "flex-[4]"
              : hoveredIndex !== null
              ? "flex-[1]"
              : "flex-[2]"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 ease-in-out"
          />
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500 flex items-end justify-center pb-10 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-white text-2xl font-semibold drop-shadow-md text-center">
              {img.title}
              <p>Learn More →</p>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
