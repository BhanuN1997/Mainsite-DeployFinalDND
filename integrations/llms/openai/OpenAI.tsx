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
  const setAIData=useAIStore(state=>state.setAIData)
  const gmailData=useGmailStore(state=>state.gmailData)
  const [prompt,setPrompt] = useState('')
  let option;

  useEffect(()=>{
    async function fetchOpenAIData(){
      
      if(apiKey){
        console.log(gmailData)
          const data=await sendOpenAIRequest(apiKey,gmailData.body,prompt)
          const openaiData:AIData={
            data:data
          }
          setAIData(openaiData)
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
      <label htmlFor="prompts">Prompts: <textarea className="_input" name="prompts" onChange={(e)=>{setPrompt(e.target.value)}} id="prompts" >
        
      </textarea></label>
      
    </div>
  );
}
