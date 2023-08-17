"use server"
export async function getredditdata(url:string){
    const res=await fetch( new URL(url),{
        headers:{
          'Content-Type':'application/json',
        },
        method: 'GET',
        cache:'no-store'//fricking nextjs been caching fetch requests
      })
    const data=await res.json();
    console.log(data.data.children[0])
    return data.data.children[0]
}