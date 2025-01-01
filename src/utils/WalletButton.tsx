import React, { useState, useRef, useEffect } from "react";
import { useWallet } from "./WalletProvider";

const WalletButton: React.FC = () => {
    const { walletAddress, connectWallet, disconnectWallet } = useWallet();
    const [copied, setCopied] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const shortenAddress = (address: string): string =>
        `${address.slice(0, 4)}..${address.slice(-4)}`;

    const copyToClipboard = () => {
        if (walletAddress) {
            navigator.clipboard.writeText(walletAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleConnectWallet = () => {
        connectWallet();
        setMenuVisible(false);
    };

    if (walletAddress) {
        return (
            <div className="relative">
                <button
                    ref={buttonRef}
                    className="uppercase text-[#ff0077] py-2 px-4 bg-gray-100 rounded-md border hover:shadow-lg flex items-center gap-2"
                    onClick={toggleMenu}
                >
                    <span className="relative flex h-[15px] w-[15px] items-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0077] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-[#ff0077]"></span>
                    </span>
                    <span className="font-bold">{shortenAddress(walletAddress)}</span>
                </button>
                {menuVisible && (
                    <div
                        ref={menuRef}
                        className="absolute mt-2 rounded-md w-full bg-gray-100 border min-w-[210px] shadow-lg md:translate-x-[-28%] translate-x-[-50%] left-[50%] md:left-0"
                    >
                        <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white rounded-md justify-center"
                            onClick={copyToClipboard}
                        >
                            {copied ? "Skopírovaná!" : "Skopírovať adresu"}
                        </button>
                        <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white rounded-md justify-center"
                            onClick={disconnectWallet}
                        >
                            Odpojiť peňaženku
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <button
            className="uppercase pt-2 pb-2 pl-4 pr-4 bg-gray-100 rounded-md border hover:shadow-lg flex gap-2 items-center"
            onClick={handleConnectWallet}
        >
            Pripojiť peňaženku
        </button>
    );
};

export default WalletButton;
