import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CookieNotice from "@/components/CookieNotice";
import Providers from "./Providers";
import Script from "next/script";

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
          <CookieNotice />
        </Providers>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMJYVSZC4P"
          strategy="afterInteractive"
          id="google-analytics-script"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            const consent = window.localStorage.getItem('ahsti-cookie-consent');
            const analyticsAllowed = consent === 'accepted';

            gtag('config', 'G-ZMJYVSZC4P', {
              anonymize_ip: true,
              send_page_view: analyticsAllowed,
            });

            window.addEventListener('cookie-consent-changed', () => {
              const updatedConsent = window.localStorage.getItem('ahsti-cookie-consent');
              if (updatedConsent === 'accepted') {
                gtag('consent', 'update', {
                  analytics_storage: 'granted'
                });
              } else {
                gtag('consent', 'update', {
                  analytics_storage: 'denied'
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}