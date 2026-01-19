import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Link from "next/link";

export default function About() {

  const leaders = [
    { name: "Myra L. Martinez", role: "President/CEO", image: "" },
    { name: "Cynthia Torres", role: "Executive Vice President/CFO", image: "" },
    { name: "Aidee Castro", role: "Vice President/Director of Lending", image: "/team/aidee.png" },
    { name: "Tony Fernandez", role: "Vice President/Construction Director", image: "/team/tony.png" },
    { name: "Janie Vela", role: "Vice President/Director of Homebuyer Development", image: "/team/janie.png" },
    { name: "Mark Hernandez", role: "Vice President/Director of Administration", image: "/team/mark.png" },
    { name: "Xavier Jimenez", role: "Vice President/Director of Real Estate Services", image: "/team/xavier.png" }
  ];

  const board = [
    { name: "Brent Baldree", role: "Chair" },
    { name: "Sergio Melendez", role: "Vice Chair" },
    { name: "Lorena Castillo", role: "Past Chair" },
    { name: "Connie Garza", role: "Secretary" },
    { name: "Edna Martinez", role: "Treasurer" },
    { name: "Karen Valdez", role: "Board Member" },
    { name: "Piedad Martinez", role: "Board Member" },
    { name: "Gilbert Garza Jr.", role: "Board Member" },
    { name: "Rafael Mungia", role: "Board Member" },
    { name: "Rosie Ovalle", role: "Board Member" },
    { name: "Eliodora (Loli) Flores", role: "Board Member" }
  ];


  const advisory = [
    { name: "Jorge O'Cana, Jr." },
    { name: "Terri Sanchez" },
    { name: "Gabrielle Espino" },
    { name: "Juan Loya" },
    { name: "Irma Peña" }
  ];

  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header2.png)] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
            <h4 className="text-white">ABOUT US</h4>
            <h1 className="text-white">We Build For People</h1>
            <p className="text-white lg:w-2/3">Affordable Homes of South Texas, Inc. (AHSTI) is a community-based non-profit organization dedicated to enhancing the quality of life by providing affordable housing and related services to eligible families.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="/buy-a-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg">Buy A Home</Button></Link>
              <Link href="/repair-my-home"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* timeline section */}
      <div className="max-w-[1140px] w-full py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>HISTORY OF AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
          <div className="mt-5">
            <Timeline />
          </div>
        </div>

      </div>


      {/* impact section */}
      <div className="w-full py-10 mx-auto justify-center flex flex-col lg:flex-row">

        <div className="bg-[url(/images/family1.png)] bg-cover bg-no-repeat bg-top w-full lg:w-1/2 min-h-[400px]"></div>

        <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay w-full lg:w-1/2 text-white py-5">
          <div className="w-full lg:w-[570px] py-10 lg:py-20 px-5 lg:pl-5 text-center lg:text-left">
            <h4>OUR IMPACT</h4>
            <h2>Changing Lives,<br /> One Family at a Time</h2>
            <p>&ldquo;I tell people 100% to go for it. You don’t know if you don’t try. Everyone that we interacted with was so helpful. The information they provide helps ease the nerves, especially the classes they offer, like money management and new homeowner classes.&rdquo;</p>
            <p>
              <br /><b>-The Vallejo Family</b><br />
              Mission, TX</p>
          </div>

        </div>

      </div>



      {/* team section */}
      <div className="max-w-[1140px] w-full pb-10 mx-auto text-center">
        <h4>OUR TEAM</h4>
        <h2>AHSTI Leadership</h2>

        <div className="flex flex-wrap justify-center mt-5">
          {/* Team Member */}
          <div className="flex flex-wrap justify-center">
            {leaders.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-1/3 px-5 my-10">
                <div className="bg-primary h-[325px] hover:h-[315px] md:h-[265px] md:hover:h-[255px] lg:h-[325px] lg:hover:h-[315px] w-full max-w-[350px] flex items-end justify-center origin-bottom transition-all duration-300">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} width={350} height={350} />
                  ) : (
                    <div className="w-[250px] h-[250px] flex items-center justify-center text-white/80 pb-10">
                      <Image src="/svg-logos/logo2-white.png" alt={item.name} width={350} height={350} />
                    </div>
                  )}
                </div>
                <div className="text-center mt-3">
                  <h3>{item.name}</h3>
                  <p className="text-gray-600">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>




      {/* board section */}
      <div className="bg-white w-full">
        <div className="max-w-[1140px] w-full py-10 mx-auto flex flex-col text-center">
          <h4>FISCAL YEAR 25&apos;</h4>
          <h2 className="mt-2 mb-6">Board Of Directors</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {board.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 w-44 h-44 gap-2 flex items-center justify-center rounded-lg shadow-md p-5 transform hover:translate-y-[-5px] transition-all hover:shadow-lg flex-col"
              >
                <p><strong>{item.name}</strong></p>
                <p className="small-text">{item.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1140px] w-full py-10 mx-auto flex flex-col text-center">
          <h4>FISCAL YEAR 25&apos;</h4>
          <h2 className="mt-2 mb-6">Advisory Board</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {advisory.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 w-44 h-44 gap-2 flex items-center justify-center rounded-lg shadow-md p-5  transform hover:translate-y-[-5px] transition-all hover:shadow-lg"
              >
                <p><strong>{item.name}</strong></p>
              </div>
            ))}
          </div>
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