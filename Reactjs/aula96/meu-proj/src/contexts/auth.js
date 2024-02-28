import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [dadosLogin, setDadosLogin] = useState({})

    const navigate = useNavigate();

    // function loadUser(){
    //     const storageUser = sessionStorage
    // }

    function signIn(email, password) {
        let stringObj = [];
        Object.values(sessionStorage).map(e => {
            stringObj.push(JSON.parse(e))
        });

        for (const e of stringObj) {
            if (e.email === email && e.senha === password) {
                navigate('/dashboard')
                toast.success('Bem vindo de volta!')
                let data = {
                    uid: Math.random(),
                    email: email,
                    senha: password
                }
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
            uid: Math.random(),
            nome: name,
            email: email,
            senha: password
        }
        setUser(data)
        storageUser(data)
        toast.success('Seja benvindo ao sistema')
        navigate('/dashboard')
    }


    function storageUser(data) {
        sessionStorage.setItem(`@chave${data.uid}`, JSON.stringify(data))
    }

    function logout() {
        setUser(null)
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;