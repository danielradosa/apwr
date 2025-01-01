import { useState, useEffect } from "react";
import { useWallet } from "../utils/WalletProvider";

const TOKEN_MINT_ADDRESS = "APWRu2Y4Fdt37u5AVbJQdqesToSXfG6FpLTvPLQv6XvX";

const Staking = () => {
    const { walletPublicKey, connection, getTokenBalance } = useWallet();
    const [tokenBalance, setTokenBalance] = useState<number | null>(null);
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

    useEffect(() => {
        const fetchBalance = async () => {
            if (walletPublicKey) {
                setIsWalletConnected(true);
                const balance = await getTokenBalance(walletPublicKey, TOKEN_MINT_ADDRESS, connection);
                setTokenBalance(balance);
            } else {
                setIsWalletConnected(false);
                setTokenBalance(null);
            }
        };

        fetchBalance();
    }, [walletPublicKey, getTokenBalance, connection]);

    return (
        <>
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
        </>
    );
};

export default Staking;
