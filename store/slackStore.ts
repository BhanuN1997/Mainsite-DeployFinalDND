import {create} from 'zustand';

// Define the store
const store=(set:any) => ({
  OAuthCode: undefined, // Initial state is empty string

  // Update function to update the slack oauth code
  setOAuthCode: (code:string) => {
    set({ OAuthCode: code });
  },
})
export const useSlackStore = create(store);