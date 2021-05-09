import { createContext } from "react";
import { DataEntry } from "../App";

type AppContextState = {
  currentlyHovered?: DataEntry;
};

export const AppContext = createContext<AppContextState>({});
