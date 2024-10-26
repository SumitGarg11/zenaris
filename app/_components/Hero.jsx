import React from 'react'

function Hero() {
  return (
    <div>
      <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-5xl font-extrabold sm:text-5xl">
      The #1 AI-Powered
        <strong className="font-extrabold text-primary  sm:block"> eLearning Platform </strong>
      </h1>

      <p className="mt-4  font-semibold sm:text-xl/relaxed">
      The cutting-edge AI Course Creator that delivers extraordinarily comprehensive and precisely tailored  mini-courses.
      
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-lg bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-black hover:text-white focus:outline-none focus:ring  sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>

      
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero


