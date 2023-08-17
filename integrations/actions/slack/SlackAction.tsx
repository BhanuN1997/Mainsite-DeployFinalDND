import { useEffect } from "react";
import { getwebhook } from "./server"
import { useSearchParams } from "next/navigation";
import { useRedditPostStore } from "@/store/redditStore";

export default function SlackAction() {
  let {redditPost,updateRedditPost}=useRedditPostStore();
  useEffect(
    ()=>{
      const data=redditPost
      console.log(data)
  },[redditPost])

  
  return (
    <div>SlackAction</div>
  )
}
