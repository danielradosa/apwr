const Tickets = () => {

    return (
        <>
            <div className="w-full flex flex-col border bg-gray-100 rounded-md shadow-lg">
                <h2 className="font-bold text-3xl bg-[#004cff] text-white p-4 rounded-md">Lístky</h2>

                <div className="p-4">
                    <p className="mt-4">Cena lísktu: 13.44 USDC</p>

                    <p className="mt-4">Počet lístkov k dispozícií: 236</p>

                    <p className="mt-4">Výška odmeny za lístok: 33.33%</p>
                    <p>Nemáš zakúpené žiadne lístky.</p>
                </div>

                <div className="mt-4 flex gap-4 items-center px-4">
                    <input type="number" name="amount" id="amount" className="w-full p-2 rounded-md border hover:shadow-lg" placeholder="Množstvo APWR lístkov" />
                </div>

                <div className="mt-4 flex gap-4 items-center px-4 pb-4">
                    <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Kúpiť lístky</button>
                    <button className="bg-[#004cff] text-white rounded-md p-2 w-full hover:shadow-lg border uppercase">Prevziať všetky odomknuté</button>
                </div>
            </div>
        </>
    );
}

export default Tickets;