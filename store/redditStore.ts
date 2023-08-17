import {create} from 'zustand';

// Define the store
export const useRedditPostStore = create((set) => ({
  redditPost: null, // Initial state is null

  // Update function to update the reddit post
  updateRedditPost: (newPost:RedditPost) => {
    set({ redditPost: newPost });
  },
}));

// Interface for Reddit post
export interface RedditPost {
  title: string;
  author: string;
  url: string;
}