import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="py-[120px] px-6 min-h-[80vh] flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-[800px] mx-auto mb-16">
        <h1 className="font-serif text-5xl md:text-[72px] lg:text-[80px] font-bold leading-tight mb-6 text-dark">
          Who Gets <br />
          <span className="text-terracotta italic font-normal">Left Behind?</span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-[680px] mx-auto leading-[1.8]">
          Examining digital exclusion among Kenyan women aged 15–49 and what it
          means for the reach of maternal health interventions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 border-y border-divider py-12 w-full max-w-[1000px] mx-auto mb-24">
        <div className="text-center">
          <div className="font-serif text-[52px] md:text-[60px] text-terracotta mb-2 leading-none">
            74.7<span className="text-4xl">%</span>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-muted font-medium">Own a phone</div>
        </div>
        <div className="hidden md:block w-px h-16 bg-divider" />
        <div className="text-center">
          <div className="font-serif text-[52px] md:text-[60px] text-terracotta mb-2 leading-none">
            36.9<span className="text-4xl">%</span>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-muted font-medium">Use the internet</div>
        </div>
        <div className="hidden md:block w-px h-16 bg-divider" />
        <div className="text-center">
          <div className="font-serif text-[52px] md:text-[60px] text-terracotta mb-2 leading-none">
            74 <span className="text-4xl">pts</span>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-muted font-medium">Wealth gap, internet</div>
        </div>
      </div>

      <a
        href="#question"
        className="flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-terracotta transition-colors"
      >
        Scroll to explore
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
