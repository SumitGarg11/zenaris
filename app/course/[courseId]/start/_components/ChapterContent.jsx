
import { Button } from '@/@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import YouTube from 'react-youtube'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      
      autoplay: 0,
    },
  };
function ChapterContent({chapter,content}) {
   
    
  return (
    <div className='p-10  ' > 
     <div className=''>
         <Link href={'/dashboard'}>
             <Button>DashBoard</Button>
         </Link>
     </div>
       <div  className='mt-4 bg-blue-600/30 rounded-lg p-5  '>
          <h2 className='font-extrabold  text-2xl   ' >{chapter?.name}</h2>
         <p className='text-gray-800 text-md ' >{chapter?.about}</p>
       </div>
       {/* video */}
        <div className='flex justify-center my-6'>
            <YouTube  videoId={content?.videoId}opts={opts} />
        </div>
       {/* Content  */}
       <div>
        {content?.content.map((item,index)=>{
            return (
                <div className='  text-lg' >
                     <div className='mt-5  bg-primary text-white p-5 rounded-lg ' >
                         <h2 className='font-extrabold text-lg  ' >{item.title}</h2>
                         
                     </div>
                     <div className='mt-4 font-serif text-xl bg-blue-600/30 rounded-lg p-3' >
                          <p className='whitespace-pre-wrap' >
                             {item?.explanation?.replace(/\*\s?/g, '')}
                          </p>
                     </div>
                     
                        {item?.codeExample && 
                    
                        <div  className='bg-blue-800/10 rounded-lg p-3 mt-4'>
                         <pre className="max-w-2xl overflow-x-auto  p-3 "> {/* Increased max width */}
                            <code className="whitespace-pre-wrap">{item?.codeExample}</code>
                          </pre> 
                        </div>}
                     
                </div>   
            )
        })}
       </div>


    </div>
  )
}

export default ChapterContent