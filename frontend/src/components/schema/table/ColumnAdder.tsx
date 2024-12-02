import { Button, Input } from "@chakra-ui/react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useAppContext } from "../constants/default";
import {
  CheckCircledIcon,
  Cross1Icon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export const ColumnAdder = ({ data }) => {
  const {
    dbSchema: { nodes, edges, zoom, pan },
    setDbSchemaState,
  } = useAppContext();

  // FOR ADDING NEW COLUMN
  const [addColumn, setAddColumn] = useState({
    show: false,
    title: "",
    type: "",
  });
  const saveNewColumn = () => {
    const findIndex = nodes.findIndex((obj) => obj.data.label == data?.label);
    nodes[findIndex]?.data?.schema.push({
      title: addColumn.title,
      type: addColumn.type,
    });
    setDbSchemaState({
      nodes: nodes,
      edges: edges,
      zoom,
      pan,
    });
    setAddColumn({
      show: false,
      type: "",
      title: "",
    });
  };
  return (
    <>
      {!!addColumn?.show ? (
        <TableRow className="relative text-xs">
          <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
            <Input
              ml={1}
              size={"xs"}
              style={{ padding: 0 }}
              defaultValue={addColumn?.title}
              onChange={(val) => {
                setAddColumn({
                  show: addColumn.show,
                  title: val.target.value,
                  type: addColumn.type,
                });
              }}
            />
          </TableCell>
          <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
            <Input
              size={"xs"}
              style={{ padding: 0 }}
              defaultValue={addColumn?.type}
              onChange={(val) => {
                setAddColumn({
                  show: addColumn.show,
                  type: val.target.value,
                  title: addColumn.title,
                });
              }}
            />
          </TableCell>
          <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
            <CheckCircledIcon onClick={saveNewColumn} />
          </TableCell>
          <TableCell className="pt-4 pb-4 pl-0 pr-6 font-light">
            <Cross1Icon
              onClick={() =>
                setAddColumn({
                  show: false,
                  type: "",
                  title: "",
                })
              }
            />
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell
            style={{
              position: "absolute",
              padding: 0,
              background: "transparent",
              bottom: 0,
              left: 0,
            }}
            onClick={() =>
              setAddColumn({
                show: true,
                type: "",
                title: "",
              })
            }
          >
            <PlusCircledIcon />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default ColumnAdder;
