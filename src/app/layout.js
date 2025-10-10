// app/layout.js
import { Kanit } from "next/font/google";
import "./globals.css";
//import "@public/swiper-bundle.min.css";
//import "@public/meanmenu.min.css";
import "@public/master.css";
import Script from "next/script";
import Head from "next/head";
import Cursor from "@/ui/Cursor";
import Preloader from "@/ui/Preloader";
import Footer from "@/components/layouts/footer/Footer";
import ApplicationModal from "@/components/careerPage/ApplicationModal";
import Header from "@/components/layouts/header/Header";
import Offcanvas from "@/components/layouts/offcanvas/Offcanvas";


const kanit = Kanit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
  style: ["normal", "italic"],
  preload: true,
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Uniterrene: One-Stop Partner for Digital Solutions",
  description:
    "Uniterrene is a leading digital solutions provider empowering businesses. From web designing and development to online marketing services, we provide all!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Vendor CSS */}
        <link rel="stylesheet" href="/all.min.css" />
        <link rel="stylesheet" href="/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/progressbar.css" />
        <link rel="stylesheet" href="/meanmenu.min.css" />
      </Head>
      <body className={`${kanit.variable}`}>
        {/* Site-wide components */}
        <Cursor />
        <Preloader />
        <Header />
        <Offcanvas/>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        {/* Job Application Modal 1  */}
        {/* <ApplicationModal/> */}

        {/* Load jQuery first */}
        <Script src="/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/jquery-ui.min.js" strategy="beforeInteractive" />

        {/* Vendor scripts (order matters) */}
        
        {/* <Script src="/counter.js" strategy="afterInteractive" />
        <Script src="/gsap.min.js" strategy="afterInteractive" />
        <Script src="/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/chroma.min.js" strategy="afterInteractive" />
        <Script src="/mixitup.min.js" strategy="afterInteractive" /> */}
        <Script src="/vanilla-tilt.js" strategy="afterInteractive" />
        <Script src="/jquery.meanmenu.min.js"  />
        <Script src="/offCanvasMenu.js" strategy="afterInteractive"/>

      </body>
    </html>
  );
}
