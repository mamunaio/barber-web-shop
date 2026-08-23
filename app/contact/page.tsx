import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ContactHero />
        <ContactInfo />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
