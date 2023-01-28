import React from 'react'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects = () => {
    return (
        <section id='projects' className='text-primary-900'>
            <div className="flex items-center container p-5 mx-auto min-h-screen my-auto">
                <div className='w-full'>
                    <h1 className="text-5xl pb-7 text-left">Projects</h1>
                    <p className='text-slate-500 pb-7'>(some projects might open with delay because of free hosting limitations, please wait a little bit)</p>
                    <div className="flex flex-wrap gap-14">
                        {
                            projects.map((project, key) => <ProjectCard key={key} {...project} />)
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects