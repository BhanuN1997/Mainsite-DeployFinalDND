"use client";
import "reactflow/dist/style.css";

import ReactFlow, {
  Controls,
  Edge,
  Node,
  Viewport,
  ReactFlowProvider,
} from "reactflow";
import { useMemo, useEffect } from "react";
import ActionNode from "@/nodes/ActionNode";
import TriggerNode from "@/nodes/TriggerNode";
import ButtonEdge from "@/components/reactflow/ButtonEdge";
import RFStore from "@/store/reactFlowStore";

const defaultViewPort: Viewport = { x: 0, y: 0, zoom: 1.5 };

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { text: undefined },
    type: "trigger",
  },
  {
    id: "2",
    position: { x: 0, y: 500 },
    data: { text: undefined },
    type: "action",
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "buttonedge" },
];

export default function Home() {
  const { edges, nodes,onConnect,onEdgesChange,onNodesChange } = RFStore.getState();
  useEffect(() => {
    // This effect will run whenever the 'nodes' array changes in the store
    console.log("Nodes have changed:", nodes);
    // You can perform any additional logic here in response to node changes
  }, [nodes]); // The effect will only re-run if 'nodes' array changes
  const nodeTypes = useMemo(
    () => ({
      trigger: TriggerNode,
      action: ActionNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      buttonedge: ButtonEdge,
    }),
    []
  );
  return (
    <div className="grow">
      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={nodes}
          defaultEdges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          attributionPosition="bottom-right"
          defaultViewport={defaultViewPort}
        >
          {" "}
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
