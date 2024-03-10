import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

import { AuthContext } from '../../contexts/auth'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

export default function Header() {
    // const { user, imageAvatar} = useContext(AuthContext)
    const { imageAvatar } = useContext(AuthContext)

    return (
        <div className='sidebar'>
            <div>
                <img src={imageAvatar} alt='Foto do usuario' />
                {/* {console.log('img ->  ' + imageAvatar)}; */}
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