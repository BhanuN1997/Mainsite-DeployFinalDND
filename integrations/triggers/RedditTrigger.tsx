import React from "react";

export default function RedditTrigger(props) {
  return (
    <div>
        <div className="">
          <label htmlFor="text" className="_text">
            Endpoint:{" "}
            <input
              id="text"
              name="text"
              ref={props.inputRef}
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
               props.data.text = props.inputRef.current.value;
               props.data.triggertype = "reddit";
               console.log("Clicked");
             }}
               >
             Enter
               </button>
         </div>
         
    </div>
     );
}
