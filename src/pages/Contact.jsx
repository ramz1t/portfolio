import React from 'react'
import { useRef } from 'react'
import LinksList from '../components/LinksList'

const Contact = () => {

    const nameRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const botApiKey = '5853528696:AAG_1VtS_Kg8quqSKzpIbI9CEinI_O5bZfc'
    const chatId = '577138337'

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const subject = subjectRef.current.value
        const message = messageRef.current.value
        const text = `⚠️ New message ⚠️%0A%0A👤  *${name}*%0A🏷️  *${subject}*%0A📑  ${message}`
        if (name != '' && subject != '' && message != '') {
            fetch(`https://api.telegram.org/bot${botApiKey}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=markdown`)
                .then(res => alert('sent'))
                .catch(err => alert('error'))
        }
    }

    const clearForm = (e) => {
        nameRef.current.value = ''
        subjectRef.current.value = ''
        messageRef.current.value = ''
    }

    return (
        <section id='contacts' className='bg-slate-300 text-primary-900'>
            <div className='w-full md:w-2/3 lg:w-1/2 flex items-center container p-5 mx-auto min-h-screen my-auto'>
                <div className='w-full'>
                    <h1 className='text-5xl text-center md:lg:text-left pb-8'>Contact me 👋🏻</h1>
                    <form action="" className='flex flex-col gap-3 border-2 border-primary-900 p-10 rounded-3xl w-full' onSubmit={handleSubmit}>
                        <p className='text-2xl'>Name:</p>
                        <input ref={nameRef} className='h-8 px-4 py-5 rounded-md focus:outline-none focus:border-1' type="text" />
                        <p className='text-2xl'>Subject:</p>
                        <input ref={subjectRef} className='h-8 px-4 py-5 rounded-md' type="text" />
                        <p className='text-2xl'>Message:</p>
                        <textarea ref={messageRef} className='h-24 px-4 py-5 rounded-md' type="text" />
                        <div className="flex flex-col flex-col-reverse md:flex-row justify-between items-center pt-7 gap-9">
                            <LinksList className='w-full md:w-1/2 md:!justify-start gap-5' />
                            <button className='bg-primary-900 text-slate-300 py-3 rounded-lg hover:scale-105 w-full md:w-fit px-10 md:ml-10 transition-all'>Send</button>
                        </div>
                        {/* <button className='text-sm text-slate-400 hover:text-slate-500 w-fit pt-3' type='button' onClick={clearForm}>Clear form</button> */}
                    </form>
                </div>

            </div>


        </section>
    )
}

export default Contact