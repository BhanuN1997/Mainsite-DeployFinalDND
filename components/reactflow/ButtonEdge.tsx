"use client";
import { useState } from "react";
import {
  BaseEdge,
  Edge,
  Node,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
} from "reactflow";
import DropDown from "./DropDown";
import RFStore from "@/store/reactFlowStore";

export default function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = { borderRadius: "0" },
  markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });


  const {addNode,nodes} = RFStore.getState()
  const {removeEdge,addEdge,edges}=RFStore.getState()

  const onEdgeClick = (evt: any, id: any) => {
    evt.stopPropagation();
    setIsOpen((prev) => !prev);
  };

 


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,

            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <button
            className="edgebutton bg-purple-300 border border-purple-400  p-2 hover:bg-purple-400 focus:outline-none flex justify-center items-center"
            onClick={(event) => {
              setIsOpen((prevState)=>!prevState)
              console.log(nodes)
             console.log(edges)
            }
          }
          >
            &#43;
          </button>

          <DropDown isOpen={isOpen} id={id} />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
