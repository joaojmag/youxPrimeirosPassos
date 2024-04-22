import { useState, createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [buscador, setBuscador] = useState('');

    function handleinputChange(e) {
        setBuscador(e.target.value)
    }

    return (
        <AuthContext.Provider value={{buscador, handleinputChange}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;