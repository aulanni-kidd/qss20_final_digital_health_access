import { Info } from "lucide-react";
import { WealthQuintileChart } from "./charts/WealthQuintileChart";
import { UrbanRuralChart } from "./charts/UrbanRuralChart";
import { EducationLevelChart } from "./charts/EducationLevelChart";
import { HeatmapChart } from "./charts/HeatmapChart";
import { PredictedProbabilityChart } from "./charts/PredictedProbabilityChart";

export function FindingsSection() {
  return (
    <section id="findings" className="py-[120px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16 max-w-[680px] mx-auto text-center md:text-left">
          <div className="text-[11px] uppercase tracking-widest text-terracotta font-semibold mb-4">
            What the Data Show
          </div>
          <h2 className="font-serif text-[40px] md:text-[48px] text-dark leading-tight">
            The Gaps Are Wide — and Unequal
          </h2>
        </div>

        <div className="space-y-[80px]">
          {/* Top row: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="bg-card rounded-xl p-8 shadow-card border border-divider mb-6 relative">
                <div className="absolute top-4 right-4 text-terracotta/60"><Info className="w-5 h-5" /></div>
                <h3 className="font-serif text-xl font-semibold text-dark mb-6 text-center">Access by Wealth Quintile</h3>
                <WealthQuintileChart />
              </div>
              <p className="text-[14px] text-muted leading-relaxed px-2">
                A 74-point wealth gap in internet use dwarfs the 38-point gap in phone ownership.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="bg-card rounded-xl p-8 shadow-card border border-divider mb-6 relative">
                <div className="absolute top-4 right-4 text-terracotta/60"><Info className="w-5 h-5" /></div>
                <h3 className="font-serif text-xl font-semibold text-dark mb-6 text-center">Access by Urban / Rural Residence</h3>
                <UrbanRuralChart />
              </div>
              <p className="text-[14px] text-muted leading-relaxed px-2">
                Urban women are 32.6 points more likely to use the internet than rural women, yet phone ownership is far more equal.
              </p>
            </div>
          </div>

          {/* Education: half-width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="bg-card rounded-xl p-8 shadow-card border border-divider mb-6 relative">
                <div className="absolute top-4 right-4 text-terracotta/60"><Info className="w-5 h-5" /></div>
                <h3 className="font-serif text-xl font-semibold text-dark mb-6 text-center">Access by Education Level</h3>
                <EducationLevelChart />
              </div>
              <p className="text-[14px] text-muted leading-relaxed px-2">
                Women with higher education are dramatically more connected — the education gradient is steeper for internet use than for phone ownership.
              </p>
            </div>
          </div>

          {/* Full-width heatmap */}
          <div className="flex flex-col">
            <div className="bg-card rounded-xl p-8 shadow-card border border-divider mb-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-terracotta/60"><Info className="w-5 h-5" /></div>
              <h3 className="font-serif text-xl font-semibold text-dark mb-2 text-center">
                Internet Use Rate (%) by Wealth Quintile and Education Level
              </h3>
              <p className="text-center text-sm text-muted mb-8">Kenya DHS 2022 — Women Age 15–49</p>
              <HeatmapChart />
            </div>
            <p className="text-[14px] text-muted leading-relaxed px-2 max-w-[800px] mx-auto text-center">
              Wealth and education compound each other. A wealthy, highly educated woman is almost universally connected, while a poor woman with no education is nearly entirely excluded from the digital sphere.
            </p>
          </div>

          {/* Full-width predicted probability */}
          <div className="flex flex-col">
            <div className="bg-card rounded-xl p-8 shadow-card border border-divider mb-6 relative">
              <div className="absolute top-4 right-4 text-terracotta/60"><Info className="w-5 h-5" /></div>
              <h3 className="font-serif text-xl font-semibold text-dark mb-2 text-center">
                Predicted Probability of Digital Access by Wealth Quintile
              </h3>
              <p className="text-center text-sm text-muted mb-8">Rural Women with Primary Education, Kenya DHS 2022</p>
              <PredictedProbabilityChart />
            </div>
            <p className="text-[14px] text-muted leading-relaxed px-2 max-w-[800px] mx-auto text-center">
              Even when holding education and geography constant, moving up the wealth ladder dramatically increases the likelihood of internet access, while phone ownership remains relatively stable and high.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
