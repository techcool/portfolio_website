
// import 'gsap/dist/gsap.min.js';
// import 'gsap/dist/ScrollTrigger.min.js';
// import 'gsap/dist/ScrollToPlugin.min.js';
// import 'gsap/dist/ScrollSmoother.min.js';
// import 'gsap/dist/SplitText.min.js';


import { Kanit } from "next/font/google";
import "./globals.css";
import "../../public/swiper-bundle.min.css"
import "../../public/meanmenu.min.css";
import "../../public/master.css";
import Script from 'next/script';
import Head from 'next/head';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
//import Header from "@/components/Header/Header";
//import Offcanvas from '@/components/Offcanvas/Offcanvas';
import Footer from "@/components/Footer/Footer";



const kanit = Kanit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
  preload: true,
  fallback: ["sans-serif"],
});


export const metadata = {
  title: "Uniterrene: One-Stop Partner for Digital Solutions",
  description: "Uniterrene is a leading digital solutions provider empowering businesses. From web designing and development to online marketing services, we provide all!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="stylesheet" href="/bootstrap.min.css"/> */}
        <link rel="stylesheet" href="/all.min.css"/>
        <link rel="stylesheet" href="/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="/progressbar.css"/>
        <link rel="stylesheet" href="/meanmenu.min.css"/>
      </Head>
      <body className={`${kanit.variable}`}>
        <Cursor />
        <Preloader />
        
        <div id='smooth-wrapper'>
          <div id='smooth-content'>
            <main>
              {children}
            </main>
              <Footer />
          </div>
        </div>
        <Script src="/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/jquery-ui.min.js" strategy="beforeInteractive" />
        {/* <script src="/bootstrap.min.js" strategy="afterInteractive"></script> */}
        <Script src="/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/counter.js" strategy="afterInteractive" />
        <Script src="/gsap.min.js" strategy="afterInteractive" />
        <Script src="/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/ScrollTrigger.min.js" strategy="afterInteractive"></Script>
        <Script src="/ScrollToPlugin.min.js" strategy="afterInteractive"></Script>
        <Script src="/ScrollSmoother.min.js" strategy="afterInteractive"></Script>
        <Script src="/SplitText.min.js" strategy="afterInteractive"></Script>
        <Script src="/chroma.min.js" strategy="afterInteractive"></Script>
        <Script src="/mixitup.min.js" strategy="afterInteractive"></Script>
        <Script src="/vanilla-tilt.js" strategy="afterInteractive"></Script>
        <Script src="/jquery.meanmenu.min.js" strategy="afterInteractive"></Script>
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
