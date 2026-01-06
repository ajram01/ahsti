import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Subdivisions", href: "/subdivisions" },
    { name: "Hope Fund Investment", href: "/hope-fund-investment" },
    { name: "Buy A Home", href: "/buy-a-home" },
    { name: "Repair My Home", href: "/repair-my-home" },
    { name: "Make a Payment", href: "/make-a-payment" },
    { name: "Contact Us", href: "/contact" },
  ];

  const subdivisions = [
    { name: "Crockett Estates", file: "/files/crockett-estates.pdf" },
    { name: "Crown Haven", file: "/files/crown-haven.pdf" },
    { name: "Jaguar Heights", file: "/files/jaguar-heights.pdf" },
    { name: "Mid Valley Estates", file: "/files/mid-valley=estates.pdf" },
    { name: "Speedy Trails", file: "/files/speedy-trails.pdf" },
    { name: "Stonebriar", file: "/files/stonebriar.pdf" },
    { name: "Tiger Crossing", file: "/files/tiger-crossing.pdf" },
  ];

  const locations = [
    "Homeownership Center",
    "Administration Building",
    "Construction Services Building",
    "Weslaco Branch",
    "Fred Munguia Training House",
  ];

  const notices = [
    { name: "Consumer Complaint Notice", file: "/notices/mortgage_company_consumer_complaint_notice_website.pdf" },
    { name: "Online Privacy Notice", file: "/privacynotice" },
    { name: "Civil Rights Notice", file: "/civilrights" },
    { name: "AHSTI Privacy Notice", file: "/notices/ahsti_privacy_notice.pdf" },
  ];

  const socials = [
    { image: "/svg/facebook-white.svg", alt: "facebook", link: "https://www.facebook.com/AffordableHomesSTX/" },
    { image: "/svg/instagram-white.svg", alt: "instagram", link: "https://www.instagram.com/ahsti/" },
    { image: "/svg/youtube-white.svg", alt: "youtube", link: "https://www.youtube.com/@myahsti/" },
    { image: "/svg/linkedin-white.svg", alt: "linkedin", link: "https://www.linkedin.com/company/affordable-homes-of-south-texas-inc-/" },
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-[1140px] w-full p-8 px-4 mx-auto text-white">
        {/* Footer Columns */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 sm:gap-6 justify-between">

          {/* Logo + Social */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/6">
            <Link href={"/"}>
              <Image
                src="/svg-logos/logo2-white.png"
                alt="Affordable Homes of South Texas Logo"
                width={500}
                height={500}
                className="w-[200px] lg:w-full h-auto"
              /></Link>
            <p className="small-text">
              {/* <i>Building Communities, One Home at a Time.</i> */}
            </p>

            <div className="flex flex-row gap-3 mx-auto">
              {socials.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image src={item.image} alt={item.alt} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/6">
            <h5 className="mb-2 font-semibold">Quick Links</h5>
            {links.map((link, index) => (
              <p key={index} className="small-text hover:underline">
                {link.href.startsWith("http") ? (
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</Link>
                ) : (
                  <Link href={link.href}>{link.name}</Link>
                )}
              </p>
            ))}
          </div>

          {/* Subdivisions */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/6">
            <h5 className="mb-2 font-semibold">Subdivisions</h5>
            {subdivisions.map((subdivision, index) => (
              <a key={index} href={subdivision.file} target="_blank" rel="noopener noreferrer">
                <p className="small-text hover:underline">{subdivision.name}</p>
              </a>
            ))}
          </div>

          {/* Locations */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/6">
            <h5 className="mb-2 font-semibold">Locations</h5>
            {locations.map((location, index) => (
              <p key={index} className="small-text">
                {location}
              </p>
            ))}
          </div>

          {/* Notices */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/6">
            <h5 className="mb-2 font-semibold">Notices</h5>
            {notices.map((notice, index) => (
              <a key={index} href={notice.file} target="_blank" rel="noopener noreferrer">
                <p className="small-text hover:underline">{notice.name}</p>
              </a>
            ))}
          </div>


          {/* Main Office */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/6">
            <h5 className="mb-2 font-semibold">Homeownership Center</h5>
            <p className="small-text">Ph: 956-687-6263</p>
            <p className="small-text">FX: 956-682-9751</p>
            <p className="small-text">500 S. 15th St. McAllen, TX 78501</p>
            <p className="small-text">NMLS#346848</p>
          </div>
        </div>

        <p className="text-center pt-6"><i>Inspired every day by the spirit and leadership of Robert &ldquo;Bobby&rdquo; Calvillo (1963-2025)</i></p>

        {/* Divider */}
        <hr className="my-8 border-t border-white opacity-60" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="small-text">
            © 2024 All Rights Reserved. Affordable Homes of South Texas, Inc.
          </p>
          <Link href="https://rgvisionmedia.com/">
            <p className="small-text hover:underline">Made X RGVision Media</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
