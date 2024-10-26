// "use client"
// import { db } from '@/configs/db'
// import { CourseList } from '@/configs/schema'
// import { useUser } from '@clerk/nextjs'
// import { eq } from 'drizzle-orm'
// import React, { useContext, useEffect, useState } from 'react'
// import CourseCard from './CourseCard'
// import { UserCourseListContext } from '@/app/_context/UserCourseListContext'

// function UserCourseList() { 

//   const [courseList, setCourseList] = useState([]);
//   const {userCourseList,setUserCourseList} = useContext(UserCourseListContext);
//   const {user} = useUser();
//   useEffect(() => {
//     user&&getUserCourses();
//   }, [user])
//   const getUserCourses=async()=>{
//     const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress));
//     console.log(result);
//     setCourseList(result);
//     setUserCourseList(result);

//   }
//   return (
//     <div className='mt-10' >
//       <h2 className='font-semibold text-xl  text-white' >My AI Course Collection</h2>
//       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7' >
//         {courseList?.length>0?courseList?.map((course,index)=>{
//           return(
//             <CourseCard course={course} key={index}  refreshData={()=>getUserCourses()} />
//           )
//         })
//         : 
//           [1,2,3,4,5].map((item,index)=>(
//             <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]' >  

//             </div>
//           ))
          
//       }
//       </div>
//     </div>
//   )
// }

// export default UserCourseList


// "use client"
// import { db } from '@/configs/db'
// import { CourseList } from '@/configs/schema'
// import { useUser } from '@clerk/nextjs'
// import { eq } from 'drizzle-orm'
// import React, { useContext, useEffect, useState } from 'react'
// import CourseCard from './CourseCard'
// import { UserCourseListContext } from '@/app/_context/UserCourseListContext'

// function UserCourseList() { 
//   const [courseList, setCourseList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);  // Track loading state
//   const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) {
//       getUserCourses();
//     }
//   }, [user]);

//   const getUserCourses = async () => {
//     setIsLoading(true);  // Start loading
//     const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress));
//     console.log(result);
//     setCourseList(result);
//     setUserCourseList(result);
//     setIsLoading(false);  // Stop loading after data is fetched
//   };

//   return (
//     <div className='mt-10'>
//       <h2 className='font-semibold text-xl text-white'>My AI Course Collection</h2>
//       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
//         {/* Loading Skeleton */}
//         {isLoading ? (
//           [1, 2, 3, 4, 5].map((item, index) => (
//             <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]'></div>
//           ))
//         ) : (
//           // Check if there are courses
//           courseList.length > 0 ? (
//             courseList.map((course, index) => (
//               <CourseCard course={course} key={index} refreshData={() => getUserCourses()} />
//             ))
//           ) : (
//             // Message when no courses are found
//             <div className=''>
             
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default UserCourseList;

"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { UserCourseListContext } from '@/app/_context/UserCourseListContext'
import Image from 'next/image'
import Link from 'next/link'

function UserCourseList() { 
  const [courseList, setCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Track loading state
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getUserCourses();
    }
  }, [user]);

  const getUserCourses = async () => {
    setIsLoading(true);  // Start loading
    const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress));
    setCourseList(result);
    setUserCourseList(result);
    setIsLoading(false);  // Stop loading after data is fetched
  };

  return (
    <div className='mt-10'>
      <h2 className='font-semibold text-xl text-white'>My AI Course Collection</h2>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {/* Loading Skeleton */}
        {isLoading ? (
          [1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]'></div>
          ))
        ) : (
          // Check if there are courses
          courseList.length > 0 ? (
            courseList.map((course, index) => (
              <CourseCard course={course} key={index} refreshData={() => getUserCourses()} />
            ))
          ) : (
            // Show meaningful message when no courses are found
            <div className="rounded-lg overflow-hidden">
              <Link href={'/create-course'} > 
            <Image 
                
                src={'/no.png'} 
                alt='image banner' 
                layout='responsive' // Use layout='responsive' for automatic scaling
                width={500} // Aspect ratio reference
                height={300} // Aspect ratio reference
                className='object-cover  cursor-pointer' // Maintain aspect ratio and cover the container
            />
            </Link>
        </div>
        

          )
        )}
      </div>
    </div>
  );
}

export default UserCourseList;

