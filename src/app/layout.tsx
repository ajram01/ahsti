import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "./Providers";
import Script from "next/script";
import EventPopups from "@/components/EventPopups";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Affordable Homes of South Texas, Inc.",
  description: "Building Communities, One Home at a Time.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: [
      {
        url: "logos/social-preview.png",
        alt: "Affordable Homes of South Texas",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${merriweather.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <EventPopups />
        </Providers>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMJYVSZC4P"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZMJYVSZC4P');
          `}
        </Script>
      </body>
    </html>
  );
}