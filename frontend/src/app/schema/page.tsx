"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
  DiagramContext,
  defaultEdges,
  defaultNodes,
} from "@/components/schema/constants/default";
import SchemaVisualizer from "@/components/schema/SchemaVisualizer";

const SchemaPage = () => {
  const [dbSchema, setDbSchemaState] = useState({
    nodes: defaultNodes,
    edges: defaultEdges,
    zoom: 1,
    pan: { x: 0, y: 0 },
  });
  const value = { dbSchema, setDbSchemaState };

  return (
    <DiagramContext.Provider value={value}>
      <ChakraProvider value={defaultSystem}>
        <SchemaVisualizer />
      </ChakraProvider>
    </DiagramContext.Provider>
  );
};

export default SchemaPage;
