import Contact from "@/components/contact";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero-section";
import UsedTech from "@/components/used-tech";

export default function Home() {
  return (
    <main className="container mx-auto mt-16 my-12">
      <HeroSection />
      <UsedTech />
      <Experience />
      <Contact />
    </main>
  );
}
