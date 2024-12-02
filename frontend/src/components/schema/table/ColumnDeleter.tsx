import { TableCell } from "@/components/ui/table";
import { useAppContext } from "../constants/default";
import { TrashIcon } from "@radix-ui/react-icons";

const ColumnDeleter = ({ index, data }) => {
  const {
    dbSchema: { nodes, edges, zoom, pan },
    setDbSchemaState,
  } = useAppContext();
  // DELETION ACTION
  const deleteColumn = (index) => {
    const findIndex = nodes.findIndex((obj) => obj.data.label == data?.label);
    // DELTE THE ITEM NOW
    nodes[findIndex].data.schema.splice(index, 1);
    setDbSchemaState({
      nodes: nodes,
      edges: edges,
      zoom,
      pan,
    });
  };

  return (
    <TableCell
      style={{
        position: "absolute",
        top: 2,
        padding: 0,
        background: "transparent",
        right: 1,
      }}
      onClick={() => deleteColumn(index)}
    >
      <TrashIcon />
    </TableCell>
  );
};

export default ColumnDeleter;
