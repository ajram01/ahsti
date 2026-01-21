import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import CommunitiesCarousel from "@/components/carousels/CommunitiesCarousel";
import Link from "next/link";

export default function Subdivisions() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header3.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">SUBDIVISIONS</h4>
            <h1 className="text-white">We Build Communities</h1>
            <p className="text-white lg:w-2/3">Each subdivision represents our ongoing commitment to helping families achieve the dream of homeownership in neighborhoods they can be proud of. We’re building hope, opportunity, and lasting connections across South Texas.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="https://www.myahstihome.org"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Apply Now</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* subdivisions section */}
      <div className="max-w-[1140px] w-full py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-full text-center px-5 lg:px-0">
          <h4>OUR COMMUNITIES</h4>
          <h2 className="text-base/12">Affordable. Sustainable. Community-Focused.</h2>
          <CommunitiesCarousel />

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
        <ContactSection />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}