import { useContext } from 'react';
import { UserContext } from '../../contexts/user'

function Nome() {
    const { nomeAluno, setNomeAluno } = useContext(UserContext)
    return (
        <div>
            <span style={{ color: '#ff0000' }}>Bem vindo: {nomeAluno}</span> <br />
            <button onClick={() => setNomeAluno('JooooooM')}>Mudar nome</button>
        </div>
    );
}

export default Nome;