import { create } from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (type: string, id: string) => void;
  addEdge: (sourceId: string, targetId: string) => void;
  removeEdge: (id: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const RFStore = create<RFState>((set, get) => ({
  nodes: [],
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  removeEdge: (id: string) => {
    set((state) => {
      const data = state.edges.filter((edge) => edge.id !== id);
      return {
        edges: data,
      };
    });
  },
  addEdge: (sourceId: string, targetId: string) => {
    set((state) => {
      const newEdge: Edge = {
        id: `${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId,
        type: "buttonedge",
      };
      const data = [...state.edges, newEdge];
      return {
        edges: data,
      };
    });
  },
  addNode: (type: string, id: string) => {
    set((state) => {
      const currEdge: Edge = state.edges.find((edge) => id === edge.id);
      const srcNodeId = currEdge.source;
      const targetNodeId = currEdge.target;
  
      const sourceNode = state.nodes.find((node) => node.id === srcNodeId);
      let targetNode = state.nodes.find((node) => node.id === targetNodeId);
  
      if (sourceNode.type === "llm" && type === "action") {
        // Create two new action nodes
        const newNodeLeft: Node = {
          id: `action-${state.nodes.length + 1}`,
          data: {
            parentType:sourceNode.type,
          },
          position: {
            x: sourceNode.position.x - 600,  // Adjust the x position as needed
            y: sourceNode.position.y + 200,  // Adjust the y position as needed
          },
          type: "action",
        };
  
        const newNodeRight: Node = {
          id: `action-${state.nodes.length + 2}`,
          data: {
            parentType:sourceNode.type,
          },
          position: {
            x: sourceNode.position.x + 600,  // Adjust the x position as needed
            y: sourceNode.position.y + 200,  // Adjust the y position as needed
          },
          type: "action",
        };
  
        // Add the new action nodes and edges
        const data = [
          ...state.nodes,
          newNodeLeft,
          newNodeRight,
        ];
  
        state.addEdge(srcNodeId, newNodeLeft.id);
        state.addEdge(srcNodeId, newNodeRight.id);
  
        return {
          nodes: data,
        };
      } else {
        // Continue the linear chain behavior
        const newNode = {
          id: `${state.nodes.length + 1}`,
          data: {
            text: undefined,
          },
          position: targetNode.position,
          type: type,
        };
  
        targetNode = {
          ...targetNode,
          position: { x: 250, y: newNode.position.y + 500 },
        };
  
        const data = [
          ...state.nodes.filter((node) => node.id !== targetNode.id),
          newNode,
          targetNode,
        ];
  
        state.removeEdge(currEdge.id);
        state.addEdge(srcNodeId, newNode.id);
        state.addEdge(newNode.id, targetNodeId);
  
        return {
          nodes: data,
        };
      }
    });
  },
}));

export default RFStore;
