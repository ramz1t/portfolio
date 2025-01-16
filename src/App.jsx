import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

export const navigate = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

function App() {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default App
