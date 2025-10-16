import { Button } from "../components/ui/button";
import ImageAccordion from "@/components/ImageAccordion";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import TestimonialCarousel from "@/components/carousels/TestimonialCarousel";
import SubdivisionCarousel from "@/components/carousels/SubdivisionsCarousel";
import MapAdmin from "@/components/maps/map-admin";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">NONPROFIT • HUD-APPROVED COUNCELING</h4>
          <h1 className="text-white">Homes. Community. Hope.</h1>
          <p className="w-2/3 text-white">First-time buyer or longtime resident, we’re here to guide you through buying, improving, and sustaining your home — with trusted counseling, affordable loans, and quality neighborhoods.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-3xs" size="lg">Buy A Home</Button>
            <Button className="w-3xs" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* about section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2 text-center">
          <h4>ABOUT AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
          <p>At Affordable Homes of South Texas, Inc., we believe that home ownership is more than just having a place to live, it’s about stability, opportunity, and pride. Since our founding, we’ve been dedicated to helping families across South Texas achieve the dream of owning a home through affordable housing programs, financial education, and community development initiatives.</p>
          
          <div className="flex flex-row gap-3 py-5">
            <div className="w-1/3">
              <h3>101</h3>
              <p>Homes <br/> Built</p>
            </div>
            <div className="w-1/3">
              <h3>$10.5M</h3>
              <p>Loans <br/> Originated</p>
            </div>
            <div className="w-1/3">
              <h3>351</h3>
              <p>Counseling <br/> Clients</p>
            </div>

          </div>
          
          <p>Our mission is to make home ownership affordable for families by providing quality homes, responsible financing, and the tools for long-term success.</p>
        </div>

        <div className="w-1/2 bg-[url(/images/house1.png)] bg-cover rounded-lg" >

        </div>
    </div>

      {/* events section */}
      <div className="bg-[url(/images/house1.png)] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay">
        <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col text-center">
          <h4 className="text-white">EVENTS</h4>
          <h1 className="text-white">Homes. Community. Hope.</h1>
          <div className="flex flex-row gap-3 mt-5 mb-3">

            <div className="w-1/2 bg-white rounded-lg border-2 border-gray-300 text-left flex flex-row">

              <div className="border-r-2 border-primary flex flex-col w-1/6  p-5 text-center justify-center">
                <h3>15</h3>
                <p>MAY</p>
              </div>

              <div className="flex flex-col w-5/6  p-5 gap-3">
              <h4>AHSTI Event 1</h4>
                <p>Join us for an evening of networking with business leaders from across the Rio Grande Valley</p>

                <ul>
                  <li>Date: May 15, 2024</li>
                  <li>Time: 6:00 PM - 9:00 PM</li>
                  <li>Location: McAllen Convention Center</li>
                </ul>
              <Button className="w-[150px]" size="lg">View Event</Button>

              </div>
            
            </div>

            <div className="w-1/2 bg-white rounded-lg border-2 border-gray-300 text-left flex flex-row">

              <div className="border-r-2 border-primary flex flex-col w-1/6  p-5 text-center justify-center">
                <h3>15</h3>
                <p>MAY</p>
              </div>

              <div className="flex flex-col w-5/6  p-5 gap-3">
              <h4>AHSTI Event 1</h4>
                <p>Join us for an evening of networking with business leaders from across the Rio Grande Valley</p>

                <ul>
                  <li>Date: May 15, 2024</li>
                  <li>Time: 6:00 PM - 9:00 PM</li>
                  <li>Location: McAllen Convention Center</li>
                </ul>
              <Button className="w-[150px]" size="lg">View Event</Button>

              </div>
            
            </div>

          </div>
        </div>
      </div>
      </div>

      {/* services section */}
        <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col text-center">
          <h4>OUR SERVICES</h4>
          <h2>One Stop Solution For All Your Home Buying Needs</h2>
        </div>

        <ImageAccordion />


      {/* Review section */}
      <div className="w-[1140px] pt-10 mx-auto justify-center flex flex-col text-center">
          <h4>TESTIMONIALS</h4>
          <h2>Hear From Our Community</h2>
          < TestimonialCarousel />


      </div>

      {/* Subdivision section */}
      <SubdivisionCarousel />


      {/* Contact section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col text-center">
          <h4>CONTACT US</h4>
          <h1>Reach Out To Our Administration Building</h1>

          <div className="flex flex-row mt-5 gap-5">

            <div className="flex flex-col w-1/2 text-left">
                    <div className="flex flex-col gap-3 pb-5">
                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/phone.svg" 
                                alt="phone"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">956-687-6263</p>
                        </div>

                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/fax.svg" 
                                alt="phone"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">FAX: 956-687-6263</p>
                        </div>

                    </div>
              <MapAdmin />
            </div>

            <div className="flex w-1/2 border-1 border-gray-300 shadow-md rounded-lg p-5">
              <p>contact form</p>
            </div>

          </div>

      </div>
      
      {/* carousel section */}
      <div className="py-10">
      <ContinuousCarousel />
      </div>


    </div>
  );
}