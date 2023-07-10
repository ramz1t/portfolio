import React, { useEffect } from 'react'
import { useState } from 'react'
import NavButton from './NavButton'
import LinksList from './LinksList'
import Hamburger from 'hamburger-react'
import { buttons } from '../data'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setOpen(false)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="w-full flex justify-center">
            <div className="fixed z-20 w-full backdrop-blur-lg bg-white/[.8]">
                <div
                    className="flex container mx-auto justify-between items-center p-5"
                    id="logo-icon"
                >
                    <a href="#landing">
                        <img
                            src={logo}
                            className="text-2xl w-10 h-10 text-primary-900 cursor-pointer"
                            alt=""
                        />
                    </a>
                    <span
                        className={`transition-all duration-300 mr-0 ${
                            open && 'md:mr-96'
                        }`}
                    >
                        <Hamburger
                            duration={0.25}
                            distance="lg"
                            rounded
                            color="#03045e"
                            toggled={open}
                            toggle={setOpen}
                        />
                    </span>
                </div>
            </div>
            <nav
                className={`fixed h-screen w-screen md:w-96 md:p-10 p-5 bg-zinc-100 top-0 z-50
            flex flex-col justify-evenly items-center md:items-start transition-all duration-300
            ${open ? 'right-0 ' : '-right-full md:-right-96'}`}
            >
                {window.innerWidth < 768 && (
                    <span className="absolute top-5 right-5">
                        <Hamburger
                            duration={0.25}
                            distance="lg"
                            rounded
                            color="#03045e"
                            toggled={open}
                            toggle={setOpen}
                        />
                    </span>
                )}
                {buttons.map((button, key) => (
                    <NavButton onClick={() => null} key={key} {...button} />
                ))}
                <hr className="h-[2px] bg-primary-800 w-full" />
                <LinksList />
            </nav>
        </div>
    )
}

export default Navbar
