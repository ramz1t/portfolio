import {
    SiJavascript,
    SiFastapi,
    SiPostgresql,
    SiBlender,
    SiReact,
    SiPython,
    SiGit,
    SiDocker,
    SiNotion,
    // SiCplusplus,
    // SiDjango,
    SiNginx,
    SiTelegram,
    SiTailwindcss,
    SiSwift,
    SiIos,
} from 'react-icons/si'
import GithubIcon from './assets/github.svg'
import MailIcon from './assets/email.svg'
import TgIcon from './assets/telegram.svg'
import Twemoji from "./components/Twemoji.jsx";

export const education = [
    {
        title: 'Moscow School of Programming (MSHP)',
        date: '9/2019 - 5/2022',
    },
    {
        title: 'Foxford online school, Russia',
        date: '9/2022 - 5/2023',
    },
    {
        title: 'Computer Science BS, Kristianstad University, Sweden',
        date: '9/2024 -',
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
                icon: <SiPython />,
            },
            {
                name: 'JS',
                icon: <SiJavascript />,
            },
            {
                name: 'Swift',
                icon: <SiSwift />,
            },
        ],
    },
    {
        title: 'Frameworks',
        group: [
            {
                name: 'React',
                icon: <SiReact />,
            },
            {
                name: 'Fastapi',
                icon: <SiFastapi />,
            },
            {
                name: 'SQLAlchemy',
                icon: <SiPostgresql />,
            },
            {
                name: 'Tailwind CSS',
                icon: <SiTailwindcss />,
            },
            {
                name: 'SwiftUI',
                icon: <SiSwift />,
            },
        ],
    },
    {
        title: 'Other',
        group: [
            {
                name: 'Git',
                icon: <SiGit />,
            },
            {
                name: 'Docker',
                icon: <SiDocker />,
            },
            {
                name: 'Notion',
                icon: <SiNotion />,
            },
            {
                name: 'Nginx',
                icon: <SiNginx />,
            },
        ],
    },
]

export const buttons = [
    { text: 'Introduction', blockId: 'landing', init: true },
    { text: 'Education and Hobbies', blockId: 'ed_and_hobbies' },
    { text: 'Projects', blockId: 'projects' },
    { text: 'Contacts', blockId: 'contacts' },
]

const birthdate = new Date('2005-06-25')
const today = new Date()
const ageInMilliseconds = today - birthdate
const ageInYears = ageInMilliseconds / 31557600000
const age = Math.floor(ageInYears)

export const aboutList = [
    {
        title: 'Full name',
        data: 'Ramazanov Timur',
    },
    {
        title: 'Age',
        data: age,
    },
    {
        title: 'Location',
        data: 'Malmö, Sweden',
    },
    {
        title: 'Languages',
        data: (
            <ul>
                <li className="hidden md:flex gap-3"><Twemoji emoji='🇸🇪' />Swedish (A2)</li>
                <li className="flex md:hidden gap-3"><Twemoji emoji='🇸🇪' />SE (A2)</li>
                <li className="hidden md:flex gap-3"><Twemoji emoji='🇷🇺' />Russian (Native)</li>
                <li className="flex md:hidden gap-3"><Twemoji emoji='🇷🇺' />RU (Native)</li>
                <li className="hidden md:flex gap-3"><Twemoji emoji='🇬🇧' />English (C1)</li>
                <li className="flex md:hidden gap-3"><Twemoji emoji='🇬🇧' />EN (C1)</li>
            </ul>
        ),
    },
]

export const links = [
    {
        href: 'https://github.com/ramz1t',
        icon: GithubIcon,
        alt: 'github profile',
    },
    {
        href: 'https://t.me/ramz1q',
        icon: TgIcon,
        alt: 'telegram link',
    },
    {
        href: 'mailto:timurram007@gmail.com',
        icon: MailIcon,
        alt: 'email adress',
    },
]

export const hobbies = [
    {
        name: 'Skiing and hiking',
        url: './images/skiing.jpg',
        alt: 'photo of me skiing in kavkaz moutnains, person on front, danger sign behind',
    },
    {
        name: 'Coding',
        url: './images/coding.jpg',
        alt: 'photo of a table with two monitors, ipad on front, code on the first monitor, spotify and cmd on the second monitor',
    },
    {
        name: 'Drone photography',
        url: './images/drone.jpg',
        alt: 'photo of night Moscow shot from drone, 40 floor building in the center, roads with bright lights around',
    },
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
        stack: [<SiPython color="#03045e" />, <SiFastapi />, <SiPostgresql />],
        image: '/images/projects/diary.png',
    },
    {
        id: '4',
        name: 'CreditHelper',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/CreditHelper_frontend',
        desc: 'Service for credits comparison and managment',
        publicUrl: 'http://timur.aboard.ru:34082',
        stack: [
            <SiJavascript color="#03045e" />,
            <SiReact />,
            <SiPython />,
            <SiPostgresql />,
        ],
        image: '/images/projects/credit.png',
    },
    {
        id: '5',
        name: 'Personal page',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/personal-page',
        desc: 'My developer personal portfolio, you are here now :)',
        publicUrl: 'https://ramz1.onrender.com/',
        stack: [<SiJavascript />, <SiReact />, <SiTailwindcss />],
        image: '/images/projects/ramz1.png',
    },
    {
        id: '6',
        name: 'Grocket',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/alexzawadsky/Grocket',
        desc: 'International online marketplace for secondhand items',
        publicUrl: 'https://timur.aboard.ru',
        stack: [<SiReact />, <SiTailwindcss />, <SiDocker />, <SiNginx />],
        image: '/images/projects/grocket.png',
    },
    {
        id: '6',
        name: 'Ph. portfolio',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/simon-kuleshov',
        desc: 'Photographer portfolio for Simon Kuleshov',
        publicUrl: 'https://simon-kuleshov.onrender.com/',
        stack: [<SiJavascript />, <SiReact />, <SiTailwindcss />],
        image: '/images/projects/simon.png',
    },
    {
        id: '6',
        name: 'Tic Tac Toe',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/tictactoe',
        desc: 'Tic Tac Toe game made with Swift and SwiftUI',
        publicUrl: 'https://www.apple.com/app-store/',
        stack: [<SiSwift />, <SiIos />],
        image: '/images/projects/tictactoe.png',
    },
    {
        id: '6',
        name: 'Video editor portfolio',
        year: '2024',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/AntonMartynov',
        desc: 'Video editor portfolio for Anton Martynov',
        publicUrl: 'https://martynov.onrender.com/',
        stack: [<SiJavascript />, <SiReact />, <SiTailwindcss />],
        image: '/images/projects/anton.png',
    },
]
