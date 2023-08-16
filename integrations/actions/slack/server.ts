"use server"

export async function sendSlackMsg(webhook:URL,value:String){
  console.log(webhook,value)
    const res=await fetch(webhook,{
      headers:{
        'Content-Type':'application/json',
      },
      method: 'POST',
      body:JSON.stringify({text:value}),
      cache:'no-store'
    })
    const data=await res.text();
    console.log(data)
    return data
}


//fix with env , client id and stuff
export async function getwebhook(code:String){
  console.log(code)
  const res=await fetch('https://slack.com/api/oauth.v2.access',{ 
    body:`client_id=1&client_secret=2&code=${code}`,
    headers : {
      "Content-Type": 'application/x-www-form-urlencoded',
      },
      method: "POST",
  })
  const data=await res.json()
  if(data["incoming_webhook"])
  return data["incoming_webhook"]["url"]

   //console.log((await res.json())["incoming_webhook"])
}