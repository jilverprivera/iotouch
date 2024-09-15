import { ReactFlow } from "@xyflow/react";
import type { Metadata } from "next";

import { FloatingDockDemo } from "@/components/layout/private/Dock.demo";

export const metadata: Metadata = {
  title: "Areas / IoTouch",
};

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Areas() {
  return (
    <div className="w-full h-full">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
      <FloatingDockDemo />
    </div>
  );
}
