import React from 'react'
import { hobbies } from '../data'

const HobbiesList = () => {
    return (
        <div className='w-full'>
            <h1 className="text-5xl pb-7 text-left">Hobbies</h1>
            <div className="flex gap-6 flex-wrap justify-around md:justify-start">
                {
                    hobbies.map((el, key) =>
                        <div className='border-2 grid gap-5 rounded-lg p-5 w-56' key={key}>
                            <img className='w-52' src={el.url} alt="" srcSet="" />
                            <h2 className='text-2xl'>{el.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HobbiesList