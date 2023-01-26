import React, { useEffect } from 'react'
import { useState } from 'react'
import NavButton from './NavButton'
import { AiOutlineMenu } from 'react-icons/ai'
import LinksList from './LinksList'
import Hamburger from 'hamburger-react'

const labels = ['Introduction', 'Education and Hobbies', 'Projects', 'Contacts']

const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [open])
    return (
        <nav className='w-full flex justify-center'>
            <div className='flex container mx-auto justify-between items-center p-2 z-10 fixed'>
                <NavButton text='TR' />
                <Hamburger distance='lg' rounded color="#03045e" toggled={open} toggle={setOpen} />
            </div>
            <div className={`fixed h-screen w-screen md:w-96 lg:w-96 lg:p-10 p-5 bg-[#fafafa] top-0 z-0
            flex flex-col justify-evenly items-center lg:items-start transition-all duration-500
            ${open ? 'right-0 ' : '-right-full md:-right-96 lg:-right-96'}`}>

                {labels.map((label, key) => <NavButton key={key} text={label} />)}

                <hr className='h-[2px] bg-primary-800 w-full' />
                <LinksList />
            </div>
        </nav>
    )
}

export default Navbar