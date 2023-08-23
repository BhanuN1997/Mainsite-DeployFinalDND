"use client"
import { useEffect, useState } from "react";
import { useRedditPostStore } from "@/store/redditStore";
import { sendSlackMsg } from "./server";
import { GmailData, useGmailStore } from "@/store/gmailStore";
import { useAIStore } from "@/store/AIStore";

export default function SlackAction({classify,id,option}) {
  const redditPost=useRedditPostStore(state=>state.redditPost)
  const gmailData=useGmailStore(state=>state.gmailData)
  const AIData=useAIStore(store=>store.AIData)
  const OAuthCode=localStorage.getItem("slackCode")//useSlackStore(state=>state.OAuthCode)
  const [webhook,setWebhook]=useState("")
   useEffect(()=>{
    setWebhook(OAuthCode)
    console.log("meow meow"+webhook)
    console.log(AIData)
    if(!AIData){
      return;
    }
    
    let aioption='0'
    if(AIData.data && /\d+/.test(AIData.data)){
      aioption=AIData.data.match(/\d+/)[0]
    }
    console.log("meow meow",classify,id,aioption)
    if(aioption===classify && webhook){
      console.log("inside ai")
      //do something
      if(gmailData){
        console.log("inside gmail")
        const data:GmailData=gmailData
        sendSlackMsg(new URL(webhook),` Option selected ${aioption} ${data.author} \n subject ${data.subject}`)
      }
      
    }
  },[redditPost,gmailData])
 
  
  return (
    <div>
      {(OAuthCode==undefined)?
      <a target="_blank" href='https://slack.com/oauth/v2/authorize?client_id=4356450523381.5719716288896&scope=incoming-webhook&user_scope='><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
        :
        <p>Authenticated!</p>
      }
      </div>
  )
}
