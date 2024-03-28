import Header from '../../components/Header'
import Footer from '../../components/Footer'

import homem from '../../assets/homem.png'
import chevronRightBranco from '../../assets/chevron-right-branco.svg'
import areasVegetacaoNativaDensa from '../../assets/areasVegetacaoNativaDensa.png'
import areasVegetacaoNativaDensa1 from '../../assets/areasVegetacaoNativaDensa1.png'

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
                        <div style={{ position: 'relative', left: '-0.4em' }} className='div-pagina-linhaDoTempo-bolinha'></div>
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
                                    <h2>Transparência e Planejamento</h2>
                                    <h3>Monitoramento e visão geográfica de florestas plantadas subsidiadas por políticas públicas</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='div-pagina-final-pai'></div>
                <Footer />
            </div>
        </div>
    );
}

export default Rede;