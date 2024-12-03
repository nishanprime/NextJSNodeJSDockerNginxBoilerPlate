import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Key } from "lucide-react";
import { Column } from "@/types/databaseDiagram";

type TableNodeProps = {
  data: {
    label: string;
    columns: Column[];
  };
};

function TableNode({ data }: TableNodeProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md">
      <div className="bg-gray-50 border-b border-gray-200 p-2">
        <h3 className="text-sm font-semibold text-gray-700 lowercase">
          {data.label}
        </h3>
      </div>
      <div className="py-1">
        {data.columns.map((column) => (
          <div
            key={column.id}
            className="text-xs px-3 py-1 flex justify-between gap-3 items-center relative"
          >
            <div className="flex items-center">
              {column.constraints.includes("PRIMARY KEY") && (
                <Key className="h-3 w-3 mr-1 text-yellow-500" />
              )}
              <span className="font-medium text-gray-700">{column.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500">{column.type}</span>
            </div>
            <Handle
              type="target"
              position={Position.Left}
              id={`${column.id}-left`}
              className="w-3 h-3 !bg-blue-800"
            />
            <Handle
              type="source"
              position={Position.Right}
              id={`${column.id}-right`}
              className="w-3 h-3 !bg-blue-800"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(TableNode);
