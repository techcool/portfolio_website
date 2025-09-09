
import Header from '@/components/layouts/header/Header';
import Blogs from '@/components/HomePage/Blogs';
import BrandLogo from '@/components/HomePage/BrandLogo';
import HomeAbout from '@/components/HomePage/HomeAbout';
import HomeHero from '@/components/HomePage/HomeHero';
import HomePortfolio from '@/components/HomePage/HomePortfolio';
import Pricing from '@/components/HomePage/Pricing';
import Services from '@/components/HomePage/Services';
import Testimonial from '@/components/HomePage/Testimonial';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import Offcanvas from '@/components/layouts/offcanvas/Offcanvas';




export default function Home() {
  return (
    <>
            <Header />
            <Offcanvas/>
            <HomeHero />
            <BrandLogo />
            <HomeAbout />
            <Services />
            <HomePortfolio />
            <Testimonial />
            <WhyChooseUs />
            <Pricing/>
            <Blogs />
         
     
    </>
  );
}
