import fs from "fs";
import path from "path";

require("dotenv").config();

type TNumbers = "successRate" | "sys" | "hof";

type TData = {
  [key in TNumbers]: number;
}

interface IData extends TData {
  author: string;
}

if (process.env.SYS_HOF1_INPUT && process.env.SYS_HOF1_OUTPUT) {
  const data =
    fs
      .readFileSync(path.resolve(process.env.SYS_HOF1_INPUT), { encoding: "utf-8" })
      .split("\n")
      .reduce(
        (arr, row, index) => {
          if (index === 0 || row.indexOf("NaN") > -1) return arr;

          const cells = row.replace("\r", "").split(",");
          return [
            ...arr,
            {
              author: cells[0],
              successRate: parseFloat(cells[1]),
              sys: parseInt(cells[2]),
              hof: parseInt(cells[3]),
            },
          ];
        }, [] as IData[],
      );
  fs
    .writeFileSync(
      process.env.SYS_HOF1_OUTPUT,
      `export default ${JSON.stringify(data)}`,
      { encoding: "utf-8" },
    );
}

export {};
