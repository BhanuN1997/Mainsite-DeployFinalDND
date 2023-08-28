import React from "react";
import { GmailCronJob } from "@/integrations/cronjobs/gmail/gmail";

export default function GmailTrigger(props:any) {
  return (
    <>
      <div className="_flex _col _gap_16px ">
        <label htmlFor="email">
          Email:{" "}
          <input
            id="email"
            name="email"
            ref={props.emailInputRef}
            className="_input _ml_16px"
            type="email"
          />
        </label>

        <label htmlFor="password">
          App Key:{" "}
          <input
            className="_input"
            id="password"
            name="password"
            type="password"
            ref={props.passwordInputRef}
          />
        </label>
      </div>
      <div className="_flex justify_center margin_8px">
        <button
        
          className="button"
          type="submit"
          onClick={() => {
            props.data.email = props.emailInputRef.current.value;
            props.data.password = props.passwordInputRef.current.value;
            props.data.triggertype = "gmail";
            
            GmailCronJob(props.data.email,props.data.password)
            console.log("Clicked");
          }}
        >
          Enter
        </button>
      </div>
    </>
  );
}
