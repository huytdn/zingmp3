import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const { IoIosArrowRoundBack, IoIosArrowRoundForward } = icons;

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-4 items-center w-full">
        <div className="flex gap-4 text-gray-400">
          <span>
            <IoIosArrowRoundBack size={32} />
          </span>
          <span>
            <IoIosArrowRoundForward size={32} />
          </span>
        </div>
        <div className="w-[46%]">
          <Search />
        </div>
      </div>
      <div>dang nhap</div>
    </div>
  );
};

export default Header;
