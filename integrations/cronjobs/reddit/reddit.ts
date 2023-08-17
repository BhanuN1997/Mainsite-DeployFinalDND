"use client";
import { RedditPost } from "@/store/redditStore";
import { useRedditPostStore } from "@/store/redditStore";
import { getredditdata } from "@/integrations/triggers/reddit/server";

export async function redditCronJob(endpoint: string) {
  async function getData() {
    if (endpoint) {
      const response = await getredditdata(endpoint);
      const redditPostData: RedditPost = {
        title: response.data.title,
        author: response.data.author,
        url: response.data.url,
      };

        // Update the store with the new Reddit post data
        useRedditPostStore.getState().updateRedditPost(redditPostData);

      console.log(redditPostData);
      console.log("Reddit data is being fetched");
    }
  }
  setInterval(getData, 12000);
}
