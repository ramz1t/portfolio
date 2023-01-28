import React from 'react'
import { useEffect, useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'

const NavButton = ({ text, blockId, init }) => {

    const [activeSection, setActiveSection] = useState(init)

    const handleScroll = (e) => {
        const elem = document.getElementById(blockId)
        const rect = elem.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom > 0) {
            setActiveSection(true)
        } else {
            setActiveSection(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div onScroll={handleScroll} className='cursor-pointer text-2xl text-primary-900 flex items-center gap-2 text-center md:text-left' onClick={() => document.getElementById(blockId).scrollIntoView({ behavior: 'smooth' })}>
            {activeSection ? <BsCircleFill className='w-3 h-3' /> : ''}
            {text}
        </div>
    )
}

export default NavButton