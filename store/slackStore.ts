import {create} from 'zustand';

// Define the store
const store=(set:any) => ({
  OAuthCode: null, // Initial state is empty string

  // Update function to update the slack oauth code
  setOAuthCode: (code:SlackOAuthCode) => {
    set({ OAuthCode: code });
  },
})
export const useSlackStore = create(store);

// Interface for slack oauth code
export interface SlackOAuthCode {
  OAuthCode:string;
}