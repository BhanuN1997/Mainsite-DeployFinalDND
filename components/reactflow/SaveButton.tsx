import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import RFStore from '@/store/reactFlowStore';

export default function SaveButton() {
  const nodes = RFStore((state) => state.nodes);
  const edges = RFStore((state) => state.edges);

  const handleSave = () => {
    const graphState = { nodes, edges };
    const configId = uuidv4(); // Generate a UUID

    // Retrieve existing configurations from local storage or initialize an empty array
    const existingConfigs = JSON.parse(localStorage.getItem('graphConfigs')) || [];

    // Append the new configuration with its UUID
    existingConfigs.push({ id: configId, config: graphState });

    // Store the updated configurations back in local storage
    localStorage.setItem('graphConfigs', JSON.stringify(existingConfigs));
  };

  return (
    <div>
      {/* Render your graph using nodes and edges */}
      <button className='button' onClick={handleSave}>Save</button>
    </div>
  );
}