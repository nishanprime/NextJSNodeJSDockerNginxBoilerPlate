"use client";

import { useState } from "react";
import DiagramBuilder from "./DiagramBuilder";
import TableListView from "./TableListView";

export default function DiagramView() {
  const [view, setView] = useState<"diagram" | "list">("diagram");

  if (view === "diagram") {
    return <DiagramBuilder setView={setView} />;
  }

  return <TableListView setView={setView} />;
}
