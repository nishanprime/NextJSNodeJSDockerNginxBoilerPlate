"use client";

import React, { useCallback, useEffect } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  reconnectEdge,
  addEdge,
  Background,
  BackgroundVariant,
  MiniMap,
  Controls,
  type Node,
  type NodeTypes,
  type Edge,
  type Connection,
} from "@xyflow/react";
import { Table } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useDatabaseDiagram } from "@/context/databaseDiagramContext";
import TableNode from "./TableNode";
import { Button } from "./ui/button";

import "@xyflow/react/dist/style.css";

interface DiagramFlowProps {
  setView: (view: "diagram" | "list") => void;
}

const nodeTypes: NodeTypes = {
  table: TableNode,
};

export default function DiagramBuilder({ setView }: DiagramFlowProps) {
  const {
    tables,
    connections,
    addConnection,
    updateConnection,
    removeConnection,
  } = useDatabaseDiagram();

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect = useCallback(
    (params: Connection) => {
      const newConnectionId = `${params.sourceHandle}__${params.targetHandle}`;

      if (connections.some((conn) => conn.id === newConnectionId)) {
        toast({
          title: "Error",
          description: "You cannot link.",
          variant: "destructive",
          duration: 5000,
        });
        return;
      }

      const newEdge = {
        ...params,
        id: newConnectionId,
        source: params.source || "",
        target: params.target || "",
        sourceHandle: params.sourceHandle,
        targetHandle: params.targetHandle,
      };
      addConnection(newEdge as Edge);

      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges, connections]
  );

  const handleRemoveEdge = (edge: Edge) => {
    removeConnection(edge.id);
    setEdges((prevEdges) => prevEdges.filter((ed) => ed.id !== edge.id));
  };

  useEffect(() => {
    const nodesState: Node[] = tables.map((table, index) => ({
      id: table.id,
      type: "table",
      position: {
        x: index * 250,
        y: index * 100,
      },
      data: {
        label: table.name,
        columns: table.columns,
      },
    }));

    setNodes((prevNodes) => {
      const prevNodeLookup = prevNodes.reduce((acc, node) => {
        acc[node.id] = node;
        return acc;
      }, {} as Record<string, Node>);

      return nodesState.map((table) => {
        const existingNode = prevNodeLookup[table.id];

        if (existingNode) {
          return {
            ...table,
            position: existingNode.position,
          };
        }

        return table;
      });
    });
  }, [tables]);

  useEffect(() => {
    const connectionEdges: Edge[] = connections.map((connection) => ({
      id: connection.id,
      source: connection.source,
      sourceHandle: connection.sourceHandle,
      target: connection.target,
      targetHandle: connection.targetHandle,
      type: "smoothstep",
      animated: true,
    }));

    setEdges(connectionEdges);
  }, [connections]);

  const onReconnect = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      updateConnection(oldEdge.id, newConnection);
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    []
  );

  return (
    <div className="relative w-full h-full bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeDoubleClick={(_, edge) => handleRemoveEdge(edge)}
        onReconnect={onReconnect}
        fitView
        defaultEdgeOptions={{
          animated: true,
        }}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      <div className="absolute top-4 right-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setView("list")}
          className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
        >
          <Table className="mr-2 h-4 w-4" />
          Table List
        </Button>
      </div>
    </div>
  );
}
