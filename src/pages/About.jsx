import AboutForm from '../components/AboutForm'
import EdTimeline from '../components/EdTimeline'
import HobbiesList from '../components/HobbiesList'
import SkillList from '../components/SkillList'

const About = () => {
    return (
        <section id='ed_and_hobbies' className='bg-slate-900 text-white'>
            <div className="page-part gap-y-14 gap-x-10 dual-section">
                <AboutForm />
                <SkillList />
                <EdTimeline />
                <HobbiesList />
            </div>
        </section>
    )
}

export default About