import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import MapAdmin from "@/components/maps/map-admin";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">ABOUT US</h4>
          <h1 className="text-white">We Build For People.</h1>
          <p className="w-2/3 text-white">Affordable Homes of South Texas, Inc. (AHSTI) is a community-based non-profit organization dedicated to enhancing the quality of life by providing affordable housing and related services to eligible families.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* timeline section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>HISTORY OF AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
        </div>

    </div>
    

    {/* impact section */}
    <div className="w-full py-10 mx-auto justify-center flex flex-col flex flex-row">

      <div className="bg-[url(/images/family1.png)] bg-cover bg-no-repeat bg-top w-1/2"></div>

      <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay w-1/2 text-white">
        <div className="w-[570px] py-20 pl-5">
          <h4>OUR IMPACT</h4>
          <h2>Changing Lives</h2>
          <p>Owning our first home was a dream that always felt just out of reach. With AHSTI’s help, that dream finally came true. From the first meeting to the day we received our keys, their team treated us like family. They didn’t just help us buy a house, they helped us build a future. Our kids finally have a safe place to grow up, and we now have the stability we always hoped for. AHSTI gave us more than a home; they gave us hope.</p>
          <p>
          <br /><b>-The Ramirez Family</b><br />
          McAllen, TX</p>
        </div>

      </div>

    </div>



    {/* team section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>HISTORY OF AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
        </div>

    </div>


    {/* cta section */}
    <div className="bg-[url(/images/house1.png)] bg-fixed bg-cover bg-no-repeat bg-center">
    <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay py-10 text-white">
      <div className="w-[1140px] mx-auto flex flex-row justify-between items-stretch">
        <div className="w-3/5 flex flex-col justify-center">
          <h4>BUILD YOUR FUTURE WITH AHSTI</h4>
          <h2>Ready to Own Your Home?</h2>
          <p>
            Take the first step toward homeownership with guidance and support from AHSTI. 
            We’ll help you achieve homeownership and find an affordable, safe, and beautiful place to call your own.
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center gap-5">
          <Button className="w-[200px] py-6 mt-2" size="lg" variant="secondary">
            Buy A Home
          </Button>
          <Button className="w-[200px] py-6 mt-2" size="lg" variant="secondary">
            View Locations
          </Button>
        </div>
      </div>
    </div>
    </div>






      {/* Contact section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col text-center">
          <h4>CONTACT US</h4>
          <h2>Reach Out To Our Administration Building</h2>

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


                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/map.svg" 
                                alt="phone"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">1420 Erie Ave, McAllen, TX 78501</p>
                        </div>

                    </div>
              <MapAdmin />
            </div>

            <div className="bg-white flex w-1/2 border-1 border-gray-300 shadow-md rounded-lg p-5">
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