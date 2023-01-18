import React from 'react'

const links = [
    {
        href: 'https://github.com/ramz1t',
        icon: 'github'
    },
    {
        href: 'https://t.me/ramz1q',
        icon: 'telegram'
    },
    {
        href: 'mailto:timurram007@gmail.com',
        icon: 'email'
    }
]

const LinksList = () => {
    return (
        <div className='flex justify-evenly w-full'>
            {links.map((link, key) => (
                <div>
                    <a key={key} target='_blank' href={link.href}>
                        <svg className='w-10 h-10 hover:scale-105 bg-primary-100' href={`./icons/${link.icon}.svg`}></svg>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default LinksList