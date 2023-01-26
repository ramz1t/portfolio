import React from 'react'
import EdTimelineItem from '../components/EdTimelineItem'

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
    return (
        <section id='ed_and_hobbies' className='bg-slate-900 text-white'>
            <div className="page-part">
                <div>
                    <h1 className='text-5xl pb-14'>Education</h1>
                    <div className='ml-1 pl-4 border-l-2 border-white'>
                        <div className='-translate-y-5'>
                            {education.map((ed, key) => <EdTimelineItem key={key} title={ed.title} date={ed.date} />)}
                        </div>
                    </div>
                </div>
                <div>Hobbies</div>
            </div>

        </section>
    )
}

export default About