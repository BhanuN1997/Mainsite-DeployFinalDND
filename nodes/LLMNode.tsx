import React from "react";
import { Handle, Position } from "reactflow";
import { useState } from "react";
import OpenAI from "@/integrations/llms/openai/OpenAI";
import Ai21 from "@/integrations/llms/ai21/Ai21";

export default function LLMNode() {
  const [selected, setSelected] = useState("");
 
  return (
    <div className="node_container drop_shadow_md">
      <Handle type="target" position={Position.Top} />
      <div className="purple_gradient _heading _flex justify_center">LLM</div>
      <div className="_text _p_8px">
        <span className="_mr_8px">Models:</span>
        <select className="_input" name="" id="" defaultValue="none" onChange={(e:any)=>{setSelected(e.target.value)}}>
          <option value="none">None</option>
          <option value="openai">OpenAI</option>
          <option value='ai21'>AI21</option>
        </select>
        <br />
      </div>
      {(() => {
        console.log(selected)
        switch (selected) {
          
          case "openai":
            return <OpenAI/>;
          case "ai21":
            return <Ai21/>
        }
      })()}
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}
