"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, LabelList,
} from "recharts";

const data = [
  { name: "1", phone: 54.3, internet: 5.4 },
  { name: "2", phone: 66.8, internet: 17.1 },
  { name: "3", phone: 76.4, internet: 31.9 },
  { name: "4", phone: 85.4, internet: 53.7 },
  { name: "5", phone: 92.5, internet: 79.5 },
];

export function WealthQuintileChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0cfc4" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7a6155" }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7a6155" }} tickFormatter={(v) => `${v}%`} />
          <Tooltip cursor={{ fill: "#fdf6f0" }} contentStyle={{ backgroundColor: "#fff", border: "1px solid #e0cfc4", borderRadius: "8px", fontSize: "14px" }} />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
          <Bar dataKey="phone" name="Phone Ownership" fill="#2b6cb0" radius={[4, 4, 0, 0]} maxBarSize={40}>
            <LabelList dataKey="phone" position="top" style={{ fontSize: "10px", fill: "#1c1008" }} formatter={(v: unknown) => `${v}%`} />
          </Bar>
          <Bar dataKey="internet" name="Internet Use" fill="#e8772e" radius={[4, 4, 0, 0]} maxBarSize={40}>
            <LabelList dataKey="internet" position="top" style={{ fontSize: "10px", fill: "#1c1008" }} formatter={(v: unknown) => `${v}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
