import React, { createContext, useContext, useState, useEffect } from "react";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

declare const window: any;

interface account {
    account: any,
    data: any
}

const WalletContext = createContext<any>(null);
const rpcEndpoint = import.meta.env.VITE_RPC_ENDPOINT;
const tokenProgram = import.meta.env.VITE_APWR_TOKEN_PROGRAM;

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [walletPublicKey, setWalletPublicKey] = useState<PublicKey | null>(null);
    const [balance, setBalance] = useState<number | null>(null);

    const connection = new Connection(`${rpcEndpoint}`);

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
            setWalletPublicKey(walletPublicKey);
            localStorage.setItem("walletConnected", "true");

            const balanceLamports = await connection.getBalance(walletPublicKey);
            setBalance(balanceLamports / LAMPORTS_PER_SOL);
        } catch (error: any) {
            if (error?.code === 4001) {
                alert("Wallet connection rejected. Please try again.");
            } else {
                console.error("Error connecting wallet:", error);
                alert("An error occurred while connecting your wallet.");
            }
        }
    };

    const getTokenBalance = async (publicKey: PublicKey, mintAddress: string, connection: any) => {
        try {
            const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
                programId: new PublicKey(`${tokenProgram}`),
            });

            const tokenAccount = tokenAccounts.value.find(({ account }: { account: account }) =>
                account.data.parsed.info.mint === mintAddress
            );

            if (tokenAccount) {
                const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;
                return tokenAmount.uiAmount;
            }

            return 0;
        } catch (error) {
            console.error("Error fetching token balance:", error);
            return 0;
        }
    };

    const disconnectWallet = () => {
        setWalletAddress(null);
        setWalletPublicKey(null);
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
        <WalletContext.Provider value={{ walletAddress, walletPublicKey, balance, connectWallet, disconnectWallet, connection, getTokenBalance }}>
            {children}
        </WalletContext.Provider>

    );
};

export const useWallet = () => useContext(WalletContext);
