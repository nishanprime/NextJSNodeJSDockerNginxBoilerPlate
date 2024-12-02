import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect } from "react";
import { useAppContext } from "./constants/default";
import { DatabaseSchemaNode } from "@/components/database-schema-node";
import SchemaTableAdder from "./SchemaTableAdder";
import JSONDownloader from "./JSONDownloder";
import JSONUploader from "./JSONUploader";

const nodeTypes = {
  databaseSchema: DatabaseSchemaNode,
};

const SchemaVisualizer = () => {
  const {
    dbSchema: { nodes, edges, zoom, pan },
    setDbSchemaState,
  } = useAppContext();

  const [localNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [localEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  useEffect(() => {
    setDbSchemaState({ nodes: localNodes, edges: localEdges, zoom, pan });
  }, [localNodes, setNodes]);

  useEffect(() => {
    setDbSchemaState({ nodes: localNodes, edges: localEdges, zoom, pan });
  }, [localEdges, setEdges]);

  const onConnect = (params: any) => {
    setEdges((eds) => [...eds, { ...params }]);
  };

  const handleMove = (e) => {
    const { x, y, zoom } = e; // e.viewport contains the pan position
    setDbSchemaState({ nodes, edges, zoom: zoom, pan: { x, y } });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className="absolute z-50 flex space-x-6 mt-2 ml-2">
        <SchemaTableAdder setNodes={setNodes} />
        <JSONUploader />
        <JSONDownloader />
      </div>
      <ReactFlow
        zoom={zoom}
        pan={pan}
        panOnDrag={true} // Allow panning by dragging
        panOnScroll={true}
        onViewportChange={handleMove}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background variant="dots" color="green" />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default SchemaVisualizer;
