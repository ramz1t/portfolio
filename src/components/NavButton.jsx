import React from 'react'

const NavButton = ({ position, name }) => {

    const handleClick = () => {
        console.log('scroll to', position)
    }

    return (
        <div className='text-white' onClick={handleClick}>{name}</div>
    )
}

export default NavButton