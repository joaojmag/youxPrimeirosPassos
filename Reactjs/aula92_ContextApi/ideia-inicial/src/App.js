import { useState } from 'react';
import Aluno from './components/Alunos';

function App() {

  const [nomeAluno, setNomeAluno] = useState('Pedro')
  const idadeAluno = 13 
  return (
    <div>
      <h1>Escola</h1>
      <hr />
      <Aluno nome={nomeAluno} idade={idadeAluno} mudarNome={setNomeAluno}/>
    </div>
  );
}

export default App;