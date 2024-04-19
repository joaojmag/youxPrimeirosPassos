import { Routes, Route } from 'react-router-dom'
import Home from '../paginas/Home';
import Detalhes from '../paginas/Detalhes';

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detalhes/:id' element={<Detalhes />} />
        </Routes>
    );
}