import {create} from 'zustand';

const store=(set:any)=>({
    GithubData:null,
    setGithubData:(GithubData)=>{
        set({GithubData:GithubData})
    }
})

export const useGithubStore=create(store)

export interface GithubData{
    data:string;
}