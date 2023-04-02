import React from 'react'
import { hobbies } from '../data'

const HobbiesList = () => {
    return (
        <div className='w-full h-full'>
            <h2 className="text-5xl pb-7 text-left">Hobbies</h2>
            <ul className="flex gap-6 flex-wrap justify-around md:justify-start">
                {
                    hobbies.map((el, key) =>
                        <li className='border-2 grid gap-5 rounded-lg p-5 w-56 md:w-48' key={key}>
                            <img className='w-full' src={el.url} alt={el?.alt} />
                            <h3 className='text-2xl'>{el.name}</h3>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default HobbiesList