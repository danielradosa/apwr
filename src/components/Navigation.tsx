import React from "react";
import { NavLink } from "react-router-dom";
import WalletButton from "../utils/WalletButton";

const Navigation: React.FC = () => {
    return (
        <header className="flex justify-between items-center md:flex-row flex-col-reverse gap-4">
            <nav className="flex md:items-center gap-4 uppercase fixed bottom-8 md:relative md:bottom-0">
                <NavLink to="/" className="py-2 px-4 bg-gray-100 rounded-md border hover:shadow-lg text-center flex items-center gap-2">
                    <box-icon name="home-alt-2" size="15px"></box-icon>
                    <span className="hidden md:flex">Domov</span>
                </NavLink>
                <NavLink to="/staking" className="py-2 px-4 bg-gray-100 rounded-md border hover:shadow-lg text-center flex items-center gap-2">
                    <box-icon name="coin-stack" size="15px"></box-icon>
                    <span className="hidden md:flex">Stakovanie</span>
                </NavLink>
            </nav>
            <WalletButton />
        </header>
    );
};

export default Navigation;
