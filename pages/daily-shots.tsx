import React, { ChangeEvent, MouseEvent, useContext, useEffect, useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

import data from "../data/shottracking";
import { calendarColours, themeAccent, themeBase } from "../data";
import { Button, Input } from "../components";
import { ThemeContext } from "../context";

type TColours = "singleHue" | "heat";

const DailyShots = () => {
  const [colours, setColours] = useState(calendarColours.heat);
  const [monthSpacing, setMonthSpacing] = useState(0);

  const theme = useContext(ThemeContext);

  const changeColours = (e: MouseEvent<HTMLButtonElement>) => {
    setColours(calendarColours[(e.target as HTMLButtonElement).value as TColours]);
  };

  const changeMonthSpacing = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthSpacing(
      parseInt(e.target.value || "0"),
    );
  };

  return (
    <div className="h-screen container mx-auto">
      <div className="dark:bg-theme-dp04 shadow-md rounded-md mb-8 p-8">
        <div className="mb-8">
          <Button onClick={changeColours} value={"singleHue"} className="mr-4">
          Single Hue
          </Button>
          <Button onClick={changeColours} value={"heat"}>
          Heat Map Colouring
          </Button>
        </div>
        <div className="mb-8">
          <Input placeholder="Add/remove spacing between the months" className="w-full" type="number" onChange={changeMonthSpacing} />
        </div>
      </div>
      <div className="dark:bg-theme-dp04 shadow-md h-4/5 rounded-md px-8">
        <ResponsiveCalendar
          data={data}
          from="2021-01-01"
          to="2021-12-31"
          emptyColor="#eeeeee"
          colors={colours}
          theme={{
            textColor: theme === "dark" ? themeAccent : themeBase,
          }}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor={theme === "dark" ? themeBase : themeAccent}
          dayBorderWidth={2}
          dayBorderColor={theme === "dark" ? themeBase : themeAccent}
          legendFormat={(value) => `${value}+ shots`}
          monthSpacing={monthSpacing}
          legends={[
            {
              anchor: "top",
              direction: "row",
              itemCount: colours.length,
              itemWidth: 60,
              itemHeight: 36,
              itemsSpacing: 60,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DailyShots;
