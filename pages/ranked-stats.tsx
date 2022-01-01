import React, { useState } from "react";
import { Container, Input } from "../components";

import data from "../data/sys_hof1";

type TSortOptions = "successRate" | "sys" | "hof";

const RankedStats = () => {
  const [searchTerm, setSearchTerm] = useState("nothingshouldbehere");
  return (
    <>
      <Container className="mb-8">
        <label className="mb-4" htmlFor="items-to-display">
          <div>Find yourself</div>
          <Input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        </label>

      </Container>
      <Container>
        <ul className="grid grid-cols-5 gap-4">
          {
            data.filter((item) => item.author.toLowerCase().match(new RegExp(searchTerm.toLowerCase(), "g"))).map((item) => (
              <li key={item.author} className="rounded-md shadow-lg bg-theme-dp12 p-6 flex flex-col justify-between">
                <h2 className="font-bold text-2xl pb-2 border-b-2 border-b-theme-base mb-2 dark:border-b-theme-accent">{item.author}</h2>
                <div>
                  <div>
                    <h3 className="font-bold">Posts</h3>
                    <p>{item.sys}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">HOF Appearances</h3>
                    <p>{item.hof}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">HOF Appearance Rate</h3>
                    <p>{(item.successRate * 100).toFixed(2)}%</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </Container>
    </>
  );
};

export default RankedStats;
