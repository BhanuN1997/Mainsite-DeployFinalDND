"use client";

import { useState } from "react";

export default function OpenAI() {
  const handleChange = async (e) => {
    //process logic here
    option = e.target.value;
  };
  const [apiKey, setApiKey] = useState("");
  let option;

  console.log("uwuwu");

  return (
    <div className="flex flex-col _text _gap_8px _ml_8px">
      <label htmlFor="apiKey">
        Api-Key :{" "}
        <input className="_input"
          type="text"
          name="apiKey"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </label>

      <br />
      <label htmlFor="prompts">Prompts: <select className="_input" name="prompts" id="prompts" onChange={handleChange}>
        <option value="none">None</option>
        <option value="classify">Classify</option>
      </select></label>
      
    </div>
  );
}
