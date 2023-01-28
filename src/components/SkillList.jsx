import React from 'react'
import { stack } from '../data'

const SkillList = () => {
    return (
        <div className='w-full'>
            <h1 className="text-5xl pb-7">Skills</h1>
            <div className="flex gap-10 flex-col md:flex-row flex-wrap">
                {
                    stack.map((el, key) =>
                        <div key={key}>
                            <h2 className='text-xl text-slate-400 pb-5'>{el.title}</h2>
                            <div className='flex flex-wrap md:grid gap-3 '>
                                {
                                    el.group.map((el, key) =>
                                        <div className='flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit' key={key}>
                                            {el.icon}
                                            {el.name}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SkillList