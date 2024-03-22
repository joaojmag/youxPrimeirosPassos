import { useNavigate } from 'react-router-dom';


import Header from '../../components/Header'
import Footer from '../../components/Footer'

import voltar from '../../assets/Voltar.svg'
import figFloMais from '../../assets/figFloMais.svg'
import figPNDF from '../../assets/figPNDF.png'
import figFloresta from '../../assets/figFloresta.png'
import mapaBrasil from '../../assets/mapaBrasil2.png'
import chevronDown from '../../assets/chevron-down.svg'
import badgeCent from '../../assets/badge-cent.svg'

import './acoesResultados.css'

function AcoesResultados() {
    const navegar = useNavigate();

    function voltarPaginaInicial() {
        navegar('/')
    }


    return (
        <div className='container-fluid row planode-fundo'>
            <div className='container-fluid row planode-fundo imgfundo'>
                <Header />
                <div className='acoes-resultados'>
                    <button className='btn-Painel-Florestal' onClick={voltarPaginaInicial}> <img src={voltar} />
                        <h1> Ações e Resultados</h1>
                    </button>

                    <article className='sct-acoes-programa'>
                        <h1>Ações do programa</h1>
                        <section >
                            <img src={figFloMais} />
                            <p>
                                O Plano Floresta + Sustentável, é uma iniciativa estratégica do governo brasileiro, estabelecida pela Portaria MAPA No 628 de 14 de novembro de 2023, com o objetivo principal de estimular o plantio (desenvolvimento) de florestas comerciais para garantia do sustentabilidade do suprimento de matérias primas para o setor florestal brasileiro tendo como seus principais eixos o Plano Nacional de Desenvolvimento de Florestas Plantadas, e a Rede Floresta + Iniciativa Conexão Florestal. Confira as diretrizes que norteiam o plano Floresta + sustentável na PORTARIA MAPA No 628, DE 14 DE NOVEMBRO DE 2023 pelo link <a href='https://in.gov.br/en/web/dou/-/portaria-mapa-n-628-de-14-de-novembro-de-2023-523239449' target='_blank' style={{ color: '#fff' }} > (https://in.gov.br/en/web/dou/-/portaria-mapa-n-628-de-14-de-novembro-de-2023-523239449)</a>.
                            </p>
                        </section>

                        <section>
                            <img src={figPNDF} />
                            <p>
                                O <strong>Plano Nacional de Desenvolvimento de Florestas Plantadas (PNDF)</strong> tem como objetivo principal aumentar a área produtiva de árvores cultivadas para fins comerciais, consequentemente a área conservada sob responsabilidade deste setor, estimular o setor por meio da <strong>Política Agrícola de Florestas Plantadas (Decreto No 8.375/2014)</strong> e as cadeias produtivas florestais. Confira mais detalhes como a conexão do PNDF com os objetivos do Planejamento Estratégico 2020-2031 do <strong>MAPA</strong> e <strong>Objetivos de Desenvolvimento Sustentavel da ONU</strong> bem como OBJETIVOS NACIONAIS FLORESTAIS (ONFs) E AÇÕES INDICATIVAS (AIs) do PNDF.
                            </p>
                        </section>

                        <section>
                            <img src={figFloresta} />
                            <p>
                                A <strong>Rede Floresta+</strong>, junto com o edital de chamamento público, busca conectar instituições com projetos florestais a investidores, facilitando essa interação e promovendo uma rede colaborativa. Os chamamentos públicos selecionarão interessados para desenvolver plantios produtivos e recuperar áreas degradadas, priorizando pastagens degradadas e visando a produção de produtos madeireiros e não madeireiros. confira os detalhes de como aderir à <strong>Rede</strong> na página <strong>(Link da página da Rede)</strong>
                            </p>
                        </section>
                    </article>

                    <h1 className='text-acompanhamento'>Acompanhamento dos resultados</h1>

                    <div className='div-acompanhamento-resultados'>
                        <img src={mapaBrasil} />

                        <div>
                            <div className='div-info-financeiro'>
                                <div className='filtro'><h3>Filtro</h3> <img src={chevronDown}/></div>
                                <div className='filtro'><h3>Filtro</h3> <img src={chevronDown}/></div>
                                <div className='filtro'><h3>Filtro</h3> <img src={chevronDown}/></div>
                                                                
                                <div className='valor'><img src={badgeCent}/> <h2>Informação</h2> <h3>R$ 102.000,000</h3></div>
                                <div className='valor'><img src={badgeCent}/> <h2>Informação</h2> <h3>R$ 102.000,000</h3></div>
                                <div className='valor'><img src={badgeCent}/> <h2>Informação</h2> <h3>R$ 102.000,000</h3></div>
                                
                            </div>
                            <div className='div-section'>
                                <section>
                                    <h1>Ação e Resultado</h1>
                                    <hr />
                                    <div>
                                        <div><h2>154.600.786 m<sup>3</sup></h2> <h3>Produção de madeira em tora em 2020</h3></div>
                                        <div><h2>Minas Gerais</h2> <h3>Principal UF Produtora em 2020</h3></div>
                                        <div><h2>11.358.104 m<sup>3</sup> </h2> <h3>Produção de madeira em tora de florestas naturais em 2020</h3></div>
                                    </div>
                                </section>

                                <section>
                                    <h1>Ação e Resultado</h1>
                                    <hr />
                                    <div>
                                        <div><h2>154.600.786 m<sup>3</sup></h2> <h3>Produção de madeira em tora em 2020</h3></div>
                                        <div><h2>Minas Gerais</h2> <h3>Principal UF Produtora em 2020</h3></div>
                                        <div><h2>11.358.104 m<sup>3</sup> </h2> <h3>Produção de madeira em tora de florestas naturais em 2020</h3></div>
                                    </div>
                                </section>
                                <section>

                                    <h1>Ação e Resultado</h1>
                                    <hr />
                                    <div>
                                        <div><h2>738.522<sup>3</sup></h2> <h3>Empregos formais gerados pelo setor florestal em 2021</h3></div>
                                        <div><h2>São Paulo</h2> <h3>Principal unidade federativa empregadora em 2021</h3></div>
                                        <div><h2>Mato Grosso do Sul<sup>3</sup> </h2> <h3>Principal unidade federativa empregadora em 2021</h3></div>
                                        <div><h2>Fábrica de Móveis<sup>3</sup> </h2> <h3>Principal atividade empregadora em 2021</h3></div>
                                    </div>

                                </section>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </div >
    );
}

export default AcoesResultados;

