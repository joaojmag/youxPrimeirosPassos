import { useContext, useState } from 'react';
import Header from '../../components/Header'
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
// import avatar from '../../assets/avatar.png'
import { AuthContext } from '../../contexts/auth'
import './profile.css'
import {toast} from 'react-toastify'


function Profile() {
    // const { user, storageUser, setUser, dadosLogin, logout, imageAvatar, setImageAvatar } = useContext(AuthContext)
    const { dadosLogin, logout, imageAvatar, setImageAvatar, convertStrEmObj, storageUser, setUser} = useContext(AuthContext)
    // const [avatarUrl, setAvatarUrl] = useState(avatar)
    const [nome, setNome] = useState(dadosLogin.nome)
    const [email, setEmail] = useState(dadosLogin.email)
    // const [imageAvatar, setImageAvatar] = useState(avatar);

    function handleFile(e) {
        console.log(e.target.files);
        if (e.target.files[0]) {
            const fig = e.target.files[0];
            if (fig.type === "image/png" || fig.type === "image/jpeg") {
                setImageAvatar(URL.createObjectURL(fig))
            }
        } else
            alert('Temque ser um arquivo PNG ou JPEG');
    }


    function submeter(e) {
        e.preventDefault();
        convertStrEmObj().map(e => {
            if (e.email == email) {
                e.nome = nome
                console.log('valro nome ' + e.nome);

                let data = {
                    uid: e.uid,
                    nome: nome,
                    email: e.email,
                    senha: e.senha,
                    avatarUrl: null
                }

                storageUser(data)
                setUser(data)
                toast.success('Atualizado com sucesso !!')
            }


        })

    }

    return (
        <div>
            <Header />
            <div className='content'>
                <Title name='Minha conta'>
                    <FiSettings size={25} />
                </Title>

                <div className='container'>

                    <form className='form-profile' onSubmit={submeter}>
                        <label className='lable-avatar'>
                            <samp>
                                <FiUpload color='#fff' size={25} />
                            </samp>
                            <input type='file' accept='image/*' onChange={handleFile} /> <br />
                            {<img src={imageAvatar} />}
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

export default Profile;
