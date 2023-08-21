"use client"
import { useEffect, useState } from "react";
import { RedditPost, useRedditPostStore } from "@/store/redditStore";
import { useSlackStore } from "@/store/slackStore";
import { getwebhook, sendSlackMsg } from "./server";
import { GmailData, useGmailStore } from "@/store/gmailStore";
import { useAIStore } from "@/store/AIStore";

export default function SlackAction({classify}) {
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
    console.log("meow meow",classify)
    if(AIData.data.includes("1") && classify==="yes" && webhook){
      console.log("inside ai")
      //do something
      if(gmailData){
        console.log("inside gmail")
        const data:GmailData=gmailData
        sendSlackMsg(new URL(webhook),` ${AIData.data} said yes ${data.author} \n subject ${data.subject}`)
      }
      
    }
    else if(AIData.data.includes("0") && classify==="no" && webhook){
      if(gmailData){
        const data:GmailData=gmailData
        sendSlackMsg(new URL(webhook),`OpenAI ${AIData.data} said no ${data.author} \n subject ${data.subject}`)
      }
    }
      /* if(redditPost && webhook){
        const data:RedditPost=redditPost
        sendSlackMsg(new URL(webhook),`New post made by ${data.author} \n link: ${data.url}`)
        console.log(data)
      }

      if(gmailData && webhook){
        const data:GmailData=gmailData
        sendSlackMsg(new URL(webhook),`New Email from: ${data.author}\n subject: ${data.subject}`)
      } */
        
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
