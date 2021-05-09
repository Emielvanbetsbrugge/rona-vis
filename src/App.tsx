import { useEffect, useState } from "react";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Broadcaster from "./utils/Broadcaster";
import { EVENT } from "./common/events";
import { AppContext } from "./common/app.context";
import DateBackground from "./components/date-background";
import DateSelector from "./components/date-selector";

export interface DataEntry {
  area_code?: string;
  area_name?: string;
  date?: string;
  new_cases: number;
  total_cases?: number;
}

function App() {
  const [currentData, setCurrentData] = useState<DataEntry[]>([]);
  const [allData, setAllData] = useState<DataEntry[]>([]);
  const [selected, setSelected] = useState<DataEntry | undefined>(undefined);
  const [date, setDate] = useState<string>("2020-01-30");

  const fetchData = async () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAllData(data));
  };

  const updateSelected = (index: number | undefined) => {
    if (index) {
      setSelected(currentData[index]);
    } else {
      setSelected(undefined);
    }
  };

  // On
  Broadcaster.on(EVENT.UPDATE_SELECTED, (data) => {
    updateSelected(data?.index);
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    /**
     * Used to determine highest value, would usually come back from the backend.
     * We use this value in the ball calculations, to map scale between 0 and highest value.
     * Highest value is 80.
     *
     * const getHighestValue = allData.map((data) => {
     *   return data.new_cases;
     * });
     * console.log(Math.max(...getHighestValue));
     */

    const filterByDate = (date: string) => {
      return allData!.filter((a: any) => a.date === date);
    };

    if (allData.length > 0) {
      setCurrentData(filterByDate(date!));
    }
  }, [allData, date]);

  useEffect(() => {
    if (currentData && currentData.length > 0) {
      Broadcaster.emit(EVENT.UPDATE_DATA, currentData);
    }
  }, [currentData]);

  return (
    <AppContext.Provider value={{}}>
      <div className="App">
        <Header selected={selected} />
        <DateBackground date={date} />
        <DateSelector date={date} setDate={setDate} />
        <Canvas />
      </div>
    </AppContext.Provider>
  );
}

export default App;
