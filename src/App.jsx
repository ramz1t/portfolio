import Navbar from "./components/Navbar"
import { useRef } from "react"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

function App() {

    return (
        <div className="relative">
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
