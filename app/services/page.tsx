import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServiceMenu from "@/components/ServiceMenu";
import ServicePackages from "@/components/ServicePackages";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ServicesHero />
        <ServiceMenu />
        <ServicePackages />
        <HomeCTA />
      </div>
      <Footer />
    </main>
  );
}
