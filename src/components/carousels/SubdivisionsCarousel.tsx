"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import { Button } from "../ui/button";

const items = [
  { name: "Speedy Trails - Mission, TX", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { name: "Speedy Trails - Mission, TX", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { name: "Speedy Trails - Mission, TX", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { name: "Speedy Trails - Mission, TX", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { name: "Speedy Trails - Mission, TX", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
];

export default function SubdivisionCarousel() {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000, // continuous motion
          disableOnInteraction: false,
        }}
        speed={1000} // smooth continuous scroll speed
        freeMode={true}
        allowTouchMove={true} // optional: disables manual dragging
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[url(/subdivisions/speedy-trails.png)] bg-cover bg-no-repeat bg-center">
            <div className="bg-gradient-to-b from-black/60 to-black/25 bg-blend-overlay">
                <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col text-center">
                <h4 className="text-white">NONPROFIT • HUD-APPROVED COUNCELING</h4>
                <h1 className="text-white">{item.name}</h1>
                <p className="text-white w-2/3 mx-auto">{item.desc}</p>
                <div className="flex flex-row gap-3 mx-auto mt-5">
                    <Button className="w-3xs" size="lg">Learn More</Button>
                    <Button className="w-3xs" size="lg" variant="secondary">All Subdivisions</Button>
                </div>
                </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
