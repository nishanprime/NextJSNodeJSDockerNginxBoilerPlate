import type { Metadata } from "next";
import DatabaseDiagramContextProvider from "@/context/databaseDiagramContext";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";

import DiagramView from "@/components/DiagramView";

export const metadata: Metadata = {
    title: "Database Diagram Tool",
    description: "Build with using Nextjs, ReactFlow and Shadcn/ui + tailwind",
  };

export default function DatabaseScheme() {
  return (
    <DatabaseDiagramContextProvider>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Toolbar />
          <DiagramView />
        </div>
      </div>
    </DatabaseDiagramContextProvider>
  );
}
