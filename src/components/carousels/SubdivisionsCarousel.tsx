"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "../ui/button";
import Link from "next/link";

const items = [
  {
    name: "Crocket Estates",
    location: "ALAMO, TX",
    desc: "Crockett Estates offers new, thoughtfully designed homes ranging from 1,579 to 1,876 sq. ft. in Alamo, TX, featuring gas service, included front landscaping, and homebuyer assistance for eligible households.",
    img: "/subdivisions/crockett-estates.png",
    file: "/files/crockett-estates.pdf"
  },
  {
    name: "Crown Haven",
    location: "MERCEDES, TX",
    desc: "Crown Haven features Accent Series floor plans from 1,106 to 1,563 sq. ft., with options for no carport, carport, or a 1-car garage, unique front landscaping, and homebuyer assistance for eligible households.",
    img: "/subdivisions/crown-haven.png",
    file: "/files/crown-haven.pdf"
  },
  {
    name: "Jaguar Heights",
    location: "EDINBURG, TX",
    desc: "Jaguar Heights features floor plans from 1,579 to 1,896 sq. ft., with optional stucco and stone exteriors, included front landscaping, and homebuyer assistance available for eligible households.",
    img: "/subdivisions/crockett-estates.png",
    file: "/files/jaguar-heights.pdf"
  },
  {
    name: "Mid Valley Estates",
    location: "WESLACO, TX",
    desc: "Mid Valley Estates in Weslaco features floor plans from 1,579 to 1,896 sq. ft., with optional stucco and stone exteriors, included front landscaping, and homebuyer assistance for eligible households.",
    img: "/subdivisions/mid-valley-estates.png",
    file: "/files/mid-valley-estates.pdf"
  },
  {
    name: "Speedy Trails",
    location: "MISSION, TX",
    desc: "Speedy Trails offers move-in ready Mission Series homes from 1,579 to 1,896 sq. ft., featuring optional stucco and stone exteriors, included front landscaping, and homebuyer assistance for eligible households.",
    img: "/subdivisions/speedy-trails.png",
    file: "/files/speedy-trails.pdf"
  },
  {
    name: "Stonebriar",
    location: "MCALLEN, TX",
    desc: "Stonebriar at Trinity Oaks features homes from 1,579 to 1,896 sq. ft., with optional stucco and stone exteriors, included front landscaping, and homebuyer assistance available for eligible households.",
    img: "/subdivisions/crown-haven.png",
    file: "/files/stonebriar.pdf"
  },
  {
    name: "TIGER CROSSING",
    location: "MERCEDES, TX",
    desc: "Tiger Crossing offers Classic and Exploration Series homes from 1,575 to 1,878 sq. ft., featuring 3- and 4-bedroom options, included front landscaping, and homebuyer assistance for eligible households.",
    img: "/subdivisions/tiger-crossing.png",
    file: "/files/tiger-crossing.pdf"
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
                <div className="w-full lg:w-[1140px] h-[600px] mx-auto justify-center flex flex-col text-center">
                  <h4 className="text-white">{item.location}</h4>
                  <h2 className="text-white">{item.name}</h2>
                  <p className="text-white w-2/3 mx-auto">{item.desc}</p>
                  <div className="flex flex-row gap-3 mx-auto mt-5">
                    <Link href={item.file} passHref target="_blank" rel="noopener noreferrer"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Learn More</Button></Link>
                    <Link href="/subdivisions"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">All Subdivisions</Button></Link>
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
