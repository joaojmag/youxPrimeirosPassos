import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import avatar from '../assets/avatar.png'


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [dadosLogin, setDadosLogin] = useState({})

    const [imageAvatar, setImageAvatar] = useState(avatar);


    const navigate = useNavigate();

    // function loadUser(){
    //     const storageUser = sessionStorage
    // }

    function signIn(email, password) {
        let stringObj = convertStrEmObj();

        for (const e of stringObj) {
            if (e.email === email && e.senha === password) {
                navigate('/dashboard')
                toast.success('Bem vindo de volta!')
                let data = {
                    uid: e.uid,
                    nome: e.nome,
                    email: e.email,
                    senha: e.senha
                    // avatarUrl: null
                }
                setDadosLogin({})
                setDadosLogin(data)
                setUser(data)
                break;
            }
            // toast.error('Ops senha ou usuário incorretos ')
        }

    }


    // cadastrar novo user
    function signUp(name, email, password) {
        setLoadingAuth(true);
        let data = {
            uid: `${Math.random()}`,
            nome: name,
            email: email,
            senha: password
            // avatarUrl: null
        }
        setDadosLogin({})
        setDadosLogin(data)
        setUser(data)
        storageUser(data)
        toast.success('Seja benvindo ao sistema')
        navigate('/dashboard')
    }


    function storageUser(data) {
        sessionStorage.setItem(`@chave${data.uid}`, JSON.stringify(data))
    }

    function convertStrEmObj() {
        let stringObj = [];
        Object.values(sessionStorage).map(e => {
            stringObj.push(JSON.parse(e))
        });
        return stringObj;
    }


    function logout() {
        setUser(null)
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, logout, storageUser, setUser, dadosLogin, imageAvatar, setImageAvatar, convertStrEmObj }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;