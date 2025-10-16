import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

  const navItems = [
    { name: "ABOUT", link: "/about" },
    { name: "SUBDIVISIONS", link: "/subdivisions" },
    { name: "REPAIRS", link: "/repairs" },
    { name: "MAKE A PAYMENT", link: "/make-a-payment" },
    { name: "CONTACT", link: "/contact" },
  ];

export default function Header() {
    return (
        <div>
            <div className="bg-gradient-to-r from-primary to-secondary">
                <div className="w-[1140px] py-2 mx-auto flex flex-row text-white justify-between">
                    <div className="flex flex-row gap-5">
                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/phone-white.svg" 
                                alt="phone"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">956-687-6263</p>
                        </div>

                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/fax-white.svg" 
                                alt="phone"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">FAX: 956-687-6263</p>
                        </div>

                    </div>

                    <div className="flex flex-row gap-3">
                        <Image 
                            src="/svg/facebook-white.svg" 
                            alt="phone"
                            width={20}
                            height={20} />
                        <Image 
                            src="/svg/linkedin-white.svg" 
                            alt="phone"
                            width={20}
                            height={20} />

                    </div>
                </div>
            </div>

            <div className="bg-white shadow-md flex flex-col">
                <div className="w-[1140px] py-5 mx-auto flex flex-row text-black justify-between gap-10 items-center">

                    <div className="flex w-1/5">
                    <Link href="/">                    
                        <Image 
                        src="/logos/ahsti-logo.png" 
                        alt="Affordable Homes of South Texas Logo" 
                        width={300} height={100} />
                    </Link>
                    </div>

                    <div className="flex w-3/5 justify-between">
                    {navItems.map((item, i) => (
                        <Link key={i} href={item.link}>
                            <h5>{item.name}</h5>
                        </Link>
                    ))}
                    </div>

                    <div className="flex w-1/5">  
                        <Link href="/buy-a-home" className="w-full"><Button className="w-full py-6"  size="lg">Buy A Home</Button></Link>
                    </div>


                </div>
            </div>


        </div>
    );
}