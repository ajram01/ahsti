import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection3 } from "@/components/cta3";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest in AHSTI | AHSTI",
  description: "Invest in AHSTI and be part of transformative projects driving economic growth and lasting community impact.",
};

export default function HopeFundInvestment() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header1.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">INVEST IN AHSTI</h4>
            <h1 className="text-white">Make Your Cash Work Harder.</h1>
            <p className="text-white lg:w-2/3">Align your financial strategy with your values through AHSTI’s partnership with CNote. Access secure, 100% insured cash management and fixed-income solutions that deliver competitive returns while fueling small businesses, affordable housing, and social progress nationwide.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="https://www.mycnote.com/?code=6AAGh7XZc"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Invest in AHSTI</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* subdivisions section */}
      <div className="max-w-[1140px] w-full px-5 lg:px-0 py-10 mx-auto justify-center flex flex-col gap-5 lg:flex-row">

        <div className="w-full lg:w-1/2 bg-[url(/images/family6.png)] bg-top bg-cover rounded-lg h-[400px] lg:h-auto"></div>
        <div className="w-full lg:w-1/2">
          <h4>IMPACT INVESTING</h4>
          <h2 className="text-base/12">How it Works</h2>
          <p className="mt-3">
            <b>1. Deposit or Invest</b><br />
            Choose between CNote’s 100% insured cash management solutions or high-impact fixed-income offerings to suit your liquidity needs.
            <br /><br />
            <b>2. We Connect Your Capital</b><br />
            Your funds fuel a network of 2,500+ mission-driven financial institutions that support small businesses and affordable housing.
            <br /><br />
            <b>3. Drive Lasting Impact</b><br />
            While earning competitive returns, your capital actively fuels measurable economic growth and positive social change in underserved areas.
            <br /><br />
            <b>4. Track Your Progress</b><br />
            Use the seamless and secure platform to monitor your financial performance alongside the tangible stories of the lives you are changing.
          </p>
          <Link href="https://www.mycnote.com/?code=6AAGh7XZc"><Button className="w-[160px] lg:w-[200px]  py-6 mt-5" size="lg">Invest in AHSTI</Button></Link>
        </div>

      </div>

      {/* subdivisions section */}
      <div className="bg-white">
        <div className="max-w-[1140px] w-full px-5 lg:px-0 py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h4>TRUST & SECURITY</h4>
            <h2 className="text-base/12">Capital Preservation</h2>

            <ul className="list-disc mt-3 ml-5 gap-5 flex flex-col">
              <li><b>100% Insured:</b> Cash management deposits are backed by full FDIC and NCUA insurance.</li>
              <li><b>Vetted Partners:</b> Funds are placed with a portfolio of vetted, mission-driven institutions with proven histories of community impact.</li>
              <li><b>Expert Oversight:</b> CNote manages the due diligence and deployment of capital to ensure maximum security and social outcome.</li>
              <li><b>Flexible Liquidity:</b> Designed to align with your financial strategy, providing a secure way to grow wealth without compromising accessibility.</li>
            </ul>

          </div>

          <div className="w-full lg:w-1/2 bg-[url(/images/community2.jpg)] bg-center bg-cover rounded-lg h-[400px] lg:h-auto"></div>
        </div>
      </div>

      {/* cta section */}
      <CTASection3 />

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