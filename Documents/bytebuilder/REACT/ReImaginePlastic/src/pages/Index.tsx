import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProblemSolution from "@/components/ProblemSolution";
import ArtGallery from "@/components/ArtGallery";
import TeamSection from "@/components/TeamSection";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutUs />
      <ProblemSolution />
      <ArtGallery />
      <TeamSection />
      <GetInvolved />
      <Footer />
    </main>
  );
};

export default Index;
