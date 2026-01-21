import { Button } from "./ui/button";
import Link from "next/link";

export function CTASection2() {
  return (
    <div className="bg-[url(/images/house1.png)] bg-fixed bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay py-10 text-white">
        <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row justify-between items-stretch">
          <div className="w-full lg:w-3/5 flex flex-col justify-center p-5 lg:p-0 text-center lg:text-left">
            <h4>MANAGE YOUR MORTGAGE WITH CONFIDENCE</h4>
            <h2>Make a Payment, Stay on Track.</h2>
            <p>
              Access AHSTI’s secure online portal to make mortgage payments quickly and safely. Whether you’re making a one-time payment or managing your account, we’re here to help every step of the way.
            </p>
          </div>

          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center justify-center gap-5">
            <Link href="https://ahsti.estatusconnect.com/User/Login"><Button className="w-[160px] lg:w-[200px] py-6 mt-2" size="lg" variant="secondary">
              Make a Payment
            </Button></Link>
            <Link href="/contact"><Button className="w-[160px] lg:w-[200px] py-6 mt-2" size="lg" variant="secondary">
              Get Help
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}