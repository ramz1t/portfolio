import React from 'react'
import EdTimeline from '../components/EdTimeline'

const education = [
    {
        title: 'School №2115, Moscow',
        date: '9/2012 - 5/2016',
    },
    {
        title: 'School №1534, Moscow',
        date: '9/2016 - 5/2022',
    },
    {
        title: 'Foxford online school, Russia',
        date: '9/2022 - 5/2023',
    },
    {
        title: 'To be continiued...',
        date: '',
    },
]

const About = () => {

    const age = 17

    return (
        <section id='ed_and_hobbies' className='bg-slate-900 text-white'>
            <div className="page-part gap-y-14 gap-x-10">
                <div className='w-full'>
                    <h1 className='text-5xl pb-7'>About me</h1>
                    <div className="flex flex-col gap-4 border-2 border-white p-5 rounded-2xl md:w-96">
                        <div className="flex justify-between items-baseline gap-2">
                            <p className="text-2xl">Full name:</p>
                            <p className="text-xl text-right">Ramazanov Timur</p>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <p className="text-2xl">Age:</p>
                            <p className="text-xl">{age}</p>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <p className="text-2xl">Origin:</p>
                            <p className="text-xl">Moscow, Russia</p>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <p className="text-2xl">Languages</p>
                            <p className="text-xl">
                                <div>
                                    <p>🇷🇺 Russian (C2)</p>
                                    <p>🇬🇧 English (C1)</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className="text-5xl">Skills</h1>
                </div>
                <div className='w-full'>
                    <h1 className='text-5xl pb-14'>Education</h1>
                    <div className='ml-1 pl-4 border-l-2 border-white'>
                        <div className='-translate-y-5'><EdTimeline elList={education} /></div>
                    </div>
                </div>
                <div>Hobbies</div>
            </div>

        </section>
    )
}

export default About