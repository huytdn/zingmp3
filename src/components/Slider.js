import { useEffect, useState } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { getArrSlider } from "../ultis/fn";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }, 2000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex gap-9 w-full overflow-hidden px-[59px] pt-[12px]">
      {banner?.map((item, index) => (
        <img
          key={item.encodeId}
          src={item.banner}
          className={`w-[1200px] h-full object-cover rounded-md ${
            index === currentIndex ? "block" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
