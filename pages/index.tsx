import { Hero } from "@components/organism";
import { NextPage } from "next";

const Home: NextPage<{}> = () => {
  return (
    <Hero variant="grid">
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="headline mb-4 md:-mb-6">
            Framed
            <br />
            Data
          </h1>
          <div className="flex-grow grid grid-rows-5 grid-flow-col h-36 md:h-48 w-full">
            <div className="bg-yellow-400 md:translate-x-44"></div>
            <div className="bg-orange-500"></div>
            <div className="bg-red-500 md:translate-x-12"></div>
            <div className="bg-fuchsia-600 md:-translate-x-12"></div>
            <div className="bg-purple-500 md:-translate-x-24"></div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default Home;
