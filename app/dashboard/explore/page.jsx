"use client"
import { CourseList } from '@/configs/schema'
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard';
import { db } from '@/configs/db';
import { Button } from '@/@/components/ui/button';

function Explore() { 
 
  const [courseList,setCourseList] = useState([]);
  const [pageIndex,setPageIndex] = useState(0);
  useEffect(()=>{
    GetAllCourse(); 
  },[pageIndex]);

  const GetAllCourse =async() => {
    const result = await db.select().from(CourseList).limit(9).offset(pageIndex*9);
    setCourseList(result);
  }
  return (
    <div>
       <div className='mt-5 bg-blue-600/30 rounded-lg  p-5'>
          <h2 className='font-extrabold text-3xl'>Explore AI-Powered Projects </h2>
          <p className=''>Check Out AI-Enhanced Projects from the Community</p>
       </div>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 mt-8'  >
        {courseList?.map((course,index)=>{
          return(
            <div> 
              <CourseCard course={course}  displayUser={false}   />
            </div>
          )
        })}
      </div>
        <div className='flex justify-between  mt-8' >
        {pageIndex!=0&&<Button onClick={()=>setPageIndex(pageIndex-1)} >Previos Page</Button>}
        <Button onClick={()=>setPageIndex(pageIndex+1)}>View More </Button>
        </div>
    </div>
  )
}

export default Explore
