"use client";
import { Handle, Position } from "reactflow";
import { useRef, useState } from "react";

export default function TriggerNode() {
  const inputRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const [selected, setSelected] = useState("");
  const onSelect = (event: any) => {
    setSelected(event.target.value);
  };
  return (
    <div style={{minHeight:'500px',backgroundColor:'pink'}} className="min-h-[500px] bg-cyan-600">
      <div className="bg-zinc-950">
        <div
          style={{
            background:
              " linear-gradient(180deg, #E1E0FB 11.46%, #E1ECF7 61.98%)",
          }}
          className="font-semibold p-4 min-w-full text-center"
        >
          Trigger
        </div>
        <div className="flex gap-4 items-center">
          App:
          <select
            className="w-[250px] bg-white border border-gray-300 text-gray-700 py-2 px-4 focus:outline-none focus:border-blue-500"
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
        <Handle type="source" position={Position.Bottom} id="a" />
      </div>
    </div>
  );
}
