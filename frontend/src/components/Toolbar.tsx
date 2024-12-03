"use client";

import { Download, Redo2, Undo2 } from "lucide-react";
import { useDatabaseDiagram } from "@/context/databaseDiagramContext";
import { Button } from "./ui/button";

export default function Toolbar() {
  const { tables, connections, canUndo, canRedo, undo, redo } = useDatabaseDiagram();

  const handleExport = () => {
    const data = {
      tables,
      connections,
    };
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `database-diagram-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="text-gray-700 border-gray-300 hover:bg-gray-200"
          onClick={undo}
          disabled={!canUndo}
        >
          <Undo2 className="h-4 w-4 mr-1" />
          Undo
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-gray-700 border-gray-300 hover:bg-gray-200"
          onClick={redo}
          disabled={!canRedo}
        >
          <Redo2 className="h-4 w-4 mr-1" />
          Redo
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="text-blue-700 border-blue-700 hover:bg-blue-50"
          onClick={handleExport}
        >
          <Download className="h-4 w-4 mr-1" />
          Export
        </Button>
      </div>
    </div>
  );
}
