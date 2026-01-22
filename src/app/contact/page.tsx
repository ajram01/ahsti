import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import { ContactTabs } from "@/components/ContactTabs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AHSTI",
  description: "Contact AHSTI to learn more about investment opportunities, projects, and community development initiatives.",
};

export default function Contact() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header9.jpg)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">CONTACT AHSTI</h4>
            <h1 className="text-white">We’re Here To Help.</h1>
            <p className="text-white lg:w-2/3">Connect with AHSTI to learn more about our housing programs, get help with your mortgage account, or ask questions about home repair, replacement, or financing options—our team is ready to support you by phone, email, or in person.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="https://www.myahstihome.org"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Apply Now</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="max-w-[1140px] w-full py-10 mx-auto justify-center flex flex-col text-center overflow-x-hidden">
        <ContactTabs />
      </div>

      {/* carousel section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}