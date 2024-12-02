import { Node, NodeProps, Position } from "@xyflow/react";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import { BaseNode } from "@/components/base-node";
import { LabeledHandle } from "@/components/labeled-handle";
import { Input } from "@chakra-ui/react";

import { useState } from "react";
import { useAppContext } from "../constants/default";

const ColumnEditor = ({ index, data, entry }) => {
  const {
    dbSchema: { nodes, edges, zoom, pan },
    setDbSchemaState,
  } = useAppContext();

  // EDIT ACTION OF TITLE
  const [showInput, setShowInput] = useState(undefined);
  const handleKeyTitleDown = (e) => {
    if (e.key === "Enter") {
      // You can perform any action when Enter is pressed here
      const findIndex = nodes.findIndex((obj) => obj.data.label == data?.label);
      // DELTE THE ITEM NOW
      nodes[findIndex].data.schema[showInput - 1].title = e.target.value;
      setDbSchemaState({
        nodes: nodes,
        edges: edges,
        zoom,
        pan,
      });
      setShowInput(undefined);
    }
    if (e.key === "Escape") {
      setShowInput(undefined);
    }
  };

  // EDIT ACTION OF TYPE
  const [showTypeInput, setshowTypeInput] = useState(undefined);
  const handleKeyTypeDown = (e) => {
    if (e.key === "Enter") {
      // You can perform any action when Enter is pressed here
      const findIndex = nodes.findIndex((obj) => obj.data.label == data?.label);
      // DELTE THE ITEM NOW
      nodes[findIndex].data.schema[showTypeInput - 1].type = e.target.value;
      setDbSchemaState({
        nodes: nodes,
        edges: edges,
        zoom,
        pan,
      });
      setshowTypeInput(undefined);
    }
    if (e.key === "Escape") {
      setshowTypeInput(undefined);
    }
  };
  return (
    <>
      {showInput === index + 1 && (
        <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
          <Input
            style={{ padding: 0 }}
            defaultValue={entry.title}
            onKeyDown={handleKeyTitleDown}
          />
        </TableCell>
      )}
      {!showInput && (
        <TableCell
          className="pt-4 pb-4 pl-0 pr-6 font-light"
          onClick={() => setShowInput(index + 1)}
        >
          <LabeledHandle
            id={entry.title}
            title={entry.title}
            type="target"
            position={Position.Left}
          />
        </TableCell>
      )}
      {showTypeInput === index + 1 && (
        <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
          <Input
            style={{ padding: 0 }}
            defaultValue={entry.type}
            onKeyDown={handleKeyTypeDown}
          />
        </TableCell>
      )}
      {!showTypeInput && (
        <TableCell
          className="pr-0 text-right font-thin"
          onClick={() => setshowTypeInput(index + 1)}
        >
          <LabeledHandle
            id={entry.title}
            title={entry.type}
            type="source"
            position={Position.Right}
            className="p-0"
            handleClassName="p-0"
            labelClassName="p-0"
          />
        </TableCell>
      )}
    </>
  );
};

export default ColumnEditor;
