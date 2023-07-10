import React from 'react'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects = () => {
    return (
        <section id="projects" className="text-primary-900">
            <div className="page-part">
                <h2 className="text-5xl pb-7 text-left">Projects</h2>
                {/* <p className="text-slate-500 pb-7">
                    (some projects might open with delay because of free hosting
                    limitations, please wait a little bit)
                </p> */}
                <ul className="grid xl:grid-cols-2 gap-14 max-md:max-w-xs md:w-10/12 lg:w-8/12 xl:w-full mx-auto">
                    {projects.map((project, key) => (
                        <ProjectCard key={key} {...project} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects
