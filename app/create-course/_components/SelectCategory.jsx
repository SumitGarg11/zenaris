import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectCategory() {
  const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setUserCourseInput(prev=>({
      ...prev,
      category:category
    }))
  }
  return (
    <div className='px-10 md:px-20'> 
      {/* <h2 className='my-5 font-extrabold -mt-5 text-primary bg-blue-500/30 inline-block rounded-lg p-4 ' >Select the Course Category</h2> */}
      <h2 className=" font-extrabold mb-7 text-primary bg-blue-500/30 inline-block rounded-lg p-4 text-sm sm:text-sm md:text-sm lg:text-sm">
              Select the Course Category
      </h2>

    <div  className='grid grid-cols-3 gap-10  '>
     
      {CategoryList.map((item,index)=>{
        return(
        // <div className={`flex flex-col   p-5 border  items-center rounded-xl cursor-pointer hover:border-primary hover:text-primary ${userCourseInput?.category==item.name&&'border-primary bg-blue-50'} `  }
        //  onClick={()=> handleCategoryChange(item.name)}
        // > 
         
        //   <div className='flex flex-row' >
        //   <Image src={item.icon}  alt = "rocket" unoptimized width={50} height={50}/>
        //   <h2 className='mt-3 ml-5 text-lg  font-extrabold ' >{item.name}</h2>
        //   </div>
          
        // </div>
        <div className={`flex flex-col p-4 border items-center rounded-xl cursor-pointer hover:border-primary hover:text-primary 
          ${userCourseInput?.category === item.name && 'border-primary bg-blue-50'} `}
          onClick={() => handleCategoryChange(item.name)}
      >
        <div className='flex flex-row items-center w-full'>
          <Image src={item.icon} alt="rocket" unoptimized width={50} height={50} />
          <h2 className='mt-3 ml-3 text-lg font-extrabold truncate'>{item.name}</h2>
        </div>
      </div>
      )})}
    </div>
    </div>
  )
}

export default SelectCategory