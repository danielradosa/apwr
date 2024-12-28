import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
//import phantom from '../assets/logo-phantom.png'

declare const window: any;

const Navigation = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const connectWallet = async (forcePrompt = false) => {
        try {
            const provider = window.solana;
            if (provider?.isPhantom) {
                const response = await provider.connect({
                    onlyIfTrusted: !forcePrompt,
                });
                setWalletAddress(response.publicKey.toString());
            } else {
                alert('Phantom peňaženka sa nenašla, nainštaluj si ju.');
            }
        } catch (error) {
            console.error('Error pri pripájaní:', error);
        }
    };

    const disconnectWallet = () => {
        setWalletAddress(null);
        setMenuVisible(false);
    };

    const copyToClipboard = () => {
        if (walletAddress) {
            navigator.clipboard.writeText(walletAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shortenAddress = (address: string): string => {
        return `${address.slice(0, 4)}..${address.slice(-4)}`;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <header className="flex justify-between items-center md:flex-row flex-col-reverse gap-4">
            <nav className="flex md:items-center gap-4 uppercase fixed bottom-4 md:relative md:bottom-0">
                <NavLink to="/" rel='prefetch' className="py-2 px-4 bg-gray-100 rounded-md 
                border hover:shadow-lg text-center flex items-center gap-2">
                    <box-icon name='home-alt-2' size='15px'></box-icon> <span className='hidden md:flex'>domov</span>
                </NavLink>
                <NavLink to="/staking" rel='prefetch' className="py-2 px-4 bg-gray-100 rounded-md 
                border hover:shadow-lg text-center flex items-center gap-2">
                    <box-icon name='coin-stack' size='15px'></box-icon><span className='hidden md:flex'>stakovanie</span>
                </NavLink>
                <NavLink to="/tickets" rel='prefetch' className="py-2 px-4 bg-gray-100 rounded-md 
                border hover:shadow-lg text-center flex items-center gap-2">
                    <box-icon name='purchase-tag-alt' size='15px'></box-icon> <span className='hidden md:flex'>lístky</span>
                </NavLink>
            </nav>

            <div className="relative" ref={menuRef}>
                {walletAddress ? (
                    <>
                        <button
                            className="uppercase text-[#ff0077] py-2 px-4 bg-gray-100 rounded-md border
                            hover:shadow-lg flex items-center gap-2"
                            onClick={() => setMenuVisible(!menuVisible)}
                        >
                            <span class="relative flex h-3 w-3 items-center">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0077] opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#ff0077]"></span>
                            </span>
                            <span className="font-bold">{shortenAddress(walletAddress)}</span>
                        </button>

                        {menuVisible && (
                            <div className="absolute right-[-25%] md:right-0 mt-2 rounded-md w-full bg-gray-100 border min-w-[210px]">
                                <button
                                    className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white
                                    rounded-md justify-center"
                                    onClick={copyToClipboard}
                                >
                                    {copied ? (
                                        <box-icon name="check-double" size="15px" color="green"></box-icon>
                                    ) : (
                                        <box-icon name="copy-alt" size="15px"></box-icon>
                                    )}
                                    Skopírovať adresu
                                </button>
                                <button
                                    className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white
                                    rounded-md justify-center"
                                    onClick={disconnectWallet}
                                >
                                    <box-icon name="log-out-circle" size="15px" color="red"></box-icon>
                                    Odpojiť peňaženku
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <button
                        className="uppercase pt-2 pb-2 pl-4 pr-4 bg-gray-100 rounded-md border hover:shadow-lg
                        flex gap-2 items-center"
                        onClick={connectWallet}
                    >
                        pripojiť peňaženku
                    </button>
                )}
            </div>
        </header >
    );
};

export default Navigation;