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
                    <button className='btn-Painel-Florestal' /* onClick={voltarPaginaInicial} */> <img src={voltar} /> Painel Florestal</button>
                    <div className='dvi-florestas-producao'>
                        <button><img src={VectorBR} /> Florestas do Brasil</button>
                        <button> <img src={containerBox} />Produção Florestal</button>
                    </div>
                    <button className='btn-Filtrar-Parametros'> <img src={slidershorizontal} />Filtrar Parâmetros</button>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PainelFlorestal;