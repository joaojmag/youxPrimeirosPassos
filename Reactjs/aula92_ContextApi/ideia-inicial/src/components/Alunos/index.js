import Nome from '../Nomes'

function Aluno({ nome, idade, mudarNome }) {
    return (
        <div>
            <h2>Componente Alunos</h2>

            <Nome nome={nome} idade={idade} mudarNome={mudarNome} />
        </div>
    );
}

export default Aluno;