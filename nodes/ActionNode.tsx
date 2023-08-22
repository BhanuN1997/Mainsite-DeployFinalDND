"use client";
import { useState } from "react";
import { Handle, Position } from "reactflow";
import SlackAction from "@/integrations/actions/slack/SlackAction";
import RFStore from "@/store/reactFlowStore";


function createOptions(num:number){
    let items=[]
    for (let i=1;i<=num;i++){
      items.push(<option key={i} value={i}>{i}</option>)
    }
    return items
}

export default function ActionNode({data,id}:{data:any,id:string}) {
  const [selected, setSelected] = useState("");
  const [classify,setClassify]=useState("no");
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
      <div className="purple_gradient _heading _flex justify_center">
        Action
        
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
        </select>
        <div style={{ display: data.parentType === "llm" ? "block" : "none" }}>
          <div className="_mt_16px">
            <span className="_mr_8px ">Classify:</span>
            <select
              className="_input"
              name=""
              id=""
              onChange={(e)=>setClassify(e.target.value)}
              defaultValue={classify}
            >
              {createOptions(data.options)}
             {/*  <option value="no">No</option>
              <option value="yes">Yes</option> */}
            </select>
          </div>
        </div>
        {(()=>{
                switch(selected){
                    case 'slack':
                        return <SlackAction classify={classify}/>
                }
            })()}


      </div>
      <Handle type="source" position={Position.Bottom} />
      <button className="button" onClick={handleRemoveNode}>Remove Node</button>


    </div>
  );
}
