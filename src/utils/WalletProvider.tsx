import React, { createContext, useContext, useState, useEffect } from "react";
import { PublicKey } from "@solana/web3.js";

declare const window: any;

const WalletContext = createContext<any>(null);

const backendUrl = import.meta.env.VITE_API;

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<number | null>(null);

    const connectWallet = async () => {
        try {
            const provider = window.solana;

            if (!provider?.isPhantom) {
                alert("Phantom wallet not found. Please install it.");
                return;
            }

            const response = await provider.connect();
            const walletPublicKey = new PublicKey(response.publicKey.toString());
            setWalletAddress(walletPublicKey.toString());
            localStorage.setItem("walletConnected", "true");

            fetchTokenBalance(walletPublicKey.toString());
        } catch (error: any) {
            if (error?.code === 4001) {
                alert("Wallet connection rejected. Please try again.");
            } else {
                console.error("Error connecting wallet:", error);
                alert("An error occurred while connecting your wallet.");
            }
        }
    };

    const fetchTokenBalance = async (address: string) => {
        try {
            const response = await fetch(`${backendUrl}/api/wallet/balance/${address}`);
            const data = await response.json();
            setBalance(data.balance);
        } catch (error) {
            console.error("Error fetching token balance:", error);
        }
    };

    const disconnectWallet = () => {
        setWalletAddress(null);
        setBalance(null);
        localStorage.removeItem("walletConnected");
    };

    useEffect(() => {
        const wasConnected = localStorage.getItem("walletConnected") === "true";
        if (wasConnected) {
            connectWallet();
        }
    }, []);

    return (
        <WalletContext.Provider value={{ walletAddress, balance, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => useContext(WalletContext);
