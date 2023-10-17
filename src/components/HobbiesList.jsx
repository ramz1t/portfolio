import React from 'react'
import { hobbies } from '../data'

const HobbiesList = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-5xl pb-7 text-left">Hobbies</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {hobbies.map((el, key) => (
                    <li className="flex flex-col gap-3" key={key}>
                        <img
                            className="w-full border-2 rounded-2xl"
                            src={el.url}
                            alt={el?.alt}
                        />
                        <h3 className="text-2xl pl-3">{el.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HobbiesList
