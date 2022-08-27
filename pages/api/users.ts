import { NextApiRequest, NextApiResponse } from "next";
import { config } from "dotenv";
import axios from "axios";
import { readFileSync, writeFile, writeFileSync } from "fs";
import { resolve } from "path";

config();

interface IUsers {
  [key: string]: {
    authorNick: string;
    authorsAvatarUrl: string;
    flickr: string;
    twitter: string;
    instagram: string;
    steam: string;
    othersocials: string[];
  };
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  return axios.get(process.env.USERS_API).then((res) =>
    Object.keys(res.data._default).reduce((userMap, key) => {
      return {
        ...userMap,
        [res.data._default[key].authorid]: res.data._default[key],
      };
    }, {} as IUsers),
  );
};
