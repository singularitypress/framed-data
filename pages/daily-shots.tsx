import React, { MouseEvent, useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

import data from "../data/shottracking";
import { calendarColours } from "../data";
import { Button } from "../components";

type TColours = "singleHue" | "heat";

const DailyShots = () => {
  const [colours, setColours] = useState(calendarColours.singleHue);

  const changeColours = (e: MouseEvent<HTMLButtonElement>) => {
    setColours(calendarColours[(e.target as HTMLButtonElement).value as TColours]);
  };

  return (
    <div className="h-screen container mx-auto">
      <Button onClick={changeColours} value={"singleHue"} className="mr-4">
        Single Hue
      </Button>
      <Button onClick={changeColours} value={"heat"}>
        Heat Map Colouring
      </Button>
      <ResponsiveCalendar
        data={data}
        from="2021-01-01"
        to="2021-12-31"
        emptyColor="#eeeeee"
        colors={colours}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legendFormat={(value) => `${value}+ shots`}
        legends={[
          {
            anchor: "top",
            direction: "row",
            translateY: 100,
            itemCount: colours.length,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 60,
            itemDirection: "right-to-left",
          },
        ]}
      />
    </div>
  );
};

export default DailyShots;
