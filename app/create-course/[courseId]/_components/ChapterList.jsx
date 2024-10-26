import Image from 'next/image'
import React from 'react'
import { HiOutlineClock } from "react-icons/hi";

function ChapterList({course,refreshData }) {
  return (
    <div className='mt-3'>
        <div className='flex flex-row gap-3' >
        <Image src={'/online.gif'}  unoptimized alt = "rocket" width={50} height={50}  />  
           <h2 className='font-extrabold text-black text-2xl mt-4 '>Chapters</h2>
      
        </div>
        <div className='mt-2'>
            {course?.courseOutput?.course?.chapters.map((chapter,index)=>{
                return(
                    <div className='border bg-blue-300/10 p-5 rounded-xl mb-3 flex items-center justify-between'>
                      
                       <div key={index} className='flex gap-5 items-center '>
                          <h2 className='bg-primary  flex-none -mt-5 h-10 w-10 text-white rounded-full text-center p-2 ' >{index+1}</h2>

                           <div>
                              <h2 className='font-bold text-blue-800 text-lg'>{chapter?.name}     </h2>
                              <p className='text-md font-serif text-gray-800' >{chapter?.about}</p>
                              {/* image */}
                              
                              <div className='flex flex-row gap-2'>
                                 <Image src={'/overdue.gif'}  unoptimized alt = "rocket" width={40} height={40}  />
                                 <p className='mt-3 font-extrabold text-black'>{chapter?.duration}</p>
                               </div>

                            </div>
                       </div>
                       {/* image */}
                       <HiOutlineClock className='text-4xl flex-none text-gray-300' refreshData={()=>refreshData(true)} />
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default ChapterList