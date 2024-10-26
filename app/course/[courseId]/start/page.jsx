"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard'
import ChapterContent from './_components/ChapterContent'

function CourseStart({params}) {
    const [course,setCourse] = useState();
    const [selectedChapter,setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();

     useEffect(()=>{
      GetCourse();
     },[])

     // used t get course Info by courseId 
     const GetCourse=async()=>{
     const result = await db.select().from(CourseList).where(eq(CourseList?.courseId,params?.courseId));
     console.log(result);
     setCourse(result[0]);
     GetSelectedChapterContent(0);
     }

     const GetSelectedChapterContent = async(chapterId) => {
      const result = await db.select().from(Chapters).where(and(eq(Chapters.chapterId,chapterId),eq(Chapters.courseId,course?.courseId)));
      setChapterContent(result[0]);
      console.log(result);
    }


  return (
    <div  className='flex   '>      
           {/* ch list side bar  */}
        <div className=' md:w-72 hidden  z-50 md:block   shadow-lg  border-r' > 
          <h2 className='font-extrabold  text-lg bg-primary p-7 text-white' > {course?.courseOutput?.course?.name} </h2>
          <div>
               {course?.courseOutput?.course?.chapters.map((chapter,index)=> {
                return (
                 
                <div key={index} className={`cursor-pointer hover:bg-blue-500/10 ${selectedChapter?.name==chapter?.name&&'bg-blue-500/30'} `}  onClick={()=>{setSelectedChapter(chapter); GetSelectedChapterContent(index) } }   >
                 
                <ChapterListCard chapter={chapter} index={index}  />
                
           </div>  
              )})}

          </div>
        </div>
        {/* content div  */}
        <div  className=' flex-1 p-4'>
            <ChapterContent chapter={selectedChapter} content={chapterContent}  />
        </div>
    </div>
  )
}

export default CourseStart