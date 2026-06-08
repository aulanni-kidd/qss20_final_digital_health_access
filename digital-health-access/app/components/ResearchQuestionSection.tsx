import { BarChart2, Smartphone, MapPin, Info } from "lucide-react";

export function ResearchQuestionSection() {
  return (
    <section id="question" className="py-[120px] px-6">
      <div className="max-w-[680px] mx-auto">
        <div className="mb-12">
          <div className="text-[11px] uppercase tracking-widest text-terracotta font-semibold mb-4">
            The Problem
          </div>
          <h2 className="font-serif text-[40px] md:text-[48px] text-dark leading-tight">
            Research Question
          </h2>
        </div>

        <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.8] text-dark mb-12">
          <p>
            Digital maternal health tools — SMS-based reminders, mHealth apps,
            online health portals — are being deployed across sub-Saharan Africa.
            But they assume connectivity that many women simply don't have.
          </p>
          <p>
            Using the Kenya 2022 DHS (n = 32,156 women aged 15–49), this project
            asks whether marginalized women are systematically excluded from the
            very tools designed to reach them.
          </p>
        </div>

        <blockquote className="border-l-2 border-terracotta pl-6 py-2 mb-16">
          <p className="font-serif italic text-2xl text-dark leading-snug">
            Do maternal health interventions disproportionately exclude the
            women who need them most?
          </p>
        </blockquote>

        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4 pb-6 border-b border-divider">
            <BarChart2 className="w-6 h-6 text-terracotta shrink-0 mt-1" />
            <p className="text-[16px] md:text-[18px] text-dark">
              Is wealth, education, or geography the strongest predictor of digital exclusion?
            </p>
          </div>
          <div className="flex items-start gap-4 pb-6 border-b border-divider">
            <Smartphone className="w-6 h-6 text-terracotta shrink-0 mt-1" />
            <p className="text-[16px] md:text-[18px] text-dark">
              Do patterns differ for phone ownership vs. internet use?
            </p>
          </div>
          <div className="flex items-start gap-4 pb-6 border-b border-divider">
            <MapPin className="w-6 h-6 text-terracotta shrink-0 mt-1" />
            <p className="text-[16px] md:text-[18px] text-dark">
              How do these gaps translate to predicted access for rural women?
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-divider flex items-start gap-4 shadow-card">
          <Info className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
          <p className="text-[15px] leading-relaxed text-dark">
            <strong>Digital exclusion</strong> — neither owning a phone nor using
            the internet — places women entirely outside the reach of digital
            maternal health tools.
          </p>
        </div>
      </div>
    </section>
  );
}
