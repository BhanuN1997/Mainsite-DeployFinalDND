import React from 'react'
import RFStore from '@/store/reactFlowStore'
export default function SaveButton() {
    const nodes = RFStore((state) => state.nodes);
  const edges = RFStore((state) => state.edges);

  const handleSave = () => {
    const graphState = { nodes, edges };
    localStorage.setItem('graphState', JSON.stringify(graphState));
  };

  return (
    <div>
      {/* Render your graph using nodes and edges */}
      <button className='button' onClick={handleSave}>Save</button>
    </div>
  );
}
