// "use client"
// import { Button } from '@/components/ui/button';
// import React, { useContext, useEffect, useState } from 'react'
// import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
// import SelectCategory from './_components/SelectCategory';
// import TopicDescription from './_components/TopicDescription';
// import SelectOption from './_components/SelectOption';
// import { UserInputContext } from '../_context/UserInputContext';
// function CreateCourse() {
//     const StepperOptions=[
//     {
//         id:1,
//         name:'Category',
//         icon:<HiMiniSquares2X2 />
//     },
//     {
//         id:2,
//         name:'Topic & Desc',
//         icon:<HiLightBulb/>
//     },
//     {
//         id:3,
//         name:'Options',
//         icon:<HiClipboardDocumentCheck/>
//     },
    

// ]


// const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
//   const [activeIndex,setActiveIndex] = useState(0);

 

//   useEffect(()=>{
//     console.log(userCourseInput);
//   },[userCourseInput])
//   const checkStatus=()=>{
//     if(userCourseInput?.length==0){
//       return true;
//     }
//     if(activeIndex==0 && (userCourseInput?.category?.length==0||userCourseInput?.category==undefined )){
//       return true;
//     }
//     if(activeIndex==1&&(userCourseInput?.topic?.length==0 || userCourseInput?.topic==undefined)){
//       return true;
//     }
//     else if(activeIndex==2&&(userCourseInput?.level==undefined || userCourseInput?.duration==undefined || userCourseInput?.displayVideo==undefined || userCourseInput?.noOfChapter==undefined)){
//       return true;
//     }
//     return false;
//   }
//   const GenerateCourseLayout = () => {
//     const BASIC_PROMPT = 'Generate A Course Tutorial on Following Detail With field as Course Name, about, Duration:'
//     const USER_INPUT_PROMPT='Category: '+userCourseInput?.category+' , Topic: '+userCourseInput?.topic+', Level:'+userCourseInput?.level +', Duration:'+userCourseInput?.duration+' , NoOfChapters:'+userCourseInput?.noOfChapter+', in JSON format';
//     const FINAL_PROMPT =  BASIC_PROMPT+USER_INPUT_PROMPT;
//     console.log(FINAL_PROMPT);
//   }
//   return (
//     <div>
//       <div className='flex flex-col justify-center items-center mt-10'>
//         <h2 className='text-4xl font-extrabold  text-primary ' >Create Course</h2>

//         <div className='flex mt-10' >
//             {StepperOptions.map((item,index)=>{
//                 return (
//                 <div className='flex items-center' > 
//                     <div className='flex flex-col items-center w-[50px] md:w-[100px]  ' >
//                         {/* <div className={`bg-gray-200 p-3 rounded-full text-white  ${activeIndex>=index&&'bg-blue-700'} ` } >
//                             {item.icon}
//                         </div>     */}
//                         {console.log("activeIndex : ",activeIndex)}
//                         {console.log("Index : ",index)}
//                         <div className={`bg-gray-200 p-3 rounded-full text-white ${activeIndex >= index ? 'bg-blue-700' : ''}`}>
//                           {item.icon}
//                         </div>
//                         <h2 className='hidden md:block md:text-sm ' > {item.name} </h2>
//                     </div>   
//                 {index!=StepperOptions?.length-1&&<div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${activeIndex-1>=index&&'bg-blue-200'} `} >  </div>}
//                 </div>
//              ) })}
//         </div>
//       </div>
//       <div className='px-10 md:px-20 lg:px-44 mt-10' >
//         {activeIndex==0?<SelectCategory />: 
//           activeIndex==1?<TopicDescription/>:
//           <SelectOption/>
//         }
      
//      <div className='flex justify-between mt-10' >
//         <Button disabled={activeIndex==0} variant='outline'  onClick={()=>setActiveIndex(activeIndex-1)} >Previous</Button>
//         {activeIndex<2&&<Button  disabled={checkStatus()} onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>}
//         {activeIndex==2&&<Button    onClick={()=>GenerateCourseLayout()}>Generate Course Layout</Button>}
//      </div>
//      </div>
//     </div>
//   )
// }

