import React, { ChangeEvent, ChangeEventHandler, MouseEvent, useContext, useState } from "react";
import { CalendarTooltipProps, ResponsiveCalendar } from "@nivo/calendar";

import sysData from "../data/shottracking";
import hofData from "../data/hoftracking";
import { calendarColours, themeAccent, themeBase, themeDp24 } from "../data";
import { Container, Input } from "../components";
import { ThemeContext } from "../context";
type TColours = "singleHue" | "heat";

const ShotTracking = () => {
  const [colours, setColours] = useState(calendarColours.singleHue);
  const [monthSpacing, setMonthSpacing] = useState(0);

  const theme = useContext(ThemeContext);

  const changeColours = (e: ChangeEvent<HTMLSelectElement>) => {
    setColours(calendarColours[e.target.value as TColours]);
  };

  const changeMonthSpacing = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthSpacing(
      parseInt(e.target.value || "0"),
    );
  };

  const tooltip = (d: CalendarTooltipProps) => {
    const { value, day, color } = d;

    return (
      <div className="bg-theme-accent dark:bg-theme-dp04 shadow-md p-3">
        <div className="flex items-center">
          <div className="mr-2">{day}</div>
          <div
            className="rounded-full w-4 h-4 mr-2"
            style={{ backgroundColor: color }}>
          </div>
          <div>{value} shots</div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen">
      <Container className="mb-8">
        <div className="mb-8">
          <Input placeholder="Add/remove spacing between the months" className="w-full" type="number" onChange={changeMonthSpacing} />
        </div>
        <div className="mb-8">
          <select className="p-4 w-1/3 dark:text-theme-base rounded-md" onChange={changeColours}>
            {
              Object.keys(calendarColours).map((key) => {
                return (
                  <option key={key} value={key}>{key}</option>
                );
              })
            }
          </select>
        </div>
      </Container>
      <Container className="h-4/5 mb-8">
        <h2 className="text-2xl">
          <strong>
            Share Your Shot, Daily Posts
          </strong>
        </h2>
        <ResponsiveCalendar
          data={sysData}
          from={new Date("2021-01-01").toISOString()}
          to={new Date("2021-12-31").toISOString()}
          tooltip={tooltip}
          emptyColor={theme === "dark" ? themeDp24 : "#eeeeee"}
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
              itemCount: 10,
              itemWidth: 60,
              itemHeight: 36,
              itemsSpacing: 60,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </Container>
      <Container className="h-4/5 mb-8">
        <h2 className="text-2xl">
          <strong>
            HOF Daily Posts
          </strong>
        </h2>
        <ResponsiveCalendar
          data={hofData}
          from={new Date("2021-01-01").toISOString()}
          to={new Date("2021-12-31").toISOString()}
          tooltip={tooltip}
          emptyColor={theme === "dark" ? themeDp24 : "#eeeeee"}
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
              itemCount: 4,
              itemWidth: 60,
              itemHeight: 36,
              itemsSpacing: 60,
            },
          ]}
        />
      </Container>
      <Container className="h-4/5 mb-8">
        <h2 className="text-2xl">
          <strong>HOF Daily Converseion</strong>
        </h2>
        <ResponsiveCalendar
          data={hofData.map((item, index) => {
            if (item.value === 0) return { ...item, value: 0 };
            return {
              day: item.day,
              value: (item.value / sysData[index].value) * 100,
            };
          }) }
          from={new Date("2021-01-01").toISOString()}
          to={new Date("2021-12-31").toISOString()}
          tooltip={tooltip}
          emptyColor={theme === "dark" ? themeDp24 : "#eeeeee"}
          colors={colours}
          theme={{
            textColor: theme === "dark" ? themeAccent : themeBase,
          }}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor={theme === "dark" ? themeBase : themeAccent}
          dayBorderWidth={2}
          dayBorderColor={theme === "dark" ? themeBase : themeAccent}
          legendFormat={(value) => `${value}%+`}
          monthSpacing={monthSpacing}
          legends={[
            {
              anchor: "top",
              direction: "row",
              itemCount: 10,
              itemWidth: 60,
              itemHeight: 36,
              itemsSpacing: 60,
            },
          ]}
        />
      </Container>
    </div>
  );
};

export default ShotTracking;
