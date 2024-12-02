import { TableCell } from "@/components/ui/table";
import { useAppContext } from "../constants/default";
import { useState } from "react";
import { Input } from "@chakra-ui/react";

const TableEditor = ({ data }) => {
  const {
    dbSchema: { nodes, edges, zoom, pan },
    setDbSchemaState,
  } = useAppContext();

  // FOR EDITING TABLE NAME
  const [showTableInput, setshowTableInput] = useState(false);
  const handleKeyTableDown = (e) => {
    if (e.key === "Enter") {
      // You can perform any action when Enter is pressed here
      const findIndex = nodes.findIndex(
        (obj) => obj?.data?.label == data?.label
      );
      // DELTE THE ITEM NOW
      nodes[findIndex].data.label = e.target.value;
      setDbSchemaState({
        nodes: nodes,
        edges: edges,
        zoom,
        pan,
      });
      setshowTableInput(false);
    }
    if (e.key === "Escape") {
      setshowTableInput(false);
    }
  };

  return (
    <>
      {showTableInput ? (
        <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
          <Input
            style={{ padding: 0 }}
            defaultValue={data.label}
            onKeyDown={handleKeyTableDown}
          />
        </TableCell>
      ) : (
        <h2
          className="rounded-tl-md rounded-tr-md bg-secondary p-2 text-center text-sm text-muted-foreground"
          onDoubleClick={() => setshowTableInput(true)}
        >
          {data.label}
        </h2>
      )}
    </>
  );
};

export default TableEditor;
