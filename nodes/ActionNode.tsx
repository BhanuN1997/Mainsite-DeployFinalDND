"use client";
import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function ActionNode() {
  const [selected, setSelected] = useState("");
  const onSelect = (event: any) => {
    setSelected(event.target.value);
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
      </div>
    </div>
  );
}
