import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/index'
import Repositorio from './pages/Repositorio/index'

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/repositorio/:repositorio' element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )
}