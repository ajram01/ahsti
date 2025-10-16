"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "../ui/button";

const items = [
  { 
    name: "Crocket Estates",
    location: "ALAMO, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/crockett-estates.png" 
  },
  { 
    name: "Crown Haven",
    location: "WESLACO, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/crown-haven.png" 
  },
  { 
    name: "Jaguar Heights",
    location: "EDINBURG, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/crockett-estates.png" 
  },
  { 
    name: "Lakewood Estates",
    location: "SAN JUAN, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/tiger-crossing.png" 
  },
  { 
    name: "Mid Valley Estates",
    location: "WESLACO, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/mid-valley-estates.png" 
  },
  { 
    name: "Speedy Trails",
    location: "MISSION, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/speedy-trails.png" 
  },
  { 
    name: "Stonebriar",
    location: "MCALLEN, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/crown-haven.png" 
  },
  { 
    name: "TIGER CROSSING",
    location: "MERCEDES, TX", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad", 
    img: "/subdivisions/tiger-crossing.png" 
  },
];

export default function SubdivisionCarousel() {
  return (
    <div className="w-full py-8 [--swiper-pagination-bullet-inactive-color:#FFFFFF!important]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        allowTouchMove={true}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${item.img})`, // 👈 use item image dynamically
              }}
            >
              <div className="bg-gradient-to-b from-black/60 to-black/25 bg-blend-overlay">
                <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col text-center">
                  <h4 className="text-white">{item.location}</h4>
                  <h2 className="text-white">{item.name}</h2>
                  <p className="text-white w-2/3 mx-auto">{item.desc}</p>
                  <div className="flex flex-row gap-3 mx-auto mt-5">
            <Button className="w-[200px] py-6"  size="lg">Learn More</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">All Subdivisions</Button>
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
