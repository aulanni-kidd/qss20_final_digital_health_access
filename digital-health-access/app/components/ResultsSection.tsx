import { Info } from "lucide-react";
import { ForestPlotChart } from "./charts/ForestPlotChart";

export function ResultsSection() {
  return (
    <section id="results" className="py-[120px] px-6 bg-white/40 border-t border-divider">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16 max-w-[680px] mx-auto text-center md:text-left">
          <div className="text-[11px] uppercase tracking-widest text-terracotta font-semibold mb-4">
            Regression Analysis
          </div>
          <h2 className="font-serif text-[40px] md:text-[48px] text-dark leading-tight">
            After Controlling for Everything — Education Dominates
          </h2>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-card border border-divider mb-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-terracotta/60"><Info className="w-5 h-5" /></div>
          <h3 className="font-serif text-xl font-semibold text-dark mb-2 text-center">
            Odds Ratios for Digital Access — Kenya DHS 2022
          </h3>
          <p className="text-center text-sm text-muted mb-12">
            Reference: Wealth Q1, Higher Education, Rural
          </p>
          <ForestPlotChart />
        </div>

        <p className="text-[14px] text-muted leading-relaxed px-2 max-w-[800px] mx-auto text-center">
          Even after controlling for wealth, age, and urban/rural status, a woman with no education has nearly zero odds of using the internet compared to a woman with higher education. Education is the dominant bottleneck for complex digital tools.
        </p>
      </div>
    </section>
  );
}
