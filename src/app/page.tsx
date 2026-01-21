import { Button } from "../components/ui/button";
import ImageAccordion from "@/components/ImageAccordion";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import TestimonialCarousel from "@/components/carousels/TestimonialCarousel";
import SubdivisionCarousel from "@/components/carousels/SubdivisionsCarousel";
import Link from "next/link";
import Events from "@/components/Events";
import Counter from "@/components/counter";
import ContactSection from "@/components/contactsection";
import StatsCarousel from "@/components/carousels/StatsCarousel";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA]">
      {/* Header Section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">
              NONPROFIT • HUD-APPROVED COACHING
            </h4>
            <h1 className="text-white">
              Homes. Community. Hope.
            </h1>
            <p className="text-white lg:w-2/3">
              First-time buyer or longtime resident, we’re here to guide you through
              buying, improving, and sustaining your home — with trusted coaching,
              mortgage financing, and quality neighborhoods.
            </p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="https://www.myahstihome.org"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Apply Now</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>

          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center text-center">
          <h4>ABOUT AHSTI</h4>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
            Building Stronger Communities In The RGV
          </h2>
          <p className="mt-4 text-sm sm:text-base text-center">
            At Affordable Homes of South Texas, Inc., we believe that home ownership is
            more than just having a place to live, it’s about stability, opportunity, and
            pride. Since our founding, we’ve been dedicated to helping families across
            South Texas achieve the dream of owning a home through affordable housing
            programs, financial education, and community development initiatives.
          </p>

          <div className="lg:hidden">
            <StatsCarousel />
          </div>

          {/* Counters */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 lg:gap-25 py-5 hidden lg:flex">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">
                <Counter end={101} />
              </h3>
              <p className="text-sm text-center">Homes <br /> Built</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-3xl font-bold">
                  <Counter prefix="$" end={10} />
                </h3>
                <h3 className="text-3xl font-bold">
                  <Counter prefix="." end={5} suffix="M" />
                </h3>
              </div>
              <p className="text-sm text-center">Loans <br /> Originated</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">
                <Counter end={351} />
              </h3>
              <p className="text-sm text-center">Counseling <br /> Clients</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-center">
            Our mission is to enhance the quality of life by providing affordable housing and related services to eligible families.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[550px] bg-[url(/images/community.jpg)] bg-cover bg-center rounded-lg"></div>
      </div>

      {/* Events Section */}
      <div className="bg-[url(/images/house1.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay">
          <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
            <h4 className="text-white">EVENTS</h4>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold mt-2">
              Building Stronger Communities Together
            </h2>
            <Events />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
        <h4>OUR SERVICES</h4>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
          One Stop Solution For All Your Home Buying And Repair Needs
        </h2>
      </div>

      <ImageAccordion />

      {/* Reviews Section */}
      <div className="max-w-[1140px] w-full pt-10 px-4 mx-auto flex flex-col text-center">
        <h4>TESTIMONIALS</h4>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
          Hear From Our Community
        </h2>
        <TestimonialCarousel />
      </div>

      {/* Subdivisions */}
      <SubdivisionCarousel />

      {/* Contact Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center -mt-8">
        <h4>GET STARTED</h4>
        <h2 className="mt-2">
          Contact Us
        </h2>
        <ContactSection />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>
    </div>
  );
}
