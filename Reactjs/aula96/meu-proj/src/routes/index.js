import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Private from './Private'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            {/* <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} /> para deslogar da página */}
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
}

export default RoutesApp;