"use client"
import React, { useCallback, useEffect, useMemo } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';

import 'reactflow/dist/style.css';
import { ExcelNode } from './nodes/ExcelNode';
import { OpenAINode } from './nodes/OpenAINode';
import { LLMChain, PromptTemplate } from 'langchain';
import {OpenAI} from 'langchain/llms/openai'
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { xls:undefined, key:undefined }, type: 'openainode' },
  { id: '2', position: { x: 0, y: 100 }, data: { xls:undefined, key:undefined }, type: 'excelnode' },
];

async function solveData(model:OpenAI,data:string){
  const template = ` ${data} `
  const prompt= new PromptTemplate({inputVariables: ["data"], template: template})
  const chain=new LLMChain({ llm: model, prompt: prompt})
  const output = await chain.call({ data })
  console.log(output)
  return output.text
}

export default function ExcelLoader() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = (params) =>{
    const targetNode=nodes.find(node=>node.id==params.target)
    const srcNode=nodes.find(node=>node.id==params.source)
    if(targetNode.data.xls){
      const model=new OpenAI({openAIApiKey: srcNode.data.key})
      for(const x of targetNode.data.xls){
        let d=''
        for(const key in x){
          d+=`${key}:${x[key]} `
        }
        console.log(d)
          solveData(model,d)
      }
    }
    setEdges((eds) => addEdge(params, eds))
  } ;
  const nodeTypes = useMemo(() => ({ excelnode: ExcelNode,openainode: OpenAINode }), []);
  console.log(nodes)
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}