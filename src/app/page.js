
import Header from '@/components/Header/Header';
import BrandLogo from '@/components/HomePage/BrandLogo';
import HomeAbout from '@/components/HomePage/HomeAbout';
import HomeHero from '@/components/HomePage/HomeHero';
import HomePortfolio from '@/components/HomePage/HomePortfolio';
import Services from '@/components/HomePage/Services';
import Offcanvas from '@/components/Offcanvas/Offcanvas';


export default function Home() {
  return (
    <>
      <Header />
      <Offcanvas/> 
      <main>
        <div id='smooth-wrapper'>
          <div id='smooth-content'>
            <HomeHero />
            <BrandLogo />
            <HomeAbout />
            <Services />
            <HomePortfolio />
          </div>
        </div>
      </main>
    </>
  );
}
