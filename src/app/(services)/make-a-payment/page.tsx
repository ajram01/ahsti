import { Button } from "../../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection2 } from "@/components/cta2";
import Link from "next/link";

export default function MakeAPayment() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header5.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">MAKE A PAYMENT</h4>
            <h1 className="text-white">Pay Your Mortgage Online.</h1>
            <p className="text-white lg:w-2/3">Make secure mortgage payments online through AHSTI’s user-friendly portal, designed to help homeowners manage their loans conveniently and confidently, with step-by-step guidance for first-time users and ongoing support available.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="https://www.myahstihome.org"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Apply Now</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="p-5 max-w-[1140px] w-full bg-blue-100 mx-auto rounded-lg text-center mt-10">
          <div>
            <p><b>Reminder: </b>We recommend that you<b> do NOT schedule your payment more than 5 days in advance.</b></p>
          </div>
        </div>

      </div>

      {/* subdivisions section */}
      <div className="max-w-[1140px] w-full px-5 lg:px-0 py-10 mx-auto justify-center flex flex-col gap-5 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h4>ONLINE PAYMENTS</h4>
          <h2 className="text-base/12">Getting Started</h2>
          <p className="mt-3">
            <b>1. Register Your Account</b><br />
            Go to the login page and click on:
            &quot;Register: First-time users must register.&quot;
            (Located in the grey box under the login section.)
            <br /><br />
            <b>2. Gather Your Information</b><br />
            Loan Number (found on your monthly mortgage statement) If you don’t have a statement, call (956) 687-6263 and request your loan number.
            Social Security Number
            <br /><br />
            <b>3. Complete Registration</b><br />
            After entering your information, confirm your account to begin using the portal.
            <br /><br />
            <b>4. Make Your Payment</b><br />
            Once logged in, you’ll be able to make a secure mortgage payment.
          </p>
          <Link href="https://ahsti.estatusconnect.com/User/Login" target="_blank" rel="noopener noreferrer"><Button className="w-full lg:w-[200px] py-6 mt-5" size="lg">Make a Payment</Button></Link>
        </div>

        <div className="w-full lg:w-1/2 bg-[url(/images/family2.png)] bg-center bg-cover rounded-lg h-[400px] lg:h-auto"></div>

      </div>

      {/* subdivisions section */}
      <div className="bg-white">
        <div className="max-w-[1140px] w-full px-5 lg:px-0 py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col-reverse lg:flex-row">

          <div className="w-full lg:w-1/2 bg-[url(/images/family3.png)] bg-center bg-cover rounded-lg h-[400px] lg:h-auto"></div>
          <div className="w-full lg:w-1/2">
            <h4>SECURITY TIPS</h4>
            <h2 className="text-base/12">Account Security</h2>

            <ul className="list-disc mt-3 ml-5 gap-5 flex flex-col">
              <li>Keep your password in a safe place.</li>
              <li>If you enter the wrong password three times, your account will be locked.</li>
              <li>If your account gets locked, you’ll need to call a 1-800 number (provided on the lockout screen) to unlock it.</li>
              <li>Contact AHSTI immediately if you notice any suspicious activity on your account.</li>
            </ul>

          </div>
        </div>
      </div>

      {/* cta section */}
      <CTASection2 />

      {/* Contact Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
        <h4>GET STARTED</h4>
        <h2 className="mt-2">
          Contact Us
        </h2>
        {/* servicing@ahsti.org */}
        <ContactSection email="spruneda134@gmail.com" />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}