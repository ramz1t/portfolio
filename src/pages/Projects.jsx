import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects = () => {
    return (
        <section id="projects" className="text-primary-900 selection:bg-primary-900 selection:text-white">
            <div className="page-part">
                <h2 className="text-5xl pb-7 text-left">Projects</h2>
                <ul className="grid xl:grid-cols-2 gap-14 max-md:max-w-xs md:w-10/12 lg:w-8/12 xl:w-full mx-auto">
                    {projects.map((project, key) => (
                        <ProjectCard
                            key={key}
                            {...project}
                            hasMoreInfo={project.descFull?.length > 0}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects
