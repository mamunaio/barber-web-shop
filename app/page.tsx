import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AmenitiesBar from "@/components/AmenitiesBar";
import HomeAbout from "@/components/HomeAbout";
import BrandsMarquee from "@/components/BrandsMarquee";
import FeaturedServices from "@/components/FeaturedServices";
import FeaturedGallery from "@/components/FeaturedGallery";
import FeaturedReviews from "@/components/FeaturedReviews";
import FAQ from "@/components/FAQ";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <AmenitiesBar />
        <HomeAbout />
        <BrandsMarquee />
        <FeaturedServices />
        <FeaturedGallery />
        <FeaturedReviews />
        <FAQ />
        <HomeCTA />
      </div>
      <Footer />
    </main>
  );
}
