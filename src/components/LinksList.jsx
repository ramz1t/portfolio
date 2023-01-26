import React from 'react'
import GithubIcon from '../assets/github.svg'
import MailIcon from '../assets/email.svg'
import TgIcon from '../assets/telegram.svg'

const links = [
    {
        href: 'https://github.com/ramz1t',
        icon: GithubIcon,
        alt: 'github profile'
    },
    {
        href: 'https://t.me/ramz1q',
        icon: TgIcon,
        alt: 'telegram link'
    },
    {
        href: 'mailto:timurram007@gmail.com',
        icon: MailIcon,
        alt: 'email adress'
    }
]

const LinksList = () => {
    return (
        <div className='flex justify-evenly w-full'>
            {links.map((link, key) => (
                <a key={key} target='_blank' className='hover:scale-110 transition-all scale-100 w-10 h-10 flex items-center justify-center' href={link.href}>
                    <img src={link.icon} alt={link.alt} srcSet="" />
                </a>
            ))}
        </div>
    )
}

export default LinksList