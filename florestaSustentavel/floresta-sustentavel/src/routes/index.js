import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PainelFlorestal from '../pages/PainelFlorestal'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/painel-florestal' element={<PainelFlorestal />} />
        </Routes>
    );
}

export default RoutesApp;