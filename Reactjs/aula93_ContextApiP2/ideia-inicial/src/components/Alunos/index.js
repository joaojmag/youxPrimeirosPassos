import Nome from '../Nomes'
import { UserContext } from '../../contexts/user'
import { useContext } from 'react';

function Aluno() {
    const { nomeAluno } = useContext(UserContext)
    return (
        <div>
            <h2>Componente Alunos {nomeAluno}</h2>

            <Nome />
        </div>
    );
}

export default Aluno;