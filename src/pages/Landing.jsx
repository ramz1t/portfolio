import { useState } from 'react'
import { HiPaperClip } from 'react-icons/hi'
import { IoMdArrowRoundDown } from 'react-icons/io'
import { navigate } from '../App.jsx'
import CTAButton from '../components/CTAButton.jsx'

const Landing = () => {
    const [hover, setHover] = useState(false)

    return (
        <>
            <section
                id="landing"
                className="bg-slate-200 text-primary-900 relative selection:bg-primary-900 selection:text-slate-200"
            >
                <div className="page-part gap-14 dual-section">
                    <div className="flex flex-col gap-5 lg:gap-7 w-full">
                        <h1 className="text-5xl leading-tight">
                            Hi, my name is Timur
                            <br />
                            and I'm a Software Engineer
                        </h1>
                        <h2 className="text-xl">
                            I like making products that are useful for people,
                            <br />
                            Currently at{' '}
                            <a
                                href="https://geshdo.com/"
                                target="_blank"
                                className="underline"
                                rel="norefererrer"
                            >
                                GESHDO
                            </a>
                        </h2>
                        <div className="flex gap-3">
                            <CTAButton
                                icon={<HiPaperClip />}
                                title={'CV'}
                                href={"/Timur Ramazanov's CV.pdf"}
                                className={'!h-14 !w-fit px-7'}
                            />
                            <CTAButton
                                title={'Contact me'}
                                onClick={() => navigate('contacts')}
                                style="secondary"
                                className={'!h-14 !w-fit px-7'}
                            />
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <img
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            src={
                                !hover
                                    ? './images/floppy.png'
                                    : './images/floppy_open.png'
                            }
                            alt={
                                hover
                                    ? '3D render of opened floppy disk'
                                    : '3D render of closed floppy disk'
                            }
                            className="w-full md:w-1/2 lg:w-2/3"
                        />
                    </div>
                </div>
                <a
                    onClick={() => navigate('ed_and_hobbies')}
                    className="hidden hover:cursor-pointer md:block absolute transition-all duration-100 animate-bounce bottom-5 text-7xl pb-7 text-primary-900"
                >
                    <IoMdArrowRoundDown />
                </a>
            </section>
        </>
    )
}

export default Landing
