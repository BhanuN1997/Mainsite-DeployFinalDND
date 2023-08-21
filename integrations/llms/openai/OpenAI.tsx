"use client";
import { useEffect, useState } from "react"
import { sendOpenAIRequest } from "./openai"
import { useGmailStore } from "@/store/gmailStore"
import { AIData, useAIStore } from "@/store/AIStore"

export default function OpenAI() {
  const handleChange = async (e) => {
    //process logic here
    option = e.target.value;
  };
  const [apiKey, setApiKey] = useState("");
  const setOpenAIData=useAIStore(state=>state.setAIData)
  const gmailData=useGmailStore(state=>state.gmailData)
  let option;

  useEffect(()=>{
    async function fetchOpenAIData(){
      
      if(apiKey){
        console.log(gmailData)
          const data=await sendOpenAIRequest(apiKey,gmailData.body)
          const openaiData:AIData={
            data:data
          }
          setOpenAIData(openaiData)
          console.log(data)
      }
        
    }

    fetchOpenAIData()
    
  },[apiKey,gmailData])

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
