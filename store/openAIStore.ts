import {create} from 'zustand';

const store=(set:any)=>({
    openAIData:null,
    setOpenAIData:(newopenAIData)=>{
        set({openAIData:newopenAIData})
    }
})

export const useOpenAIStore=create(store)

export interface OpenAIData{
    data:string;
}