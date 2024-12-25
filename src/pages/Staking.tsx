const Staking = () => {

    return (
        <>
            <div className="w-full flex flex-col border bg-gray-100 rounded-md shadow-lg">
                <h2 className="font-bold text-3xl bg-[#004cff] text-white p-4 rounded-md">Stakovanie</h2>

                <div className="p-4">
                    <p className="mt-4">Aktualne DPY: 0.02%</p>
                    <p>(APR: 6.25%)</p>

                    <p className="mt-4">Moje DPY: 1.02%</p>
                    <p>(APR: 280.64%)</p>
                    <p>Stakenuty APWR: 227.439003342</p>

                    <p className="mt-4">Denny zarobok: 14.889062231</p>
                    <p>(≈$43.12)</p>
                    <p>Aktualna APWR odmena: 74.569762312</p>
                    <p>(≈$216.24)</p>

                    <p className="mt-4">Moj APWR zostatok: 32.1111</p>
                </div>

                <div className="mt-4 flex gap-4 items-center px-4">
                    <input type="number" name="amount" id="amount" className="w-full p-2 rounded-md border hover:shadow-lg" placeholder="Mnozstvo APWR na stakenutie" />
                    <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Maximum</button>
                </div>

                <div className="mt-4 flex gap-4 items-center px-4 pb-4">
                    <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Stakenuť</button>
                    <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Unstakenuť všetko</button>
                </div>
            </div>
        </>
    );
}

export default Staking;