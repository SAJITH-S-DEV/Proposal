import HeroSection from "./components/HeroSection";
import OurStorySection from "./components/OurStorySection";
import ProposalSection from "./components/ProposalSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <OurStorySection />
      <ProposalSection />
      <Footer />
    </main>
  );
}