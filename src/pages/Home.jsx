import HeroBanner from "../components/Home/HeroBanner";
import SecurityServices from "../components/Home/SecurityServices";
import WhyHSNSecurity from "../components/Home/WhyHSNSecurity";
import WeaponsGallery from "../components/Home/WeaponsGallery";
import ClientsShowcase from "../components/Home/ClientsShowcase";
import HeroSection from "../components/Home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HeroSection/>
      <SecurityServices />
      <WhyHSNSecurity />
      <WeaponsGallery />
      <ClientsShowcase />
    </>
  );
}
