import Header from '../../components/Header'
import Footer from '../../components/Footer'

import homem from '../../assets/homem.png'
import chevronRightBranco from '../../assets/chevron-right-branco.svg'
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
                        <div className='div-pagina-linhaDoTempo-bolinha'></div>
                        <div className='div-pagina-linhaDoTempo-box1 div-pagina-linhaDoTempo-bolinha'>
sasdsds

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