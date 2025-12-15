import React, { memo, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import cn from 'classnames'
import { IoClose } from 'react-icons/io5'
import { TbBrandGithub } from 'react-icons/tb'
import { RiExternalLinkLine } from 'react-icons/ri'
import useMediaQuery from '../../hooks/useMediaQuery.js'

export const InnerDialog = memo(({ data, close, className }) => {
    const dialogRef = useRef(null)
    const { scrollY } = useScroll({ container: dialogRef })

    const isTabletUp = useMediaQuery('(min-width: 768px)')

    const paddingY = useTransform(scrollY, [0, 80], [28, 12])
    const titleSize = useTransform(
        scrollY,
        [0, 80],
        isTabletUp ? ['60px', '35px'] : ['36px', '26px']
    )
    const yearOpacity = useTransform(scrollY, [0, 60], [1, 0])
    const headerShadow = useTransform(
        scrollY,
        [0, 40],
        ['0px 0px 0px rgba(0,0,0,0)', '0 1px 4px rgba(0,0,0,0.1)']
    )

    const { name, year, gitUrl, publicUrl, stack, descFull, image, features } =
        data

    useEffect(() => {
        const handler = (e) => {
            if (dialogRef.current && !dialogRef.current.contains(e.target)) {
                close()
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [close])

    return (
        <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            ref={dialogRef}
            className={cn(
                'max-h-[100dvh] min-h-[90dvh] max-md:min-h-[100dvh] md:max-h-[90dvh] ' +
                    'max-w-[100dvw] md:max-w-[85dvw] md:rounded-3xl bg-white ' +
                    'overflow-y-auto w-full shadow-2xl flex flex-col',
                className
            )}
        >
            {/* Header */}
            <motion.div
                style={{
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                    boxShadow: headerShadow,
                }}
                className="px-5 md:px-7 pl-5 md:pl-10 flex items-center sticky top-0 bg-white z-10"
            >
                <motion.p
                    style={{ fontSize: titleSize }}
                    className="leading-none"
                >
                    {name}
                </motion.p>

                <motion.p
                    style={{ opacity: yearOpacity }}
                    className="text-gray-600 font-semibold text-lg md:text-2xl md:mt-[22px] ml-5"
                >
                    {year}
                </motion.p>

                <button
                    onClick={close}
                    className="text-4xl p-1.5 ml-auto hover:scale-105 transition-transform"
                >
                    <IoClose />
                </button>
            </motion.div>

            {/* Content */}
            <div className="px-5 md:px-10 pb-10">
                <div className="grid md:grid-cols-[1fr_1fr] gap-10">
                    <div>
                        <p className="pb-1.5">Links</p>
                        <div className="flex gap-3">
                            {publicUrl && (
                                <a
                                    className="bg-primary-900 text-white py-2 px-5 rounded-full hover:scale-105 transition-all h-12 flex gap-3 items-center"
                                    href={publicUrl}
                                    target="_blank"
                                >
                                    <RiExternalLinkLine />
                                    Open
                                </a>
                            )}
                            {gitUrl && (
                                <a
                                    className="border-2 rounded-full hover:scale-105 transition-all h-12 px-5 flex items-center justify-center border-primary-900 text-primary-900 gap-3"
                                    href={gitUrl}
                                    target="_blank"
                                >
                                    <TbBrandGithub />
                                    <p>GitHub</p>
                                </a>
                            )}
                        </div>

                        <p className="pb-1.5 pt-4">Built with</p>
                        <ul className="flex flex-wrap gap-3 pb-3">
                            {stack.map((el, key) => (
                                <li
                                    key={key}
                                    className="rounded-full h-10 px-4 flex items-center justify-center bg-slate-200 text-primary-900 gap-3"
                                >
                                    {el.icon}
                                    {el.title}
                                </li>
                            ))}
                        </ul>

                        <p className="pt-5">{descFull}</p>
                    </div>

                    <a
                        href={publicUrl}
                        target="_blank"
                        className="rounded-xl border overflow-hidden h-fit"
                    >
                        <img src={image} alt={name} />
                    </a>

                    {features.length > 0 && (
                        <>
                            <p className="pt-10 text-2xl md:text-3xl col-span-full">
                                Features
                            </p>
                            {features.map((feature, key) => (
                                <div key={key}>
                                    <img
                                        className="rounded-xl overflow-hidden border"
                                        src={feature.image}
                                        alt={feature.title}
                                    />
                                    <p className="font-semibold text-gray-600 pt-1.5">
                                        {feature.title}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    )
})
