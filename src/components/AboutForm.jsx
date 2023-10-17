import React from 'react'
import { aboutList } from '../data'

const AboutForm = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-5xl pb-7">About me</h2>
            <div className="grid grid-cols-[auto_auto] items-baseline gap-y-5 gap-x-5 md:gap-x-10 border-2 border-white p-5 rounded-2xl w-fit">
                {aboutList.map((el, key) => (
                    <React.Fragment key={key}>
                        <p className="text-2xl">{el.title}</p>
                        <div className="text-xl">{el.data}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default AboutForm
