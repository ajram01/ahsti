import Image from "next/image";

export default function Footer() {

  return (
    <div className="bg-gradient-to-r from-primary to-secondary">
        
        <div className="w-[1140px] py-8 justify-center mx-auto text-white ">

            <div className="flex flex-row gap-5">
                        <div className="flex flex-col w-1/5">
                            <Image 
                                src="/logos/ahsti-logo-white.png" 
                                alt="Affordable Homes of South Texas Logo" 
                                width={300} height={100} />
                            <br />
                            <p className="small-text"><i>Building Communities, One Home at a Time.</i></p>
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Quick Links</h4>
                            <p className="small-text">Home</p>
                            <p className="small-text">About</p>
                            <p className="small-text">Subdivisions</p>
                            <p className="small-text">Buy A House</p>
                            <p className="small-text">Make a Payment</p>
                            <p className="small-text">Repairs & Support</p>
                            <p className="small-text">Noticies & Policies</p>
                            <p className="small-text">Contact Us</p>
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Subdivisions</h4>
                            <p className="small-text">Crockett Estates</p>
                            <p className="small-text">Crown Haven</p>
                            <p className="small-text">Jaguar Heights</p>
                            <p className="small-text">Lakewood Estates</p>
                            <p className="small-text">Mid Valley Estates</p>
                            <p className="small-text">Speedy Trails</p>
                            <p className="small-text">Stonebriar</p>
                            <p className="small-text">Tiger Crossing</p>
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Locations</h4>
                            <p className="small-text">Administration Building</p>
                            <p className="small-text">Homeownership Center</p>
                            <p className="small-text">Construction Services Building</p>
                            <p className="small-text">Weslaco Branch</p>
                            <p className="small-text">Fred Munguia Training House</p>
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Main Office</h4>
                            <p className="small-text">Ph: 956-687-6263</p>
                            <p className="small-text">FX: 956-682-9751</p>
                            <p className="small-text">1420 Erie Ave McAllen, TX 78501</p>
                        </div>

            </div>

            <hr className="my-8 border-t border-white"/>

            <div className="flex flex-row justify-between">
                <p className="small-text">© 2024 All Rights Reserved. Affordable Homes of South Texas, Inc.</p>
                <p className="small-text">Made X RGVision Media</p>
            </div>

        </div>

    </div>
  );

}