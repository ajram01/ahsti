import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Notices | AHSTI",
  description: "Access AHSTI public notices, announcements, and official updates related to community development.",
};

  const notices = [
    { name: "February 2026 Board Agenda", href: "/notices/board-meetings/Board-Meeting-Agenda-Feb-2026-post.pdf" },
    { name: "January 2026 Board Agenda", href: "/notices/board-meetings/Board-Meeting-Agenda-POSTING-Jan-2026.pdf" },
    { name: "November 2025 Board Agenda", href: "/notices/board-meetings/Board-Meeting-Agenda-November-2025.pdf" },
  ];

export default function PublicNotices() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Board Agendas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md hover:translate-y-[-2px] transition-shadow"
            >
              <h3 className="text-center mb-4">
                {notice.name}
              </h3>
              
            <Link href={notice.href} target="_blank" className="w-full">
              <Button className="lg:w-full py-6" size="lg">
                View Notice
              </Button>
            </Link>
            </div>
          ))}
                </div>

            </div>

            {/* cta section */}
            <CTASection />

            {/* Contact Section */}
            <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
                <h4>GET STARTED</h4>
                <h2 className="mt-2">
                    Contact Us
                </h2>
                <ContactSection />
            </div>

            {/* Carousel Section */}
            <div className="py-10">
                <ContinuousCarousel />
            </div>


        </div>
    );
}