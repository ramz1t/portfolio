import Navbar from "./components/Navbar"
import { useRef } from "react"
import Landing from "./pages/Landing"
import About from "./pages/About"

function App() {

    return (
        <div className="relative">
            <Navbar />
            <Landing />
            <About />
        </div>
    )
}

export default App
