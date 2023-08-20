import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' flex items-center min-h-[100px] max-h-[100px] pl-10 pr-28 border-b-2 border-gray-300  '>

       <Image src={"/asset/logo.png"} alt='logo'  height={40} width={40}/>

       <div className='ml-auto text-2xl flex gap-10 items-center text-gray-600'>
        <span>Pricing</span>
        {/* run this application and then the tools application file */}
        {/* just for current demo, after deployment we can add that end point for tools  */}
        <Link href= {'http://localhost:3001'}> 
          <span>Tools</span>
        </Link>
        <span>Docs</span>
        <Link href= {'https://'+process.env.NEXT_PUBLIC_DOMAIN+'/login?client_id='+process.env.NEXT_PUBLIC_CLIENT_ID+'&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000'}>
          <span>SignIn</span>
        </Link>
       </div>
    </nav>
  )
}

export default Navbar