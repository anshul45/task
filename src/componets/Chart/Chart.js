import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const Chart = ({ data }) => {
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
