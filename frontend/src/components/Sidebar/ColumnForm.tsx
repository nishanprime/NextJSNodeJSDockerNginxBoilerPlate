import { Column } from "@/types/databaseDiagram";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

type ColumnFormProps = {
  initialColumn?: Column;
  onSave: (column: Column) => void;
};

const dataTypes = ["INT", "VARCHAR", "TEXT", "DATE", "BOOLEAN", "FLOAT"];
const constraintOptions = ["PRIMARY KEY", "UNIQUE", "NOT NULL", "FOREIGN KEY"];

export default function ColumnForm({ initialColumn, onSave }: ColumnFormProps) {
  const [column, setColumn] = useState<Column>(
    initialColumn || {
      id: `column-${Date.now()}`,
      name: "",
      type: "VARCHAR",
      constraints: [],
    }
  );

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="column-name">Column Name</Label>
        <Input
          id="column-name"
          value={column.name}
          onChange={(e) => setColumn({ ...column, name: e.target.value })}
          className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
        />
      </div>
      <div>
        <Label htmlFor="column-type">Data Type</Label>
        <Select
          value={column.type}
          onValueChange={(value) => setColumn({ ...column, type: value })}
        >
          <SelectTrigger
            id="column-type"
            className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
          >
            <SelectValue placeholder="Select data type" />
          </SelectTrigger>
          <SelectContent>
            {dataTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Constraints</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {constraintOptions.map((constraint) => (
            <div key={constraint} className="flex items-center space-x-2">
              <Checkbox
                id={`constraint-${constraint}`}
                checked={column.constraints.includes(constraint)}
                onCheckedChange={(checked) => {
                  const newConstraints = checked
                    ? [...column.constraints, constraint]
                    : column.constraints.filter((c) => c !== constraint);
                  setColumn({ ...column, constraints: newConstraints });
                }}
                className="border-gray-100 data-[state=checked]:bg-blue-900 text-blue-900 focus:ring-blue-500"
              />
              <Label
                htmlFor={`constraint-${constraint}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {constraint}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => onSave(column)}
        className="bg-blue-900 hover:bg-blue-800 text-white"
      >
        Save Column
      </Button>
    </div>
  );
}
