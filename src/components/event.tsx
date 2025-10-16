import { Button } from "./ui/button";
import Image from "next/image";

export default function Event() {

    return (
        <div className="w-1/2 bg-white rounded-lg border-2 border-gray-300 text-left flex flex-row">

            <div className="border-r-2 border-primary flex flex-col w-1/6  p-5 text-center justify-center">
            <h3 className="text-primary">15</h3>
            <p className="text-gray-400">MAY</p>
            </div>

            <div className="flex flex-col w-5/6  p-5 gap-3">
            <h4>AHSTI Event 1</h4>
            <p>Join us for an evening of networking with business leaders from across the Rio Grande Valley</p>

            <ul className="gap-3">

                <li>                        
                    <div className="flex flow-row gap-3">
                        <Image 
                            src="/svg/clock.svg" 
                            alt="phone"
                            width={15}
                            height={15} />
                        <p className="small-text text-left">6:00 PM - 9:00 PM</p>
                    </div>
                </li>
                <li>                        
                    <div className="flex flow-row gap-3">
                        <Image 
                            src="/svg/map.svg" 
                            alt="phone"
                            width={15}
                            height={15} />
                        <p className="small-text text-left">1420 Erie Ave, McAllen, TX 78501</p>
                    </div>
                </li>
            </ul>
            <Button className="w-[150px]" size="lg">View Event</Button>

            </div>
        
        </div>
    );


}