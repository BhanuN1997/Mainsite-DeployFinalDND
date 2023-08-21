import {create} from 'zustand';

const store=(set:any)=>({
    AIData:null,
    setAIData:(newopenAIData)=>{
        set({openAIData:newopenAIData})
    }
})

export const useAIStore=create(store)

export interface AIData{
    data:string;
}