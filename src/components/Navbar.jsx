import React from 'react'
import { NavLink } from 'react-router-dom'
import NavButton from './NavButton'

const Navbar = () => {
    return (
        <nav className='flex justify-center bg-black fixed w-full'>
            <div className='flex container py-5 gap-10'>
                <NavLink className='text-white' to='/'>Timur Ramazanov</NavLink>
                <NavLink className='text-white' to='/education'>Education</NavLink>
                <NavLink className='text-white' to='/hobbies'>Hobbies</NavLink>
                <NavLink className='text-white' to='/stack'>Stack</NavLink>
            </div>
        </nav>
    )
}

export default Navbar