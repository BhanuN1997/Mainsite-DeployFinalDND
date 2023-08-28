import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import OpenAI from "@/integrations/llms/openai/OpenAI";
import Ai21 from "@/integrations/llms/ai21/Ai21";
import RFStore from "@/store/reactFlowStore";

function InputForm(num, setInput, inputs) {
  return (
    <input
      key={num}
      type="text"
      value={inputs[num]}
      style={{border: "3px solid"}}
      onChange={(e) => {
        const updatedInputs = [...inputs];
        updatedInputs[num] = e.target.value;
        setInput(updatedInputs);
      }}
    />
  );
}

export default function LLMNode({ id }) {
  const [selected, setSelected] = useState("");
  const {addNodesAroundLLM, removeNodeAndEdges } = RFStore.getState();
  const [inputs, setInput] = useState([]);
  const [submittedInputs, setSubmittedInputs] = useState([]);
  
  const handleRemoveNode = () => {
    removeNodeAndEdges(id);
  };

  const handleSubmit = () => {
    setSubmittedInputs([...inputs]);
    console.log(submittedInputs)
    addNodesAroundLLM(id,submittedInputs)
  };

  return (
    <div className="node_container drop_shadow_md">
      <Handle type="target" position={Position.Top} />
      <button style={{ position: "absolute",
        transform: "translate(30%,45%)",
        fontSize: 12, 
        pointerEvents: "all",}} className="edgebutton bg-purple-300 border border-purple-400 p-2 focus:outline-none flex justify-center items-center" onClick={handleRemoveNode}>
        -
      </button>
      <div className=" _heading _flex justify_center"><div className="border _ml_8px">LLM</div></div>
      <div className="_text _p_8px">
        <span className="_mr_8px">Models:</span>
        <select
          className="_input"
          name=""
          id=""
          defaultValue="none"
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value="none">None</option>
          <option value="openai">OpenAI</option>
          <option value="ai21">AI21</option>
        </select>
        <br />
      </div>
      {(() => {
        console.log(selected);
        switch (selected) {
          case "openai":
            return <OpenAI />;
          case "ai21":
            return <Ai21 />;
        }
      })()}

      <Handle type="source" position={Position.Bottom} id="a" />
     
      <div className="_mt_16px">
        <button
          className="button"
          onClick={() => {
            setInput([...inputs, ""]);
          }}
        >
          +
        </button>
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {inputs.map((input, index) => (
        <div key={index}>
          Input: 
          {InputForm(index, setInput, inputs)}
        </div>
      ))}
      
    </div>
  );
}
