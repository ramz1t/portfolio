import { SiJavascript, SiFastapi, SiPostgresql, SiReact, SiPython, SiGit, SiDocker, SiNotion, SiCplusplus } from 'react-icons/si'
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
        title: 'Origin:',
        data: 'Moscow, Russia'
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