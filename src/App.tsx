import { useEffect, useState } from "react";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Timeline from "./components/timeline";
import Broadcaster from "./utils/Broadcaster";
import { EVENT } from "./common/events";
import { AppContext } from "./common/app.context";

export interface DataEntry {
  area_code?: string;
  area_name?: string;
  date?: string;
  new_cases?: number;
  total_cases?: number;
}

function App() {
  const [currentData, setCurrentData] = useState<DataEntry[]>([]);
  const [allData, setAllData] = useState<DataEntry[]>([]);
  const [selected, setSelected] = useState<DataEntry | undefined>(undefined);

  const fetchData = async () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAllData(data));
  };

  const updateSelected = (index: number | undefined) => {
    if (index) {
      setSelected(allData[index]);
    } else {
      setSelected(undefined);
    }
  };

  // On
  Broadcaster.on(EVENT.UPDATE_SELECTED, (data) => {
    updateSelected(data?.index);
  });

  // @ts-ignore: Unreachable code error
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterByDate = (date: string) => {
      return allData!.filter((a: any) => a.date === date);
    };

    if (allData.length > 0) {
      setCurrentData(filterByDate("2020-01-30"));
    }
  }, [allData]);

  useEffect(() => {
    if (currentData && currentData.length > 0) {
      Broadcaster.emit(EVENT.UPDATE_DATA, currentData);
    }
  }, [currentData]);

  Broadcaster.removeListener(EVENT.UPDATE_SELECTED, () => {});

  return (
    <AppContext.Provider value={{ currentlyHovered: {} }}>
      <div className="App">
        <Header selected={selected} />
        <Timeline />
        <Canvas />
      </div>
    </AppContext.Provider>
  );
}

export default App;
