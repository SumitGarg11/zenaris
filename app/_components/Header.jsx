
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="flex flex-row sm:flex-row justify-between items-center p-5 shadow-sm"> 
    
    <Link href="/">
  <Image 
    src={'/genrai.png'} 
    width={250} 
    height={100} 
    className="w-32 sm:w-40 md:w-52" // Adjust image width for responsiveness
    alt="Logo"  // Add alt text for accessibility
  />
</Link>
  
<div className="mt-5 flex flex-wrap justify-center gap-4">
        <a className="block w-full rounded-lg bg-primary px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto" href="/dashboard">
          DashBoard
        </a> 
    </div>
  
  {/* <Button className="mt-4 sm:mt-0">Get Started</Button> */}
   {/* Margin adjustment for mobile */}
  
</div>

  )
}

export default Header
