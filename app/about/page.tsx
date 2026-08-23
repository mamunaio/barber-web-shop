import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import AtmosphereGallery from "@/components/AtmosphereGallery";
import Team from "@/components/Team";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AboutHero />
        <About />
        <CoreValues />
        <AtmosphereGallery />
        <Team />
        <HomeCTA />
      </div>
      <Footer />
    </main>
  );
}
