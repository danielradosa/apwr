import { useState } from 'react'
import { Whitepaper } from '../components'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const showPaper = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <>
            <h1 className="text-3xl md:text-6xl font-bold text-center mb-8">ĀPWIRE Token</h1>
            <button onClick={showPaper} className="text-center hover:bg-[#ff0077] hover:text-white">&mdash; whitepaper &mdash;</button>
            <h2 className="text-center mt-6 text-xl md:text-3xl flex justify-center items-center">
                Oficiálny token značky Āpwire.
            </h2>

            {isOpen && <Whitepaper />}
        </>
    )
}

export default Home;