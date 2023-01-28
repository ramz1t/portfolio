import React from 'react'
import { education } from '../data'

const EdTimelineItem = ({ title, date }) => {
    return (
        <div className='pb-10 last:pb-0'>
            <h1 className='text-3xl pb-3 list-item ml-[3px]'>{title}</h1>
            <h3 className='text-sm text-slate-400'>{date}</h3>
        </div>
    )
}

const EdTimeline = () => {
    return (
        <div className='w-full h-full'>
            <h1 className='text-5xl pb-14'>Education</h1>
            <div className='ml-1 pl-4 border-l-2 border-white'>
                <div className='-translate-y-5'>
                    {education.map((ed, key) => <EdTimelineItem key={key} title={ed.title} date={ed.date} />)}
                </div>
            </div>
        </div>
    )
}

export default EdTimeline