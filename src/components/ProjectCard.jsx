import React, { useState } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import OuterDialog from './dialog/OuterDialog.jsx'
import { TbBrandGithub } from 'react-icons/tb'
import InteractiveButtonGroup from './InteractiveButtonGroup.jsx'
import ProjectActionButton from './ProjectActionButton.jsx'

const ProjectCard = (props) => {
    const [open, setOpen] = useState(false)
    const { name, year, gitUrl, publicUrl, stack, desc, image, hasMoreInfo } =
        props

    const buildActionButtons = () => {
        const buttons = []

        if (hasMoreInfo) {
            buttons.push(
                <ProjectActionButton
                    key="read-more"
                    title="Read more"
                    style="primary"
                    onClick={() => setOpen(true)}
                />
            )
            buttons.push(
                <ProjectActionButton
                    key="public-link-icon"
                    icon={<RiExternalLinkLine />}
                    href={publicUrl}
                    style="secondary"
                    title="Open"
                />
            )
        } else {
            if (publicUrl) {
                buttons.push(
                    <ProjectActionButton
                        key="public-link"
                        title="Open"
                        icon={<RiExternalLinkLine />}
                        href={publicUrl}
                        style="primary"
                    />
                )
            }
            if (gitUrl) {
                buttons.push(
                    <ProjectActionButton
                        key="github-link"
                        title="GitHub"
                        icon={<TbBrandGithub />}
                        href={gitUrl}
                        style="secondary"
                    />
                )
            }
        }
        return buttons
    }

    return (
        <li className="grid md:grid-cols-[2fr_1fr] gap-7 border-2 border-primary-900 rounded-2xl p-7 items-center h-full">
            <a
                href={publicUrl}
                target="_blank"
                className="rounded-xl border hover:scale-[1.01] transition-all overflow-hidden h-fit"
            >
                <img src={image} className="" />
            </a>
            <div className="flex flex-col gap-2 justify-between h-full max-h-fit">
                <h3 className="text-2xl">{name}</h3>
                <time className="text-slate-500">{year}</time>
                <ul className="flex gap-3 flex-wrap">
                    {stack.map(({ icon }, key) => (
                        <li
                            key={key}
                            className="rounded-full border-2 border-primary-900 w-8 h-8 flex items-center justify-center"
                        >
                            {icon}
                        </li>
                    ))}
                </ul>
                <p className="grow">{desc}</p>
                <OuterDialog
                    data={props}
                    close={() => setOpen(false)}
                    isOpen={open}
                />
            </div>
            <InteractiveButtonGroup>
                {buildActionButtons()}
            </InteractiveButtonGroup>
        </li>
    )
}

export default ProjectCard
