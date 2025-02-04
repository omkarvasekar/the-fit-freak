import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'> <p>ITS TIME TO GET FIT</p>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-blue-400'>FitFreak</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>
            Are you ready to be the fittest, strongest, and most unstoppable version of yourself? At <span className='text-blue-400 font-medium'>Fit Freak</span>, we’re all about breaking limits, pushing boundaries, and making fitness fun! Whether you're just starting out or already a gym beast, we’ve got the <span className='text-blue-400 font-medium'>workouts, challenges,</span> and <span className='text-blue-400 font-medium'>motivation</span> to keep you moving. No more "tomorrow"—your transformation starts NOW. Are you ready to join the freakin’ fit revolution?  </p>
            <Button func={()=>{
                window.location.href='#generate'
            }} text={'Let\'s Go'}/>

        </div>


    )
}

export default Hero