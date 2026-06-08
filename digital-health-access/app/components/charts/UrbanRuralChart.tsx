"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, LabelList,
} from "recharts";

const data = [
  { name: "Rural", phone: 68.4, internet: 24.3 },
  { name: "Urban", phone: 85.0, internet: 56.9 },
];

export function UrbanRuralChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0cfc4" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7a6155" }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7a6155" }} tickFormatter={(v) => `${v}%`} />
          <Tooltip cursor={{ fill: "#fdf6f0" }} contentStyle={{ backgroundColor: "#fff", border: "1px solid #e0cfc4", borderRadius: "8px", fontSize: "14px" }} />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
          <Bar dataKey="phone" name="Phone Ownership" fill="#2b6cb0" radius={[4, 4, 0, 0]} maxBarSize={60}>
            <LabelList dataKey="phone" position="top" style={{ fontSize: "10px", fill: "#1c1008" }} formatter={(v: unknown) => `${v}%`} />
          </Bar>
          <Bar dataKey="internet" name="Internet Use" fill="#e8772e" radius={[4, 4, 0, 0]} maxBarSize={60}>
            <LabelList dataKey="internet" position="top" style={{ fontSize: "10px", fill: "#1c1008" }} formatter={(v: unknown) => `${v}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
