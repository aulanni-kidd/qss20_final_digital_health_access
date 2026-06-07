"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Database,
  BarChart2,
  TrendingUp,
  Calculator,
  Filter,
  Info,
  HelpCircle,
  Smartphone,
  GraduationCap,
  MapPin,
  TableProperties,
} from "lucide-react";

// ── Info Tooltip ──────────────────────────────────────────────────────────────

function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative inline-flex items-center" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="More information"
        className="text-[#c17b5c] hover:text-[#a05a3a] transition-colors ml-1.5 flex-shrink-0"
      >
        <Info size={14} />
      </button>
      {open && (
        <div className="absolute z-50 w-72 bg-[#fffaf7] border border-[#edd9cc] rounded-xl shadow-sm p-4 text-sm text-[#6b4f45] leading-relaxed left-5 top-0">
          {text}
          <button
            className="block mt-2 text-xs text-[#c17b5c] font-medium hover:underline"
            onClick={() => setOpen(false)}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Question", href: "#question" },
  { label: "Data", href: "#data" },
  { label: "Findings", href: "#findings" },
  { label: "Results", href: "#results" },
  { label: "Takeaway", href: "#takeaway" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#fffaf7]/95 backdrop-blur-sm border-b border-[#edd9cc]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="font-display text-[15px] font-semibold text-[#221014] tracking-tight">
          Digital Health Access · Kenya 2022
        </span>
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#a08070] hover:text-[#c17b5c] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen bg-[#fffaf7] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Subtle background petal shapes */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #f5d5c5 0%, transparent 70%)", opacity: 0.45 }}
      />
      <div
        className="absolute bottom-[-8%] left-[-6%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #edd9cc 0%, transparent 70%)", opacity: 0.4 }}
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {/* Headline */}
        <h1 className="font-display text-[clamp(3.2rem,9vw,6rem)] font-bold text-[#221014] leading-[1.0] mb-7">
          Who Gets<br />
          <span className="italic text-[#c17b5c]">Left Behind?</span>
        </h1>

        <p className="text-[1.05rem] text-[#6b4f45] leading-[1.75] max-w-lg mx-auto mb-14">
          Examining digital exclusion among Kenyan women aged 15–49 and what it
          means for the reach of maternal health interventions.
        </p>

        {/* Stats */}
        <div className="border-t border-[#edd9cc] pt-10 grid grid-cols-3 gap-2 mb-12">
          {[
            { value: "74.7%", label: "own a phone" },
            { value: "36.9%", label: "use the internet" },
            { value: "74 pts", label: "wealth gap, internet" },
          ].map((s, i) => (
            <div key={s.label} className={`text-center ${i === 1 ? "border-x border-[#edd9cc]" : ""}`}>
              <div className="font-display text-[2.6rem] font-bold text-[#c17b5c] leading-none">
                {s.value}
              </div>
              <div className="text-[11px] text-[#a08070] mt-2.5 tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[#edd9cc] pt-8">
          <a
            href="#question"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-[#a08070] uppercase hover:text-[#c17b5c] transition-colors"
          >
            Scroll to explore
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-[#c17b5c] uppercase mb-4">
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-[2.6rem] font-bold text-[#221014] leading-tight">
        {title}
      </h2>
    </div>
  );
}

// ── Research Question ─────────────────────────────────────────────────────────

function ResearchQuestion() {
  return (
    <section id="question" className="py-28 bg-[#fdf4ef] px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.15fr] gap-16 items-start">
        <div>
          <SectionHeader label="The Problem" title="Research Question" />
          <p className="text-[#6b4f45] leading-[1.8] mb-5">
            Digital maternal health tools — SMS-based reminders, mHealth apps,
            online health portals — are being deployed across sub-Saharan Africa.
            But they assume connectivity that many women simply don't have.
          </p>
          <p className="text-[#6b4f45] leading-[1.8] mb-8">
            Using the Kenya 2022 DHS (n&nbsp;=&nbsp;32,156 women aged 15–49),
            this project asks whether marginalized women are systematically excluded
            from the very tools designed to reach them.
          </p>
          <blockquote className="border-l-2 border-[#c17b5c] pl-5">
            <p className="font-display text-xl italic text-[#221014] leading-snug">
              Do maternal health interventions disproportionately exclude
              the women who need them most?
            </p>
          </blockquote>
        </div>

        <div>
          {[
            {
              q: "Is wealth, education, or geography the strongest predictor of digital exclusion?",
              icon: BarChart2,
            },
            {
              q: "Do patterns differ for phone ownership vs. internet use?",
              icon: Smartphone,
            },
            {
              q: "How do these gaps translate to predicted access for rural women?",
              icon: MapPin,
            },
          ].map(({ q, icon: Icon }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-5 border-b border-[#edd9cc] last:border-0"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Icon size={17} className="text-[#c17b5c]" />
              </div>
              <p className="text-[#6b4f45] text-sm leading-[1.75]">{q}</p>
              <HelpCircle size={13} className="text-[#edd9cc] flex-shrink-0 mt-1" />
            </div>
          ))}

          <div className="mt-5 bg-[#fffaf7] border border-[#edd9cc] rounded-xl p-5 flex items-start gap-3">
            <Info size={14} className="text-[#c17b5c] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#6b4f45] leading-[1.7]">
              <strong className="text-[#221014] font-semibold">Digital exclusion</strong> —
              neither owning a phone nor using the internet — places women entirely outside
              the reach of digital maternal health tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Data & Methods ────────────────────────────────────────────────────────────

const variables = [
  { name: "phone_owns", desc: "Owns a mobile telephone (0/1)" },
  { name: "internet_use", desc: "Uses the internet (0/1)" },
  { name: "wealth_quintile", desc: "Wealth index quintile (1=poorest → 5=richest)" },
  { name: "education", desc: "Highest education level" },
  { name: "urban_rural", desc: "Place of residence" },
  { name: "maternal_age", desc: "Respondent's current age" },
];

const steps = [
  {
    icon: Filter,
    label: "Data Cleaning",
    desc: "Loaded Kenya 2022 DHS Stata file (32,156 rows). Extracted 6 variables and recoded binary outcomes.",
  },
  {
    icon: BarChart2,
    label: "Descriptive Statistics",
    desc: "Computed group means for phone ownership and internet use across all predictor categories.",
  },
  {
    icon: TrendingUp,
    label: "Logistic Regression",
    desc: "Modeled both outcomes simultaneously, controlling for wealth, education, urban/rural, and age.",
    tooltip:
      "A statistical model that estimates the probability of a binary outcome (0/1). After holding all other predictors constant, how much does each factor independently predict digital access?",
  },
  {
    icon: Calculator,
    label: "Predicted Probabilities",
    desc: "Held profile at rural, primary-educated to isolate the wealth gradient on expected access.",
  },
];

function DataMethods() {
  return (
    <section id="data" className="py-28 bg-[#fffaf7] px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="How We Got Here" title="Data & Methods" />
        <div className="grid md:grid-cols-2 gap-14">

          {/* Dataset */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Database size={16} className="text-[#c17b5c]" />
              <h3 className="font-display font-semibold text-[#221014] text-lg">Dataset</h3>
              <InfoTooltip text="The Demographic and Health Surveys (DHS) Program conducts nationally representative household surveys across low- and middle-income countries. The Kenya 2022 survey is the gold standard for maternal and reproductive health data in Kenya." />
            </div>
            <p className="text-sm text-[#a08070] mb-6">
              Kenya 2022 DHS Individual Recode ·{" "}
              <span className="font-semibold text-[#c17b5c]">n = 32,156</span> women aged 15–49
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#edd9cc]">
                  <th className="text-left pb-3 text-[11px] font-semibold text-[#a08070] uppercase tracking-[0.12em]">
                    Variable
                  </th>
                  <th className="text-left pb-3 text-[11px] font-semibold text-[#a08070] uppercase tracking-[0.12em]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {variables.map((v) => (
                  <tr key={v.name} className="border-b border-[#f5ede6] last:border-0">
                    <td className="py-3 pr-4">
                      <code className="text-[12px] text-[#c17b5c] font-mono bg-[#fdf4ef] px-1.5 py-0.5 rounded">
                        {v.name}
                      </code>
                    </td>
                    <td className="py-3 text-[#6b4f45] text-[13px]">{v.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Methodology */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <TrendingUp size={16} className="text-[#c17b5c]" />
              <h3 className="font-display font-semibold text-[#221014] text-lg">Methodology</h3>
            </div>
            <div>
              {steps.map(({ label, desc, tooltip }, i) => (
                <div
                  key={i}
                  className="flex gap-4 pb-6 mb-6 border-b border-[#f5ede6] last:border-0 last:mb-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#edd9cc] bg-[#fdf4ef] flex items-center justify-center">
                    <span className="text-[11px] font-semibold text-[#c17b5c]">{i + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-sm font-semibold text-[#221014]">{label}</span>
                      {tooltip && <InfoTooltip text={tooltip} />}
                    </div>
                    <p className="text-[13px] text-[#a08070] leading-[1.7]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Descriptive Findings ──────────────────────────────────────────────────────

const figures = [
  {
    src: "/phone_vs_internet_wealth.png",
    title: "Access by Wealth Quintile",
    caption: "A 74-point wealth gap in internet use dwarfs the 38-point gap in phone ownership.",
    tooltip:
      "Wealth quintile is constructed by DHS from household assets (floor material, water source, vehicle ownership, etc.) — not self-reported income. Quintile 1 is poorest, 5 is richest.",
  },
  {
    src: "/phone_vs_internet_urban_rural.png",
    title: "Access by Urban / Rural Residence",
    caption: "Urban women are 32.6 points more likely to use the internet than rural women, yet phone ownership is far more equal.",
    tooltip:
      "Urban/rural classification follows Kenya's official census-based designations — not self-identified residence.",
  },
  {
    src: "/predicted_probs.png",
    title: "Predicted Probabilities by Wealth",
    caption: "For a rural woman with primary education, internet use barely crosses 48% even at the highest wealth level.",
    tooltip:
      "Predicted probabilities from the logistic regression model, holding profile at rural / primary education / mean age. Only wealth varies, isolating its independent effect.",
  },
];

function DescriptiveFindings() {
  return (
    <section id="findings" className="py-28 bg-[#fdf4ef] px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="What the Data Show" title="The Gaps Are Wide — and Unequal" />
        <div className="grid md:grid-cols-3 gap-8">
          {figures.map(({ src, title, caption, tooltip }) => (
            <div key={src} className="flex flex-col">
              <div className="relative mb-5 border border-[#edd9cc] rounded-xl overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={title} className="w-full object-cover" />
                <div className="absolute top-3 right-3 bg-[#fffaf7] rounded-full border border-[#edd9cc] p-0.5">
                  <InfoTooltip text={tooltip} />
                </div>
              </div>
              <h3 className="font-display font-semibold text-[#221014] text-base mb-2">
                {title}
              </h3>
              <p className="text-[13px] text-[#a08070] leading-[1.7]">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Regression Results ────────────────────────────────────────────────────────

const regressionFindings = [
  {
    label: "Education — Largest Effect",
    text: "Women with no education are ~52× less likely to use the internet than women with higher education, after controlling for wealth and location.",
    tooltip:
      "An odds ratio (OR) > 1 means a group is more likely to have the outcome; < 1 means less likely. OR = 52 means 52× the odds. Odds ratios come from the logistic regression model holding all other variables constant.",
  },
  {
    label: "Wealth — Massive Gradient",
    text: "Richest-quintile women are ~20× more likely to use the internet than the poorest — a massive effect, but still not the largest.",
  },
  {
    label: "Urban Premium — Modest",
    text: "Controlling for wealth and education, urban women are only ~1.1× more likely to use the internet than rural women.",
  },
  {
    label: "Age Matters — for Phones",
    text: "Each additional year of age increases phone ownership odds by ~14%, suggesting steady adoption across generations.",
  },
];

const predProbs = [
  { q: "1 — Poorest", phone: "54.8%", internet: "4.5%",  bg: "#fde8e4", fg: "#9a2a1a" },
  { q: "2",           phone: "66.2%", internet: "9.4%",  bg: "#fde0d0", fg: "#8a4010" },
  { q: "3",           phone: "74.0%", internet: "16.8%", bg: "#fdf0d8", fg: "#806020" },
  { q: "4",           phone: "81.4%", internet: "28.9%", bg: "#edf5e4", fg: "#3a6828" },
  { q: "5 — Richest", phone: "87.0%", internet: "48.2%", bg: "#dff0da", fg: "#2a5a20" },
];

function RegressionResults() {
  return (
    <section id="results" className="py-28 bg-[#fffaf7] px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Regression Analysis"
          title="After Controlling for Everything — Education Dominates"
        />
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-start">

          {/* Findings */}
          <div>
            {regressionFindings.map(({ label, text, tooltip }, i) => (
              <div
                key={i}
                className="flex gap-5 pb-7 mb-7 border-b border-[#f5ede6] last:border-0 last:mb-0 last:pb-0"
              >
                <div className="flex-shrink-0 w-0.5 bg-[#e8c4b4] rounded-full self-stretch min-h-[1.5rem]" />
                <div>
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="text-sm font-semibold text-[#221014]">{label}</span>
                    {tooltip && <InfoTooltip text={tooltip} />}
                  </div>
                  <p className="text-[13px] text-[#a08070] leading-[1.75]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Predicted probability table */}
          <div className="bg-[#fdf4ef] border border-[#edd9cc] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-1">
              <TableProperties size={15} className="text-[#c17b5c]" />
              <h3 className="font-display font-semibold text-[#221014] text-sm">
                Predicted Access Rates
              </h3>
              <InfoTooltip text="Marginal predictions holding profile at rural / primary-education / mean-age. Only wealth varies, isolating its independent contribution." />
            </div>
            <p className="text-[11px] text-[#a08070] mb-6 mt-1">
              Rural woman · Primary education · Mean age
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#edd9cc]">
                  <th className="text-left pb-2.5 text-[11px] font-semibold text-[#a08070] uppercase tracking-[0.12em]">
                    Quintile
                  </th>
                  <th className="text-center pb-2.5 text-[11px] font-semibold text-[#a08070] uppercase tracking-[0.12em]">
                    Phone
                  </th>
                  <th className="text-center pb-2.5 text-[11px] font-semibold text-[#a08070] uppercase tracking-[0.12em]">
                    Internet
                  </th>
                </tr>
              </thead>
              <tbody>
                {predProbs.map(({ q, phone, internet, bg, fg }) => (
                  <tr key={q} className="border-b border-[#f5ede6] last:border-0">
                    <td className="py-2.5 text-[#6b4f45] text-[12px] font-medium">{q}</td>
                    <td className="py-2.5 text-center text-[12px] text-[#a08070]">{phone}</td>
                    <td className="py-2.5 text-center">
                      <span
                        className="text-[11px] px-2 py-0.5 rounded font-medium"
                        style={{ backgroundColor: bg, color: fg }}
                      >
                        {internet}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Takeaway ──────────────────────────────────────────────────────────────────

const takeaways = [
  {
    icon: Smartphone,
    title: "Phone-first, not internet-first",
    text: "Three-quarters of women own phones — SMS-based outreach is viable. But internet-dependent tools exclude the poorest 40%.",
  },
  {
    icon: GraduationCap,
    title: "Education is the gating factor",
    text: "Education is the single largest barrier. Digital literacy programs are a prerequisite for health equity, not an afterthought.",
  },
  {
    icon: MapPin,
    title: "Rural gaps go beyond poverty",
    text: "Urban/rural disparities persist even after controlling for wealth, pointing to infrastructure deficits income alone can't fix.",
  },
];

function Takeaway() {
  return (
    <section id="takeaway" className="py-28 bg-[#fdf4ef] px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Policy Implications" title="What This Means" />
        <div className="grid md:grid-cols-3 gap-12">
          {takeaways.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-4">
              <Icon size={22} className="text-[#c17b5c]" />
              <h3 className="font-display font-semibold text-[#221014] text-xl leading-snug">
                {title}
              </h3>
              <p className="text-[13px] text-[#a08070] leading-[1.8]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t border-[#edd9cc]">
          <p className="text-[11px] text-[#a08070] tracking-wide">
            Data from Kenya 2022 DHS · QSS20 Milestone 2 ·
            Results are observational — not causal.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#221014] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[12px] text-[#7a5848]">QSS20 · Milestone 2 · Aulanni Kidd</span>
        <span className="text-[12px] text-[#7a5848]">Data: Kenya 2022 DHS Individual Recode</span>
        <span className="text-[12px] text-[#7a5848]">Next.js + Tailwind CSS</span>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchQuestion />
        <DataMethods />
        <DescriptiveFindings />
        <RegressionResults />
        <Takeaway />
      </main>
      <Footer />
    </>
  );
}
