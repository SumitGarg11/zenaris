import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  
function LoadingDialog({loading}) {
  return (
    <AlertDialog open={loading} >
   
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription >
          <div className='flex flex-col items-center  font-extrabold ' >
          <Image src={'/loader.gif'}  alt={"loding time "} width={100} height = {100} />
            <h2 className='font-extrabold text-black ' >Hold tight!  <span className='text-primary' >Zenaris</span>is creating your course masterpiece.  </h2>
            <h2 className='font-extrabold text-black '>🧠 It’s worth the wait!</h2>
           
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default LoadingDialog