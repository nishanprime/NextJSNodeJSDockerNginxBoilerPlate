"use state";

import { useState } from "react";
import { Edit, Key, PlusCircle, Trash2 } from "lucide-react";
import { useDatabaseDiagram } from "@/context/databaseDiagramContext";
import { toast } from "@/hooks/use-toast";
import { Column, Table } from "@/types/databaseDiagram";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import ColumnForm from "./ColumnForm";

export function errorToast({
  title = "Error",
  description,
}: {
  title?: string;
  description: string;
}) {
  return toast({
    title,
    description,
    variant: "destructive",
    duration: 5000,
  });
}

const TableActionsModal = ({ table }: { table: Table }) => {
  const { tables, connections, updateTable, removeTable, removeConnection } =
    useDatabaseDiagram();
  const [isEditTableDialogOpen, setIsEditTableDialogOpen] = useState(false);
  const [editingTable, setEditingTable] = useState<Table | null>(null);

  const handleEditTableName = (tableId: string, name: string) => {
    if (!editingTable?.name.trim()) {
      errorToast({
        description: "Table Name cannot be empty.",
      });
      return;
    }

    if (
      tables.some((table) => table.name.toLowerCase() === name.toLowerCase())
    ) {
      errorToast({
        description: "Table Name must be unique.",
      });
      return;
    }

    updateTable(tableId, {
      name,
    });

    setEditingTable(null);
    setIsEditTableDialogOpen(false);
    toast({
      title: "Success",
      description: "Table updated successfully",
    });
  };

  const handleTableRemove = (tableId: string) => {
    connections.forEach((conn) => {
      if (tableId === conn.source || tableId === conn.target) {
        removeConnection(conn.id);
      }
    });

    removeTable(tableId);
  };

  return (
    <div className="flex items-center space-x-2">
      <Dialog
        open={isEditTableDialogOpen}
        onOpenChange={setIsEditTableDialogOpen}
      >
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditingTable(table)}
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Table</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <Input
            value={editingTable?.name || ""}
            onChange={(e) =>
              setEditingTable((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
            className="mb-4"
          />
          <Button
            onClick={() =>
              handleEditTableName(table.id, editingTable?.name || "")
            }
            className="bg-blue-900 hover:bg-blue-800 text-white"
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleTableRemove(table.id)}
        className="text-red-600 hover:text-red-800 hover:bg-red-100"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

const RenderColumnCTA = ({
  tableId,
  column,
}: {
  tableId: string;
  column: Column;
}) => {
  const { connections, updateColumn, removeColumn, removeConnection } =
    useDatabaseDiagram();
  const [isEditColumnDialogOpen, setIsEditColumnDialogOpen] = useState(false);

  const [editingColumn, setEditingColumn] = useState<Column | undefined>(
    undefined
  );

  const handleUpdateForm = (tableId: string, newColumn: Column) => {
    updateColumn(tableId, newColumn.id, newColumn);
    setIsEditColumnDialogOpen(false);
  };

  const handleRemoveColumn = (tableId: string, columnId: string) => {
    const targetConnection = connections.find(
      ({ sourceHandle, targetHandle }) =>
        sourceHandle?.startsWith(columnId) || targetHandle?.startsWith(columnId)
    );

    if (targetConnection) {
      removeConnection(targetConnection.id);
    }

    removeColumn(tableId, columnId);
  };

  return (
    <div>
      <Dialog
        open={isEditColumnDialogOpen}
        onOpenChange={setIsEditColumnDialogOpen}
      >
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditingColumn(column)}
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-1"
          >
            <Edit className="h-3 w-3" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Column</DialogTitle>
          </DialogHeader>
          <DialogDescription />
          <ColumnForm
            initialColumn={editingColumn}
            onSave={(newColumn) => handleUpdateForm(tableId, newColumn)}
          />
        </DialogContent>
      </Dialog>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleRemoveColumn(tableId, column.id)}
        className="text-red-600 hover:text-red-800 hover:bg-red-100 p-1"
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </div>
  );
};

const AddNewColumnModal = ({ table }: { table: Table }) => {
  const { tables, addColumn } = useDatabaseDiagram();

  const [isAddColumnDialogOpen, setIsAddColumnDialogOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<Table | undefined>(
    undefined
  );

  const handleAddColumn = (tableId: string, column: Column) => {
    if (!column.name.trim()) {
      errorToast({
        description: "Column Name Required",
      });
      return;
    }

    const currentTable = tables.find((table) => table.id === tableId);

    if (currentTable) {
      const isColumnNameMatched = currentTable.columns.some(
        (col) => col.name.toLowerCase() === column.name.toLowerCase()
      );

      if (isColumnNameMatched) {
        errorToast({
          description: "Column name must be unique.",
        });
        return;
      }

      addColumn(tableId, column);
      setIsAddColumnDialogOpen(false);

      toast({
        title: "Success",
        description: "Column added successfully.",
      });
    }
  };

  return (
    <Dialog
      open={isAddColumnDialogOpen}
      onOpenChange={setIsAddColumnDialogOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedTable(table)}
          className="w-full mt-2 text-gray-600 border-gray-300 hover:bg-gray-100"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Column
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Column</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <ColumnForm
          onSave={(newColumn) =>
            handleAddColumn(selectedTable?.id || "", newColumn)
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default function TableDetails() {
  const { tables } = useDatabaseDiagram();

  return (
    <div className="p-4 space-y-4">
      {tables.map((table) => (
        <div
          key={table.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 uppercase">
              {table.name}
            </h3>
            <TableActionsModal table={table} />
          </div>
          <div className="p-3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="columns" className="border-none">
                <AccordionTrigger className="text-sm py-2.5 font-medium text-gray-900">
                  Columns
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 mt-2">
                    {table.columns.map((column: Column) => (
                      <div
                        key={column.id}
                        className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded"
                      >
                        <div className="flex items-center">
                          {column.constraints.includes("PRIMARY KEY") && (
                            <Key className="h-3 w-3 mr-1 text-yellow-500" />
                          )}
                          <span className="font-medium text-gray-700">
                            {column.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500">{column.type}</span>
                          <RenderColumnCTA tableId={table.id} column={column} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <AddNewColumnModal table={table} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
}
