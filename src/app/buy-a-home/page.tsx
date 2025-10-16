import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import MapAdmin from "@/components/maps/map-admin";
import Image from "next/image";

export default function BuyAHome() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">BUY A HOME</h4>
          <h1 className="text-white">Understand Our Programs. </h1>
          <p className="w-2/3 text-white">Discover how Affordable Homes of South Texas, Inc. helps hardworking families achieve the dream of homeownership through education, guidance, and affordable, energy-efficient homes.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* steps section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2">
          <h4>WHAT IS AHSTI?</h4>
          <h2 className="text-base/12">A Nonprofit Helping Families Build Homes.</h2>
          <p className="mt-3">Affordable Homes of South Texas, Inc. (AHSTI) is a nonprofit organization dedicated to helping families become homeowners. For over 50 years, we’ve built quality homes and empowered families with financial education and support.
            <br /><br />
            We don’t just build houses — we build stability, opportunity, and stronger communities.</p>
        </div>

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>

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