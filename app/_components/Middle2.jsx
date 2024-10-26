import Image from 'next/image'
import React from 'react'
import Middle3 from './Middle3'


function Middle2() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-extrabold  sm:text-5xl">
      Efficient Skill <span className='text-pink-500'  >Enhancement</span>
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        /> */}
        
        <Image src= {'/multitasking.gif'} alt ="boos " unoptimized   width={250} height={220} className='w-full   h-full object-cover  cursor-pointer '  />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-200">
          <p className=' text-lg font-extrabold md:text-2xl lg:text-xl' >
          Maximize your productivity by allowing AI to assemble your course <span className=' font-extrabold text-pink-500'>swiftly—eliminate 
          the hours wasted on research</span> and dive straight into mastering new concepts!
           Empower yourself with focused learning that adapts to your unique goals.
          </p>

          <p>
          With personalized content tailored to your needs, you can achieve mastery faster and more efficiently.
          Experience a seamless integration of resources that keeps you engaged and motivated, paving the way for continuous growth.
           <span className=' font-extrabold text-pink-500' >Let AI handle the groundwork while you concentrate on your learning journey, turning aspirations into achievements!</span>
          </p>
        </article>
      </div>
    </div>
  </div>
  {/* <Middle3/> */}
  
</section>
  )
}

export default Middle2