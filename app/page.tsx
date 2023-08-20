"use client";
import "reactflow/dist/style.css";
import shallow from 'zustand/shallow';
import ReactFlow, {
  Controls,
  Edge,
  Node,
  Viewport,
  ReactFlowProvider,
} from "reactflow";
import { useMemo, useEffect, useRef } from "react";
import ActionNode from "@/nodes/ActionNode";
import TriggerNode from "@/nodes/TriggerNode";
import ButtonEdge from "@/components/reactflow/ButtonEdge";
import RFStore from "@/store/reactFlowStore";
import LLMNode from "@/nodes/LLMNode";
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";

const defaultViewPort: Viewport = { x: 0, y: 0, zoom: 1.5 };

export default function Home() {


  useEffect(() => {
    const exchangeCodeForTokens = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('code')) {
          const dcode = urlParams.get('code');
          const code = String(dcode)
          console.log(code)
          const tokenEndpoint = 'https://' + process.env.NEXT_PUBLIC_DOMAIN + '/oauth2/token';
          const clientId: string = process.env.NEXT_PUBLIC_CLIENT_ID!;
          const redirectUri: string = process.env.NEXT_PUBLIC_REDIRECT_SIGNIN!;

          const bodyParams = new URLSearchParams();
          bodyParams.append('grant_type', 'authorization_code');
          bodyParams.append('client_id', clientId);
          bodyParams.append('code', code);
          bodyParams.append('redirect_uri', redirectUri);

          const response = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: bodyParams.toString(),
          });


          console.log(response)
          const data = await response.json();
          console.log(data);

          if (response.ok) {
            const accessToken = data.access_token;
            const idToken = data.id_token;
            const refreshToken = data.refresh_token;

            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('id_token', idToken);
            localStorage.setItem('refresh_token', refreshToken);

            // window.location.href = "http://localhost:3000"
            toast.success("Signed in successfully")
            const decode_id = jwt_decode(idToken)
            console.log(decode_id)
          }

          else {
            toast.error("Unsuccessful Sign in")
            window.location.href = "http://localhost:3000"
          }
        }
      } catch (error) {
        toast.error("Error Occured")
        console.error(error);
      }
    };

    exchangeCodeForTokens();
  }, []);
  
  const { edges, nodes,onConnect,onEdgesChange,onNodesChange } =RFStore()
  useEffect(() => {
    // This effect will run whenever the 'nodes' array changes in the store
    console.log("Nodes have changed:", nodes);
    // You can perform any additional logic here in response to node changes
  }, [nodes]); // The effect will only re-run if 'nodes' array changes
  const nodeTypes = useMemo(
    () => ({
      trigger: TriggerNode,
      action: ActionNode,
      llm:LLMNode
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      buttonedge: ButtonEdge,
    }),
    []
  );
  return (
    <div className="grow">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          attributionPosition="bottom-right"
          defaultViewport={defaultViewPort}
        >
          {" "}
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
