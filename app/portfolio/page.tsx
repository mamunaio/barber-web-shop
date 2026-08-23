import Navbar from "@/components/Navbar";
import PortfolioHero from "@/components/PortfolioHero";
import FilterableGallery from "@/components/FilterableGallery";
import InstaFeed from "@/components/InstaFeed";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <PortfolioHero />
        <FilterableGallery />
        <InstaFeed />
        <HomeCTA />
      </div>
      <Footer />
    </main>
  );
}
