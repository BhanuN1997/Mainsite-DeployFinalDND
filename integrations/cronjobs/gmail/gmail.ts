"use client"

import { ImapConf, getgmailinbox } from "@/integrations/triggers/gmail/server"
import { GmailData, useGmailStore } from "@/store/gmailStore"

export function GmailCronJob(email:string,password:string){
    const cfg:ImapConf={
        user:email,
        password:password,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: { rejectUnauthorized: false }
      }
      async function getData(){

        const state=useGmailStore.getState()
        const {gmailData,setGmailStore}=state

       const data:any=await getgmailinbox(cfg)
       console.log(data)
       const newgmailData:GmailData={
        author:data.from.text,
        subject:data.subject,
        body:data.text
       }
       setGmailStore(newgmailData)
      }
      setInterval(getData,12000)
}