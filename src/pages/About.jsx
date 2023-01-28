import React from 'react'
import AboutForm from '../components/AboutForm'
import EdTimeline from '../components/EdTimeline'
import SkillList from '../components/SkillList'
import { stack, education } from '../data'

const About = () => {

    const age = 17

    return (
        <section id='ed_and_hobbies' className='bg-slate-900 text-white'>
            <div className="page-part gap-y-14 gap-x-10">
                <AboutForm />
                <SkillList />
                <EdTimeline />
                <div>Hobbies</div>
            </div>

        </section>
    )
}

export default About