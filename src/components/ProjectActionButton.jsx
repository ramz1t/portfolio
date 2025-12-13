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
        'flex items-center justify-center h-10 rounded-full overflow-hidden px-4 gap-3 w-full ' +
        'transition-all duration-300 ease-in-out whitespace-nowrap hover:scale-105'

    const styleClasses =
        style === 'primary'
            ? 'bg-primary-900 text-slate-50'
            : 'border-2 border-primary-900 text-primary-900'

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
