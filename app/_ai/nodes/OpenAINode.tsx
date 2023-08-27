"use client"

import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import {read, utils} from "xlsx"
const handleStyle = { left: 10 };

export function OpenAINode({data}){
    const onChange = useCallback((e) => {
        data.key=e.target.value
        console.log(e.target.value)
    }, [])
    return (
        <>
          <Handle type="target" position={Position.Top} />
          <div>
            <label htmlFor="text">File:</label>
            <input id="text" name="text" type="text" onChange={onChange} className="nodrag" />
          </div>
          <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        </>
      )
}