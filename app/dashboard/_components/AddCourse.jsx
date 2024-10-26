"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext } from 'react'

function AddCourse() {
  const {userCourseList,setUserCourseList} = useContext(UserCourseListContext);
    const {user} = useUser();
  return (
    <div className='flex items-center justify-between'>
      <div>
         <h2 className='text-4xl font-extrabold inline-block  bg-blue-600/30 rounded-lg p-4 mt-2  ' > <strong>HI,</strong>
             <span className='font-extrabold text-primary' >{user?.fullName}</span>
        </h2>
        <p className='text-md mt-3 text-black font-extrabold' >Unlock immersive learning experiences with AI-powered personalization</p>

      </div>
      <Link href={userCourseList>=5? '/dashboard/upgrade':  '/create-course'} > 
      <Button>+ Create AI Course </Button>
      </Link>
    </div>
  )
}

export default AddCourse
