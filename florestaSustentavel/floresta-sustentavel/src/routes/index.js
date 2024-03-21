import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PainelFlorestal from '../pages/PainelFlorestal'
import ProducaoFlorestal from '../pages/ProducaoFlorestal'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/painel-florestal/florestas-brasil' element={<PainelFlorestal />} />
            <Route path='/painel-florestal/producao-florestal' element={<ProducaoFlorestal />} />
        </Routes>
    );
}

export default RoutesApp;