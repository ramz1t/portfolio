import React, { useEffect } from 'react'
import { useState } from 'react'
import NavButton from './NavButton'
import { AiOutlineMenu } from 'react-icons/ai'
import LinksList from './LinksList'

const labels = ['Introduction', 'Education and Hobbies', 'Projects', 'Contacts']

const Navbar = ({ refs }) => {
    console.log(refs)
    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [open])
    return (
        <nav className='w-full'>
            <div className='flex container mx-auto justify-between p-2 z-10 fixed'>
                <NavButton text='TR' refObj={refs[0]} />
                <button className='bg-primary-900 hover:scale-105 rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-75' onClick={() => setOpen(!open)}><AiOutlineMenu /></button>
            </div>
            <div className={`fixed h-screen w-screen md:w-96 lg:w-96 lg:p-10 bg-[#fafafa] top-0 z-0
            flex flex-col justify-evenly items-center lg:items-start transition-all duration-500
            ${open ? 'right-0 ' : '-right-96'}`}>
                {[...Array(refs.length).keys()].map((val, key) => <NavButton key={key} text={labels[val]} refObj={refs[val]} />)}
                <hr className='h-[2px] bg-primary-800 w-full' />
                <LinksList />
            </div>
        </nav>
    )
}

export default Navbar