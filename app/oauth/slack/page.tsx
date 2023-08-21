"use client"
import { getwebhook } from "@/integrations/actions/slack/server";
import { SlackOAuthCode, useSlackStore } from "@/store/slackStore";
import {  useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SlackAuth(){
    const [webhook,setWebhook]=useState("")

    const state = useSlackStore.getState()
    const {OAuthCode,setOAuthCode} = state ;
    const searchParams=useSearchParams();
    const code=searchParams.get("code")
    useEffect(()=>{
        console.log(code)
        async function fetchwebhook(){
          console.log(code)
          if(code)
          {
            const w=await getwebhook(code)
            console.log(w)
            localStorage.setItem("slackCode",w!)
            setWebhook(w)
          }
          
        }
        fetchwebhook()
          
      },[]) 
   
    const slackCode:SlackOAuthCode={
        OAuthCode:webhook!
    }
    console.log(slackCode)
    setOAuthCode(slackCode) 
    
    return (
        <div>
            <div>You have successfully added Slack!</div>
            <div>You can now close this tab</div>
        </div>
    )
}