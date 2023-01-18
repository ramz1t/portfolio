import Navbar from "./components/Navbar"
import { useRef } from "react"
import Landing from "./pages/Landing"
import About from "./pages/About"

function App() {

    const LandingRef = useRef(null)
    const AboutRef = useRef(null)

    return (
        <div className="relative">
            <Navbar refs={[LandingRef, AboutRef, '', '']} />
            <Landing ref={LandingRef} />
            <About ref={AboutRef} />
        </div>
    )
}

export default App
