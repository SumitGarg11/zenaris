import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input';
  
function SelectOption() {
    
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange =(fieldName, value)=>{
        setUserCourseInput((prev)=>({
            ...prev,
            [fieldName]:value,

        }))
    }
    // const handleChange = (e) => {
    //     setUserCourseInput({
    //       ...userCourseInput,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
  return (
    <div className='px-10 md:px-20  lg:px-44  ' > 
        <div className='grid grid-cols-2  gap-10'>
        <div>
            <label className='text-sm font-extrabold '   >Difficulty Level</label>
        <Select  defaultValue={userCourseInput?.level} onValueChange={(value)=> handleInputChange('level',value)  } >
            <SelectTrigger className="">
            <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
        </Select>
        </div>
        <div>
            <label className='text-sm font-extrabold' >Course Duration </label>

        <Select  defaultValue={userCourseInput?.duration}  onValueChange={(value)=> handleInputChange('duration',value)  } >
            <SelectTrigger className="">
            <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="1 Hours">1 Hour </SelectItem>
            <SelectItem value="2 Hours">2 Hours </SelectItem>
            <SelectItem value="More Than 3 Hours ">More Than 3 Hours</SelectItem>
            </SelectContent>
            
        </Select>
        </div>

        <div>
            <label className='text-sm  font-extrabold' >Add Video </label>

        <Select  defaultValue={userCourseInput?.displayVideo}  onValueChange={(value)=> handleInputChange('displayVideo',value)  } >
            <SelectTrigger className="">
            <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
           
            </SelectContent>
            
        </Select>
        </div>

        <div>
            <label className='text-sm  font-extrabold '>No of Chapters</label>
            
            {/* <Input type="number" value={userCourseInput?.noOfChapter } className='h-14 text-lg' 
            defaultValue={userCourseInput?.npOfChapter}
            onValueChange={(value)=>handleInputChange('noOfChapters',event.target.value)}
            /> */}
    <Select  defaultValue={userCourseInput?.NoOfChapter}  onValueChange={(value)=> handleInputChange('NoOfChapter',value)  } >
    <SelectTrigger className="">
    <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="1">1</SelectItem>
    <SelectItem value="2">2</SelectItem>
    <SelectItem value="3">3</SelectItem>
    <SelectItem value="4">4</SelectItem>
    <SelectItem value="5">5</SelectItem>
    <SelectItem value="6">6</SelectItem>
    <SelectItem value="7">7</SelectItem>
    <SelectItem value="8">8</SelectItem>
    <SelectItem value="9">9</SelectItem>
    <SelectItem value="10">10</SelectItem>
  
   
    </SelectContent>
    
</Select>

        </div>

        </div>
    </div>
  )
}

export default SelectOption