"use client";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Q1", phone: 55, internet: 5 },
  { name: "Q2", phone: 62, internet: 12 },
  { name: "Q3", phone: 70, internet: 22 },
  { name: "Q4", phone: 78, internet: 35 },
  { name: "Q5", phone: 87, internet: 52 },
];

export function PredictedProbabilityChart() {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0cfc4" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7a6155" }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7a6155" }} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
          <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e0cfc4", borderRadius: "8px", fontSize: "14px" }} />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
          <Line type="monotone" dataKey="phone" name="Phone Ownership" stroke="#2b6cb0" strokeWidth={3} dot={{ r: 5, fill: "#2b6cb0" }} activeDot={{ r: 7 }} />
          <Line type="monotone" dataKey="internet" name="Internet Use" stroke="#e8772e" strokeWidth={3} dot={{ r: 5, fill: "#e8772e" }} activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
