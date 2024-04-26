import React from 'react'
import { aboutList } from '../data'

const AboutForm = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-5xl pb-7">About me</h2>
            <div className="grid place-items-start grid-cols-[auto_auto] gap-y-5 gap-x-5 md:gap-x-10 rounded-2xl w-fit">
                {aboutList.map((el, key) => (
                    <React.Fragment key={key}>
                        <p className="text-xl text-slate-400 pt-0.5">{el.title}</p>
                        <div className="text-2xl">{el.data}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default AboutForm
