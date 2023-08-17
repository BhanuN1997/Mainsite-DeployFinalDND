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
    body:`client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`,
    headers : {
      "Content-Type": 'application/x-www-form-urlencoded',
      },
      method: "POST",
      cache:'no-store'
  })
  const data=await res.json()
  console.log(data)
  if(data["incoming_webhook"])
  return data["incoming_webhook"]["url"]

   //console.log((await res.json())["incoming_webhook"])
}