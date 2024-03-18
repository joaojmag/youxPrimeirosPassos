import Header from '../../components/Header';
import Footer from '../../components/Footer/index';

import mapBrasil from '../../assets/map_brazil_9copy21.png'
import './painel-florestal.css'



function PainelFlorestal() {
    return (
        <div className='container-fluid row planode-fundo' >
            <div className='container-fluid row planode-fundo imgfundo'>

                <Header />
                <div className='div-mapa'>
                    {/* <img src={mapBrasil} /> */}
                </div>
                <div className='painel-florestal'>
                    <h1>Painel Florestal</h1>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PainelFlorestal;