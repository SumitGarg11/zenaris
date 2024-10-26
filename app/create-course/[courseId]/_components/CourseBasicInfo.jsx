"use client"
import { Button } from '@/@/components/ui/button'
import Image from 'next/image'
import React , {useEffect, useState} from 'react'
import EditCourseBasicInfo from './EditCourseBasicInfo'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/configs/firebaseConfig'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/configs/db'
import Link from 'next/link'


function CourseBasicInfo({course,refreshData, edit}) {
  
  const [selectedFile, setSelectedFile] = useState();
  useEffect(()=>{
    if(course){
      setSelectedFile(course?.courseBanner)
    }
  },[course])
  console.log('sumit 99');

  const onFileSelected =async(event)=> {
    const file=event.target.files[0];
    
    console.log("sumit file",file);
    setSelectedFile(URL.createObjectURL(file));
    const fileName = Date.now()+".jpg"
    const storageRef=ref(storage,'ai-course/'+fileName);
    await uploadBytes(storageRef,file).then((snapshot)=>{
      console.log("Upload File Complete ")
     }).then(res=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
        
        await db.update(CourseList).set({
          courseBanner:downloadUrl
        }).where(eq(CourseList.id,course?.id))
      })
     })

  

    
  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5 '>
        <div  className='grid grid-cols-1 md:grid-cols-2' >
            <div>
                <h2 className='font-bold text-2xl ' >{course?.courseOutput?.course?.name}  {edit &&  <EditCourseBasicInfo  course ={course}  refreshData={()=>refreshData(true)}  /> }  </h2>
                <p className='text-sm text-grid-400 mt-3' >{course?.courseOutput?.course?.description}</p>
                <div className='flex flex-row items-center mt-5 justify-between space-x-4'>

                     <Image src={'/rocket.gif'}  alt = "rocket" width={50} height={50}  />
                     <h3 className='mt-5  font-medium  ' > {course?.category} </h3>
                     <Image src={'/circle.gif'} className=' -mt-5'  alt = "rocket" width={50} height={50}/>
                </div>
               
                {/* <Image src={'/circle.gif'} className='ml-80 -mt-14'  alt = "rocket" width={50} height={50}/> */}
                {!edit&&<Link href={'/course/'+course?.courseId+"/start"} > 
                  <Button className=" mt-5 w-full">Start</Button>
                </Link>}
            </div>
            <div className="">
              <label htmlFor='upload-image' >
                <Image src={ selectedFile?selectedFile:'/thum.png'} alt ="boos "   width={300} height={300} className='w-full  h-[250px] object-cover ml-4 cursor-pointer '  />
                </label>
               {edit &&  <input type="file" id="upload-image" className='opacity-0' onChange={onFileSelected} />}
            </div>
        </div>
       
    </div>
  )
}

export default CourseBasicInfo