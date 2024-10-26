import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddCourse from './_components/AddCourse'

import UserCourseList from './_components/UserCourseList'

function Dashboard() {
  return (
    <div>
      {/* <UserButton /> */}
      
      <AddCourse />
      {/* Display List Of course */}
      <UserCourseList/>
    </div>
  )
}

export default Dashboard
