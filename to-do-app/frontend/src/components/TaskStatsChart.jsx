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
    <div className="dark:bg-zinc-900 w-full h-full flex flex-col justify-center items-center p-4 rounded-3xl  border border-gray-200 dark:border-gray-700 shadow-lg">
      <h2 className="text-lg font-semibold  dark:text-gray-100 mb-4">
        Tasks Overview
      </h2>
      <ResponsiveContainer width="100%" height="80%">
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
            fill="#68aa9d"
            radius={[6, 8, 0, 0]}
            barSize={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
