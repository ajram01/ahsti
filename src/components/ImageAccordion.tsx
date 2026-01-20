"use client";

import { useState } from "react";
import Image from "next/image";
interface AccordionImage {
  src: string;
  alt: string;
  title?: string;
  link?: string;
}

const images: AccordionImage[] = [
  { src: "/accordion/accordion1.png", alt: "House 1", title: "Home Buying", link:"/buy-a-home" },
  { src: "/accordion/accordion2.png", alt: "House 2", title: "Home Improvement", link:"/repair-my-home" },
  { src: "/accordion/accordion3.png", alt: "House 3", title: "Emergency Repair Grant", link:"/repair-my-home" },
  { src: "/accordion/accordion4.jpg", alt: "House 4", title: "Rental & Mortgage Assistance", link:"/repair-my-home" },
];

export default function ImageAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="
        flex w-full overflow-hidden
        flex-col sm:flex-row
        h-auto sm:h-[450px]
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`
            relative transition-all duration-500 ease-in-out
            w-full sm:h-auto h-[250px]
            ${hoveredIndex === index
              ? "sm:flex-[4]"
              : hoveredIndex !== null
                ? "sm:flex-[1]"
                : "sm:flex-[2]"
            }
          `}
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
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500 flex items-end justify-center pb-10 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <h3 className="text-white text-2xl font-semibold drop-shadow-md text-center">
              {img.title}
              <p><a href={img.link}>Learn More →</a></p>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