// export default CreateCourse

"use client";
import { Button } from "@/components/ui/button";
import uuid4 from "uuid4";
import React, { useContext, useEffect, useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiLightBulb,
  HiMiniSquares2X2,
} from "react-icons/hi2";

import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db.js";
import { useRouter } from "next/navigation";
import CourseLayout from "./[courseId]/page";


function CreateCourse({course, refreshData}) {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [activeIndex, setActiveIndex] = useState(0);
 const [loading,setLoading]=useState(false);
const {user} = useUser();
const router = useRouter();
  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const checkStatus = () => {
    if (userCourseInput?.length == 0) {
      return true;
    }
    if (
      activeIndex == 0 &&
      (userCourseInput?.category?.length == 0 || userCourseInput?.category == undefined)
    ) {
      return true;
    }
    if (
      activeIndex == 1 &&
      (userCourseInput?.topic?.length == 0 || userCourseInput?.topic == undefined)
    ) {
      return true;
    } else if (
      activeIndex == 2 &&
      (userCourseInput?.level == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.displayVideo == undefined ||
        userCourseInput?.NoOfChapter == undefined)
    ) {
      return true;
    }
    return false;
  };

  const GenerateCourseLayout = async() => {
    setLoading(true);
    const BASIC_PROMPT =
      "Generate A Course Tutorial on Following Detail With field as Course Name,Description, Along with Chapter Name , about,  Duration";
    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseInput?.category +
      " , Topic: " +
      userCourseInput?.topic +
      ", Level:" +
      userCourseInput?.level +
      ", Duration:" +
      userCourseInput?.duration +
      " , NoOfChapters:" +
      
      userCourseInput?.NoOfChapter +
      ", in JSON format";
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log("sumitaibhai",result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    const responseText = await result.response?.text(); // Wait for the text to resolve
    const courseLayout = JSON.parse(responseText); 
    setLoading(false);
    // SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
    await SaveCourseLayoutInDb({ courseLayout });

  };
  
  const SaveCourseLayoutInDb=async({courseLayout})=>{
    var id = uuid4();

    setLoading(true);
   
    const result = await db.insert(CourseList).values({
      courseId:id,
      name:userCourseInput?.topic,
      level:userCourseInput?.level,
      category:userCourseInput?.category,
      courseOutput:courseLayout,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage:user?.imageUrl,
      courseBanner:course?.courseBanner,
     
    })
    

    
    console.log("Finish"); 
    setLoading(false);
    router.replace('/create-course/'+id)
    
  }
 

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10    ">
        {/* <h2 className="text-5xl font-extrabold  rounded-lg p-5  text-white bg-primary ">Create Course</h2> */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold rounded-lg p-5 text-white bg-primary">
              Create Course
         </h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => {
            return (
              <div className="flex items-center" key={item.id}>
                <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                  {/* Ensure that only the active and previous steps have blue backgrounds */}
                  <div
                    className={`p-3 rounded-full text-white ${
                      activeIndex >= index ? "bg-blue-700" : "bg-gray-200"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h2 className="hidden md:block md:text-sm">{item.name}</h2>
                </div>
                {/* Display the connecting line between steps, color depending on progress */}
                {index !== StepperOptions?.length - 1 && (
                  <div
                    className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] ${
                      activeIndex > index
                        ? "bg-blue-200"
                        : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex == 0 ? (
          <SelectCategory  />
        ) : activeIndex == 1 ? (
          <TopicDescription  />
        ) : (
          <SelectOption />
        )}

        <div className="flex justify-between mt-10 mb-10">
          <Button
            disabled={activeIndex == 0}
            variant="outline"
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button  disabled={checkStatus()}  onClick={() => GenerateCourseLayout()}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
    
      <LoadingDialog loading={loading}  />
    </div>
  );
}

export default CreateCourse;

