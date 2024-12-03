"use client";

import { Database } from "lucide-react";

import { ScrollArea } from "../ui/scroll-area";
import ConnectionsPreview from "./ConnectionsPreview";
import AddNewTable from "./AddNewTable";
import TableDetails from "./TableDetails";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-gray-50 border-r border-gray-200 h-screen overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200 bg-gray-100">
        <div className="flex items-center font-bold text-2xl text-blue-800 mb-4">
          <Database className="mr-2" />
          <h2>Database Diagram</h2>
        </div>
        <AddNewTable />
      </div>
      <ScrollArea className="flex-grow">
        <TableDetails />
      </ScrollArea>
      <ConnectionsPreview />
    </aside>
  );
}


