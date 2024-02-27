function Nome(props) {
    return (
        <div>
            <span style={{ color: '#ff0000' }}>Bem vindo: {props.nome} {props.idade}</span> <br />
            <button onClick={() => props.mudarNome('Vitor')}>Mudar Nome</button>
        </div>
    );
}

export default Nome;