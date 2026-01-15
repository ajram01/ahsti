import { Button } from "../../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactRequest from "@/components/contactrequest";
import { CTASection } from "@/components/cta";
import { RepairsAccordion } from "@/components/RepairsAccordion";
import Link from "next/link";

export default function Repairs() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header4.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">HOME REPAIR</h4>
            <h1 className="text-white">Home Improvement</h1>
            <p className="text-white lg:w-2/3">Explore home repair and replacement programs designed to help eligible homeowners in the Rio Grande Valley improve their living conditions through affordable financing and community partnerships. All programs are income based.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="/buy-a-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Buy A Home</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* subdivisions section */}
      <div className="max-w-[1140px] w-full py-10 mx-auto justify-center flex gap-5 flex flex-col-reverse lg:flex-row px-5 lg:px-0">
        <div className="w-full lg:w-1/2 bg-[url(/images/family4.png)] bg-center bg-cover rounded-lg h-[400px] lg:h-auto"></div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4>INCOME-BASED LOCAL PROGRAMS</h4>
          <h2 className="text-base/12">Home Repair Assistance</h2>
          <RepairsAccordion />
        </div>



      </div>


      {/* cta section */}
      <CTASection />

      {/* Contact Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
        <h4>GET STARTED</h4>
        <h2 className="mt-2">
          Construction Repair Form
        </h2>
        {/* homerepair@ahsti.org */}
        <ContactRequest email="salvador@rgvisionmedia.com" />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}