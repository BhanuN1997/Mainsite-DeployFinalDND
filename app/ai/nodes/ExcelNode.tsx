import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import {read, utils} from "xlsx"
const handleStyle = { left: 10 };

export function ExcelNode({data}){
    const onChange = useCallback((e) => {
        let reader = new FileReader();
        reader.onload = function(e) {
          let file = e.target.result;
          let d = read(file,{type: "binary"});
          let list=d.SheetNames
          let rowObject = utils.sheet_to_json(d.Sheets[list[0]]);
          data.xls=rowObject
        };
        reader.readAsBinaryString(e.target.files[0]);
    }, [])
    return (
        <>
          <Handle type="target" position={Position.Top} />
          <div>
            <label htmlFor="text">File:</label>
            <input id="text" name="text" type="file" onChange={onChange} className="nodrag" />
          </div>
          <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        </>
      )
}