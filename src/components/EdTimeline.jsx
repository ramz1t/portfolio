import React from 'react'
import { education } from '../data'

const EdTimelineItem = ({ title, date }) => {
    return (
        <li className="relative mb-1.5">
            <div className="flex gap-3">
                <div className="flex flex-col items-center">
                    <p className="text-5xl leading-[0.5]">●</p>
                    <div className="bg-white w-1 h-full rounded-b-full"></div>
                </div>
                <div className="pb-9">
                    <h3 className="text-3xl pb-1.5">{title}</h3>
                    <time className="text-sm text-slate-400">{date}</time>
                </div>
            </div>
        </li>
    )
}

const EdTimeline = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-5xl pb-7">Education and Experience</h2>
            <ul className="flex flex-col-reverse">
                {education.map((ed, key) => (
                    <EdTimelineItem key={key} {...ed} />
                ))}
            </ul>
        </div>
    )
}

export default EdTimeline
