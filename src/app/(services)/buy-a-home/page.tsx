import { Button } from "../../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import VideoFrame from "@/components/VideoFrame";
import Link from "next/link";

export default function BuyAHome() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header8.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">BUY A HOME</h4>
            <h1 className="text-white">Explore Our Programs. </h1>
            <p className="text-white lg:w-2/3">Discover how Affordable Homes of South Texas, Inc. helps hardworking families achieve the dream of homeownership through education, guidance, and affordable, energy-efficient homes.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="https://www.myahstihome.org"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Apply Now</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* steps section */}
      <div className="max-w-[1140px] w-full px-5 py-10 mx-auto justify-center gap-5 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4>WHAT IS AHSTI?</h4>
          <h2 className="text-base/12">A Nonprofit Helping Families Build Homes.</h2>
          <p className="mt-3">Affordable Homes of South Texas, Inc. (AHSTI) is a nonprofit organization dedicated to helping families become homeowners. For over 50 years, we’ve built quality homes and empowered families with financial education and support.
            <br /><br />
            We don’t just build houses — we build stability, opportunity, and stronger communities.</p>
        </div>

        <div className="w-full lg:w-1/2 rounded-lg"><VideoFrame src="https://player.vimeo.com/video/906513150" /></div>
      </div>

      {/* steps section 2 */}
      <div className="w-full bg-white">
        <div className="max-w-[1140px] w-full px-5 py-10 mx-auto justify-center gap-5 flex flex-col-reverse lg:flex-row">

          <div className="w-full lg:w-1/2 rounded-lg"><VideoFrame src="https://player.vimeo.com/video/906512908" /></div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4>HOW IS AHSTI DIFFERENT?</h4>
            <h2 className="text-base/12">Community-Driven Homeownership.</h2>
            <p className="mt-3">Unlike traditional builders or lenders, AHSTI is community-driven — not profit-driven. We focus on affordable financing, energy-efficient design, and personalized support for each buyer.
              <br /><br />
              From homebuyer to closing, we’re with you every step of the way.</p>
          </div>

        </div>
      </div>

      {/* steps section 3 */}
      <div className="max-w-[1140px] w-full px-5 py-10 mx-auto justify-center gap-5 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4>WHAT IS PROGRAM ELIGIBILITY?</h4>
          <h2 className="text-base/12">Easy to Qualify. Ready to Succeed.</h2>
          <p className="mt-3">AHSTI homeownership programs are designed for working families who meet income and credit guidelines. Eligibility is based on your household size, income level, and financial readiness. We’ll guide you through every step.
          </p>
          <Button className="py-6 mt-5" size="lg">View Current HUD Income Limits</Button>
        </div>

        <div className="w-full lg:w-1/2 rounded-lg"><VideoFrame src="https://player.vimeo.com/video/906512930" /></div>
      </div>

      {/* steps section 4 */}
      <div className="w-full bg-white">
        <div className="max-w-[1140px] w-full px-5 py-10 mx-auto justify-center gap-5 flex flex-col-reverse lg:flex-row">

          <div className="w-full lg:w-1/2 rounded-lg"><VideoFrame src="https://player.vimeo.com/video/906521238" /></div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4>WHAT KIND OF HOMES DOES AHSTI BUILD?</h4>
            <h2 className="text-base/12">Built With Care, Designed For Your Family’s Future.</h2>
            <p className="mt-3">Our homes are designed to be affordable, durable, and energy-efficient. Each one is thoughtfully built in safe, growing neighborhoods close to schools, parks, and amenities.
              <br /><br />
              Whether you’re buying your first home or planning for your family’s future, AHSTI has a design that fits your lifestyle and budget.</p>
          </div>

        </div>
      </div>

      {/* cta section */}
      <CTASection />

      {/* Contact Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
        <h4>GET STARTED</h4>
        <h2 className="mt-2">
          Contact Us
        </h2>
        {/* welcomehome@ahsti.org */}
        <ContactSection email="welcomehome@ahsti.org" />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}