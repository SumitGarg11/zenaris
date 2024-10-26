"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import Image from 'next/image';


function FinishScreen({params}) {
    
    const {user} = useUser();
    const [course,setCourse] = useState([]);
    const router = useRouter();
    
    useEffect(()=>{
    params&&GetCourse();
    console.log("params : ",params);
    
    },[params]);
    const GetCourse=async()=>{ 
    const result = await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)));
    setCourse(result[0]);
    
  }
  return (

    <div className='px-10 md:px-20 lg:px-44 my-7 mt-5  '>
         <div className='flex flex-row items-center    justify-center space-x-4' >
         
         <h1 className='text-center bg-blue-600/20 p-6 rounded-xl font-extrabold mt-5 mb-8 text-2xl my-3 text-primary'>    Fantastic! Your Course is Fully Prepared and Ready for Action </h1>
         </div>
         <div className="flex flex-row justify-center items-center">
             <h2 className="text-center text-gray-700 rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
               {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
              </h2>
            <Image src={'/copy.gif'} className="inline-block cursor-pointer" onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+"/course/view/"+course?.courseId)} unoptimized alt="rocket" width={40} height={40} />
        </div>

        <CourseBasicInfo course={course} className="mt-4 " edit={false} refreshData={()=>console.log()}  />
    </div>
  )
}

export default FinishScreen
