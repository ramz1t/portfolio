import React from 'react'
import { aboutList } from '../data'

const AboutForm = () => {
    return (
        <div className='w-full h-full'>
            <h2 className='text-5xl pb-7'>About me</h2>
            <div className="flex flex-col gap-4 border-2 border-white p-5 rounded-2xl md:w-96">
                {
                    aboutList.map((el, key) =>
                        <div key={key} className="flex justify-between items-baseline gap-2">
                            <p className="text-2xl">{el.title}</p>
                            <p className="text-xl text-right">{el.data}</p>
                        </div>)
                }
            </div>
        </div>
    )
}

export default AboutForm