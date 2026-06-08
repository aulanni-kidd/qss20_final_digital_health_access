import { TopNav } from "./components/TopNav";
import { HeroSection } from "./components/HeroSection";
import { ResearchQuestionSection } from "./components/ResearchQuestionSection";
import { DataMethodsSection } from "./components/DataMethodsSection";
import { FindingsSection } from "./components/FindingsSection";
import { ResultsSection } from "./components/ResultsSection";
import { TakeawaySection } from "./components/TakeawaySection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <ResearchQuestionSection />
        <DataMethodsSection />
        <FindingsSection />
        <ResultsSection />
        <TakeawaySection />
      </main>
      <Footer />
    </>
  );
}
