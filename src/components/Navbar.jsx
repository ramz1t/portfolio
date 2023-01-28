import React, { useEffect } from 'react'
import { useState } from 'react'
import NavButton from './NavButton'
import { AiOutlineMenu } from 'react-icons/ai'
import LinksList from './LinksList'
import Hamburger from 'hamburger-react'

const buttons = [
    { text: 'Introduction', blockId: 'landing', init: true },
    { text: 'Education and Hobbies', blockId: 'ed_and_hobbies' },
    { text: 'Projects', blockId: 'projects' },
    { text: 'Contacts', blockId: 'contacts' }
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='w-full flex justify-center'>
            <div className='flex container mx-auto justify-between items-center p-5 z-20 fixed'>
                <img src='./images/logo.png' className='text-2xl w-10 h-10 text-primary-900 cursor-pointer' onClick={() => { document.getElementById('landing').scrollIntoView({ behavior: 'smooth' }) }} />
                <Hamburger distance='lg' rounded color="#03045e" toggled={open} toggle={setOpen} />
            </div>
            <div className={`fixed h-screen w-screen md:w-96 lg:w-96 lg:p-10 p-5 bg-[#fafafa] top-0 z-10
            flex flex-col justify-evenly items-center lg:items-start transition-all duration-500
            ${open ? 'right-0 ' : '-right-full md:-right-96 lg:-right-96'}`}>

                {buttons.map((button, key) => <NavButton key={key} {...button} />)}

                <hr className='h-[2px] bg-primary-800 w-full' />
                <LinksList />
            </div>
        </nav>
    )
}

export default Navbar