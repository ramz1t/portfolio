import { useState } from 'react'
import AboutForm from '../components/AboutForm'
import EdTimeline from '../components/EdTimeline'
import HobbiesList from '../components/HobbiesList'
import SkillList from '../components/SkillList'

const About = () => {
    const [hoveredSkills, setHoveredSkills] = useState([])

    return (
        <section id="ed_and_hobbies" className="bg-slate-900 text-white selection:bg-white selection:text-slate-900">
            <div className="page-part gap-y-20 gap-x-10 dual-section">
                <SkillList hoveredSkills={hoveredSkills} />
                <EdTimeline onSkillsHover={setHoveredSkills} onSkillsLeave={() => setHoveredSkills([])} />
                <AboutForm />
                <HobbiesList />
            </div>
        </section>
    )
}

export default About
