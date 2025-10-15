"use client";

import Image from "next/image";
import styles from "./ContinuousCarousel.module.css"; // import local CSS module

const images = [
  { src: "/credentials/1.png", alt: "Cred 1" },
  { src: "/credentials/2.png", alt: "Cred 2" },
  { src: "/credentials/3.png", alt: "Cred 3" },
  { src: "/credentials/4.png", alt: "Cred 4" },
  { src: "/credentials/5.png", alt: "Cred 5" },
  { src: "/credentials/6.png", alt: "Cred 6" },
  { src: "/credentials/7.png", alt: "Cred 7" },
  { src: "/credentials/8.png", alt: "Cred 8" },
];

export default function ContinuousCarousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className={`${styles.marquee} flex`}>
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] h-[100px] mx-10 relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="180px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
