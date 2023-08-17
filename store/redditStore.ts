import {create} from 'zustand';

// Define the store
const store=(set:any) => ({
  redditPost: null, // Initial state is null

  // Update function to update the reddit post
  updateRedditPost: (newPost:RedditPost) => {
    set({ redditPost: newPost });
  },
})
export const useRedditPostStore = create(store);

// Interface for Reddit post
export interface RedditPost {
  title: string;
  author: string;
  url: string;
}