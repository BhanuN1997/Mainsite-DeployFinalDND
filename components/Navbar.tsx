import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' flex items-center min-h-[100px] max-h-[100px] pl-10 pr-28 border-b-2 border-gray-300  '>

       <Image src={"/asset/logo.png"} alt='logo'  height={40} width={40}/>

       <div className='ml-auto text-2xl flex gap-10 items-center text-gray-600'>
        <span>Pricing</span>
        <span>Tools</span>
        <span>Docs</span>
        <span>+</span>
       </div>
    </nav>
  )
}

export default Navbar