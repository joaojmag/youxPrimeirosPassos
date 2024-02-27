import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

import logo from '../../assets/logo.png';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [passwor, setPassword] = useState('');



    return (
        <div className='contaier-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Logo do sistema de chamadas' />
                </div>
                <form>
                    <h1>Entrar</h1>
                    <input type='text'
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type='password'
                        placeholder='********'
                        value={passwor}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'>Acessar</button>
                </form>
                <Link to='/register'>Criar uma conta</Link>
            </div>
        </div>
    )
}