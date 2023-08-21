import { useState } from "react"
import RFStore from "@/store/reactFlowStore";
export default function AddNodesForm({llmnodeId}:{llmnodeId:string}) {
    const [numNodes, setNumNodes] = useState(1); // Default value
    const{addNodesAroundLLM} = RFStore.getState()
  
    const handleNumNodesChange = (event) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value)) {
        setNumNodes(value);
      }
    };
  
    const handleAddNodesClick = () => {
      addNodesAroundLLM(numNodes,llmnodeId);
    };
  
    return (
      <div>
        <label htmlFor="numNodes">Number of Nodes:<input className="_input"
          type="number"
          id="numNodes"
          value={numNodes}
          onChange={handleNumNodesChange}
        /></label>
        
        <button  className="button" onClick={handleAddNodesClick}>Add Nodes</button>
      </div>
    );
  };