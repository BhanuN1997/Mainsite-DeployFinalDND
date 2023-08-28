"use client"
import { useEffect, useState } from "react";
import { useRedditPostStore } from "@/store/redditStore";
import { EmailConf, sendEmail } from "./server";
import { GmailData, useGmailStore } from "@/store/gmailStore";
import { useAIStore } from "@/store/AIStore";

export default function GmailAction({id,option}) {
  const redditPost=useRedditPostStore(state=>state.redditPost)
  const gmailData=useGmailStore(state=>state.gmailData)
  const AIData=useAIStore(store=>store.AIData)

  const [user,setUser]=useState("")
  const [password,setPassword]=useState("")
  const [to,setEmailto]=useState("")
   useEffect(()=>{
    if(gmailData){
        console.log("inside gmail")
        const data:GmailData=gmailData
        const emailConf:EmailConf={
            user: user,
            password: password,
            host: 'smtp.gmail.com',
            to: to,
            html: '',
            text: ` ${data.author} \n subject ${data.subject}`,
            subject: 'Email received'
        }
        sendEmail(emailConf)
        //sendSlackMsg(new URL(webhook),` Option selected ${aioption} ${data.author} \n subject ${data.subject}`)
      }
    //setWebhook(OAuthCode)
    if(!AIData){
      return;
    }
    
    let aioption='0'
    if(AIData.data && /\d+/.test(AIData.data)){
      aioption=AIData.data.match(/\d+/)[0]
    }
    if(aioption===option){
      console.log("inside ai")
      //do something
      
      
    }
  },[redditPost,gmailData])
 
  
  return (
    <div>
        <label htmlFor="user">
        Email :{" "}
        <input className="_input"
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label htmlFor="pass">
        App key :{" "}
        <input className="_input"
          type="text"
          name="user"
          id="user"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="pass">
        To :{" "}
        <input className="_input"
          type="text"
          name="user"
          id="user"
          value={to}
          onChange={(e) => setEmailto(e.target.value)}
        />
      </label>
    </div>
  )
}
