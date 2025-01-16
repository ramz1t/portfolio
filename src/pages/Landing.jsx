import React from 'react'
import { useState } from 'react'
import { HiPaperClip } from "react-icons/hi";
import { IoMdArrowRoundDown } from "react-icons/io";
import { navigate } from '../App.jsx'

const Landing = () => {
    const [hover, setHover] = useState(false)

    return (
        <>
            <section id="landing" className="bg-slate-200 relative">
                <div className="page-part gap-14 dual-section">
                    <div className="flex flex-col gap-5 w-full">
                        <h1 className="text-5xl text-primary-900 leading-tight">
                            Hi, my name is Timur
                            <br/>
                            And I'm a software developer
                        </h1>
                        <h2 className="text-xl text-primary-800">
                            I like making products that are useful for people
                        </h2>
                        <div className="flex gap-3">
                            <a
                                className="w-fit bg-primary-900 text-white rounded-lg py-3 px-5 hover:scale-105 hover:shadow-sm transition-all flex items-center gap-3"
                                href={"/Timur Ramazanov's CV.pdf"}
                                target='_blank'
                            >
                                <HiPaperClip />
                                CV
                            </a>
                            <a
                                className="hover:cursor-pointer w-fit text-primary-800 rounded-lg border-primary-800 border-2 py-3 px-5 hover:border-primary-900 hover:text-primary-900 hover:scale-105 hover:shadow-sm transition-all"
                                onClick={() => navigate("contacts")}
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <img
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            src={
                                !hover
                                    ? './images/floppy.png'
                                    : './images/floppy_open.png'
                            }
                            alt={
                                hover
                                    ? '3D render of opened floppy disk'
                                    : '3D render of closed floppy disk'
                            }
                            className="w-full md:w-1/2 lg:w-2/3"
                        />
                    </div>
                </div>
                <a onClick={() => navigate("ed_and_hobbies")} className="hidden hover:cursor-pointer md:block absolute transition-all duration-100 animate-bounce bottom-5 text-7xl pb-7 text-primary-900">
                    <IoMdArrowRoundDown />
                </a>
            </section>
        </>
    )
}

export default Landing
