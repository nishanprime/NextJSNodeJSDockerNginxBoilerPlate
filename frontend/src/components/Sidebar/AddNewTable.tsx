import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useDatabaseDiagram } from "@/context/databaseDiagramContext";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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

export default function AddNewTable() {
  const [newTableName, setNewTableName] = useState("");
  const { tables, addTable } = useDatabaseDiagram();

  const addNewTable = () => {
    if (!newTableName.trim()) {
      errorToast({
        description: "Table name cannot be empty",
      });
      return;
    }

    if (
      tables?.some(
        (table) => table.name.toLowerCase() === newTableName.toLowerCase()
      )
    ) {
      errorToast({
        description: "Table name must be unique!",
      });
      return;
    }

    addTable({
      id: `table-${Date.now()}`,
      name: newTableName,
      columns: [],
    });

    setNewTableName("");
  };

  return (
    <div className="mb-4">
      <Label htmlFor="new-table" className="text-sm font-medium text-gray-800">
        New Table
      </Label>
      <div className="flex gap-0 mt-1">
        <Input
          id="add-new-table"
          value={newTableName}
          onChange={(e) => setNewTableName(e.target.value)}
          placeholder="Table name"
          className="rounded-r-none h-10 bg-white border-gray-300 focus:border-gray-500 focus:ring-gray-500"
        />
        <Button
          onClick={addNewTable}
          className="rounded-l-none bg-blue-900 hover:bg-blue-800 text-white"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
