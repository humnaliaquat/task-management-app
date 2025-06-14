import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", tasks: 5 },
  { name: "Feb", tasks: 7 },
  { name: "Mar", tasks: 9 },
  { name: "Apr", tasks: 6 },
  { name: "May", tasks: 5 },
  { name: "Jun", tasks: 4 },
];

export default function TaskStatsChart() {
  return (
    <div className=" dark:bg-zinc-900 p-2 rounded w-full h-60">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Tasks Overview
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af" }}
            stroke="#8884d8"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af" }}
            stroke="#8884d8"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
            itemStyle={{ color: "#000" }}
            cursor={false}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            dataKey="tasks"
            fill="black"
            radius={[6, 6, 0, 0]}
            barSize={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
