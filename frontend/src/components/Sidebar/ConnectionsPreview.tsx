import { Trash2 } from "lucide-react";
import { useDatabaseDiagram } from "@/context/databaseDiagramContext";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

export default function ConnectionsPreview() {
  const { connections, removeConnection } = useDatabaseDiagram();
  return (
    <ScrollArea className="max-h-64">
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Connections</h3>
        <div className="space-y-2">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="flex items-center justify-between py-2 text-sm"
            >
              <span className="text-gray-700">{`${connection.sourceHandle} → ${connection.targetHandle}`}</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-800 hover:bg-red-100"
                onClick={() => removeConnection(connection.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
