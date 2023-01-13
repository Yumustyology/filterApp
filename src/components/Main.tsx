import React from "react";

const Main = ({
  filteredData,
  data,
  setFilteredData
}: {
  filteredData: Object[];
  data: Object[];
  setFilteredData: Function;
}) => {

  type dummyData = {
    [key: string]: any;
  };

  return (
    <div
      className={`h-4/6 ml-6 mt-3 ${
        filteredData.length === 0 && "flex justify-center items-center"
      }`}
    >
      {filteredData.length > 0 ? (
        <>
          <table className="w-full text-left mt-4 border-l">
            <thead>
              <tr>
                <th>s/n</th>
                <th>Order #</th>
                <th>Type</th>
                <th>Item</th>
                <th>Category</th>
                <th>Description</th>
                <th>Sender ID</th>
                <th>Receiver ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item:dummyData, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <span className="font-light">{item?.order}</span>
                    </td>
                    <td>
                      <span className="font-light">{item?.type}</span>
                    </td>
                    <td>
                      <span className="font-light">{item.item}</span>
                    </td>
                    <td>
                      <span className="font-light">{item.category}</span>
                    </td>
                    <td>
                      <span className="font-light">{item.description}</span>
                    </td>
                    <td>
                      <span className="font-light">{item.sender}</span>
                    </td>
                    <td>
                      <span className="font-light">{item.receiver}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <div className="flex justify-center h-4/6 items-center flex-col">
          <span className="text-2xl font-bold mb-2">
            What are you looking for?
          </span>
          <span className="text-[#778FAB] text-sm mb-2">
            Get started by searching & filtering a few
          </span>
          <button className="h-8 rounded-md w-32 bg-[#0C67A0] mt-3 mb-3 text-white text-sm" onClick={()=>setFilteredData(data)}>
            Fetch data
          </button>
          <span className="text-sm">
            or&nbsp;
            <span className="text-[#0C67A0] font-bold">search for an item</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Main;
