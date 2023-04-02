import React from 'react'
import { useRef, useState } from 'react'
import LinksList from '../components/LinksList'
import axios from 'axios'

const Contact = () => {

    const nameRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()
    const [formState, setFormState] = useState('')

    const botApiKey = '5853528696:AAG_1VtS_Kg8quqSKzpIbI9CEinI_O5bZfc'
    const chatId = '577138337'

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const subject = subjectRef.current.value
        const message = messageRef.current.value
        const text = `⚠️ New message ⚠️%0A%0A👤  *${name}*%0A🏷️  *${subject}*%0A📑  ${message}`
        if (name != '' && subject != '' && message != '') {
            axios.post(`https://api.telegram.org/bot${botApiKey}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=markdown`)
                .then(res => setFormState('sent'))
                .catch(err => setFormState('error'))
        }
    }

    const clearForm = (e) => {
        nameRef.current.value = ''
        subjectRef.current.value = ''
        messageRef.current.value = ''
    }

    return (
        <section id='contacts' className='bg-slate-300 text-primary-900'>
            <div className='w-full md:w-2/3 lg:w-1/2  page-part'>
                <h1 className='text-4xl md:text-5xl text-left mb-5'>Contact me 👋🏻</h1>
                {formState === 'sent' &&
                    <p className='bg-emerald-400 text-emerald-900 border-emerald-900 border-2 py-5 px-7 text-lg rounded-3xl text-center mb-5'>Sent succesfully</p>}
                {formState === 'error' &&
                    <p className='bg-rose-400 text-rose-900 border-rose-900 border-2 py-5 px-7 text-lg rounded-3xl mb-5 text-center'>Error occured</p>}
                <form className='flex flex-col gap-3 border-2 border-primary-900 p-5 md:p-10 rounded-3xl w-full' onSubmit={handleSubmit}>
                    <label className='text-2xl' htmlFor='name'>Name:</label>
                    <input ref={nameRef} className='h-8 px-4 py-5 outline-offset-0 rounded-md focus:outline-2  focus:outline-primary-900' type="text" id="name" />
                    <label className='text-2xl' htmlFor='subject'>Subject:</label>
                    <input ref={subjectRef} className='h-8 px-4 py-5 rounded-md' type="text" id="subject" />
                    <label className='text-2xl' htmlFor='message'>Message:</label>
                    <textarea ref={messageRef} className='h-24 px-4 py-5 rounded-md' id="message" />
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-3 md:pt-7 gap-5 md:gap-9">
                        <LinksList className='md:w-1/2 md:!justify-start gap-5' />
                        <button className='bg-primary-900 text-slate-300 py-3 rounded-lg hover:scale-105 w-full md:w-fit px-10 md:ml-10 transition-all'>Send</button>
                    </div>
                    {/* <button className='text-sm text-slate-400 hover:text-slate-500 w-fit pt-3' type='button' onClick={clearForm}>Clear form</button> */}
                </form>
            </div>
        </section>
    )
}

export default Contact