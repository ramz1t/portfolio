import React from 'react'
import { useEffect, useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { navigate } from '../App.jsx'

const NavButton = ({ text, blockId, init, onClick }) => {
    const [activeSection, setActiveSection] = useState(init)

    useEffect(() => {
        const handleScroll = (e) => {
            const elem = document.getElementById(blockId)
            const rect = elem.getBoundingClientRect()
            if (rect.top <= 0 && rect.bottom > 0) {
                setActiveSection(true)
            } else {
                setActiveSection(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <a
            className="cursor-pointer text-2xl text-primary-900 flex items-center gap-2 text-center md:text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
            onClick={() => {
                navigate(blockId)
                onClick()
            }}
        >
            {activeSection && <BsCircleFill className="w-3 h-3" />}
            {text}
        </a>
    )
}

export default NavButton
