import { useContext } from 'react'
import avatarImg from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import './header.css'

import { AuthContext } from '../../contexts/auth'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

export default function Header() {
    const { user } = useContext(AuthContext)

    return (
        <div className='sidebar'>
            <div>
                <img src={avatarImg} alt='Foto do usuario' />
            </div>
            <Link to='/dashboard'>
                <FiHome color='#fff' size={24} />
                Chamados
            </Link>
            <Link to='/customers'>
                <FiUser color='#fff' size={24} />
                Clientes
            </Link>
            <Link to='/profile'>
                <FiSettings color='#fff' size={24} />
                Perfil
            </Link>
        </div>
    );
}