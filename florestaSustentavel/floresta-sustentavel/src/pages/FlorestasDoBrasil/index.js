import graficoCircular from '../../assets/graficoCircular.svg'


function FlorestasDoBrasil() {
    return (
        <div>
            <article>
                <section>
                    <h1>Grandeza total das Florestas</h1>
                    <hr />
                    <div>
                        <div><h2>494.458.329 ha</h2> <h3>Área total de Florestas em 2020</h3></div>
                        <div><h2>9.616.157 ha</h2> <h3>Área total de Florestas Plantadas em 2020</h3></div>
                        <div><h2>484.842.172 ha</h2> <h3>Área total de Florestas Naturais em 2020</h3></div>
                    </div>
                </section>
                <section>
                    <h1>Florestas nos Biomas Brasileiros</h1>
                    <hr />
                    <div>
                        <div><h2>334.611.999 ha</h2> <h3>De florestas naturais na Amazônia</h3></div>
                        <div><h2>36.268.803 ha</h2> <h3>De florestas naturais na Caatinga</h3></div>
                        <div><h2>90.207.755 ha</h2> <h3>de florestas naturais no Cerrado</h3></div>
                        <div><h2>19.260.873 ha</h2> <h3>De florestas naturais na Mata Atlântica</h3></div>
                        <div><h2>2.271.969 ha</h2> <h3>De florestas naturais na Pampa</h3></div>
                        <div><h2>5.445.547 ha</h2> <h3>de florestas naturais no Pantanal</h3></div>
                    </div>
                </section>
                <section>
                    <h1>Impactos Socio-econômicos</h1>
                    <hr />
                    <div>
                        <div><h2>R$ 21.2 bilhões</h2> <h3>Oriundos da produção de produtos madeireiros em 2020</h3></div>
                        <div><h2>U$ 13.9 bilhões</h2> <h3>Em produtos madeireiros de exportação em 2021</h3></div>
                        <div><h2>R$ 2.34 bilhões</h2> <h3>Através de produtos não madeireiros em 2020</h3></div>
                        <div><h2>738.522</h2> <h3>Empregos formais gerados pelo setor em 2021</h3></div>
                    </div>
                </section>
                <section>
                    <h1>Florestas Plantadas</h1>
                    <hr />
                    <div>
                        <div className='div-grafico'>
                            <h2>9.616.157 ha</h2>
                            <h3>Área de Florestas Plantadas em 2020</h3>
                            <span style={{ borderLeft: "3px solid #38C446", paddingLeft: 10 }}><h4>Eucalipto - 77,28% </h4> <h3>7.431.761 ha</h3></span>
                            <span style={{ borderLeft: '3px solid #C1741B', paddingLeft: 10 }}><h4>Pinus - 19,03% </h4> <h3>1.830.372 ha</h3></span>
                            <span style={{ borderLeft: '3px solid #3F54C6', paddingLeft: 10 }}><h4>Outras - 3,69% </h4> <h3>354.024 ha</h3></span>
                        </div>
                        <div className='div-grafico'>
                            <img src={graficoCircular} />
                        </div>
                    </div>
                </section>
                <section>
                    <h1>Florestas Naturais</h1>
                    <hr />
                    <div>
                        <div><h2>484.842.172 ha</h2> <h3>Área de Florestas Naturais em 2020</h3></div>
                        <div><h2>8.553</h2> <h3>Espécies nativas IFN em 2020</h3></div>
                        <div><h2>117.301,71 mi. de m<sup>3</sup></h2> <h3>Estoque de volume em milhões de metros cúbicos em 2020</h3></div>
                        <div><h2>108.231,24 mi. de t.</h2> <h3>Estoque de biomassa em milhões de toneladas em 2020</h3></div>
                        <div><h2>74.298,5 mi. de t.</h2> <h3>Estoque de carbono em milhões de toneladas em 2020</h3></div>
                    </div>
                </section>
                <section>
                    <h1>Áreas Legalmente Protegidas</h1>
                    <hr />
                    <div>
                        <div><h2>41.724.644 ha</h2> <h3>Preservação Permanente</h3></div>
                        <div><h2>195.467.489 ha</h2> <h3>Reserva Legal</h3></div>
                        <div><h2>260.133.258 ha ha</h2> <h3>Remanescente de Vegetação Nativa</h3></div>
                        <div><h2>56.685.782 ha</h2> <h3>Unidades de Conservação</h3></div>
                        <div><h2>78.085.751 ha</h2> <h3>Terras Indígenas</h3></div>
                        <div><h2>127.715.478 ha</h2> <h3>Florestas Públicas Não Destinadas</h3></div>
                        <div><h2>5.971.152 ha</h2> <h3>Terras Militares</h3></div>
                        <div><h2>32.324.633 ha</h2> <h3>Assentamentos</h3></div>
                    </div>
                </section>
            </article>
            <div className='div-infromacoes'>
                <h3><strong>Fonte de Dados:</strong></h3>
                <h3>Grandeza Total das Florestas: <strong>SNIF-SFB</strong></h3>
                <h3>Florestas nos Biomas Brasileiros: <strong>SNIF - SFB</strong></h3>
                <h3>Impactos Sócio-Econômicos: <strong>Comex Stat, PEVS - IBGE, FAO - FRA, SNIF - SFB, Ministério da Economia</strong></h3>
                <h3>Florestas Plantadas: <strong>SNIF-SFB, PEVS-IBGE</strong></h3>
                <h3>Florestas Naturais: <strong>FAO-FRA</strong></h3>
                <h3>Áreas Legalmente <strong>Protegidas: CAR, CNFP</strong></h3>
            </div>
        </div>

    );
}

export default FlorestasDoBrasil;