import React from 'react'
import { NavLink } from 'react-router-dom'
import NavButton from './NavButton'
import { AiOutlineMenu } from 'react-icons/ai'

const buttons = [
    {
        text: 'Timur Ramazanov',
        link: '/'
    },
    {
        text: 'Education',
        link: '/education',
    },
    {
        text: 'Hobbies',
        link: '/hobbies',
    },
]

const Navbar = () => {
    return (
        <nav className='w-full absolute'>
            <div className='flex container mx-auto justify-between'>
                {/* <NavLink className='text-white text-2xl' to='/'>Timur Ramazanov</NavLink>
                <NavLink className='text-white' to='/education'>Education</NavLink>
                <NavLink className='text-white' to='/hobbies'>Hobbies</NavLink>
                <NavLink className='text-white' to='/stack'>Stack</NavLink> */}
                <NavButton name={'tr'} scroll={'top'} />
                <button><AiOutlineMenu /></button>
            </div>
        </nav>
    )
}

export default Navbar