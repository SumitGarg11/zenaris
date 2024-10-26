"use client"
import React, { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

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
  
function DropdownOption({children,handleOnDelete}) {
    const [openAlert, setOpenAlert] = useState(false);

    const OnDeleteClick=()=>{

    }
  return (
    <div>
    <DropdownMenu >
      <DropdownMenuTrigger  className='border-none' >{children}</DropdownMenuTrigger>
      <DropdownMenuContent  >
    
        <DropdownMenuItem  onClick={()=>setOpenAlert(true)}>
            <div>
                <h2 className="font-extrabold ">Delete</h2>
            </div>
        </DropdownMenuItem  >
      </DropdownMenuContent  >
    </DropdownMenu>
    <AlertDialog  open ={openAlert}>
 
  <AlertDialogContent >
    <AlertDialogHeader >
      <AlertDialogTitle >Warning!</AlertDialogTitle>
      <AlertDialogDescription>
      This will permanently delete the course and all associated content. This action cannot be undone. Are you certain?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter >
      <AlertDialogCancel  onClick={()=>setOpenAlert(false)} >Cancel</AlertDialogCancel>
      <AlertDialogAction  onClick={()=> {handleOnDelete();setOpenAlert(false)}} >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  );
}

export default DropdownOption;
