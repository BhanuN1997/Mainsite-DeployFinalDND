'use client'
import React from 'react'
import RFStore from '@/store/reactFlowStore';
import { useState } from 'react';

export default function AddButton(nodeId) {
  const [showAddButton, setShowAddButton] = useState(true);

   const {addNodeBelow} = RFStore() 
  const [selectedNodeType, setSelectedNodeType] = useState('action');

  const handleAddNode = () => {
    addNodeBelow(nodeId.id, selectedNodeType);
    setShowAddButton((prev)=>!prev)
  };

  const handleNodeTypeChange = (event) => {
    setSelectedNodeType(event.target.value);
  };

  return (
    <>
    {
    showAddButton &&
    <div>
      <select value={selectedNodeType} onChange={handleNodeTypeChange}>
        <option value="action">Action</option>
        <option value="llm">LLM</option>
        {/* Add other node types here */}
      </select>
      <button className='button' onClick={handleAddNode}>Add Node Below</button>

    </div>
    }
    </>
  );

  
}
