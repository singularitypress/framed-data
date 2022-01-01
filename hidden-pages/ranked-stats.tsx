import React, { useState } from "react";
import { Container } from "../components";

import data from "../data/sys_hof1";

type TSortOptions = "successRate" | "sys" | "hof";

const RankedStats = () => {
  const [displayNum, setDisplayNum] = useState(10);
  const [sortOption, setSortOption] = useState<TSortOptions>("sys");

  const displayNumOptions = [
    10,
    25,
    50,
  ];

  const sortOptions = [
    "successRate", "sys", "hof",
  ];

  return (
    <>
      <Container className="mb-8">
        <label className="mb-4" htmlFor="items-to-display">
          <div>Items to display</div>
          <select
            id="items-to-display"
            className="px-4 py-2 mt-4 text-theme-base rounded-md"
            onChange={(e) => setDisplayNum(parseInt(e.target.value))}>
            {
              displayNumOptions.map((item) => (<option key={item}>{item}</option>))
            }
          </select>
        </label>
        <label className="mb-4" htmlFor="items-to-display">
          <div>Items to display</div>
          <select
            id="items-to-display"
            className="px-4 py-2 mt-4 text-theme-base rounded-md"
            onChange={(e) => setSortOption(e.target.value as TSortOptions)}>
            {
              sortOptions.map((item) => (<option key={item} value={item}>{item}</option>))
            }
          </select>
        </label>
      </Container>
      <Container>
        <ul className="grid grid-cols-5 gap-4">
          {
            data.sort((a, b) => b[sortOption] - a[sortOption]).slice(0, displayNum).map((item) => (
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
