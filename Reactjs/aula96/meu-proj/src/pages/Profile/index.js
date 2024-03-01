import { useContext, useState } from 'react';
import Header from '../../components/Header'
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png'
import { AuthContext } from '../../contexts/auth'
import './profile.css'

export default function Profile() {
    const { user, storageUser, setUser, dadosLogin, logout } = useContext(AuthContext)
    // const [avatarUrl, setAvatarUrl] = useState(avatar)
    const [nome, setNome] = useState(dadosLogin.nome)
    const [email, setEmail] = useState(dadosLogin.email)

    return (
        <div>
            <Header />
            <div className='content'>
                <Title name='Minha conta'>
                    <FiSettings size={25} />
                </Title>

                <div className='container'>

                    <form className='form-profile'>
                        <label className='lable-avatar'>
                            <samp>
                                <FiUpload color='#fff' size={25} />
                            </samp>
                            <input type='file' accept='image/*' /> <br />
                            {<img src={avatar} />}
                        </label>

                        <label>Nome</label>
                        <input type='text' value={nome !== undefined ? nome : 'Nome usuario'} onChange={(e) => {
                            setNome(e.target.value)
                        }} />

                        <label>Email</label>
                        <input type='text' placeholder={email !== undefined ? email : 'email@email.com'} disabled={true} />

                        <button type='submit'>Salvar</button>

                    </form>
                </div>


                <div className='container'>
                    <button className='logout-btn' onClick={() => logout()}>Sair</button>
                </div>
            </div>

        </div>
    );
}