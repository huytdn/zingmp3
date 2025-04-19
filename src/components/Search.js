import React from "react";
import icons from "../ultis/icons";

const { IoIosSearch } = icons;

const Search = () => {
  return (
    <div className="bg-[#e0ebeb] h-[40px] rounded-[20px] flex  w-full items-center">
      <span className="ml-2 text-gray-400 cursor-pointer">
        <IoIosSearch size={26} />
      </span>
      <input
        className="w-full outline-none bg-transparent py-[5px] text-gray-500 cursor-text"
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
