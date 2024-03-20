import { useNavigate } from 'react-router-dom';


import Header from '../../components/Header';
import Footer from '../../components/Footer/index';

import mapBrasil from '../../assets/map_brazil_9copy21.png'
import voltar from '../../assets/Voltar.svg'
import VectorBR from '../../assets/VectorBR.svg'
import containerBox from '../../assets/containerBox.svg'
import slidershorizontal from '../../assets/sliders-horizontal.svg'

import './painel-florestal.css'



function PainelFlorestal() {

    const navegar = useNavigate();


    function voltarPaginaInicial() {
        navegar('/')
    }

    return (
        <div className='container-fluid row planode-fundo' >
            <div className='container-fluid row planode-fundo imgfundo'>
                <Header />
                <div className='div-mapa'>
                    <img src={mapBrasil} />
                </div>
                <div className='painel-florestal'>
                    <button className='btn-Painel-Florestal' onClick={voltarPaginaInicial}> <img src={voltar} />
                        <h1> Painel Florestal</h1>
                    </button>

                    <div className='dvi-florestas-producao'>
                        <button><img src={VectorBR} /> Florestas do Brasil</button>
                        <button> <img src={containerBox} />Produção Florestal</button>
                    </div>

                    <button className='btn-Filtrar-Parametros'> <img src={slidershorizontal} />Filtrar Parâmetros</button>

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
                            <div>up</div>
                        </section>
                        <section>
                            <h1>Impactos Socio-econômicos</h1>
                            <hr />
                            <div>up</div>
                        </section>
                        <section>
                            <h1>Florestas Plantadas</h1>
                            <hr />
                            <div>up</div>
                        </section>
                        <section>
                            <h1>Florestas Naturais</h1>
                            <hr />
                            <div>up</div>
                        </section>
                        <section>
                            <h1>Áreas Legalmente Protegidas</h1>
                            <hr />
                            <div>up</div>
                        </section>
                    </article>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PainelFlorestal;