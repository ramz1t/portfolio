import React from 'react'

const NavButton = ({ text, blockId }) => {
    return (
        <div className='cursor-pointer text-2xl text-primary-900' onClick={() => document.getElementById(blockId).scrollIntoView({ behavior: 'smooth' })}>
            {text}
        </div>
    )
}

export default NavButton