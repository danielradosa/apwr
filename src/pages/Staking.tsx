// Staking.tsx
import { useState, useEffect } from "react";
import { useWallet } from "../utils/WalletProvider";

const Staking = () => {
    const { walletAddress } = useWallet();
    const [tokenBalance, setTokenBalance] = useState<number | null>(null);
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

    const backendUrl = import.meta.env.VITE_API;

    useEffect(() => {
        const fetchBalance = async () => {
            if (walletAddress) {
                setIsWalletConnected(true);

                try {
                    const response = await fetch(`${backendUrl}/api/wallet/balance/${walletAddress}`);

                    const rawResponse = await response.text(); 
                    console.log("Raw response:", rawResponse);
                    const data = JSON.parse(rawResponse);
                    setTokenBalance(data.balance);
                } catch (error) {
                    console.error("Error fetching token balance:", error);
                    setTokenBalance(0);
                }
            } else {
                setIsWalletConnected(false);
                setTokenBalance(null);
            }
        };

        fetchBalance();
    }, [walletAddress]);

    return (
        <div className="w-full flex flex-col border bg-gray-100 rounded-md shadow-lg staking">
            <h2 className="font-bold text-3xl bg-[#004cff] text-white p-4 rounded-md">Stakovanie</h2>

            <div className="p-4">
                <p className="mt-4">Aktualne DPY: 0</p>
                <p>(APR: 0%)</p>

                <p className="mt-4">Moje DPY: 0%</p>
                <p>(APR: 0%)</p>
                <p>Stakenuty APWR: 0</p>

                <p className="mt-4">Denny zarobok: 0</p>
                <p>(≈$0)</p>
                <p>Aktualna APWR odmena: 0</p>
                <p>(≈$0)</p>

                <p className="mt-4">Môj APWR zostatok:</p>
                {isWalletConnected ? (
                    tokenBalance !== null ? (
                        <p className="font-bold mt-2 flex items-center gap-2">
                            {tokenBalance.toLocaleString('en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 9
                            })}{" "}
                            APWR
                        </p>
                    ) : (
                        <p>Načítavam...</p>
                    )
                ) : (
                    <p className="text-[#ff0077] font-bold mt-2">Peňaženka nieje pripojená.</p>
                )}
            </div>

            <div className="mt-4 flex gap-4 items-center px-4">
                <input type="number" name="amount" id="amount"
                    className="w-full p-2 rounded-md border hover:shadow-lg"
                    placeholder="Mnozstvo APWR na stakenutie"
                    step="0.000000001"
                    max="999999999.999999999"
                />
                <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Maximum</button>
            </div>

            <div className="mt-4 flex gap-4 items-center px-4 pb-4">
                <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Stakenuť</button>
                <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase text-ellipsis truncate overflow-hidden">Unstakenuť všetko</button>
            </div>
        </div>
    );
};

export default Staking;
