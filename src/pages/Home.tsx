import { NavLink } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <h1 className="text-6xl font-bold text-center">ĀPWIRE Token</h1>
            <p className="mt-8 flex items-center md:flex-row flex-col">
                <NavLink to="/" className="hover:bg-[#ff0077] hover:text-white">
                    whitepaper
                </NavLink> &nbsp;&mdash;&nbsp;
                <NavLink to="/staking" className="hover:bg-[#ff0077] hover:text-white">
                    stakovanie
                </NavLink>&nbsp;&mdash;&nbsp;
                <NavLink to="/tickets" className="hover:bg-[#ff0077] hover:text-white">
                    lístky
                </NavLink>
            </p>
            <h2 className="text-center mt-8 text-3xl flex justify-center items-center">
                Oficiálny token značky Āpwire.
            </h2>
        </>
    )
}

export default Home;