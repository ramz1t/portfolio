import React from 'react'

const NavButton = ({ text, refObj }) => {
    return (
        <div className='cursor-pointer text-2xl text-primary-900' onClick={() => refObj.current.scrollIntoView()}>
            {text}
        </div>
    )
}

export default NavButton