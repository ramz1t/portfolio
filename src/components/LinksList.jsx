import React from 'react'
import { links } from '../data'

const LinksList = ({ className }) => {
    return (
        <div className={`flex justify-evenly w-full ${className}`}>
            {links.map((link, key) => (
                <a key={key} target='_blank' className='hover:scale-110 transition-all scale-100 w-10 h-10 flex items-center justify-center' href={link.href}>
                    <img src={link.icon} alt={link.alt} srcSet="" />
                </a>
            ))}
        </div>
    )
}

export default LinksList