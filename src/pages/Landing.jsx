import React from 'react'
import { useState } from 'react'

const Landing = () => {

    const [hover, setHover] = useState(false)

    return (
        <>
            <section id='landing' className='bg-slate-200'>
                <div className="page-part gap-14">
                    <div className='flex flex-col gap-5 w-full'>
                        <h1 className='text-5xl text-primary-900 leading-tight'>Hi, my name is Timur<br />And I'm a software developer</h1>
                        <h2 className='text-xl text-primary-800'>I like making products that are useful for people</h2>
                        <button className='w-fit text-primary-800 rounded-lg border-primary-800 border-2 p-3 
                        hover:border-primary-900 hover:text-primary-900 hover:scale-105 hover:shadow-sm transition-all'
                            onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}>
                            Contact me
                        </button>
                    </div>
                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="h-full flex items-center justify-center">
                        <img src={!hover ? "./images/floppy.png" : './images/floppy_open.png'} alt="timur ramazanov" className='w-full md:w-1/2 lg:w-auto' />
                    </div>

                </div>
            </section>
            <canvas className='absolute left-0 top-0 -z-10' id="bg"></canvas>
        </>
    )
}


export default Landing