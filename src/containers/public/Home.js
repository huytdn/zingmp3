import React from "react";
import { Header, Slider } from "../../components";

const Home = () => {
  return (
    <div className="overflow-y-auto h-[1000px]">
      <div className="h-[70px] px-[59px] flex items-center">
        <Header />
      </div>
      <Slider />
    </div>
  );
};

export default Home;
