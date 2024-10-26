import Image from 'next/image'
import React from 'react'
import Middle2 from './Middle2'
import Middle3 from './Middle3'

function Middle() {
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
        
         <Image src= {'/boss.gif'} alt ="boos "   width={290} height={280} className='w-full  h-full object-cover  cursor-pointer '  />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Rapid Course <span className='text-primary' >Development</span></h2>

        <p className="mt-4 text-gray-300">
        Streamline your learning journey by utilizing AI to generate comprehensive courses in minutes—no more sifting through endless resources to elevate your skills!
         Experience effortless course creation that puts you in the driver’s seat of your education.
        </p>

        <a
          href="/dashboard"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
  <Middle2 />

</section>
  )
}

export default Middle