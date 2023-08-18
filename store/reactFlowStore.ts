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
  addNode: (type: string,id:string) => void;
  addEdge:(sourceId:string,targetId:string)=>void;
  removeEdge:(id:string)=>void;
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
  removeEdge:(id:string)=>{
    set((state)=>{
      const data=state.edges.filter(edge=>edge.id!==id)
      return {
        edges:data
      }
    })
  },
  addEdge:(sourceId:string,targetId:string)=>{
    set((state)=>{
      const newEdge:Edge={
        id:`${sourceId}-${targetId}`,
        source:sourceId,
        target:targetId,
        type: 'buttonedge'
      }
      const data=[...state.edges,newEdge]
      return {
        edges:data
      }
    })
  },
  addNode: (type: string,id:string) => {
    set((state) => {
      const currEdge:Edge=state.edges.find(edge=>id===edge.id)
      const srcNodeId=currEdge.source
      const targetNodeId=currEdge.target

      const sourceNode=state.nodes.find(node=>node.id===srcNodeId)
      let targetNode=state.nodes.find(node=>node.id===targetNodeId)
      const newNode = {
        id: `${state.nodes.length + 1}`,
        data: {
          text: undefined,
        },
        position: targetNode.position,
        type: type,
      };
      targetNode={
        position: {x:500,y:newNode.position.y+500},
        ...targetNode
      }
      
      console.log(newNode)
      const data = [...state.nodes.filter(node=>node.id!==targetNode.id),newNode,targetNode]
      console.log(data)
      state.removeEdge(currEdge.id)
      state.addEdge(srcNodeId,newNode.id)
      state.addEdge(newNode.id,targetNodeId)
      return {
        nodes: data,
      };
    });
  },
}));

export default RFStore;
