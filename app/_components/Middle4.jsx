import Image from 'next/image'
import React from 'react'
import Middle2 from './Middle2'
import Middle3 from './Middle3'

function Middle4() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 text-white bg-gray-900  sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        /> */}
        
         <Image src= {'/woman-power.gif'} alt ="boss "   width={290} height={280} className='w-full  h-full object-cover  cursor-pointer '  />
      </div>
      <div className="lg:py-24">
        <h2 className="text-3xl  font-bold sm:text-4xl">  <span className='text-pink-500' >Accelerate </span> Women’s Learning</h2>
        <article className="space-y-4 text-gray-200">
        <p className="text-lg mt-5 font-extrabold md:text-2xl lg:text-xl">
        Maximize your potential with Zenaris, the platform that helps  <span className='font-extrabold text-pink-500' > women learn efficiently and effectively from the comfort of their own homes.</span>  Save valuable time by eliminating unnecessary research—dive straight into mastering new concepts! With <span className='text-pink-500' >Zenaris,</span>
         
        </p>
        <p>your learning journey is tailored to your unique goals, empowering you to <span className='font-extrabold text-pink-500' > become independent and knowledgeable. </span> Experience the ease of focused, educative learning right in your room, and unlock your true capabilities with every course you take!</p>
        </article>
        <a
          href="/dashboard"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
  

</section>
  )
}

export default Middle4