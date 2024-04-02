import Header from '../../components/Header'
import Footer from '../../components/Footer'

import homem from '../../assets/homem.png'
import chevronRightBranco from '../../assets/chevron-right-branco.svg'
import areasVegetacaoNativaDensa from '../../assets/areasVegetacaoNativaDensa.png'
import areasVegetacaoNativaDensa1 from '../../assets/areasVegetacaoNativaDensa1.png'
import areasVegetacaoNativaDensa2 from '../../assets/areasVegetacaoNativaDensa2.png'
import areasVegetacaoNativaDensa3 from '../../assets/areasVegetacaoNativaDensa3.png'
import areasVegetacaoNativaDensa4 from '../../assets/areasVegetacaoNativaDensa4.png'
import areasVegetacaoNativaDensa5 from '../../assets/areasVegetacaoNativaDensa5.png'
import figacima from '../../assets/figacima.png'
import figabaixo from '../../assets/figabaixo.png'

import './rede.css'

function Rede() {
    return (
        <div className='container-fluid row planode-fundo'>
            <div className='container-fluid row planode-fundo imgfundo'>
                <Header />

                <div className='div-pagina-inicial-pai'>
                    <div className='div-pagina-inicial'>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15%' }}>
                            <h1>Faça parte da  transformação do agronegócio florestal brasileiro</h1>
                            <h3>Rede Floresta + Iniciativa Conexão Florestal. Juntos vamos estimular as cadeias produtivas florestais, conectando empreendedores, empresas e investidores desse setor.</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
                            <button><h2>Quero ser um Investidor</h2> <img src={chevronRightBranco} /></button>
                            <button><h2>Quero conectar meu projeto</h2> <img src={chevronRightBranco} /></button>
                        </div>
                    </div>
                    <img src={homem} />
                </div>
                <div className='div-pagina-intermediaria-pai'>
                    <span><h1 style={{ color: '#ABBF3B' }}>Objetivos da Floresta + Sustentável</h1></span>

                    <div className='div-pagina-linhaDoTempo'>
                        <div style={{ position: 'relative', left: '-0.5em', top: '-0.3em' }} className='div-pagina-linhaDoTempo-bolinha'></div>
                        <div className='div-pagina-linhaDoTempo-esquerda'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-esquerda'>
                                <img src={areasVegetacaoNativaDensa} />
                                <div>
                                    <h2>Transparência e Planejamento</h2>
                                    <h3>Monitoramento e visão geográfica de florestas plantadas subsidiadas por políticas públicas</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-direita'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-direita'>
                                <img src={areasVegetacaoNativaDensa1} />
                                <div>
                                    <h2>Políticas Públicas</h2>
                                    <h3>Voltadas à encorajar os proprietários de terras a estabelecerem florestas plantadas</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-esquerda'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-esquerda'>
                                <img src={areasVegetacaoNativaDensa2} />
                                <div>
                                    <h2>Unir Forças</h2>
                                    <h3>Alinhar os esforços de expansão das florestas plantadas com as metas de redução de emissões de gases de efeito estufa de forma sinérgica com as tecnologias do Plano ABC +;</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-direita'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-direita'>
                                <img src={areasVegetacaoNativaDensa3} />
                                <div>
                                    <h2>Investimentos</h2>
                                    <h3>Parcerias Público-Privadas, para promover a cooperação entre o MAPA e o setor privado, atraindo investimentos com vistas a fomentar as florestas plantadas;</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-esquerda'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-esquerda'>
                                <img src={areasVegetacaoNativaDensa4} />
                                <div>
                                    <h2>Parcerias</h2>
                                    <h3>Fomentar parcerias Nacionais e Internacionais, de forma a obter apoio técnico e financeiro</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-direita'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-direita'>
                                <img src={areasVegetacaoNativaDensa5} />
                                <div>
                                    <h2>Desenvolvimento</h2>
                                    <h3>Apoiar o desenvolvimento de bancos de sementes e viveiros.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-pagina-final-pai'>
                    <div className='div-pagina-final-filho-acima'>
                        <div className='imagem'>
                            <span ><h1>O que é a Rede Floresta +</h1></span>
                            <img src={figacima} />
                        </div>
                        <div className='texto'>
                            <h3>A Rede Floresta+ conecta instituições com projetos de reflorestamento a investidores interessados.</h3>
                            <h4>O seu principal propósito é viabilizar o acesso a informações detalhadas sobre projetos de reflorestamento seja para fins comerciais, restauração ou conservação florestal, facilitando sua execução por parte dos investidores. O objetivo central da Rede é impulsionar iniciativas florestais sustentáveis, colaborando para o fortalecimento da economia florestal brasileira, a preservação dos ecossistemas e o estímulo ao desenvolvimento econômico e social sustentável.</h4>
                            <span><h2>Quero ser um Investidor</h2> <img src={chevronRightBranco} /></span>
                        </div>
                    </div>
                    <div className='div-pagina-final-filho-abaixo'>
                        <div className='texto'>
                            <h3>A Rede Floresta+ é uma valiosa plataforma que promove um networking entre investidores do setor florestal e entidades envolvidas em projetos de reflorestamento, com diversas finalidades, como comerciais, restauração ou conservação florestal. </h3>
                            <h4>Por meio desta rede, investidores têm a oportunidade única de se conectar com projetos promissores, enquanto as entidades têm acesso a potenciais parceiros e financiadores para suas iniciativas. Essa interação fomenta o desenvolvimento de projetos florestais sustentáveis, impulsionando a economia do setor e fortalecendo a preservação dos ecossistemas.</h4>
                            <span><h2>Quero conectar meu projeto</h2> <img src={chevronRightBranco} /></span>
                        </div>
                        <div className='imagem'>
                            <span><h1>Porque fazer  parte da Rede?</h1></span>
                            <img src={figabaixo} /></div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Rede;
// https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance