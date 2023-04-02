import React from 'react'
import { stack } from '../data'

const SkillList = () => {
    return (
        <div className='w-full'>
            <h2 className="text-5xl pb-7">Skills</h2>
            <ul className="flex gap-10 flex-col md:flex-row flex-wrap">
                {
                    stack.map((el, key) =>
                        <li key={key}>
                            <h3 className='text-xl text-slate-400 pb-5'>{el.title}</h3>
                            <ul className='flex flex-wrap md:grid gap-3 '>
                                {
                                    el.group.map((el, key) =>
                                        <li className='flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit' key={key}>
                                            {el.icon}
                                            {el.name}
                                        </li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SkillList