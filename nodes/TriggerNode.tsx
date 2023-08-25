"use client";
import { Handle, Position } from "reactflow";
import { useRef, useState } from "react";
import RedditTrigger from "@/integrations/triggers/reddit/RedditTrigger";
import GmailTrigger from "@/integrations/triggers/gmail/GmailTrigger";
import AddButton from "@/components/reactflow/AddButton";
import GithubTrigger from "@/integrations/triggers/github/GIthubTrigger";

export default function TriggerNode({data,id}:{data:any,id:any}) {
  const inputRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const [selected, setSelected] = useState("");
  const onSelect = (event: any) => {
    setSelected(event.target.value);
  };
  return (
    <div className="node_container drop_shadow_md">
      <div className= "purple_gradient _heading _flex justify_center " >Trigger</div>
      <div className="_text _p_8px" >
        <div className="_mb_16px">
          <span className="_mr_8px ">Select App:</span>
          <select
            className="_input"
            name=""
            id=""
            onChange={onSelect}
            defaultValue="none"
          >
            <option value="none">None</option>
            <option value="reddit">Reddit</option>
            <option value="gmail">Gmail</option>
            <option value="github">Github</option>
          </select>
        </div>
        {(() => {
        switch (selected) {
          case "reddit":
            return <RedditTrigger inputRef={inputRef} data={data} />;
           case 'gmail':
            return <GmailTrigger emailInputRef={inputRef} passwordInputRef={passwordRef} data={data}/>
           case 'github':
            return <GithubTrigger/>
        }
      })()}
      </div>
      
      <AddButton id={id}/>
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </div>
  );
}
