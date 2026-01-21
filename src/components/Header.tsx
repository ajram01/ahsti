"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Subdivisions", link: "/subdivisions" },
  { name: "Invest in AHSTI", link: "/invest-in-ahsti" },
  { name: "Notices", 
    children: [
      { name: "Civil Rights Notice", link: "/civilrights" },
      { name: "AHSTI Privacy Notice", link: "/privacynotice" },
      { name: "Public Notices", link: "/publicnotices" },
    ],
  },
  {
    name: "Services",
    children: [
      { name: "Buy A Home", link: "/buy-a-home" },
      { name: "Repair My Home", link: "/repair-my-home" },
      { name: "Make A Payment", link: "/make-a-payment" },
    ],
  },
];


const socials = [
  { image: "/svg/facebook-white.svg", alt: "facebook", link: "https://www.facebook.com/AffordableHomesSTX/" },
  { image: "/svg/instagram-white.svg", alt: "instagram", link: "https://www.instagram.com/ahsti/" },
  { image: "/svg/youtube-white.svg", alt: "youtube", link: "https://www.youtube.com/@myahsti/" },
  { image: "/svg/linkedin-white.svg", alt: "linkedin", link: "https://www.linkedin.com/company/affordable-homes-of-south-texas-inc-/" },
];

// ---------- MOBILE ACCORDION FOR SERVICES ----------
function MobileAccordion({
  item,
  closeMenu,
}: {
  item: { name: string; children: { name: string; link: string }[] };
  closeMenu: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center w-full py-2 text-lg font-normal"
        onClick={() => setOpen(!open)}
      >
        {item.name}
        <ChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-1 ml-4 flex flex-col">
          {item.children.map((child, j) => (
            <Link
              key={j}
              href={child.link}
              onClick={() => {
                setOpen(false);
                closeMenu();   // <-- close main menu too
              }}
              className="py-2 text-lg hover:text-primary"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-[1140px] w-full py-2 px-4 mx-auto flex flex-col-reverse sm:flex-row text-white justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-row gap-3 sm:gap-5 items-center">
            <div className="flex flex-row gap-3 items-center">
              <Image src="/svg/phone-white.svg" alt="phone" width={20} height={20} />
              <p className="small-text text-left">956-687-6263</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <Image src="/svg/fax-white.svg" alt="fax" width={20} height={20} />
              <p className="small-text text-left">FAX: 956-687-6263</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 mt-2 sm:mt-0">
            {socials.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                <Image src={item.image} alt={item.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md flex flex-col">
        <div className="max-w-[1140px] w-full py-5 px-4 mx-auto flex flex-row text-black justify-between gap-10 items-center">
          {/* Logo */}
          <div className="flex w-auto sm:w-1/5">
            <Link href="/">
              <Image
                src="/svg-logos/logo.png"
                alt="Affordable Homes of South Texas Logo"
                width={500}
                height={500}
                className="h-auto w-[160px] sm:w-[200px] md:w-[300px]"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex w-4/5 justify-between items-center">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                {!item.children ? (
                  item.link.startsWith("http") ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <h5 className="hover:text-primary transition">{item.name}</h5>
                    </Link>
                  ) : (
                    <Link href={item.link}>
                      <h5 className="hover:text-primary transition">{item.name}</h5>
                    </Link>
                  )
                ) : (
                  <>
                    <h5 className="hover:text-primary transition cursor-pointer flex items-center gap-1">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className="transition-transform group-hover:rotate-180"
                      />
                    </h5>

                    {/* Dropdown */}
                    <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-20">
                      {item.children.map((child, j) => (
                        <Link key={j} href={child.link}>
                          <p className="px-4 py-2 hover:bg-gray-100">{child.name}</p>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}

            <Link href="/contact" className="w-[200px]">
              <Button className="lg:w-[200px] py-6" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-black transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-black transition ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col md:hidden bg-white border-t border-gray-200 px-4 pb-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-lg hover:text-primary"
            >Home</Link>

            {navItems.map((item, i) => (
              <div key={i} className="border-b border-gray-100 py-2">
                {!item.children ? (
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-lg hover:text-primary block"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <MobileAccordion item={item} closeMenu={() => setMenuOpen(false)} />
                )}
              </div>
            ))}

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button className="w-full mt-2 py-6" size="lg">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}