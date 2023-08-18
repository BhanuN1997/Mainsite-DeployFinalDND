"use client";
import RFStore from "@/store/reactFlowStore";
import { useRef } from "react";
import { Edge } from "reactflow";
export default function StoreInitializer() {
  const initialized = useRef(false);

  const nodes: Node[] = [
    {
      id: "1",
      type: "trigger",
      data: { label: "Input" },
      position: { x: 250, y: 25 },
    },

    {
      id: "2",
      type: "action",
      data: { label: "Output" },
      position: { x: 250, y: 500 },
    },
  ];

  const edges: Edge[] = [{ id: "e1-2", source: "1", target: "2" ,type:'buttonedge'}];

  if (!initialized.current) {
    RFStore.setState({ nodes, edges });
    initialized.current = true;
  }

  return null;
}
