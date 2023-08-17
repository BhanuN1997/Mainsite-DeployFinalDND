import { useEffect } from "react";
import { useRedditPostStore } from "@/store/redditStore";

export default function SlackAction() {
  const {redditPost,updateRedditPost}=useRedditPostStore();
  useEffect(
    ()=>{
      const data=redditPost
      console.log(data)
  },[redditPost])

  
  return (
    <div>SlackAction</div>
  )
}
