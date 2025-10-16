import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import MapAdmin from "@/components/maps/map-admin";
import Image from "next/image";

export default function Subdivisions() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">SUBDIVISIONS</h4>
          <h1 className="text-white">We Build Communities.</h1>
          <p className="w-2/3 text-white">Each subdivision represents our ongoing commitment to helping families achieve the dream of homeownership in neighborhoods they can be proud of. We’re building hope, opportunity, and lasting connections across South Texas.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* subdivisions section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2">
            <h4>MISSION, TX</h4>
            <h2 className="text-base/12">Speedy Trails</h2>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <Button className="w-[200px] py-6 mt-5"  size="lg">Learn More</Button>
       </div>

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>

    </div>

    {/* subdivisions section */}
<div className="bg-white">
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>
        <div className="w-1/2">
            <h4>MISSION, TX</h4>
            <h2 className="text-base/12">Speedy Trails</h2>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <Button className="w-[200px] py-6 mt-5"  size="lg">Learn More</Button>
       </div>
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