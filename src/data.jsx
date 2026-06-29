import {
    SiJavascript,
    SiTypescript,
    SiFastapi,
    SiPostgresql,
    SiBlender,
    SiReact,
    SiPython,
    SiGit,
    SiDocker,
    SiNotion,
    SiCplusplus,
    SiDjango,
    SiNginx,
    SiTelegram,
    SiTailwindcss,
    SiSwift,
    SiIos,
    SiGooglecloud,
    SiApachekafka,
    SiNextdotjs,
    SiSanity,
    SiApacheairflow,
    SiKubernetes,
    SiTurborepo,
} from 'react-icons/si'
import { VscMcp } from 'react-icons/vsc'
import GithubIcon from './assets/github.svg'
import MailIcon from './assets/email.svg'
import TgIcon from './assets/telegram.svg'
import LindedInIcon from './assets/linkedin.svg'
import Twemoji from './components/Twemoji.jsx'

export const tech = {
    python: { key: 'python', icon: <SiPython />, title: 'Python' },
    js: { key: 'js', icon: <SiJavascript />, title: 'JavaScript' },
    ts: { key: 'ts', icon: <SiTypescript />, title: 'TypeScript' },
    swift: { key: 'swift', icon: <SiSwift />, title: 'Swift' },
    react: { key: 'react', icon: <SiReact />, title: 'React' },
    fastapi: { key: 'fastapi', icon: <SiFastapi />, title: 'FastAPI' },
    sqlalchemy: {
        key: 'sqlalchemy',
        icon: <SiPostgresql />,
        title: 'SQLAlchemy',
    },
    tailwind: {
        key: 'tailwind',
        icon: <SiTailwindcss />,
        title: 'Tailwind CSS',
    },
    swiftui: { key: 'swiftui', icon: <SiSwift />, title: 'SwiftUI' },
    git: { key: 'git', icon: <SiGit />, title: 'Git' },
    docker: { key: 'docker', icon: <SiDocker />, title: 'Docker' },
    notion: { key: 'notion', icon: <SiNotion />, title: 'Notion' },
    nginx: { key: 'nginx', icon: <SiNginx />, title: 'Nginx' },
    postgresql: {
        key: 'postgresql',
        icon: <SiPostgresql />,
        title: 'PosgreSQL',
    },
    django: { key: 'django', icon: <SiDjango />, title: 'Django' },
    gcp: { key: 'gcp', icon: <SiGooglecloud />, title: 'GCP' },
    kafka: { key: 'kafka', icon: <SiApachekafka />, title: 'Kafka' },
    next: { key: 'next', icon: <SiNextdotjs />, title: 'Next' },
    sanity: { key: 'sanity', icon: <SiSanity />, title: 'Sanity CMS' },
    cpp: { key: 'cpp', icon: <SiCplusplus />, title: 'C++' },
    airflow: { key: 'airflow', icon: <SiApacheairflow />, title: 'Airflow' },
    kuber: { key: 'kuber', icon: <SiKubernetes />, title: 'k8s' },
    mcp: { key: 'mcp', icon: <VscMcp />, title: 'MCP' },
    turborepo: { key: 'turborepo', icon: <SiTurborepo />, title: 'Turborepo' },
}

export const educationAndExperience = [
    {
        title: 'Moscow School of Programming (MSHP)',
        date: 'Sept 2019 - May 2022',
        skills: [
            'python',
            'cpp',
            'js',
            'fastapi',
            'sqlalchemy',
            'django',
            'git',
        ],
    },
    {
        title: 'B.S. CS, Kristianstad University, Sweden',
        date: 'Sept 2024 - June 2027',
        skills: ['python', 'js', 'react', 'turborepo', 'docker'],
    },
    {
        title: 'Software Engineer Intern, Ingka, Sweden',
        date: 'Sept 2025 - May 2026',
        skills: ['python', 'docker', 'gcp', 'kafka', 'fastapi', 'sqlalchemy'],
    },
    {
        title: 'Junior Software Engineer, Ingka, Sweden',
        date: 'June 2026 - Currently',
        skills: ['python', 'ts', 'docker', 'mcp', 'airflow', 'kuber', 'gcp'],
    },
]

