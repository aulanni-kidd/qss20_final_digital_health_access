export function TopNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-divider px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-serif font-semibold text-lg text-dark">
          Digital Health Access · Kenya 2022
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#question" className="hover:text-terracotta transition-colors">Question</a>
          <a href="#data" className="hover:text-terracotta transition-colors">Data</a>
          <a href="#findings" className="hover:text-terracotta transition-colors">Findings</a>
          <a href="#results" className="hover:text-terracotta transition-colors">Results</a>
          <a href="#takeaway" className="hover:text-terracotta transition-colors">Takeaway</a>
        </div>
      </div>
    </nav>
  );
}
