import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-6 shadow-lg  ' >
      <Image src = {'/genrai.png'}  width={170} height={170} />
      <UserButton />
    </div>
  )
}

export default Header
