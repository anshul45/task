import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  {
    name: "category_6",
    value: 100,
  },
  {
    name: "category_7",
    value: 80,
  },
  {
    name: "category_8",
    value: 60,
  },
  {
    name: "category_9",
    value: 40,
  },
  {
    name: "category_10",
    value: 20,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={{ fontSize: 12, fill: "#FFFFFF" }}
        />
        <YAxis tickLine={false} tick={{ fontSize: 12, fill: "#FFFFFF" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "inherit",
            color: "#F0C3F1",
            border: "none",
          }}
          cursor={{ fill: "none" }}
        />

        <Bar dataKey="value" fill="#F0C3F1" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
