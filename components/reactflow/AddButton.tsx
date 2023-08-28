'use client'
import React from 'react'
import RFStore from '@/store/reactFlowStore';
import { useState } from 'react';

export default function AddButton( nodeId ) {
  const [isOpen, setIsOpen] = useState(false);

  const { addNodeBelow } = RFStore();

  const handleAddNode = (selectedNodeType) => {
    addNodeBelow(nodeId.id, selectedNodeType);
    setIsOpen(false);
  };

  return (
    <div
      style={{
       position: "absolute",
        transform: "translate(30%,45%)",
        fontSize: 12, 
        pointerEvents: "all",
      }}
      className="nodrag nopan"
    >
      <button
        className={`edgebutton bg-purple-300 border border-purple-400 p-2 focus:outline-none flex justify-center items-center ${
          isOpen ? "hover:bg-purple-400" : ""
        }`}
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        &#43;
      </button>

      {isOpen && (
        <div className="bg-white border rounded shadow-md p-2 absolute mt-2">
          <button
            className="block p-2 w-full text-left"
            onClick={() => handleAddNode('action')}
          >
            Action
          </button>
          <button
            className="block p-2 w-full text-left"
            onClick={() => handleAddNode('llm')}
          >
            LLM
          </button>
          {/* Add other node types here */}
        </div>
      )}
    </div>
  );
}