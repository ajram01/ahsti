import React from 'react'
import * as motion from "motion/react-client"
import Image from 'next/image';

const SliderImages = () => {

  const slides = [
    { img: "/credentials/1.png" },
    { img: "/credentials/2.png" },
    { img: "/credentials/3.png" },
    { img: "/credentials/4.png" },
    { img: "/credentials/5.png" },
    { img: "/credentials/6.png" },
    { img: "/credentials/7.png" },
    { img: "/credentials/8.png" },
  ];

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="w-full relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center text-6xl">
              <Image src={slide.img} width={100} height={100} alt="slider" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderImages;
