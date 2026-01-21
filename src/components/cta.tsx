import { Button } from "./ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <div className="bg-[url(/images/house1.png)] bg-fixed bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay py-10 text-white">
        <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row justify-between items-stretch">
          <div className="w-full lg:w-3/5 flex flex-col justify-center p-5 lg:p-0 text-center lg:text-left">
            <h4>BUILD YOUR FUTURE WITH AHSTI</h4>
            <h2>Ready to Own Your Home?</h2>
            <p>
              Take the first step toward homeownership with guidance and support from AHSTI.
              We’ll help you achieve homeownership and find an affordable, safe, and beautiful place to call your own.
            </p>
          </div>

          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center justify-center gap-5">
            <Link href="https://www.myahstihome.org"><Button className="w-[160px] lg:w-[200px] py-6 mt-2" size="lg" variant="secondary">
              Apply Now
            </Button></Link>
            <Link href="/subdivisions"><Button className="w-[160px] lg:w-[200px] py-6 mt-2" size="lg" variant="secondary">
              View Properties
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}