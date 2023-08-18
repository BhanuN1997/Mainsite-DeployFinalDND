"use client";
import "reactflow/dist/style.css";
import shallow from 'zustand/shallow';
import ReactFlow, {
  Controls,
  Edge,
  Node,
  Viewport,
  ReactFlowProvider,
} from "reactflow";
import { useMemo, useEffect, useRef } from "react";
import ActionNode from "@/nodes/ActionNode";
import TriggerNode from "@/nodes/TriggerNode";
import ButtonEdge from "@/components/reactflow/ButtonEdge";
import RFStore from "@/store/reactFlowStore";
import LLMNode from "@/nodes/LLMNode";

const defaultViewPort: Viewport = { x: 0, y: 0, zoom: 1.5 };

export default function Home() {

  const { edges, nodes,onConnect,onEdgesChange,onNodesChange } =RFStore()
  useEffect(() => {
    // This effect will run whenever the 'nodes' array changes in the store
    console.log("Nodes have changed:", nodes);
    // You can perform any additional logic here in response to node changes
  }, [nodes]); // The effect will only re-run if 'nodes' array changes
  const nodeTypes = useMemo(
    () => ({
      trigger: TriggerNode,
      action: ActionNode,
      llm:LLMNode
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
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
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
