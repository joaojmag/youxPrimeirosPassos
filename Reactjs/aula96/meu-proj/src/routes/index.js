import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Private from './Private'
import Profile from '../pages/Profile'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            {/* <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} /> para deslogar da página */}
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route path='/profile' element={<Private> <Profile /> </Private>} /> para deslogar da página */}
            <Route path='/profile' element={<Profile />} />
        </Routes>
    );
}

export default RoutesApp;