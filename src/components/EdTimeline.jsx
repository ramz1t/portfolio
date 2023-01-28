import React from 'react'

const EdTimelineItem = ({ title, date }) => {
    return (
        <div className='pb-10 last:pb-0'>
            <h1 className='text-3xl pb-3 list-item ml-[3px]'>{title}</h1>
            <h3 className='text-sm text-slate-400'>{date}</h3>
        </div>
    )
}

const EdTimeline = ({ elList }) => {
    return (
        <>
            {elList.map((ed, key) => <EdTimelineItem key={key} title={ed.title} date={ed.date} />)}
        </>
    )
}

export default EdTimeline