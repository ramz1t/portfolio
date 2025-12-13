import React, { useMemo, useState } from 'react'

const InteractiveButtonGroup = ({ children }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const totalButtons = React.Children.count(children)

    const colsTemplate = useMemo(
        () =>
            Array(totalButtons)
                .fill(0)
                .map((_, i) => (i === hoveredIndex ? '1fr' : 'auto'))
                .join(' '),
        [hoveredIndex, totalButtons]
    )

    if (totalButtons === 0) return

    return (
        <div
            className="flex gap-2 w-full"
            onMouseLeave={() => setHoveredIndex(null)}
            // style={{ gridTemplateColumns: colsTemplate }}
        >
            {React.Children.map(children, (child, index) => {
                if (!child) return null
                return child
                return (
                    <div
                        className="grow"
                        key={index}
                        onMouseEnter={
                            totalButtons > 1
                                ? () => setHoveredIndex(index)
                                : null
                        }
                    >
                        {React.cloneElement(child, {
                            isFirst: index === 0,
                            index: index,
                            hoveredIndex: hoveredIndex,
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default InteractiveButtonGroup
