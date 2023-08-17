"use client"
import { useEffect, useState } from "react";
import { RedditPost, useRedditPostStore } from "@/store/redditStore";
import { useSlackStore } from "@/store/slackStore";
import { getwebhook, sendSlackMsg } from "./server";

export default function SlackAction() {
  const {redditPost,updateRedditPost}=useRedditPostStore();
  const {OAuthCode,setOAuthCode}= useSlackStore()
  const [webhook,setWebhook]=useState("")
  useEffect(()=>{
    console.log(OAuthCode)
    async function fetchwebhook(){
      if(OAuthCode)
      setWebhook(await getwebhook(OAuthCode))
    }

    fetchwebhook()
    
  },[OAuthCode]) 
   useEffect(()=>{
      if(redditPost && webhook){
        const data:RedditPost=redditPost
        sendSlackMsg(new URL(webhook),`New post made by ${data.author} \n link: ${data.url}`)
        console.log(data)
      }
        
  },[redditPost])
 
  
  return (
    <div>
      {(OAuthCode==undefined)?
      <a target="_blank" href="https://slack.com/oauth/v2/authorize?client_id=5721061853841.5732156520288&scope=incoming-webhook&user_scope="><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
        :
        <p>Authenticated!</p>
      }
      </div>
  )
}
