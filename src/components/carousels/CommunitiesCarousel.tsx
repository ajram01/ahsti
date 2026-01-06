"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
import Link from "next/link";

const items = [
  { location: "ALAMO, TX", logo: "/subdivisions/white/crockett-estates.png", backgroundImage: "/subdivisions/crockett-estates.png", file: "/files/crockett-estates.pdf" },
  { location: "MERCEDES, TX", logo: "/subdivisions/white/crown-haven.png", backgroundImage: "/subdivisions/crown-haven.png", file: "/files/crown-haven.pdf" },
  { location: "EDINBURG, TX", logo: "/subdivisions/white/jaguar-heights.png", backgroundImage: "/subdivisions/speedy-trails.png", file: "/files/jaguar-heights.pdf" },
  { location: "WESLACO, TX", logo: "/subdivisions/white/mid-valley-estates.png", backgroundImage: "/subdivisions/mid-valley-estates.png", file: "/files/mid-valley-estates.pdf" },
  { location: "MISSION, TX", logo: "/subdivisions/white/speedy-trails.png", backgroundImage: "/subdivisions/speedy-trails.png", file: "/files/speedy-trails.pdf" },
  { location: "MERCEDES, TX", logo: "/subdivisions/white/tiger-crossing.png", backgroundImage: "/subdivisions/tiger-crossing.png", file: "/files/tiger-crossing.pdf" },
  { location: "MCALLEN, TX", logo: "/subdivisions/white/stonebriar.png", backgroundImage: "/subdivisions/speedy-trails.png", file: "/files/stonebriar.pdf" },
];

export default function CommunitiesCarousel() {
  return (
    <div className="w-full [--swiper-pagination-bullet-inactive-color:#64c6ff!important]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2000}
        freeMode={true}
        allowTouchMove={true}
        breakpoints={{
          0: {
            slidesPerView: 1, //  mobile
          },
          640: {
            slidesPerView: 1.5, //  small tablets
          },
          768: {
            slidesPerView: 2, //  tablets
          },
          1024: {
            slidesPerView: 3, //  desktop
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Link href={item.file} target="_blank" rel="noopener noreferrer">
              <div className="w-full border border-gray-300 shadow-md rounded-lg my-10 text-center bg-cover bg-center transform hover:translate-y-[-5px] transition-all hover:shadow-lg" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                <div className="bg-black/50 p-5 text-white rounded-lg flex flex-col justify-end h-[350px]">
                  <h4>{item.location}</h4>
                  < hr className="w-1/2 mx-auto pb-1" />
                  <Image src={item.logo} alt={`${item.location} logo`} width={200} height={100} className="mx-auto" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
