import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const activeStyle =
  "py-2 px-[25px] font-bold text-[#0F7070] text-[13px] flex gap-[12px] items-center";
const noActiveStyle =
  "py-2 px-[25px] font-bold text-[#32323D] text-[13px] flex gap-[12px] items-center";
const SidebarLeft = () => {
  return (
    <div className="flex flex-col bg-[#DDE4E4]">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img src={logo} alt="Zing MP3" className="w-[120px] h-10" />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : noActiveStyle
            }
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
