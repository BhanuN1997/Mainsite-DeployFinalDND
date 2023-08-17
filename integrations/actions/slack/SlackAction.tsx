"use client"
import { useEffect, useState } from "react";
import { RedditPost, useRedditPostStore } from "@/store/redditStore";
import { useSlackStore } from "@/store/slackStore";
import { getwebhook, sendSlackMsg } from "./server";

export default function SlackAction() {
  const redditPost=useRedditPostStore(state=>state.redditPost)
  const OAuthCode=localStorage.getItem("slackCode")//useSlackStore(state=>state.OAuthCode)
  const [webhook,setWebhook]=useState("")
  useEffect(()=>{
    console.log(OAuthCode)
    async function fetchwebhook(){
      console.log(OAuthCode)
      if(OAuthCode)
      {
        const w=await getwebhook(OAuthCode)
        console.log(w)
        setWebhook(w)
      }
      
    }
    fetchwebhook()  
  },[OAuthCode]) 
   useEffect(()=>{
    console.log(OAuthCode)
    console.log(webhook)
      if(redditPost && webhook){
        const data:RedditPost=redditPost
        sendSlackMsg(new URL(webhook),`New post made by ${data.author} \n link: ${data.url}`)
        console.log(data)
      }
        
  },[redditPost])
 
  
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
