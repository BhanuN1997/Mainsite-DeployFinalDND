"use client";
import { RedditPost } from "@/store/redditStore";
import { useRedditPostStore } from "@/store/redditStore";
import { getredditdata } from "@/integrations/triggers/reddit/server";

export function redditCronJob(endpoint: string) {
  //let {redditPost,updateRedditPost}=useRedditPostStore();
  //const updateRedditPost=useRedditPostStore(store=>store.updateRedditPost)
  async function getData() {
    if (endpoint) {
      const response = await getredditdata(endpoint);
      const redditPostData: RedditPost = {
        title: response.data.title,
        author: response.data.author,
        url: response.data.url,
      };
      const state=useRedditPostStore.getState()
      let {redditPost,updateRedditPost}=state;
      console.log("Reddit data is being fetched");
        // Update the store with the new Reddit post data
        updateRedditPost(redditPostData)

      console.log(redditPostData);
      
    }
  }
  setInterval(getData, 12000);
}
