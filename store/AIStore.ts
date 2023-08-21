import {create} from 'zustand';

const store=(set:any)=>({
    AIData:null,
    setAIData:(AIData)=>{
        set({AIData:AIData})
    }
})

export const useAIStore=create(store)

export interface AIData{
    data:string;
}