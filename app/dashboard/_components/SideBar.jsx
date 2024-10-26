"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { IoIosHome } from "react-icons/io";
import { RiStackOverflowFill } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"

import { UserCourseListContext } from '@/app/_context/UserCourseListContext';



function SideBar() {
  const {userCourseList,setUserCourseList} = useContext(UserCourseListContext)
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoIosHome />,
      path: "/dashboard"
    },
    {
      id: 2, // Changed the id to avoid duplicates
      name: "Explore",
      icon: <RiStackOverflowFill />,
      path: "/dashboard/explore"
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <GiUpgrade />,
      path: "/dashboard/upgrade"
      
    },
    
  ];

  const path = usePathname();

  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/genrai.png'} width={200} height={150} alt="Logo" />
      <hr className='my-5' />
      <ul >
        {Menu.map((item, index) => (
           <Link href={item.path} >
          <div key={item.id} className={`flex  items-center p-3  gap-3  cursor-pointer text-gray-600 hover:bg-gray-100  hover:text-black rounded-lg  ${item.path==path&&'bg-gray-200 text-black'} `}>
            <div className='text-2xl'>{item.icon}</div>
            <h2 className=''>{item.name}</h2>
          </div>
          </Link>
        ))}
      </ul>

      <div className='absolute bottom-10  w-[80%] '>
      <Progress value={(userCourseList?.length/5)*100}  />
      <h2 className='text-sm text-blue-600 font-extrabold  my-2' >{userCourseList?.length}  Out of 5 Course created  </h2>
      <h2 className='text-xs   text-black font-semibold' >Upgrade your plan for unlimited course generate</h2>
      </div>
      
    </div>
    
  );
}

export default SideBar;





