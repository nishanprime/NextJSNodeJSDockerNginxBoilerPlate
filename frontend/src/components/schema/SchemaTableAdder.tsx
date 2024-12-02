import { Button } from "@chakra-ui/react";
import { TableIcon } from "@radix-ui/react-icons";
const SchemaTableAdder = ({ setNodes }) => {
  const addNewNode = (e) => {
    setNodes((nds) => [
      ...nds,
      {
        id: `${nds.length + 1}`,
        position: {
          x: nds[nds.length - 1]?.position?.x
            ? nds[nds.length - 1]?.position?.x + 130
            : 1 + 130,
          y: 100,
        },
        type: "databaseSchema",
        data: {
          label: "New Table",
          schema: [{ title: "id", type: "uuid" }],
        },
      },
    ]);
  };

  return (
    <>
      <Button onClick={addNewNode}>
        <TableIcon />
        Add
      </Button>
    </>
  );
};

export default SchemaTableAdder;
