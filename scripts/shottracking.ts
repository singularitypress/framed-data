import fs from "fs";
import path from "path";

require("dotenv").config();

interface IData {
  value: number;
  day: string;
}

const [, input] = process.argv.filter((arg) => arg.indexOf("--input=") > -1)[0].split("=");
const [, output] = process.argv.filter((arg) => arg.indexOf("--output=") > -1)[0].split("=");

if (process.env[input] && process.env[output]) {
  const data = fs
    .readFileSync(path.resolve(`${process.env[input]}`), { encoding: "utf-8" })
    .split("\n")
    .reduce((dataList, line, index) => {
      if (index === 0) return dataList;
      const cells = line.replace("\r", "").split(",");
      const date = new Date(cells[1]);
      const day = `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
      return [
        ...dataList,
        {
          day,
          value: parseInt(cells[2]),
        },
      ];
    }, [] as IData[]);

  fs.writeFileSync(
    path.resolve(`${process.env[output]}`),
    `export default ${JSON.stringify(data)}`,
    { encoding: "utf-8" },
  );
}

export {};
