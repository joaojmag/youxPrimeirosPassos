import { useContext, useState } from 'react';
import Header from '../../components/Header'
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png'
import { AuthContext } from '../../contexts/auth'
import './profile.css'

export default function Profile() {
    const { user } = useContext(AuthContext)
    // const [avatarUrl, setAvatarUrl] = useState(avatar)
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



                    </form>
                </div>
            </div>

        </div>
    );
}