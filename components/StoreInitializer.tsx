"use client";
import RFStore from "@/store/reactFlowStore";
import { useRef } from "react";
import { Edge } from "reactflow";
import { Node } from "reactflow";
export default function StoreInitializer() {
  const initialized = useRef(false);

  const nodes: Node[] = [
    {
      id: "1",
      type: "trigger",
      data: { label: "Input" },
      position: { x: 250, y: 25 },
    },

  
  ];


  if (!initialized.current) {
    RFStore.setState({ nodes});
    initialized.current = true;
  }

  return null;
}
