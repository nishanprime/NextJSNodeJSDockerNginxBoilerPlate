"use client";

import React from "react";
import { useDatabaseDiagram } from "@/context/databaseDiagramContext";
import { LayoutDashboard } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TableListProps {
  setView: (view: "diagram" | "list") => void;
}

export default function TableListView({ setView }: TableListProps) {
  const { tables } = useDatabaseDiagram();

  return (
    <div className="relative w-full h-full bg-white">
      <ScrollArea className="h-[90vh]">
        <div className="p-6 space-y-6">
          {tables.map((table) => (
            <Card key={table.id} className="shadow-sm">
              <CardHeader className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <CardTitle className="p-0 text-md uppercase font-semibold text-gray-700">
                  {table.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>&nbsp; Column Name</TableHead>
                      <TableHead>Data Type</TableHead>
                      <TableHead>Constraints</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table.columns.map((column) => (
                      <TableRow key={column.id}>
                        <TableCell className="font-medium">
                          &nbsp; {column.name}
                        </TableCell>
                        <TableCell>{column.type}</TableCell>
                        <TableCell>
                          {column.constraints.map((constraint) => (
                            <Badge
                              key={constraint}
                              variant="secondary"
                              className="mr-1 mb-1"
                            >
                              {constraint}
                            </Badge>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setView("diagram")}
          className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Diagram
        </Button>
      </div>
    </div>
  );
}
