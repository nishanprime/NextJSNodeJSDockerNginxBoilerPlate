import { Node, NodeProps } from "@xyflow/react";

import { TableBody, TableRow } from "@/components/ui/table";

import { BaseNode } from "@/components/base-node";

import ColumnAdder from "./schema/table/ColumnAdder";
import ColumnDeleter from "./schema/table/ColumnDeleter";
import ColumnEditor from "./schema/table/ColumnEditor";
import TableEditor from "./schema/table/TableEditor";

type DatabaseSchemaNode = Node<{
  label: string;
  schema: { title: string; type: string }[];
}>;

export function DatabaseSchemaNode({
  data,
  selected,
}: NodeProps<DatabaseSchemaNode>) {
  return (
    <BaseNode className="p-0" selected={selected}>
      <TableEditor data={data} />
      <table className="border-spacing-10 overflow-visible">
        <TableBody>
          {data.schema.map((entry, index) => (
            <TableRow key={entry.title} className="relative text-xs">
              <ColumnEditor data={data} index={index} entry={entry} />
              <ColumnDeleter index={index} data={data} />
            </TableRow>
          ))}

          <ColumnAdder data={data} />
        </TableBody>
      </table>
    </BaseNode>
  );
}
