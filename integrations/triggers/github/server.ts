export async function getgithubdata() {

    const res=await fetch( new URL("/api/github"),{
        headers:{
          'Content-Type':'application/json',
        },
        method: 'GET',
        cache:'no-store'//fricking nextjs been caching fetch requests
      })
    const data=await res.json();
    console.log(data.result)
    return data.result
    
}