import {create} from 'zustand';

// Define the store
const store=(set:any) => ({
  gmailData: null, // Initial state is null

  // Update function to update the reddit post
  setGmailStore: (newGmailData:GmailData) => {
    set({ gmailData: newGmailData });
  },
})
export const useGmailStore = create(store);

// Interface for Reddit post
export interface GmailData {
  subject: string;
  author: string;
  body: string;
}