import { SiJavascript, SiFastapi, SiPostgresql, SiBlender, SiReact, SiPython, SiGit, SiDocker, SiNotion, SiCplusplus, SiDjango, SiTelegram, SiTailwindcss } from 'react-icons/si'
import GithubIcon from './assets/github.svg'
import MailIcon from './assets/email.svg'
import TgIcon from './assets/telegram.svg'

export const education = [
    {
        title: 'School №2115, Moscow',
        date: '9/2012 - 5/2016',
    },
    {
        title: 'School №1534, Moscow',
        date: '9/2016 - 5/2022',
    },
    {
        title: 'Moscow School of Programming (MSHP)',
        date: '9/2019 - 5/2022'
    },
    {
        title: 'Foxford online school, Russia',
        date: '9/2022 - 5/2023',
    },
    {
        title: 'To be continiued...',
        date: '',
    },
]

export const stack = [
    {
        title: 'Languages',
        group: [
            {
                name: 'Python',
                icon: <SiPython />
            },
            {
                name: 'JS',
                icon: <SiJavascript />
            },
            {
                name: 'C++',
                icon: <SiCplusplus />
            }
        ]
    },
    {
        title: 'Frameworks',
        group: [
            {
                name: 'React',
                icon: <SiReact />
            },
            {
                name: 'Fastapi',
                icon: <SiFastapi />
            },
            {
                name: 'SQLAlchemy',
                icon: <SiPostgresql />
            },
            {
                name: 'Tailwind CSS',
                icon: <SiTailwindcss />
            }
        ]
    },
    {
        title: 'Other',
        group: [
            {
                name: 'Git',
                icon: <SiGit />
            },
            {
                name: 'Docker',
                icon: <SiDocker />
            },
            {
                name: 'Notion',
                icon: <SiNotion />
            },
            {
                name: 'CAD Editors',
                icon: <SiBlender />
            }
        ]
    }
]

export const buttons = [
    { text: 'Introduction', blockId: 'landing', init: true },
    { text: 'Education and Hobbies', blockId: 'ed_and_hobbies' },
    { text: 'Projects', blockId: 'projects' },
    { text: 'Contacts', blockId: 'contacts' }
]

const birthdate = new Date('2005-06-25');
const today = new Date();
const ageInMilliseconds = today - birthdate;
const ageInYears = ageInMilliseconds / 31557600000;
const age = Math.floor(ageInYears);

export const aboutList = [
    {
        title: 'Full name:',
        data: 'Ramazanov Timur'
    },
    {
        title: 'Age:',
        data: age
    },
    {
        title: 'Location:',
        data: 'Malmö, Sweden'
    },
    {
        title: 'Languages:',
        data: <div>
            <p>🇷🇺 Russian (C2)</p>
            <p>🇬🇧 English (C1)</p>
        </div>
    },
]

export const links = [
    {
        href: 'https://github.com/ramz1t',
        icon: GithubIcon,
        alt: 'github profile'
    },
    {
        href: 'https://t.me/ramz1q',
        icon: TgIcon,
        alt: 'telegram link'
    },
    {
        href: 'mailto:timurram007@gmail.com',
        icon: MailIcon,
        alt: 'email adress'
    }
]

export const hobbies = [
    {
        name: 'Skiing and hiking',
        url: './images/skiing.jpg'
    },
    {
        name: 'Coding',
        url: './images/coding.jpg'
    },
    {
        name: 'Drone photography',
        url: './images/drone.jpg'
    }
]

export const projects = [
    {
        id: '1',
        name: 'Diary',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/Diary',
        desc: 'School online diary service for students and teachers',
        publicUrl: 'https://diary-fusm.onrender.com/',
        stack: [
            <SiPython color='#03045e' />, <SiFastapi />, <SiPostgresql />
        ]
    },
    {
        id: '2',
        name: 'Diary TG Bot',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/DiaryTelegramAssistant',
        desc: 'Telegram bot for Diary HW and Marks notifications',
        publicUrl: 'https://t.me/diary_service_bot',
        stack: [
            <SiPython />, <SiTelegram />, <SiPostgresql />
        ]
    },
    {
        id: '3',
        name: 'WorX',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/Worx',
        desc: 'Github repo stats (poor version of Github repo Insights)',
        publicUrl: 'https://worx.onrender.com/',
        stack: [
            <SiPython color='#03045e' />, <SiFastapi />, <SiPostgresql />
        ]
    },
    {
        id: '4',
        name: 'CreditHelper',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/CreditHelper_frontend',
        desc: 'Service for credits comparison and managment',
        publicUrl: 'https://creditshelper.ru/',
        stack: [
            <SiJavascript color='#03045e' />, <SiReact />, <SiPython />, <SiPostgresql />
        ]
    },
    {
        id: '5',
        name: 'Personal page',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/personal-page',
        desc: 'My personal page, you are here right now :)',
        publicUrl: 'https://ramz1.onrender.com/',
        stack: [
            <SiJavascript />, <SiReact />, <SiTailwindcss />
        ]
    }
]
