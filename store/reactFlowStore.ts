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
  addNode: (type: string) => void;
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
  addNode: (type: string) => {
    set((state) => {
      const newNode = {
        id: `${state.nodes.length + 1}`,
        data: {
          text: undefined,
        },
        position: { x: 500, y: state.nodes.length * 500 },
        type: type,
      };
      console.log(newNode)
      const data = [...state.nodes,newNode]
      console.log("addnode called")
      return {
        nodes: data,
      };
    });
  },
}));

export default RFStore;
