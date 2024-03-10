import fmaisBranco2 from '../../assets/fmaisBranco2.png'
import laptop from '../../assets/laptop.png'
import filebarchart from '../../assets/file-bar-chart.png'
import share2 from '../../assets/share-2.png'
import chevronRight from '../../assets/chevron-right.png'
import linhas from '../../assets/linhas.png'

import florestaMaisv2small from '../../assets/FlorestaMaisv2small.mp4'
import './home.css'

function Home() {
    return (
        <div className='container-fluid row planode-fundo'>
            <div className='container-left'>
                <img src={fmaisBranco2} className='logo' />
                <div className='container-left-text'>
                    <h1>FRASE DE IMPACTO </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className='acesso'>
                    <div className='acesso-btn' >
                        <div className='acesso-btn-div'><img src={laptop} /></div>
                        <div className='acesso-btn-text'>
                            <h2>Painel Florestal</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                        </div>
                        <img src={chevronRight} />
                    </div>
                    <div className='acesso-btn'>
                        <div className='acesso-btn-div'><img src={filebarchart} /></div>
                        <div className='acesso-btn-text'>
                            <h2>Ações e Resultados</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                        </div>
                        <img src={chevronRight} />
                    </div>
                    <div className='acesso-btn'>
                        <div className='acesso-btn-div'><img src={share2} /></div>
                        <div className='acesso-btn-text'>
                            <h2>Rede</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                        </div>
                        <img src={chevronRight} />
                    </div>
                </div>
            </div>
            <div className='container-right'>
                <div className='mascara'>
                    <video autoPlay playsInline muted loop className='video'  >
                        <source src={florestaMaisv2small} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Home;