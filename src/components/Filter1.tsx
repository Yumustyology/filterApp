import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import Dropdown from "./Dropdown";
import { AiOutlineStop } from "react-icons/ai";

const Filter1 = ({
  showSidebar,
  setShowSidebar,
  setFilteredData,
  filteredData,
  setActive,
  data
}: {
  setShowSidebar: Function;
  setActive: Function;
  setFilteredData: Function;
  showSidebar: Boolean;
  filteredData: Object[];
  data: Object[]
}) => {
  const [type, setType] = useState<string>("");
  const [itemError, setItemError] = useState<boolean>(false);
  const [receiverError, setReceiverError] = useState<boolean>(false);
  const [senderError, setSenderError] = useState<boolean>(false);
  const [orderError, setOrderError] = useState<boolean>(false);

  type dummyData = {
    [key: string]: any;
  };

  const typeFilter = (typeVal: string) => {
    let val = () => {
      if (filteredData.length > 0) {
        return filteredData.filter(
          (data:dummyData) => data.type.toLowerCase() === typeVal.toLowerCase()
        );
      } else {
        return data.filter(
          (data:dummyData) => data.type.toLowerCase() === typeVal.toLowerCase()
        );
      }
    };
    setType(typeVal);

    const checkType = () => {
      if (type == typeVal) {
        setType("");
        setFilteredData([]);
        // setFilteredData((prevState:any) => prevState);
        return;
      } else {
        if (typeVal === "ALL") {
          setFilteredData(data);
          return;
        }
        setFilteredData(val);
      }
      return;
    };

    switch (typeVal) {
      case "EDF":
        checkType();
        break;
      case "CAO":
        checkType();
        break;

      case "ALL":
        checkType();
      default:
        break;
    }
  };


  // item filter
  const itemSearch = (value: string) => {
    if (value.length >= 8) {
      if (filteredData.length > 0) {
        let val = filteredData.filter(
          (data:dummyData) => data.item.toLowerCase() === value.toLowerCase()
        );
        setFilteredData(val);
        setItemError(false);
        return;
      }
      let val = data.filter(
        (data:dummyData) => data.item.toLowerCase() === value.toLowerCase()
      );
      setFilteredData(val);
      setItemError(false);
    } else {
      setItemError(true);
    }
  };

  // order filter
  const orderSearch = (value: string) => {
    if (value.length >= 10) {
      if (filteredData.length > 0) {
        let val = filteredData.filter(
          (data:dummyData) => data.item.toLowerCase() === value.toLowerCase()
        );
        setFilteredData(val);
        setOrderError(false);
        return;
      }
      let val = data.filter(
        (data:dummyData) => data.order.toLowerCase() === value.toLowerCase()
      );
      setFilteredData(val);
      setOrderError(false);
    } else {
      setOrderError(true);
    }
  };

  // sender filter
  const senderSearch = (value: string) => {
    if (value.length > 3) {
      if (filteredData.length > 0) {
        let val = filteredData.filter(
          (data:dummyData) => data.sender.toLowerCase() === value.toLowerCase()
        );
        setFilteredData(val);
        setReceiverError(false);
        return;
      }

      let val = data.filter(
        (data:dummyData) => data.sender.toLowerCase() === value.toLowerCase()
      );
      setFilteredData(val);
      setSenderError(false);
      return;
    } else {
      setSenderError(true);
    }
  };

  // receiver filter
  const receiverSearch = (value: string) => {
    if (value.length > 3) {
      if (filteredData.length > 0) {
        let   val = filteredData.filter(
          (data:dummyData) => data.receiver.toLowerCase() === value.toLowerCase()
        );
        setFilteredData(val);
        return;
      }

      let val = data.filter(
        (data:dummyData) => data.receiver.toLowerCase() === value.toLowerCase()
      );

      setFilteredData(val);
      setReceiverError(false);
      return;
    } else {
      setReceiverError(true);
    }
  };
  return (
    <div className="">
      <div
        className={`top-0 right-0 w-[25vw] bg-black text-white fixed h-full z-40 transition-all ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
        style={{ transition: "1s" }}
      >
        <>
          <div className="filter__top flex items-center bg-[#F5F7F8]">
            <div className="z-50 flex justify-between w-full items-center bg-[#F5F7F8] pl-3 pr-5 pb-2 pt-2">
              <div className="flex place-items-start">
                <span className="mr-[10px]">
                  <GrClose
                    size={20}
                    color="#CACED4"
                    onClick={() => setShowSidebar(!showSidebar)}
                  />
                </span>
                <span className="flex flex-col">
                  <span className="text-[#3F474B] text-[18px] font-bold">
                    Set Parameters
                  </span>
                  <span className="text-[#778FAB] text-[11px]">
                    {`${filteredData.length} parameters available`}
                  </span>
                </span>
              </div>
              <div>
                <span
                  className="font-bold text-[#0C67A0] text-[12px] cursor-pointer"
                  onClick={() => {
                    setFilteredData([]);
                    setActive(-1);
                    setType("");
                  }}
                >
                  Reset all
                </span>
              </div>
            </div>
          </div>

          <div className="w-full bg-white h-full z-40 drop-shadow-lg flex flex-col ">
            <Dropdown heading="Sender ID #">
              <div className="flex mt-3 flex-col">
                <textarea
                  placeholder="Sender ID (Ex. “”1111)"
                  className={`border-2 rounded-md p-3 text-black ${
                    senderError
                      ? "outline-[#C00005] bg-[#FFF2F2]"
                      : "border-[#ddd]"
                  }`}
                  onChange={(e) => senderSearch(e.target.value)}
                ></textarea>
                <div>
                  <b className="text-[#C00005] flex text-sm mt-2 items-center">
                    {senderError && (
                      <AiOutlineStop size={18} className="mr-1" />
                    )}
                    {`${senderError ? "Node needs to be four digits (Ex. “”1111)" : ""}`}
                  </b>
                </div>
              </div>
            </Dropdown>
            <Dropdown heading="Receiver ID #">
              <div className="flex mt-3 flex-col">
                <textarea
                  placeholder="Receiver ID (Ex. “”1111)"
                  onChange={(e) => receiverSearch(e.target.value)}
                  className={`border-2 rounded-md p-3 text-black ${
                    receiverError
                      ? "outline-[#C00005] bg-[#FFF2F2]"
                      : "border-[#ddd]"
                  }`}
                ></textarea>
                <div>
                  <b className="text-[#C00005] flex text-sm mt-2 items-center">
                    {receiverError && (
                      <AiOutlineStop size={18} className="mr-1" />
                    )}
                    {`${receiverError ? "Node needs to be four digits (Ex. “”1111)" : ""}`}
                  </b>
                </div>
              </div>
            </Dropdown>
            <Dropdown heading="Item #">
              <div className="flex mt-3 flex-col">
                <textarea
                  placeholder="Item ID (Ex. “67344383”)"
                  onChange={(e) => itemSearch(e.target.value)}
                  className={`border-2 rounded-md p-3 text-black ${
                    itemError
                      ? "outline-[#C00005] bg-[#FFF2F2]"
                      : "border-[#ddd]"
                  }`}
                ></textarea>
                <div>
                  <b className="text-[#C00005] flex text-sm mt-2 items-center">
                    {itemError && <AiOutlineStop size={18} className="mr-1" />}
                    {`${itemError ? "Node needs to be eight digits" : ""}`}
                  </b>
                </div>
              </div>
            </Dropdown>
            <Dropdown heading="Order #">
              <div className="flex mt-3 flex-col">
                <textarea
                  placeholder="Order # (Ex. 26336272733)"
                  onChange={(e) => orderSearch(e.target.value)}
                  className={`border-2 rounded-md p-3 text-black ${
                    orderError
                      ? "outline-[#C00005] bg-[#FFF2F2]"
                      : "border-[#ddd]"
                  }`}
                ></textarea>
                <div>
                  <b className="text-[#C00005] flex text-sm mt-2 items-center">
                    {itemError && <AiOutlineStop size={18} className="mr-1" />}
                    {`${orderError ? `Node needs to be eleven digits` : ""}`}
                  </b>
                </div>
              </div>
            </Dropdown>
            <Dropdown heading="Type">
              <div>
                <label className="flex">
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="name"
                    onChange={() => {
                      typeFilter("ALL");
                    }}
                    checked={type === "ALL" ? true : false}
                  />
                  <span className="text-black">Show all</span>
                </label>

                <label className="flex h-[30px] items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="name"
                    onChange={() => {
                      typeFilter("CAO");
                    }}
                    checked={type === "CAO" ? true : false}
                  />
                  <span className="text-black">CAO</span>
                </label>

                <label className="flex">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => {
                      typeFilter("EDF");
                    }}
                    checked={type === "EDF" ? true : false}
                  />
                  <span className="text-black">EDF</span>
                </label>
              </div>
            </Dropdown>
          </div>
        </>
      </div>
    </div>
  );
};

export default Filter1;
