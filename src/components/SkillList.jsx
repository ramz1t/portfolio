import { stack } from '../data'

const SkillList = () => {
    return (
        <div className="w-full">
            <h2 className="text-5xl pb-7">Skills</h2>
            <ul className="flex gap-7 flex-wrap">
                {stack.map((el, key) => (
                    <li key={key}>
                        <h3 className="text-xl text-slate-400 pb-3">
                            {el.title}
                        </h3>
                        <ul className="flex flex-wrap gap-3 ">
                            {el.group.map((el, key) => (
                                <li
                                    className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit hover:scale-105 hover:cursor-default transition-all duration-150 group"
                                    style={{
                                        boxShadow: `0px 0px 20px rgba(255, 255, 255, 0.3)`,
                                        transition: 'transform 150ms, box-shadow 150ms',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0px 0px 25px rgba(255, 255, 255, 0.35)'}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0px 0px 20px rgba(255, 255, 255, 0.3)'}
                                    key={key}
                                >
                                    {el.icon}
                                    {el.title}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default SkillList
