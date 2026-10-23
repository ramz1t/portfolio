import React, { useEffect, useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, Role } from '../data'

const Projects = () => {
    const [selectedRole, setSelectedRole] = useState(null)

    const allRolesKeys = [null, ...Object.keys(Role)]
    const getFilteredProjects = (role) =>
        role
            ? projects.filter((proj) => proj.roles.includes(Role[role]))
            : projects
    const countPerRole = useMemo(() => {
        return allRolesKeys.reduce(
            (prev, role) => ({
                ...prev,
                [role]: getFilteredProjects(role).length,
            }),
            {}
        )
    }, [projects])

    useEffect(() => {
        const handleEvent = (e) => e.key === 'Escape' && setSelectedRole(null)
        window.addEventListener('keydown', handleEvent)
        return () => window.removeEventListener('keydown', handleEvent)
    }, [])

    return (
        <section
            id="projects"
            className="text-primary-900 selection:bg-primary-900 selection:text-white flex flex-col"
        >
            <div className="page-part grow">
                <h2 className="text-5xl pb-7 text-left">Projects</h2>
                <ul className="flex flex-wrap gap-3 mb-7">
                    {allRolesKeys
                        .sort((role1, role2) =>
                            countPerRole[role1] < countPerRole[role2] ? 1 : -1
                        )
                        .map((key) => (
                            <li key={Role[key]}>
                                <button
                                    className={`flex gap-4 border-2 border-primary-900 ${
                                        key === selectedRole
                                            ? 'bg-primary-900 text-white'
                                            : ''
                                    } rounded-full py-3 px-5 w-fit hover:scale-105 ease-in-out whitespace-nowrap overflow-hidden hover:cursor-default`}
                                    onClick={() =>
                                        setSelectedRole((prevRole) =>
                                            prevRole === key ? null : key
                                        )
                                    }
                                >
                                    <span>
                                        {Object.hasOwn(Role, key)
                                            ? Role[key]
                                            : 'All'}
                                    </span>
                                    <span>({countPerRole[key]})</span>
                                </button>
                            </li>
                        ))}
                </ul>
                <ul className="grid xl:grid-cols-2 gap-14 md:w-10/12 lg:w-8/12 xl:w-full mx-auto">
                    {getFilteredProjects(selectedRole).map((project) => (
                        <ProjectCard
                            key={project.slug}
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
