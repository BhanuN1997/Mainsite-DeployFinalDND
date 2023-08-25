import { githubCronJob } from "@/integrations/cronjobs/github/github";
import { redditCronJob } from "@/integrations/cronjobs/reddit/reddit";
import React from "react";

export default function GithubTrigger({data}:any) {
  
  return (
    <div>
         <div className="_flex justify_center margin_8px ">
             <button
             className=" button"
             type="submit"
             onClick={() => {
                githubCronJob()
                data.triggertype = "github";
                console.log("Clicked");
             }}
               >
             Start
               </button>
         </div>
         
    </div>
     );
}
