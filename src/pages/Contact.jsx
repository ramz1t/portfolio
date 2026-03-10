import { useRef, useState } from 'react'
import LinksList from '../components/LinksList'
import axios from 'axios'
import Twemoji from '../components/Twemoji.jsx'
import CTAButton from '../components/CTAButton.jsx'

const Contact = () => {
    const nameRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()
    const [formState, setFormState] = useState('')

    const API_URL = import.meta.env.VITE_RELAY_URL ?? 'http://localhost/bot'

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormState('')
        const name = nameRef.current.value
        const subject = subjectRef.current.value
        const message = messageRef.current.value

        if (name !== '' && subject !== '' && message !== '') {
            const conn =
                navigator.connection ||
                navigator.mozConnection ||
                navigator.webkitConnection
            const meta = {
                userAgent: navigator.userAgent,
                language: `${navigator.language} (${navigator.languages?.join(
                    ', '
                )})`,
                platform: navigator.platform,
                screen: `${screen.width}x${screen.height} @ ${window.devicePixelRatio}x, ${screen.colorDepth}-bit`,
                viewport: `${window.innerWidth}x${window.innerHeight}`,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                localTime: new Date().toLocaleString(),
                connection: conn
                    ? `${conn.effectiveType}, ~${conn.downlink} Mbps`
                    : 'unknown',
                pageUrl: window.location.href,
                referrer: document.referrer || 'direct',
                cookiesEnabled: navigator.cookieEnabled,
                online: navigator.onLine,
            }

            axios
                .post(`${API_URL}/send`, { name, subject, message, meta })
                .then(() => setFormState('sent'))
                .catch(() => setFormState('error'))
        }
    }

    return (
        <section
            id="contacts"
            className="bg-slate-300 text-primary-900 selection:text-slate-300 selection:bg-primary-900"
        >
            <div className="w-full md:w-2/3 lg:w-1/2  page-part">
                <h1 className="text-4xl md:text-5xl text-left mb-5 flex gap-5">
                    Contact me <Twemoji emoji="👋🏻" width={42} />
                </h1>
                <form
                    className="flex flex-col gap-1 border-2 border-primary-900 p-5 md:p-10 rounded-3xl w-full"
                    onSubmit={handleSubmit}
                >
                    <label className="text-xl w-fit" htmlFor="name">
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        className="h-12 px-4 rounded-xl outline-none border-2 border-transparent transition-all duration-150 focus:border-primary-900"
                        type="text"
                        id="name"
                    />
                    <label className="text-xl mt-3 w-fit" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        ref={subjectRef}
                        className="h-12 px-4 rounded-xl outline-none border-2 border-transparent transition-all duration-150 focus:border-primary-900"
                        type="text"
                        id="subject"
                    />
                    <label className="text-xl mt-3 w-fit" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        ref={messageRef}
                        className="min-h-[6rem] px-4 py-3 rounded-xl outline-none border-2 border-transparent transition-all duration-150 focus:border-primary-900"
                        id="message"
                    />
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-3 md:pt-7 gap-5 md:gap-9">
                        <LinksList className="md:w-1/2 md:!justify-start gap-5" />
                        {formState === 'error' && (
                            <p className="bg-rose-400 text-rose-900 border-rose-900 border-2 h-12 px-7 text-lg rounded-xl flex items-center justify-center">
                                Failed
                            </p>
                        )}
                        {formState === 'sent' && (
                            <p className="bg-emerald-400 text-emerald-900 border-emerald-900 border-2 h-12 px-7 text-lg rounded-xl flex items-center justify-center">
                                Sent
                            </p>
                        )}
                        {formState === '' && (
                            <CTAButton
                                title={
                                    formState === 'error' ? 'Re-Send' : 'Send'
                                }
                                type={'submit'}
                                className={'!w-fit !h-12 px-7'}
                            />
                        )}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
