import React from "react";
import { ResponsiveLine } from "@nivo/line";

import { Container } from "../components";

import sys from "../data/shottracking";
import hof from "../data/hoftracking";

const SysVsHof = () => {
  const groupMonthly = (item: {day: string; value: number}) => {

  };
  return (
    <Container className="h-screen">
      <ResponsiveLine
        margin={{ left: 50, right: 50, top: 50, bottom: 50 }}
        animate={true}
        enableSlices={false}
        data={[
          {
            id: "Share your shot",
            data: sys.map((item) => ({ x: item.day, y: item.value })),
          },
          {
            id: "Hall of Framed",
            data: hof.map((item) => ({ x: item.day, y: item.value })),
          },
        ]}
        theme={{
          textColor: "#fff",
        }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          stacked: false,
        }}
        axisLeft={{
          legend: "Shots",
        }}
        axisBottom={{
          format: "%b %d",
          legend: "Months",
          legendOffset: 24,
        }}
        curve="monotoneX"
        pointBorderWidth={1}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        useMesh={true}
      />
    </Container>
  );
};

export default SysVsHof;
