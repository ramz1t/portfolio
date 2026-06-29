import React, { useState } from 'react'
import { educationAndExperience } from '../data'

const EdTimelineItem = ({
    title,
    date,
    skills = [],
    onSkillsHover,
    onSkillsLeave,
    dimmed,
}) => {
    return (
        <li
            className="relative pb-2 cursor-default transition-opacity duration-150 max-lg:pointer-events-none"
            style={{ opacity: dimmed ? 0.1 : 1 }}
            onMouseEnter={() => onSkillsHover(skills)}
            onMouseLeave={onSkillsLeave}
        >
            <div className="flex gap-3">
                <div className="flex flex-col items-center">
                    <p className="text-5xl leading-[0.5] select-none">●</p>
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

const EdTimeline = ({ onSkillsHover, onSkillsLeave }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <div className="w-full h-full">
            <h2 className="text-5xl pb-7">Education and Experience</h2>
            <ul className="flex flex-col-reverse">
                {educationAndExperience.map((ed, key) => (
                    <EdTimelineItem
                        key={key}
                        {...ed}
                        dimmed={hoveredIndex !== null && hoveredIndex !== key}
                        onSkillsHover={(skills) => {
                            setHoveredIndex(key)
                            onSkillsHover(skills)
                        }}
                        onSkillsLeave={() => {
                            setHoveredIndex(null)
                            onSkillsLeave()
                        }}
                    />
                ))}
            </ul>
        </div>
    )
}

export default EdTimeline
