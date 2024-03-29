"use client";
import { useState } from "react";
import { Handle, Position } from "reactflow";
import SlackAction from "@/integrations/actions/slack/SlackAction";
import RFStore from "@/store/reactFlowStore";
import GmailAction from "@/integrations/actions/gmail/GmailAction";

export default function ActionNode({data,id}:{data:any,id:string}) {
  const [selected, setSelected] = useState("");
  const [classify,setClassify]=useState("");
  const onSelect = (event: any) => {
    setSelected(event.target.value);
  };
  const {removeNodeAndEdges} = RFStore.getState()
  const handleRemoveNode = () => {
      removeNodeAndEdges(id)
  };
  return (
    <div className="node_container drop_shadow_md">
      <Handle type="target" position={Position.Top} />
      <button style={{ position: "absolute",
        transform: "translate(30%,45%)",
        fontSize: 12, 
        pointerEvents: "all",}} className="edgebutton bg-purple-300 border border-purple-400 p-2 focus:outline-none flex justify-center items-center" onClick={handleRemoveNode}>-</button>

      <div className="_heading _flex justify_center">
        <div className="border _ml_8px">Action</div>
        
      </div>
      <div className="_text _p_8px">
        <span className="_mr_8px">App:</span>
        <select
          className="_input"
          name=""
          id=""
          defaultValue="none"
          onChange={onSelect}
        >
          <option value="none">None</option>
          <option value="slack">Slack</option>
          <option value="gmail">Gmail</option>
        </select>
        {(()=>{
                switch(selected){
                    case 'slack':
                        return <SlackAction id={id} option={data.option}/>
                    case 'gmail':
                      return <GmailAction id={id} option={data.option}/>
                }
            })()}


      </div>
      <Handle type="source" position={Position.Bottom} />


    </div>
  );
}
