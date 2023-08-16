"use client";
import { Handle, Position } from "reactflow";
import { useRef, useState } from "react";
import RedditTrigger from "@/integrations/triggers/RedditTrigger";
import GmailTrigger from "@/integrations/triggers/GmailTrigger";

export default function TriggerNode({data}:{data:any}) {
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
          <span className="_mr_8px ">App:</span>
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
          </select>
        </div>
        {(() => {
        switch (selected) {
          case "reddit":
            return <RedditTrigger inputRef={inputRef} data={data} />;
           case 'gmail':
            return <GmailTrigger emailInputRef={inputRef} passwordInputRef={passwordRef} data={data}/>
        }
      })()}
      </div>
      

      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}
