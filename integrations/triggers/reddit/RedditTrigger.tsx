import { redditCronJob } from "@/integrations/cronjobs/reddit/reddit";
import React from "react";

export default function RedditTrigger({inputRef,data}:any) {
  
  return (
    <div>
        <div className="">
          <label htmlFor="text" className="_text">
            Endpoint:{" "}
            <input
              id="text"
              name="text"
              ref={inputRef}
              className="_input"
              type="text"
            />
          </label>
        
        </div>
         <div className="_flex justify_center margin_8px ">
             <button
             className=" purple_gradient button_padding"
             type="submit"
             onClick={() => {
              console.log(inputRef.current.value)
              redditCronJob(inputRef.current.value)
               data.triggertype = "reddit";
               console.log("Clicked");
             }}
               >
             Enter
               </button>
         </div>
         
    </div>
     );
}
