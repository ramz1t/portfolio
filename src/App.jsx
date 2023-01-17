import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {

    return (
        <div className="relative">
            <Navbar />
            <Home />
        </div>
    )
}

export default App
