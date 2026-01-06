import Image from "next/image";
import MapAdmin from "@/components/maps/map-admin";
import ContactForm from "./ContactForm";

export default function ContactSection() {

    return (
        <div className="flex flex-col lg:flex-row mt-5 gap-5">

            <div className="flex flex-col w-full lg:w-1/2 text-left">
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
                        <p className="small-text text-left">500 S. 15th St. McAllen, TX 78501</p>
                    </div>

                </div>
                <MapAdmin />
            </div>

            <div className="bg-white flex w-full lg:w-1/2 border-1 border-gray-300 shadow-md rounded-lg p-5 max-h-129">
                <ContactForm />
            </div>

        </div>


    );
}