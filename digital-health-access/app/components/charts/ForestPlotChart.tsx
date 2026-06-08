const data = [
  { label: "Age (per year)",   internet: { or: 0.95, low: 0.93, high: 0.97 }, phone: { or: 1.02, low: 1.01, high: 1.03 } },
  { label: "Urban",            internet: { or: 1.1,  low: 1.05, high: 1.15 }, phone: { or: 1.08, low: 1.03, high: 1.13 } },
  { label: "Secondary",        internet: { or: 0.4,  low: 0.35, high: 0.45 }, phone: { or: 0.3,  low: 0.25, high: 0.35 } },
  { label: "Primary",          internet: { or: 0.2,  low: 0.15, high: 0.25 }, phone: { or: 0.2,  low: 0.15, high: 0.25 } },
  { label: "No education",     internet: { or: 0.08, low: 0.05, high: 0.12 }, phone: { or: 0.18, low: 0.13, high: 0.23 } },
  { label: "Wealth Q5 vs Q1", internet: { or: 8.5,  low: 7.5,  high: 9.5  }, phone: { or: 3.5,  low: 3.0,  high: 4.0  } },
  { label: "Wealth Q4 vs Q1", internet: { or: 4.2,  low: 3.5,  high: 5.0  }, phone: { or: 2.5,  low: 2.1,  high: 2.9  } },
  { label: "Wealth Q3 vs Q1", internet: { or: 2.1,  low: 1.8,  high: 2.5  }, phone: { or: 1.8,  low: 1.5,  high: 2.1  } },
  { label: "Wealth Q2 vs Q1", internet: { or: 1.4,  low: 1.2,  high: 1.6  }, phone: { or: 1.3,  low: 1.1,  high: 1.5  } },
];

export function ForestPlotChart() {
  const width = 800;
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 40, left: 160 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const minLog = Math.log(0.01);
  const maxLog = Math.log(10);
  const xScale = (val: number) => ((Math.log(val) - minLog) / (maxLog - minLog)) * innerWidth;
  const rowHeight = innerHeight / data.length;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px] flex justify-center">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="font-sans">
          <g transform={`translate(${margin.left},${margin.top})`}>
            <line x1={xScale(1)} y1={0} x2={xScale(1)} y2={innerHeight} stroke="#7a6155" strokeWidth="1" strokeDasharray="4 4" />

            {[0.01, 0.1, 1, 10].map((tick) => (
              <g key={tick} transform={`translate(${xScale(tick)},${innerHeight})`}>
                <line y2="6" stroke="#e0cfc4" />
                <text y="20" textAnchor="middle" fontSize="12" fill="#7a6155">{tick}</text>
              </g>
            ))}

            {data.map((row, i) => {
              const y = i * rowHeight + rowHeight / 2;
              return (
                <g key={row.label}>
                  <text x="-20" y={y} textAnchor="end" dominantBaseline="middle" fontSize="13" fill="#1c1008">
                    {row.label}
                  </text>
                  <g transform={`translate(0, ${y - 6})`}>
                    <line x1={xScale(row.internet.low)} x2={xScale(row.internet.high)} y1="0" y2="0" stroke="#2b6cb0" strokeWidth="1.5" />
                    <line x1={xScale(row.internet.low)} x2={xScale(row.internet.low)} y1="-4" y2="4" stroke="#2b6cb0" strokeWidth="1.5" />
                    <line x1={xScale(row.internet.high)} x2={xScale(row.internet.high)} y1="-4" y2="4" stroke="#2b6cb0" strokeWidth="1.5" />
                    <circle cx={xScale(row.internet.or)} cy="0" r="4" fill="#2b6cb0" />
                  </g>
                  <g transform={`translate(0, ${y + 6})`}>
                    <line x1={xScale(row.phone.low)} x2={xScale(row.phone.high)} y1="0" y2="0" stroke="#e8772e" strokeWidth="1.5" />
                    <line x1={xScale(row.phone.low)} x2={xScale(row.phone.low)} y1="-4" y2="4" stroke="#e8772e" strokeWidth="1.5" />
                    <line x1={xScale(row.phone.high)} x2={xScale(row.phone.high)} y1="-4" y2="4" stroke="#e8772e" strokeWidth="1.5" />
                    <rect x={xScale(row.phone.or) - 3.5} y="-3.5" width="7" height="7" fill="#e8772e" />
                  </g>
                </g>
              );
            })}

            <g transform={`translate(${innerWidth - 160}, 0)`}>
              <rect width="150" height="60" fill="#fff" stroke="#e0cfc4" rx="4" />
              <g transform="translate(10, 20)">
                <circle cx="10" cy="0" r="4" fill="#2b6cb0" />
                <text x="25" y="4" fontSize="12" fill="#1c1008">Internet Use</text>
              </g>
              <g transform="translate(10, 45)">
                <rect x="6.5" y="-3.5" width="7" height="7" fill="#e8772e" />
                <text x="25" y="4" fontSize="12" fill="#1c1008">Phone Ownership</text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
