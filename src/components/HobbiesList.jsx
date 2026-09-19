import React, { useCallback, useState } from 'react'
import { hobbies } from '../data'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

const Carousel = ({ count, slug }) => {
    const [current, setCurrent] = useState(0)

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % count)
    }, [setCurrent])

    const prev = useCallback(() => {
        setCurrent((prev) => {
            prev -= 1
            if (prev < 0) prev = count - 1
            return prev
        })
    })

    const bgUrl = `/images/hobbies/${slug}/${current + 1}.webp`

    return (
        <div
            className="rounded-3xl hover:scale-105 transition-all border-2 relative overflow-hidden group"
            style={{
                boxShadow: `0px 0px 20px rgba(255, 255, 255, 0.3)`,
            }}
        >
            <button
                className="absolute text-4xl -left-5 h-full top-0 p-2 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all"
                onClick={prev}
            >
                <IoChevronBack />
            </button>
            <div
                className="bg-cover aspect-[4/3]"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                }}
            ></div>
            <button
                onClick={next}
                className="absolute text-4xl -right-5 h-full top-0 p-2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all"
            >
                <IoChevronForward />
            </button>
            <span className="flex absolute left-1/2 -translate-x-1/2 bottom-0 opacity-0 gap-1 transition-all group-hover:opacity-100 group-hover:bottom-3">
                {Array(count)
                    .fill(0)
                    .map((_, key) => (
                        <span
                            key={key}
                            className={`w-2 h-2 rounded-full bg-white transition-all ${
                                key === current ? 'opacity-100' : 'opacity-25'
                            }`}
                        ></span>
                    ))}
            </span>
        </div>
    )
}

const HobbiesList = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-5xl pb-7 text-left">Hobbies</h2>
            <ul className="grid grid-cols-2 gap-5">
                {hobbies.map((el, key) => (
                    <li className="flex flex-col gap-3" key={key}>
                        <Carousel slug={el.slug} count={el.count} />
                        <h3 className="text-2xl pl-3">{el.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HobbiesList
