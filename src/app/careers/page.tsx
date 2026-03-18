"use client";

import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import Script from "next/script";
import { useState } from "react";

export default function Careers() {
    // 1. Set the initial state to true (loading by default)
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="bg-[#F5F7FA] min-h-screen">
            <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Work With AHSTI
                </h1>

                {/* 2. Added 'relative' to the container so the absolute loader stays inside it */}
                <div className="relative w-full bg-white p-4 md:p-8 rounded-lg shadow-sm min-h-[500px]">
                    
                    {/* 3. The Loading Overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white rounded-lg">
                            {/* Tailwind CSS Spinner */}
                            <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
                            <p className="mt-4 text-gray-500 font-medium">Loading open positions...</p>
                        </div>
                    )}

                    {/* 4. The Script tag now tells the state when it's done */}
                    <Script
                        src="https://workforcenow.adp.com/mascsr/default/mdf/recwebcomponents/recruitment/main-config/recruitment.js"
                        strategy="lazyOnload"
                        onReady={() => {
                            setTimeout(() => {
                                setIsLoading(false);
                            }, 800);
                        }}
                    />
                    
                    <div 
                        dangerouslySetInnerHTML={{ 
                            __html: `<recruitment-current-openings cid="9c4f10b0-28cb-4399-8913-85ea25b8fbbc" ccid="19000101_000003" host="DP" locale="en_US"></recruitment-current-openings>` 
                        }} 
                    />
                </div>

            </div>

            {/* CTA section */}
            <CTASection />

            {/* Contact Section */}
            <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
                <h4 className="text-primary font-semibold tracking-wider text-sm">GET STARTED</h4>
                <h2 className="mt-2 text-3xl font-bold">
                    Contact Us
                </h2>
                <ContactSection />
            </div>

            {/* Carousel Section */}
            <div className="py-10 bg-white">
                <ContinuousCarousel />
            </div>

        </div>
    );
}