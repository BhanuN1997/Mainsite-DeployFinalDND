"use client"
import { SlackOAuthCode, useSlackStore } from "@/store/slackStore";
import {  useSearchParams } from "next/navigation";

export default function SlackAuth(){
    const {OAuthCode,setOAuthCode}=useSlackStore()
    const searchParams=useSearchParams();
    const code=searchParams.get("code")
    const slackCode:SlackOAuthCode={
        OAuthCode:code!
    }
    setOAuthCode(slackCode)
    //localStorage.setItem("slackCode",code)
    return (
        <div>
            <div>You have successfully added Slack!</div>
            <div>You can now close this tab</div>
        </div>
    )
}