"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

const items = [
  { quote: "Affordable Homes of South Texas made my dream of owning a home a reality. Their team was supportive and knowledgeable throughout the entire process.", name: "- Maria G." },
  { quote: "Affordable Homes of South Texas made my dream of owning a home a reality. Their team was supportive and knowledgeable throughout the entire process.", name: "- Maria G." },
  { quote: "Affordable Homes of South Texas made my dream of owning a home a reality. Their team was supportive and knowledgeable throughout the entire process.", name: "- Maria G." },
  { quote: "Affordable Homes of South Texas made my dream of owning a home a reality. Their team was supportive and knowledgeable throughout the entire process.", name: "- Maria G." },
  { quote: "Affordable Homes of South Texas made my dream of owning a home a reality. Their team was supportive and knowledgeable throughout the entire process.", name: "- Maria G." },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full py-8">
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
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white w-full border-1 border-gray-300 shadow-md rounded-lg p-5 mb-10 text-left">
              <p>{item.quote}</p>
              <h4 className="pt-3">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
