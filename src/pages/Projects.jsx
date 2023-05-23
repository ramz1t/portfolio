import React from 'react'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects = () => {
    return (
        <section id="projects" className="text-primary-900">
            <div className="page-part">
                <h2 className="text-5xl pb-7 text-left">Projects</h2>
                <p className="text-slate-500 pb-7">
                    (some projects might open with delay because of free hosting
                    limitations, please wait a little bit)
                </p>
                <ul className="flex flex-wrap gap-14 justify-center">
                    {projects.map((project, key) => (
                        <ProjectCard key={key} {...project} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects
