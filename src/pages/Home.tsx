import { NavLink } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <h1 className="text-3xl md:text-6xl font-bold text-center mb-8">ĀPWIRE Token</h1>
            <NavLink to="/whitepaper" className="text-center hover:bg-[#ff0077] hover:text-white">&mdash; whitepaper &mdash;</NavLink>
            <h2 className="text-center mt-8 text-xl md:text-3xl flex justify-center items-center">
                Oficiálny token značky Āpwire.
            </h2>
        </>
    )
}

export default Home;