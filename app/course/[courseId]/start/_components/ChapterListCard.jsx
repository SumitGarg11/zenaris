import { Button } from '@/@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function ChapterListCard({chapter,index}) {

  return (
    
    <div className='grid grid-cols-5 h-[100%] p-2 items-center '>
        <div>
            <h2 className='p-1 bg-primary text-white text-center rounded-full w-8 h-8  ' >{index+1}</h2>
        </div>
        <div  className='col-span-4'>
            <h2 className='font-black' >{chapter?.name}</h2>
            <h2 className='font-serif text-primary '>{chapter?.duration}</h2>
        </div>

        
    

    
    </div>
  )
}

export default ChapterListCard


