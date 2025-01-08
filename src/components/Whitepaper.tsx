

const Whitepaper = () => {

    return (
        <div className="mt-8 flex flex-col gap-4 whitepaper items-center w-full">
            <details className="w-full">
                <summary><h3>TEAM <span>👈</span></h3></summary>
                <p>
                    Takže čo sa týka zloženia pre tento projekt, som zaň zodpovedný sám.
                    Je to moja vlastná iniciatíva a viac o mne nájdeš tu: <a href="//danielradosa.com">danielradosa.com</a>.
                </p>
            </details>

            <details className="w-full">
                <summary><h3>VYUŽITIE <span>👈</span></h3></summary>
                <p>
                    Čo sa využitia týka, zatiaľ je tento token čisto na hodling. Čiže skôr taký
                    zberateľský predmet pre fanúšikov Āpwire. Neskôr časom, keď sa naučím viac so
                    Solanou a vývoj dApps, bude mať tento token aj využitie. <br /> <br />
                    Medzi nejaké hlavné nápady patria tieto veci: <br /> <br />
                    <ul className="list-disc list-inside">
                        <li>nákupy v eshope</li>
                        <li>kúpa lístkov na eventy a následný VIP status</li>
                        <li>vstup na niektoré eventy zadarmo / so zľavou ak token držíš viac ako X dní</li>
                        <li>whitelist pre NFTs a lacné mintovanie</li>
                    </ul>
                </p>
            </details>

            <details className="w-full">
                <summary><h3>TOKENOMIKA <span>👈</span></h3></summary>
                <p>
                    Sieť: <b>Solana</b> <br />
                    Mintovaťelné: <b>nie</b> <br />
                    Kontrakt adresa: <b>APWRu2Y4Fdt37u5AVbJQdqesToSXfG6FpLTvPLQv6XvX</b> <br />
                    Počet tokenov: <b>369,000</b> <br /> 
                    Počet voľných tokenov pre verejnosť: <b>349,000</b> <br /> <br />
                    

                    Počet tokenov pre členov Āpwire je <b>20,000</b>. Sme štyria a každý má <b>5000</b> tokenov.
                    Keby mali nastať nejaké zmeny v distribúcií, obsah tohto odstavca sa bude meniť.
                </p>
            </details>
        </div>
    )
}

export default Whitepaper;