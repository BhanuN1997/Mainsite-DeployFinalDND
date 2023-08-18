import React from "react";
import { Handle, Position } from "reactflow";
import { useState } from "react";

export default function LLMNode() {
  const [selected, setSelected] = useState("");
  const onSelect = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div className="node_container drop_shadow_md">
      <Handle type="target" position={Position.Top} />
      <div className="purple_gradient _heading _flex justify_center">LLM</div>
      <div className="_text _p_8px">
        <span className="_mr_8px">Models:</span>
        <select className="_input" name="" id="" defaultValue="none">
          <option value="none">None</option>
          <option value="openAi">OpenAi</option>
        </select>
        <br />
      </div>
      {(() => {
        switch (selected) {
          case "openAi":
            return <></>;
        }
      })()}
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}
