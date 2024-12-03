"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import type { Edge } from "@xyflow/react";
import {
  Column,
  DatabaseDiagramContextProps,
  Table,
} from "@/types/databaseDiagram";

const DatabaseDiagramContext = createContext<
  DatabaseDiagramContextProps | undefined
>(undefined);

export default function DatabaseDiagramContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tables, setTables] = useState<Table[]>([]);
  const [connections, setConnections] = useState<Edge[]>([]);
  const [historyState, setHistoryState] = useState<
    { tables: Table[]; connections: Edge[] }[]
  >([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addState = useCallback(() => {
    setHistoryState((prev) => [
      ...prev.slice(0, historyIndex + 1),
      { tables, connections },
    ]);
    setHistoryIndex((prev) => prev + 1);
  }, [tables, connections, historyIndex]);

  const addTable = useCallback(
    (table: Table) => {
      setTables((existingTables) => [...existingTables, table]);
      addState();
    },
    [addState]
  );

  const updateTable = useCallback(
    (tableId: string, fields: Partial<Table>) => {
      setTables((existingTables) => {
        return existingTables.map((table) => {
          return table.id === tableId ? { ...table, ...fields } : table;
        });
      });
      addState();
    },
    [addState]
  );

  const removeTable = useCallback(
    (tableId: string) => {
      setTables((existingTables) =>
        existingTables.filter((table) => table.id !== tableId)
      );
      addState();
    },
    [addState]
  );

  const addColumn = useCallback(
    (tableId: string, column: Column) => {
      setTables((prevTables) => {
        return prevTables.map((table) => {
          if (table.id === tableId) {
            return { ...table, columns: [...table.columns, column] };
          }

          return table;
        });
      });
      addState();
    },
    [addState]
  );

  const updateColumn = useCallback(
    (tableId: string, columnId: string, fields: Partial<Column>) => {
      setTables((prevTables) => {
        return prevTables.map((table) => {
          if (table.id === tableId) {
            const updatedColumns = table.columns.map((col) =>
              col.id === columnId ? { ...col, ...fields } : col
            );

            return { ...table, columns: updatedColumns };
          }

          return table;
        });
      });
      addState();
    },
    [addState]
  );

  const removeColumn = useCallback(
    (tableId: string, columnId: string) => {
      setTables((prevTables) => {
        return prevTables.map((table) => {
          if (table.id === tableId) {
            const targetColumn = table.columns.filter(
              (col) => col.id !== columnId
            );
            return { ...table, columns: targetColumn };
          }

          return table;
        });
      });
      addState();
    },
    [addState]
  );

  const addConnection = useCallback(
    (newConnection: Edge) => {
      setConnections((prevConnections) => [...prevConnections, newConnection]);
      addState();
    },
    [addState]
  );

  const updateConnection = useCallback(
    (connectionId: string, updates: Partial<Edge>) => {
      setConnections((prevConnections) => {
        return prevConnections.map((conn) => {
          return conn.id === connectionId ? { ...conn, ...updates } : conn;
        });
      });
      addState();
    },
    [addState]
  );

  const removeConnection = useCallback(
    (connectionId: string) => {
      setConnections((prevConnections) => {
        return prevConnections.filter((conn) => conn.id !== connectionId);
      });
      addState();
    },
    [addState]
  );

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const prevState = historyState[historyIndex - 1];
      setTables(prevState.tables);
      setConnections(prevState.connections);
      setHistoryIndex((prev) => prev - 1);
    }
  }, [historyState, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < historyState.length - 1) {
      const nextState = historyState[historyIndex + 1];
      setTables(nextState.tables);
      setConnections(nextState.connections);
      setHistoryIndex((prev) => prev + 1);
    }
  }, [historyState, historyIndex]);

  const contextValue = {
    tables,
    connections,

    addTable,
    updateTable,
    removeTable,

    addColumn,
    updateColumn,
    removeColumn,

    addConnection,
    updateConnection,
    removeConnection,

    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < historyState.length - 1,
  };

  return (
    <DatabaseDiagramContext.Provider value={contextValue}>
      {children}
    </DatabaseDiagramContext.Provider>
  );
}

export const useDatabaseDiagram = () => {
  const context = useContext(DatabaseDiagramContext);
  if (!context) {
    throw new Error("Context error!");
  }
  return context;
};
