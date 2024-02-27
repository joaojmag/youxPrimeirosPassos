import { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvaider({ children }) {
    const [nomeAluno, setNomeAluno] = useState('Pedro')

    return (
        <UserContext.Provider value={{ nomeAluno, setNomeAluno }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvaider;