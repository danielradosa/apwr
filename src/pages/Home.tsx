import { useState } from 'react'
import { Whitepaper } from '../components'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showPaper = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <>
            <h1 className="text-3xl md:text-6xl font-bold text-center mb-6">ĀPWIRE Token</h1>
            <img src="https://gateway.irys.xyz/MloNTv9w5AykYsZnG9QdL5AGRr2k1NWXgBZ5kY3wP9c" width='128px' alt="logo-metadata" 
            className="rounded-full outline mb-4" />
            <h2 className="text-center text-xl md:text-3xl flex justify-center items-center">
                Oficiálny token značky Āpwire.
            </h2>

            {
                isOpen
                    ? <>
                        <button onClick={showPaper} className="text-center border px-4 py-2 rounded-md hover:shadow-lg bg-gray-100 mt-8
                        flex items-center gap-2">
                            <box-icon name='window-close' size="15px" color="red"></box-icon>ZATVORIŤ
                        </button>
                        <Whitepaper />
                    </>
                    : <button onClick={showPaper} className="text-center border px-4 py-2 rounded-md hover:shadow-lg bg-gray-100 mt-8
                    flex items-center gap-2">
                        <box-icon name='book-open' size="15px"></box-icon> WHITEPAPER
                    </button >
            }
        </>
    )
}

export default Home;