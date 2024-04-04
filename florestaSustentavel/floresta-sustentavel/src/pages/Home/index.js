import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'




import fmaisBranco2 from '../../assets/fmaisBranco2.png'
import laptop from '../../assets/laptop.png'
import filebarchart from '../../assets/file-bar-chart.png'
import map from '../../assets/map.png'
import share2 from '../../assets/share-2.png'
import chevronRight from '../../assets/chevron-right.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import FLORESTAmais from '../../assets/FLORESTAmais.mp4'


function Home() {
    const navegar = useNavigate();

    function painelFlorestal() {
        navegar('/painel-florestal/florestas-brasil');
    }

    function acoesResultados() {
        navegar('/acoes-resultados')
    }

    function irRede() {
        navegar('/rede')
    }

    return (
        <div className='container-fluid row planode-fundo'>
            <div className='container-fluid row planode-fundo imgfundo'>
                <div className='container-left'>
                    <img src={fmaisBranco2} className='logo' />
                    <div className='container-left-text'>
                        <h1>Política agrícola florestal para o Brasil</h1>
                        <p>O Plano <strong>Floresta + Sustentável</strong> tem como objetivo impulsionar o desenvolvimento florestal e sustentabilidade da economia florestal, através do apoio ao reflorestamento, recuperação de áreas degradadas e estímulo às cadeias produtivas florestais, conectando empreendedores, empresas e investidores do setor florestal.</p>
                    </div>
                    <div className='acesso'>
                        <div className='acesso-btn' onClick={painelFlorestal}>
                            <div className='acesso-btn-div'><img src={laptop} /></div>
                            <div className='acesso-btn-text'>
                                <h2>Painel Florestal</h2>
                                <h3>Explore Informações sobre a extensão, produção e economia florestal brasileira.</h3>
                            </div>
                            <img src={chevronRight} />
                        </div>
                        <div className='acesso-btn' onClick={acoesResultados}>
                            <div className='acesso-btn-div'><img src={filebarchart} /></div>
                            <div className='acesso-btn-text'>
                                <h2>Ações e Resultados</h2>
                                <h3>Conheça os objetivos e ações do plano Floresta+ Sustentável.</h3>
                            </div>
                            <img src={chevronRight} />
                        </div>
                        <div className='acesso-btn'>
                            <div className='acesso-btn-div'><img src={map} /></div>
                            <div className='acesso-btn-text'>
                                <h2>Painel Geo</h2>
                                <h3>Navegue por mapas e camadas dinâmicas com informações do setor florestal Brasileiro.</h3>
                            </div>
                            <img src={chevronRight} />
                        </div>
                        <div className='acesso-btn' onClick={irRede}>
                            <div className='acesso-btn-div'><img src={share2} /></div>
                            <div className='acesso-btn-text'>
                                <h2>Rede</h2>
                                <h3>Participe de projetos voltados a economia florestal sustentável.</h3>
                            </div>
                            <img src={chevronRight} />
                        </div>
                    </div>
                </div>
                <div className='container-right'>
                    <div className='mascara'>
                        <video autoPlay playsInline muted loop className='video'  >
                            <source src={FLORESTAmais} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;