import { useEffect, useState } from "react";
import "./App.css";
import Filter1 from "./components/Filter1";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { tableData } from "./data";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Object[]>([]);
  const [data, setData] = useState<Object[]>([]);
  const [active, setActive] = useState<number>(-1);

  // making the dummy data async
  const dataPromise = () => {
    var promise = new Promise((resolve, reject) => {
      try {
        resolve(tableData);
      } catch (error) {
        reject("couldn't fetch data");
      }
    });

    return promise;
  };
  const getData = async () => {
    dataPromise()
      .then((data: any) =>setData(data)).catch(err=>console.log(err));
  };

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className={`App`}>
      <div className={`App`}>
        <Sidebar
          setFilteredData={setFilteredData}
          filteredData={filteredData}
          active={active}
          setActive={setActive}
          data={data}
        />
        <div className="main__content">
          <Header
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          data={data}
          />
          <Main filteredData={filteredData} 
          data={data}
          setFilteredData={setFilteredData}
          />
        </div>
      </div>
      <Filter1
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        setActive={setActive}
        data={data}
      />
    </div>
  );
}

export default App;
