import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Subdivisions", href: "/subdivisions" },
    { name: "Buy A Home", href: "/buy-a-home" },
    { name: "Repair My Home", href: "/repair-my-home" },
    { name: "Make a Payment", href: "/make-a-payment" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const subdivisions = [
    { name: "Crown Haven", file: "/files/crown-haven.pdf" },
    { name: "Jaguar Heights", file: "/files/jaguar-heights.pdf" },
    { name: "Mid Valley Estates", file: "/files/mid-valley-estates.pdf" },
    { name: "Speedy Trails", file: "/files/speedy-trails.pdf" },
    { name: "Stonebriar", file: "/files/stonebriar.pdf" },
    { name: "Tiger Crossing", file: "/files/tiger-crossing.pdf" },
  ];

  const notices = [
    { name: "Events", file: "/events" },
    { name: "Public Notices", file: "/publicnotices" },
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
      <div className="max-w-[1140px] w-full pt-12 pb-6 px-6 mx-auto text-white">

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

          {/* Column 1: Logo & Social */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/5">
            <Link href={"/"}>
              <Image
                src="/logos/logo-50-white.png"
                alt="Affordable Homes of South Texas Logo"
                width={200}
                height={100}
                className="w-[180px] lg:w-full h-auto mb-2"
              />
            </Link>
            <p className="small-text italic text-center md:text-left">
              “Inspired every day by the spirit and leadership of Robert ‘Bobby’ Calvillo (1963-2025)”
            </p>

          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:flex-1 lg:justify-between gap-8">

            {/* Quick Links */}
            <div className="flex flex-col">
              <h5 className="mb-4 uppercase tracking-wider">Quick Links</h5>
              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <Link key={index} href={link.href} className="hover:underline">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Subdivisions */}
            <div className="flex flex-col">
              <h5 className="mb-4 uppercase tracking-wider">Subdivisions</h5>
              <div className="flex flex-col gap-2">
                {subdivisions.map((sub, index) => (
                  <a key={index} href={sub.file} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {sub.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Notices */}
            <div className="flex flex-col">
              <h5 className="mb-4 uppercase tracking-wider">Notices</h5>
              <div className="flex flex-col gap-2">
                {notices.map((notice, index) => (
                  <a key={index} href={notice.file} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {notice.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info - Fixed alignment by removing col-span-2 */}
            <div className="flex flex-col gap-4">
              <h5 className="uppercase tracking-wider">Contact Us</h5>
              <div className="flex flex-col gap-2">
                <p className="text-xs">Homeownership Center</p>
                <a href="tel:956-687-6263" className="hover:underline">Ph: 956-687-6263</a>
                <a href="fax:956-682-9751" className="hover:underline">Fax: 956-682-9751</a>
                <a href="https://maps.app.goo.gl/N4qRRCLVUMmRn7DV8" className="hover:underline">
                  500 S. 15th St. McAllen, TX <br /> NMLS# 346848
                </a>
              </div>
              <div className="flex flex-row gap-4 ml-0">
                {socials.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <Image src={item.image} alt={item.alt} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tribute Section */}
        <div className="mt-6 pt-5 text-center">
          <p className="small-text pb-6">
            Any person with concerns regarding the organization’s practices and/or the conduct of its’ employees may report their concerns on a confidential and anonymous basis by either emailing concerns@ahsti.org or by calling the Hotline 956-322-3330.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4  uppercase tracking-widest">
          <Link href="/">
            © 2024 Affordable Homes of South Texas, Inc.
          </Link>
          <Link href="https://rgvisionmedia.com/" className="hover:underline">
            Made X RGVision Media
          </Link>
        </div>
      </div>
    </div>
  );
}