import { Button } from "./ui/button";
import Link from "next/link";

export function CTASection3() {
    return (
        <div className="bg-[url(/images/house1.png)] bg-fixed bg-cover bg-no-repeat bg-center">
            <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay py-10 text-white">
                <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row justify-between items-stretch">
                    <div className="w-full lg:w-3/5 flex flex-col justify-center p-5 lg:p-0 text-center lg:text-left">
                        <h4>GROW YOUR WEALTH WITH CONFIDENCE</h4>
                        <h2>Maximize Your Returns.</h2>
                        <p>
                            CNote’s secure platform to manage your cash and fixed-income assets quickly and safely. Whether seeking insured liquidity or long-term growth, we’re here to help you drive meaningful change every step.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center justify-center gap-5">
                        <Link href="https://www.mycnote.com/?code=6AAGh7XZc"><Button className="w-[160px] lg:w-[200px] py-6 mt-2" size="lg" variant="secondary">
                            Invest in AHSTI
                        </Button></Link>
                        <Link href="/contact"><Button className="w-[160px] lg:w-[200px] py-6 mt-2" size="lg" variant="secondary">
                            Contact Us
                        </Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}