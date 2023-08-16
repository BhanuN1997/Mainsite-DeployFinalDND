"use client";
import ReactFlow, { Controls,Edge,Node } from "reactflow";

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'HELLO 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'HELLOW 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Home() {
  return (
    <div className="grow">
      <ReactFlow  defaultNodes={initialNodes} defaultEdges={initialEdges} fitView >
        <Controls />
      </ReactFlow>
    </div>
  );
}
