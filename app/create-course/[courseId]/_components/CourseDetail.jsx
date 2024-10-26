import Image from 'next/image'
import React from 'react'

function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3 mb-8' >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5' >
            <div className='flex gap-2'>
                {/* image */}
                <Image src={'/student.gif'} unoptimized  alt = "rocket" width={50} height={50}  />
                <div className='mt-3'>
                    <h2 className='text-xs font-bold text-blue-700'>Learning Stage</h2>
                    <h2 className='font-extrabold text-lg'>{course?.level}</h2>
                </div>
            </div>
            <div className='flex gap-2 '>
                {/* image */}
                <Image src={'/overdue.gif'}  unoptimized alt = "rocket" width={50} height={50}  />
                <div className='mt-3'>
                    <h2 className='text-xs font-bold text-blue-700'>Duration</h2>
                    <h2 className='font-extrabold text-lg'>{course?.courseOutput?.course?.duration}</h2>
                </div>
            </div>
            <div className='flex gap-2 '>
                {/* image */}
                <Image src={'/boss2.gif'} unoptimized  alt = "rocket" width={50} height={50}  />
                <div className='mt-3'>
                    <h2 className='text-xs font-bold text-blue-700'>Total Module</h2>
                    <h2 className='font-extrabold text-lg'>{course?.courseOutput?.course?.noOfChapters}</h2>
                     
                </div>
            </div>
            <div className='flex gap-2 '>
                {/* image */}
                <Image src={'/video.gif'} unoptimized alt = "rocket" width={50} height={50}  />
                <div className='mt-3'>
                    <h2 className='text-xs font-bold text-blue-700'>Video Tutorials</h2>
                    <h2 className='font-extrabold text-lg'>{course?.includeVideo}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail