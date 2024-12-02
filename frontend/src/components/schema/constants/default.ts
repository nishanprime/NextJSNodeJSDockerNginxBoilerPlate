import { createContext, useContext } from "react";

export const defaultNodes = [];

export const defaultEdges = [];

export const DiagramContext = createContext({
  dbSchema: {
    nodes: [],
    edges: [],
    zoom: 1,
    pan: { x: 0, y: 0 },
  },
  setDbSchemaState: (item) => {},
});

export function useAppContext() {
  return useContext(DiagramContext);
}
