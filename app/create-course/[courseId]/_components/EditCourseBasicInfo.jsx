// "use client"
// import React, { useEffect, useState } from 'react'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import Image from 'next/image'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { DialogClose } from '@radix-ui/react-dialog'
// import { Button } from '@/components/ui/button'
// import { db } from '@/configs/db'
// import { CourseList } from '@/configs/schema'
// import { eq } from 'drizzle-orm'
  
// function EditCourseBasicInfo({course}) {
//   const [name,setName] = useState();
//   const [description, setDescription] = useState();
//   useEffect(()=>{
//     setName(course.courseOutput.course.name);
//     setDescription(course.courseOutput.course.description);
//   },[course])
//   const onUpdateH =async()=>{
//     course.courseOutput.course.name=name;
//     course.courseOutput.course.description=description;
//     const result = await db.update(CourseList).set({
//       courseOutput:course?.courseOutput
//     }).where(eq(CourseList.id,course?.id))
//     .returning({id:CourseList.id});
//     console.log(result);
//   }
//   return (
//     <Dialog>
//     <DialogTrigger>
//     <Image src={'/pencil.gif'} unoptimized  alt = "rocket" width={30} height={30}  />
//     </DialogTrigger>
//     <DialogContent>
//       <DialogHeader>
//         <DialogTitle  className="text-blue-600  text-xl font-serif" >Customize Course Title & Description</DialogTitle>
//         <DialogDescription>
//            <div className='mt-3'>
//              <label className='font-extrabold text-black  ' > Course Title </label>
//              <Input className="mt-3  bg-blue-400/10  " defaultValue = {course?.courseOutput?.course?.name}
//               onChange={(event)=>setName(event?.target.value)} />
//            </div>
//            <div className='mt-3'>
//             <label className='font-extrabold text-black  ' > Description </label>
//             <Textarea   className="bg-blue-400/10 mt-3 h-40 " defaultValue = {course?.courseOutput?.course?.description}
//             onChange={(event)=>setDescription(event?.target.value)} />
//            </div>
//         </DialogDescription>
//       </DialogHeader>
//       <DialogFooter>
//         <DialogClose>
//           <Button onClick={onUpdateH} >Update</Button>
//         </DialogClose>
//       </DialogFooter>
//     </DialogContent>
//   </Dialog>
  
//   )
// }

// export default EditCourseBasicInfo


"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'

function EditCourseBasicInfo({ course }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (course?.courseOutput?.course) {
      setName(course.courseOutput.course.name);
      setDescription(course.courseOutput.course.description);
    }
  }, [course]);

  const onUpdateH = async () => {
    if (!course?.courseOutput?.course) return;

    course.courseOutput.course.name = name;
    course.courseOutput.course.description = description;

    const result = await db
      .update(CourseList)
      .set({
        courseOutput: course?.courseOutput,
      })
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList.id });

    console.log(result);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={'/pencil.gif'}
          unoptimized
          alt="Edit"
          width={30}
          height={30}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-blue-600 text-xl font-serif">
            Customize Course Title & Description
          </DialogTitle>
          <DialogDescription>
            <div className='mt-3'>
              <label className='font-extrabold text-black'>Course Title</label>
              <Input
                className="mt-3 bg-blue-400/10"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='mt-3'>
              <label className='font-extrabold text-black'>Description</label>
              <Textarea
                className="bg-blue-400/10 mt-3 h-40"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button onClick={onUpdateH}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
