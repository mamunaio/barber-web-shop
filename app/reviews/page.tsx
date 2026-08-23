import Navbar from "@/components/Navbar";
import ReviewsHero from "@/components/ReviewsHero";
import ReviewStats from "@/components/ReviewStats";
import ReviewGrid from "@/components/ReviewGrid";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ReviewsHero />
        <ReviewStats />
        <ReviewGrid />
        <HomeCTA />
      </div>
      <Footer />
    </main>
  );
}
