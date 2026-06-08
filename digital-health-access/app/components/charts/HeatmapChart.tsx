const data = [
  { wealth: "Q1 (Poorest)", edu: ["1.5%", "3.5%", "15.9%", "54.8%"] },
  { wealth: "Q2",           edu: ["5.9%", "8.9%", "24.8%", "68.7%"] },
  { wealth: "Q3",           edu: ["9.8%", "17.2%", "38.0%", "82.1%"] },
  { wealth: "Q4",           edu: ["14.2%", "28.5%", "52.4%", "91.2%"] },
  { wealth: "Q5 (Richest)", edu: ["22.1%", "45.6%", "71.3%", "96.5%"] },
];

const cols = ["No education", "Primary", "Secondary", "Higher"];

function getColor(valStr: string) {
  const val = parseFloat(valStr);
  if (val < 10) return "#fdf6f0";
  if (val < 25) return "#e2e8f0";
  if (val < 50) return "#90cdf4";
  if (val < 75) return "#4299e1";
  return "#2b6cb0";
}

function getTextColor(valStr: string) {
  return parseFloat(valStr) > 50 ? "#ffffff" : "#1c1008";
}

export function HeatmapChart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] gap-1 mb-2">
          <div />
          {cols.map((col) => (
            <div key={col} className="text-center text-[12px] font-medium text-muted">
              {col}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {data.map((row, i) => (
            <div key={i} className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] gap-1">
              <div className="flex items-center justify-end pr-4 text-[12px] font-medium text-muted">
                {row.wealth}
              </div>
              {row.edu.map((val, j) => (
                <div
                  key={j}
                  className="h-16 flex items-center justify-center font-semibold text-[14px] rounded-sm transition-colors hover:opacity-90"
                  style={{ backgroundColor: getColor(val), color: getTextColor(val) }}
                >
                  {val}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
