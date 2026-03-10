import React from 'react'
import { links } from '../data'

const LinksList = ({ className }) => {
    return (
        <ul className={`flex justify-evenly w-full ${className}`}>
            {links.map((link, key) => (
                <li key={key}>
                    <a
                        target="_blank"
                        className="hover:scale-110 transition-all duration-150 scale-100 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
                        href={link.href}
                    >
                        <img src={link.icon} alt={link.alt} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default LinksList
