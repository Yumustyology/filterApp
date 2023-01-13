import React, { useState } from "react";
import "../styles/Header.css";
import { MdNavigateNext, MdOutlineFilterList } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";


const Header = ({
  showSidebar,
  setShowSidebar,
  setFilteredData,
  filteredData,
  data,
}: {
  setShowSidebar: Function;
  showSidebar: Boolean;
  setFilteredData: Function;
  filteredData: Object[];
  data: Object[]
}) => {
  const [searchVal, setSearchVal] = useState<string>("");
  let filteredVal:Object[] = [];

  type dummyData = {
    [key: string]: any;
  };


  const filterDataFunc = () => {
    if (searchVal.includes(",") == true) {
      searchVal.split(",").forEach(function (item) {
        let val = data.filter(
          (data:dummyData) =>
            data.order.toLowerCase() === item ||
            data.item.toLowerCase() === item
        );

        filteredVal.push(...val);
        setFilteredData([...filteredVal]);
        
      });
    } else {
      let val = data.filter(
        (data:dummyData) =>
          data.order.toLowerCase() === searchVal ||
          data.item.toLowerCase() === searchVal
      );
      setFilteredData(...filteredData, val);
    }
  };

  return (
    <div className="header__container">
      <div className="header__top">
        <div className="tab__text">
          <span onClick={()=>console.log(filteredData,filteredVal)}>Home</span> <MdNavigateNext size={25} color="#3D92EC" />
        </div>
        <div className="tab__text">
          <span>OC</span> <MdNavigateNext size={25} color="#3D92EC" />
        </div>
        <div className="tab__text">
          <span style={{ color: "#778FAB" }}>Item search</span>
        </div>
      </div>
      <div
        className="flex h-[65px] justify-between pl-[20px] pr-[20px] border-b-[#E0E9F7] border-b-2"
        style={{ alignItems: "center" }}
      >
        <div className="flex" style={{ flexDirection: "column" }}>
          <span className="font-bold text-xl">Item search</span>
          <span className="text-[#778FAB] text-sm">{filteredData.length} items</span>
        </div>
        <div
          className="flex align-middle justify-around"
          style={{ alignItems: "center" }}
        >
          <span
            className="mr-[15px] flex border-2 border-[#D0DAE1] rounded-md h-[40px] pr-[10px]"
            style={{ alignItems: "center" }}
          >
            <input
              type="text"
              placeholder="Search by item #, Order #"
              className="pl-[10px] pr-[10px] mr-6 border-none outline-none"
              onChange={(e) => {
                setSearchVal(e.target.value);
              }}
            />
            <BiSearch
              color="#2B80B0"
              size={25}
              className="cursor-pointer"
              onClick={() => {
                filterDataFunc();
              }}
            />
          </span>
          <span
            className="border-2 border-[#D0DAE1] h-[40px] justify-center flex w-[40px] rounded-md mr-[25px]"
            style={{ alignItems: "center" }}
          >
            <AiOutlinePlus size={25} color="#2B80B0" />
          </span>
          <span className="mr-[20px]">
            <BsBookmark size={18} color="#2B80B0" />
          </span>
          <span
            className="mr-[10px]"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <MdOutlineFilterList size={20} color="#2B80B0" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
