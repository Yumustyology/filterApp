import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/Io";

const Dropdown = ({
  children,
  heading,
}: {
  children: JSX.Element;
  heading: string;
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div>
      <div className="border-b-[#E9EEF1] border-b-2">
        <span className="flex justify-between h-[40px] pl-5 pr-5 items-center cursor-pointer"  onClick={() => setOpened(!opened)}>
          <b className="text-black font-[15px] text-sm">{heading}</b>
          {opened ? (
            <IoIosArrowUp color="black" size={20} />
          ) : (
            <IoIosArrowDown color="black" size={20} />
          )}
        </span>
        <div className={`${opened ? "h-auto" : "h-0 hidden"} mb-2 pl-5 pr-5 transition-all`} style={{transition:"1s"}}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
