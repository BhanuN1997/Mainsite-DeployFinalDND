"use client";
import "reactflow/dist/style.css";

import ReactFlow, {
  Controls,
  Edge,
  Node,
  Viewport,
  ReactFlowProvider,
} from "reactflow";
import { useMemo } from "react";
import ActionNode from "@/nodes/ActionNode";
import TriggerNode from "@/nodes/TriggerNode";

const defaultViewPort: Viewport = { x: 0, y: 0, zoom: 0.5 };

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { text: undefined },
    type: "trigger",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { text: undefined },
    type: "action",
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2", type: "step" }];

export default function Home() {
  const nodeTypes = useMemo(
    () => ({
      trigger: TriggerNode,
      action: ActionNode,
    }),
    []
  );
  return (
    <div className="grow">
      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={initialNodes}
          defaultEdges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-right"
          defaultViewport={defaultViewPort}
        />
      </ReactFlowProvider>
    </div>
  );
}
