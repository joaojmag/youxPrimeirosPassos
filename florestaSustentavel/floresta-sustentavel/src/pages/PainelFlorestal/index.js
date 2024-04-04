import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '../../components/Header';
import FlorestasDoBrasil from '../FlorestasDoBrasil'
import ProducaoFlorestal from '../ProducaoFlorestal'

import Footer from '../../components/Footer/index';

import mapBrasil from '../../assets/map_brazil_9copy21.png'
import voltar from '../../assets/Voltar.svg'
import slidershorizontal from '../../assets/sliders-horizontal.svg'

import VectorBRTrue from '../../assets/VectorBRTrue.svg'
import VectorBRFalse from '../../assets/VectorBRFalse.svg'


import containerBoxTrue from '../../assets/containerBoxTrue.svg'
import containerBoxFalse from '../../assets/containerBoxFalse.svg'

import './painel-florestal.css'



function PainelFlorestal() {

    const navegar = useNavigate();
    const [isPage, setIsPage] = useState(true);

    function voltarPaginaInicial() {
        navegar('/')
    }

    function irFlorestasDoBrasil() {
        setIsPage(true)
    }

    function irProducaoFlorestal() {
        setIsPage(false)
    }


    return (
        <div className='container-fluid row planode-fundo' >
            <div className='container-fluid row planode-fundo imgfundo'>
                <div className='div-mapa'>
                    <img src={mapBrasil} />
                </div>
                <div className='painel-florestal'>
                    <button className='btn-Painel-Florestal' onClick={voltarPaginaInicial}> <img src={voltar} />
                        <h1> Painel Florestal</h1>
                    </button>

                    <div className='dvi-florestas-producao'>
                        <button className={isPage ? 'dvi-florestas-producao-true' : 'dvi-florestas-producao-false'} onClick={irFlorestasDoBrasil}><img src={isPage ? VectorBRTrue : VectorBRFalse} /> Florestas do Brasil</button>
                        
                        <button className={isPage ? 'dvi-florestas-producao-false' : 'dvi-florestas-producao-true'} onClick={irProducaoFlorestal}> <img src={isPage ? containerBoxFalse : containerBoxTrue} />Produção Florestal</button>
                    </div>

                    <button className='btn-Filtrar-Parametros'> <img src={slidershorizontal} />Filtrar Parâmetros</button>

                    {isPage ? <FlorestasDoBrasil /> : <ProducaoFlorestal />}

                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PainelFlorestal;