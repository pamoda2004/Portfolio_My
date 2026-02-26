import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default Index;
