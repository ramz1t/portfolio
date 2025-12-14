import React from 'react'
import cn from 'classnames'

const ProjectActionButton = ({
    title,
    icon,
    href,
    style = 'primary',
    onClick,
    className,
}) => {
    const Tag = href ? 'a' : 'button'

    const baseClasses =
        'flex items-center justify-center h-10 rounded-xl overflow-hidden px-4 gap-3 w-full border-2 border-primary-900 ' +
        'transition-all duration-300 ease-in-out whitespace-nowrap focus:outline-none focus:border-none'

    const styleClasses =
        style === 'primary'
            ? 'bg-primary-900 hover:scale-105 text-slate-50 '
            : 'text-primary-900 hover:text-slate-50 before:h-0 hover:before:h-full relative before:w-full before:absolute before:left-0 before:bottom-0 before:-z-10 before:transition-all before:duration-300 before:bg-primary-900'

    return (
        <Tag
            className={cn(baseClasses, styleClasses, className)}
            href={href}
            target={href ? '_blank' : undefined}
            onClick={onClick}
        >
            {icon && (
                <span className="min-w-[16px] flex items-center justify-center">
                    {icon}
                </span>
            )}
            {title}
        </Tag>
    )
}

export default ProjectActionButton
