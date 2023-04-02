import React from 'react'
import { education } from '../data'

const EdTimelineItem = ({ title, date }) => {
    return (
        <li className='pb-10 last:pb-0 relative'>
            <h3 className='text-3xl pb-3 list-item before:content-["●"] before:absolute before:-left-[27px] before:-top-2 before:scale-150'>{title}</h3>
            <time className='text-sm text-slate-400'>{date}</time>
        </li>
    )
}

const EdTimeline = () => {
    return (
        <div className='w-full h-full'>
            <h2 className='text-5xl pb-14'>Education</h2>
            <div className='ml-1 pl-4 border-l-2 border-white'>
                <ul className='-translate-y-5'>
                    {education.map((ed, key) => <EdTimelineItem key={key} {...ed} />)}
                </ul>
            </div>
        </div>
    )
}

export default EdTimeline