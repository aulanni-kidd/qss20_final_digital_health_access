export function TakeawaySection() {
  return (
    <section id="takeaway" className="py-[120px] px-6 border-t border-divider">
      <div className="max-w-[680px] mx-auto text-center">
        <div className="mb-12">
          <div className="text-[11px] uppercase tracking-widest text-terracotta font-semibold mb-4">
            The Takeaway
          </div>
          <h2 className="font-serif text-[40px] md:text-[48px] text-dark leading-tight">
            Design for the Excluded
          </h2>
        </div>

        <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.8] text-dark text-left">
          <p>
            The data presents a clear warning: if we build maternal health
            interventions that rely on internet connectivity or smartphone
            ownership, we are systematically excluding the poorest, least
            educated, and most rural women.
          </p>
          <p>
            These are the very women who face the highest risks of maternal
            mortality and morbidity. A digital health strategy that ignores this
            reality risks exacerbating existing health inequities rather than
            closing them.
          </p>
          <p>
            To reach everyone, interventions must be designed with a "lowest
            common denominator" approach for connectivity. This means
            prioritizing voice-first interfaces, offline-capable tools, and
            basic SMS over data-heavy applications, ensuring that the women who
            need these tools most are not left behind by the technology designed
            to save them.
          </p>
        </div>
      </div>
    </section>
  );
}
