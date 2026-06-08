import { Database, TrendingUp } from "lucide-react";

const variables = [
  { name: "phone_owns", desc: "Owns a mobile telephone (0/1)" },
  { name: "internet_use", desc: "Uses the internet (0/1)" },
  { name: "wealth_quintile", desc: "Wealth index quintile (1=poorest → 5=richest)" },
  { name: "education", desc: "Highest education level" },
  { name: "urban_rural", desc: "Place of residence" },
  { name: "maternal_age", desc: "Respondent's current age" },
];

const methodology = [
  {
    title: "Data Cleaning",
    desc: "Loaded Kenya 2022 DHS Stata file (32,156 rows). Extracted 6 variables and recoded binary outcomes.",
  },
  {
    title: "Descriptive Statistics",
    desc: "Computed group means for phone ownership and internet use across all predictor categories.",
  },
  {
    title: "Logistic Regression",
    desc: "Modeled both outcomes simultaneously, controlling for wealth, education, urban/rural, and age.",
  },
  {
    title: "Predicted Probabilities",
    desc: "Held profile at rural, primary-educated to isolate the wealth gradient on expected access.",
  },
];

export function DataMethodsSection() {
  return (
    <section id="data" className="py-[120px] px-6 bg-white/40 border-y border-divider">
      <div className="max-w-[680px] mx-auto">
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-widest text-terracotta font-semibold mb-4">
            How We Got Here
          </div>
          <h2 className="font-serif text-[40px] md:text-[48px] text-dark leading-tight">
            Data & Methods
          </h2>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-5 h-5 text-terracotta" />
            <h3 className="font-serif text-2xl font-semibold text-dark">Dataset</h3>
          </div>
          <p className="text-muted mb-8">
            Kenya 2022 DHS Individual Recode ·{" "}
            <span className="text-terracotta font-medium">n = 32,156</span> women aged 15–49
          </p>

          <div className="border border-divider rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr] gap-4 p-4 bg-card border-b border-divider text-[11px] uppercase tracking-widest text-muted font-semibold">
              <div>Variable</div>
              <div>Description</div>
            </div>
            <div className="flex flex-col">
              {variables.map((v, i) => (
                <div
                  key={v.name}
                  className={`grid grid-cols-[1fr_2fr] gap-4 p-4 items-center min-h-[48px] ${i % 2 === 0 ? "bg-white" : "bg-card"}`}
                >
                  <div>
                    <span className="font-mono text-[13px] text-muted bg-card border border-divider px-2 py-1 rounded">
                      {v.name}
                    </span>
                  </div>
                  <div className="text-[15px] text-dark">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-terracotta" />
            <h3 className="font-serif text-2xl font-semibold text-dark">Methodology</h3>
          </div>
          <div className="space-y-8">
            {methodology.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-8 h-8 rounded-full border border-terracotta/30 text-terracotta flex items-center justify-center shrink-0 font-serif text-sm bg-card">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold text-dark mb-2">{step.title}</h4>
                  <p className="text-muted text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
