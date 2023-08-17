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
      <a href="https://slack.com/oauth/v2/authorize?client_id=4356450523381.5719716288896&scope=incoming-webhook&user_scope=" target="_blank"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
        :
        <p>Authenticated!</p>
      }
      </div>
  )
}
