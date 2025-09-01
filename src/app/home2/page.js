
import Blogs from '@/components/HomePage/Blogs';
import BrandLogo from '@/components/HomePage/BrandLogo';
import HomeAbout from '@/components/HomePage/HomeAbout';
import HomeHero from '@/components/HomePage/HomeHero';
//import HomePortfolio from '@/components/HomePage/HomePortfolio';
import HomePortfolio2 from '@/components/HomePage2/HomePortfolio2';
import Pricing from '@/components/HomePage/Pricing';
import Services from '@/components/HomePage/Services';
import Testimonial from '@/components/HomePage/Testimonial';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import HomeAbout2 from '@/components/HomePage2/HomeAbout2';
import HomeHero2 from '@/components/HomePage2/HomeHero2';
import Services2 from '@/components/HomePage2/Services2';
import Offcanvas from '@/components/layouts/offcanvas/Offcanvas';
import Header2 from '@/components/layouts/header/Header2';

export default function Home() {
  return (
    <>
        <Header2 />  
        <Offcanvas/>
        <HomeHero2 />
        <BrandLogo />
        <HomeAbout2 />
        <Services2 />
        <HomePortfolio2 />
        <Testimonial />
        <WhyChooseUs />
        <Pricing />
        <Blogs />
    </>
  );
}
