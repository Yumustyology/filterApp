import React, { useState } from "react";
import "../styles/Sidebar.css";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { GrPrevious, GrFormPrevious } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";

import avatar from "../assets/man.png";

const Sidebar = ({
  setFilteredData,
  filteredData,
  active,
  setActive,
  data,
}: {
  setFilteredData: Function;
  filteredData: Object[];
  active: number;
  setActive: Function;
  data: Object[];
}) => {
  type dummyData = {
    [key: string]: any;
  };

  const sidebarList = [
    ...new Set(data.map((row: dummyData) => row.description)),
  ];

  const filterData = (val: string, i: number) => {
    setActive(i);

    let value;

    if (filteredData.length > 0) {
      value = filteredData.filter(
        (data: dummyData) =>
          data.description.toLowerCase() === val.toLowerCase()
      );

      setFilteredData(value);
      return;
    }

    if (val) {
      value = data.filter(
        (data: dummyData) =>
          data.description.toLowerCase() === val.toLowerCase()
      );
      setFilteredData(value);
      return;
    }
  };
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className={`sidebar__container`}>
      <div className="sidebar__top__logo flex items-center mt-3 ml-4">
        <div className="h-[50px] w-[50px] bg-[#157CB0] flex text-white font-bold justify-center mr-[20px] items-center">
          OC
        </div>
        <div className="text-white">
          <div>
            <span className="font-medium text-2xl">OC</span>
            <span className="font-light">
              <sup>TM</sup>
            </span>
          </div>
          <div>
            <span className="text-[#85A7CD]">Order Central</span>
          </div>
        </div>
      </div>
      <div className="sidebar__list flex flex-col justify-between h-5/6 mt-6">
        <div>
          <ul className="list-none">
            {sidebarList.map((list, i) => (
              <li
                className={`h-11 w-full text-white flex items-center pl-[10px] cursor-pointer ${
                  active === i &&
                  "bg-[#064A71] border-l-[6px] border-l-[#157CB0]"
                }`}
                key={i}
                onClick={() => filterData(list, i)}
              >
                <VscGraph
                  size={20}
                  color="white"
                  className="mr-[5px] font-light text-sm"
                />
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-[10px]">
          <ul className="list-none">
            <li className="h-11 w-full text-white flex items-center text-[12px] pl-[10px] cursor-pointer">
              <span className="flex">
                <FcPrevious
                  size={18}
                  color="white"
                  className="font-light -mr-[10px] text-sm"
                />
                <FcPrevious
                  size={18}
                  color="white"
                  className="mr-[2px] font-light text-sm"
                />
              </span>
              Close menu
            </li>

            <li className="h-11 w-full text-white flex items-center pl-[10px]">
              <img
                src={avatar}
                className="h-[20px] w-[20px] mr-[10px]"
                alt="avatar"
              />
              <span className="flex flex-col text-sm">
                <span className="text-[12px]">Mazie johnson</span>
                <span className="text-[10px]">View profile</span>
              </span>
            </li>

            <li className="h-11 w-full text-white flex items-center text-[12px] pl-[10px]">
              <AiOutlineQuestionCircle
                size={20}
                color="white"
                className="mr-[10px] font-light text-sm"
              />
              Help
            </li>

            <li className="h-11 w-full text-white flex items-center text-[12px] pl-[10px]">
              <RiNotification2Line
                size={20}
                color="white"
                className="mr-[10px] font-light"
              />
              Notification
            </li>
            <li className="h-11 w-full text-white flex items-center text-[12px] pl-[10px]">
              <CgLogOut
                size={20}
                color="white"
                className="mr-[10px] font-light"
              />
              Sign out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