export const stack = [
    {
        title: 'Languages',
        group: [tech.python, tech.js, tech.ts, tech.swift, tech.cpp],
    },
    {
        title: 'Frameworks',
        group: [
            tech.react,
            tech.next,
            tech.fastapi,
            tech.sqlalchemy,
            tech.tailwind,
            tech.swiftui,
            tech.django,
        ],
    },
    {
        title: 'Other',
        group: [
            tech.git,
            tech.docker,
            tech.kuber,
            tech.nginx,
            tech.gcp,
            tech.kafka,
            tech.airflow,
            tech.mcp,
            tech.turborepo,
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
        data: 'Timur Ramazanov',
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
                <li className="hidden md:flex gap-3">
                    <Twemoji emoji="🇬🇧" />
                    English (C1)
                </li>
                <li className="flex md:hidden gap-3">
                    <Twemoji emoji="🇬🇧" />
                    EN (C1)
                </li>
                <li className="hidden md:flex gap-3">
                    <Twemoji emoji="🇸🇪" />
                    Swedish (B1)
                </li>
                <li className="flex md:hidden gap-3">
                    <Twemoji emoji="🇸🇪" />
                    SE (B1)
                </li>
                <li className="hidden md:flex gap-3">
                    <Twemoji emoji="🇷🇺" />
                    Russian (Native)
                </li>
                <li className="flex md:hidden gap-3">
                    <Twemoji emoji="🇷🇺" />
                    RU (Native)
                </li>
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
    {
        href: 'https://www.linkedin.com/in/ramz1/',
        icon: LindedInIcon,
        alt: 'linkedin profile',
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
        id: 1,
        name: 'Diary',
        type: 'Passion project',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/Diary',
        desc: 'School online diary service for students and teachers',
        publicUrl: null,
        stack: [tech.python, tech.fastapi, tech.sqlalchemy, tech.js],
        image: '/images/projects/diary/index.png',
        descFull:
            'Diary is a web-based diary platform designed for schools. It features an admin panel for managing schedules, groups, teachers, and updating data. Teachers can assign homework, manage semester and final grades, while students view their information in a clear and user-friendly interface. This project was my first attempt at building a fullstack application using FastAPI, vanilla JavaScript, and SQLAlchemy. It helped me understand backend APIs, frontend integration, and database interaction while solving real-world educational workflow needs in a structured way.\n',
        features: [
            {
                title: 'Admin panel',
                image: 'images/projects/diary/admin.png',
            },
            {
                title: 'Homework',
                image: 'images/projects/diary/homework.png',
            },
            {
                title: "Student's marks",
                image: 'images/projects/diary/marks-student.png',
            },
            {
                title: 'Final marks',
                image: 'images/projects/diary/marks-teacher.png',
            },
        ],
    },
    {
        id: 2,
        name: 'CreditHelper',
        type: 'Passion project',
        year: '2022',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/CreditHelper_frontend',
        desc: 'Service for credits comparison and managment',
        publicUrl: 'https://timur.aboard.ru/credit-helper/',
        stack: [tech.js, tech.react, tech.python, tech.postgresql],
        image: '/images/projects/credit.png',
        slug: 'credit',
        features: [],
    },
    {
        id: 3,
        name: 'Personal page',
        type: 'Portfolio',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/PersonalPage',
        desc: 'My developer personal portfolio, you are here now :)',
        stack: [tech.js, tech.react, tech.tailwind],
        image: '/images/projects/ramz1.png',
        slug: 'personal-page',
        features: [],
    },
    {
        id: 4,
        name: 'Grocket',
        type: 'Passion project',
        year: '2023 - 2024',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/Grocket',
        desc: 'International online marketplace for secondhand items',
        publicUrl: 'https://timur.aboard.ru/grocket/',
        stack: [tech.react, tech.tailwind, tech.docker, tech.nginx],
        image: '/images/projects/grocket/index.png',
        slug: 'grocket',
        descFull:
            'Grocket is a demo of an international online marketplace that specializes in secondhand items. It provides a platform for users to buy and sell a variety of used goods from all over the world, including clothing, electronics, furniture, and more. The platform also includes search with filters, messenger built with Websockets.',
        features: [
            {
                title: 'Product details',
                image: 'images/projects/grocket/details.png',
            },
            {
                title: 'Promotions with Stripe payment-gateway',
                image: 'images/projects/grocket/promotions.png',
            },
            {
                title: 'Seller reviews',
                image: 'images/projects/grocket/comments.png',
            },
            {
                title: 'Categories tree',
                image: 'images/projects/grocket/categories.png',
            },
        ],
    },
    {
        id: 5,
        name: 'Portfolio for Simon',
        type: 'Freelance',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/simon-kuleshov',
        desc: 'Photographer portfolio for Simon Kuleshov',
        publicUrl: 'https://simon-kuleshov.onrender.com/',
        stack: [tech.js, tech.react, tech.tailwind],
        image: '/images/projects/simon.png',
        slug: 'ph-portfolio',
        features: [],
    },
    {
        id: 6,
        name: 'Tic Tac Toe',
        type: 'Passion project',
        year: '2023',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/tictactoe',
        desc: 'Tic Tac Toe game made with Swift and SwiftUI',
        publicUrl: null,
        stack: [tech.swift, tech.swiftui],
        image: '/images/projects/tictactoe.png',
        slug: 'tictactoe',
        features: [],
    },
    {
        id: 7,
        name: 'Portfolio for Anton',
        type: 'Freelance',
        year: '2024',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/AntonMartynov',
        desc: 'Video editor portfolio for Anton Martynov',
        publicUrl: 'https://martynov.onrender.com/',
        stack: [tech.js, tech.react, tech.tailwind],
        image: '/images/projects/anton.png',
        slug: 'video-portfolio',
        features: [],
    },
    {
        id: 8,
        name: 'Collabra',
        type: 'Passion project',
        year: '2024 - Now',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/collabra',
        desc: 'Taskboard, teams and more. Still in BETA',
        descFull:
            'Collabra is my flagship project - a collaborative project management platform inspired by tools like Jira, focused on task tracking, team management, deadlines, and extensible workflows, with additional features planned. It implements modern frontend best practices and a fully custom design system built from the ground up. I was responsible for the full deployment on my own server, including reverse proxy configuration, and I also designed and implemented the complete backend for tasks and tagging.',
        publicUrl: 'https://timur.aboard.ru/collabra/',
        stack: [tech.ts, tech.react, tech.tailwind, tech.django, tech.python],
        image: '/images/projects/collabra.png',
        slug: 'collabra',
        features: [
            {
                title: 'Tasks editing',
                image: 'images/projects/collabra/edit.png',
            },
            {
                title: 'Demo mode',
                image: 'images/projects/collabra/demo.png',
            },
            {
                title: 'Admin roles and labels',
                image: 'images/projects/collabra/user.png',
            },
            {
                title: 'Tasks list with filters and search',
                image: 'images/projects/collabra/list.png',
            },
        ],
    },
    {
        id: 9,
        name: 'Portfolio for Viktor',
        type: 'Freelance',
        year: '2025',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/viktorpavlenko',
        desc: 'Dynamic portfolio for Viktor Pavlenko',
        descFull:
            'In this project I connected Sanity CMS to make it easier to maintain the project and update content swifty. This let me pre-define multiple layout templates so that each project is represented in best possible matter. Examples are below',
        publicUrl: 'https://viktorpavlenko.vercel.app/',
        stack: [tech.ts, tech.tailwind, tech.next, tech.sanity],
        image: '/images/projects/viktor.png',
        slug: 'viktor',
        features: [
            {
                title: 'Default layout',
                image: 'images/projects/viktor/main.png',
            },
            {
                title: 'Zig-zag layout',
                image: 'images/projects/viktor/zig.png',
            },
            {
                title: 'Three columns layout',
                image: 'images/projects/viktor/cols.png',
            },
        ],
    },
    {
        id: 10,
        name: 'CasinoApp',
        type: 'Uni project',
        year: '2026',
        model: 'model.gltf',
        gitUrl: 'https://github.com/ramz1t/hkr-fullstack',
        desc: 'Fullstack project for HKR DA219B VT26',
        descFull:
            'In this project I owned the app UI. The component library is shared with the admin app via Turborepo. For game pages, I designed an extensible layout that manages the bet-game cycle and exposes plug-in outlets to support any game UI.',
        publicUrl: 'https://timur.aboard.ru/casinoapp/',
        stack: [
            tech.ts,
            tech.react,
            tech.tailwind,
            tech.turborepo,
            tech.docker,
        ],
        image: '/images/projects/casinoapp.png',
        slug: 'casinoapp',
        features: [
            {
                title: 'Coinflip',
                image: 'images/projects/casinoapp/coinflip.png',
            },
            {
                title: 'Slots',
                image: 'images/projects/casinoapp/slots.png',
            },
            {
                title: 'Craps',
                image: 'images/projects/casinoapp/craps.png',
            },
        ],
    },
]
