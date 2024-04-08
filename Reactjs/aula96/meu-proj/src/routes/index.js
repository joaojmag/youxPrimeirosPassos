import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
// import Private from './Private'
import Profile from '../pages/Profile'
import Customers from '../pages/Customers'
import New from '../pages/New';

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            {/* <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} /> para deslogar da página */}
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route path='/profile' element={<Private> <Profile /> </Private>} /> para deslogar da página */}
            <Route path='/profile' element={<Profile />} />
            {/* <Route path='/customers' element={<Private> <Customers /> </Private>} /> para deslogar da página */}
            <Route path='/customers' element={<Customers />} />
            {/* <Route path='/new' element={<Private> <New /> </Private>} /> para deslogar da página */}
            <Route path='/new' element={<New />} />
            <Route path='/new/:id' element={<New />} />
        </Routes>
    );
}

export default RoutesApp;