import React from 'react'

const About = () => {
  return (
    <div className='pt-16 bg-gradient-to-br from-blue-100 to-blue-300 max-w-screen sm:w-full min-h-screen flex flex-col items-center gap-10'>
        <div className='flex gap-4 justify-center items-center h-fit'>
            <img className="h-14" src="/—Pngtree—about our company interface_7390103.png" alt="About" />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 ">About</h1>
        </div>
        <div className='flex flex-col gap-10 px-9'>
           <h2 className='capitalize text-[19px] sm:text-[19px] max-w-fit sm:w-96 font-semibold text-center'>
             In this weather App you can easily find the weather of different places. This website is designed in such a way that it can be used in mobile phone also
           </h2>
           <div className=' flex flex-col sm:flex-row gap-3.5 font-semibold max-w-screen'>
            <div className='border-x-2  px-1 sm:px-7 text-center'>Anmol vats</div>
            <div className='border-x-2 px-1 sm:px-7 text-center'>vatsanmol4@gamil.com</div>
            <div></div>
           </div>
        </div>
    </div>
  )
}

export default About
