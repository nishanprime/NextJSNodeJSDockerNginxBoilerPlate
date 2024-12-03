import type { Edge } from "@xyflow/react";

export type Column = {
  id: string;
  name: string;
  type: string;
  constraints: string[];
};

export type Table = {
  id: string;
  name: string;
  columns: Column[];
};

export type DatabaseDiagramContextProps = {
  tables: Table[];
  connections: Edge[];
  addTable: (table: Table) => void;
  updateTable: (tableId: string, fields: Partial<Table>) => void;
  removeTable: (tableId: string) => void;

  addColumn: (tableId: string, column: Column) => void;
  removeColumn: (tableId: string, columnId: string) => void;
  updateColumn: (
    tableId: string,
    columnId: string,
    fields: Partial<Column>
  ) => void;

  addConnection: (newConnection: Edge) => void;
  updateConnection: (connectionId: string, updates: Partial<Edge>) => void;
  removeConnection: (connectionId: string) => void;

  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};
